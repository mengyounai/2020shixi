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
import bookdetail from '../views/bookdetail'
import musicdetail from '../views/musicdetail'
import peopledetail from '../views/peopledetail'
import test from '../views/test'
import reset from '../views/reset'
import search from '../views/search'
import login from '../views/login'
import register from '../views/register'


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
        path: '/animedetail/:id',
        name: 'animedetail',
        component: animedetail
    },
    {
        path: '/bookdetail/:id',
        name: 'bookdetail',
        component: bookdetail
    },
    {
        path: '/test',
        name: 'test',
        component: test
    },
    {
        path: '/musicdetail/:id',
        name: 'musicdetail',
        component: musicdetail
    },
    {
        path: '/reset',
        name: 'reset',
        component: reset
    },
    {
        path: '/search/:searchInfo',
        name: 'search',
        component: search
    },
    {
        path: '/peopledetail/:id',
        name: 'peopledetail',
        component: peopledetail
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
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
