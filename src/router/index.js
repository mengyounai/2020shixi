import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import index from '../views/index'
import animelist from '../views/animelist'
import booklist from '../views/booklist'
import musiclist from '../views/musiclist'
import peoplelist from '../views/peoplelist'
import personal from '../views/personal'
import animedetail from '../views/animedetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
    {
        path: '/index',
        name: 'index',
        component: index
    },
    {
        path: '/animelist',
        name: 'animelist',
        component: animelist
    },
    {
        path: '/booklist',
        name: 'booklist',
        component: booklist
    },
    {
        path: '/musiclist',
        name: 'musiclist',
        component: musiclist
    },
    {
        path: '/peoplelist',
        name: 'peoplelist',
        component: peoplelist
    },
    {
        path: '/personal',
        name: 'personal',
        component: personal
    },
    {
        path: '/animedetail',
        name: 'animedetail',
        component: animedetail
    },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
