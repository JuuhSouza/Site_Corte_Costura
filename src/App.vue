<template>
  <teste/>
  <Home/>
  <router-view />
</template>

<script >
import teste from './components/teste.vue'
import Home from './views/Home.vue'

  export default {
  name: 'App',
  components: {
     teste, Home
    }
  }
</script>


<style scoped>

</style>
