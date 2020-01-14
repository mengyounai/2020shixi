<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <router-view/>
  </div>
</template>

<script>
    import Vue from 'vue'
    import {setCookie, getCookie, delCookie} from "./assets/login/cookie";
    export default {
        name: "App",
        beforeMount () {
            Vue.prototype.$cookieStore = {
                setCookie,
                getCookie,
                delCookie
            }
        }
    }
</script>

<style>
  li{
    list-style: none;

  }
  ul{
    display: inline-block;
  }

  a{
    text-decoration:none;
  }

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*color: #2c3e50;*/
}
body{
    margin: 0px;
    line-height:150%;
}


/*#nav {*/
  /*padding: 30px;*/
/*}*/

/*#nav a {*/
  /*font-weight: bold;*/
  /*color: #2c3e50;*/
/*}*/

/*#nav a.router-link-exact-active {*/
  /*color: #42b983;*/
/*}*/
</style>
