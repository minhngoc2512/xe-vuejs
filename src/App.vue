<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
  name: 'App',
  components:{
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>
</style>
