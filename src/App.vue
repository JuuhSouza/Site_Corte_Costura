<template>
  <div class="app-layout">
    <NavBar @status-sidebar="atualizarMargem" />
    
    <main :class="['main-content', { 'sidebar-expandida': sidebarAberta }]">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: { NavBar },
  data() {
    return {
      sidebarAberta: true // Começa igual ao estado inicial da sidebar
    }
  },
  methods: {
    atualizarMargem(status) {
      this.sidebarAberta = status;
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.app-layout {
  display: flex;
  width: 100%;
}

.main-content {
  margin-left: 80px; 
  width: calc(100% - 80px); 
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 100vh;
  display: block;
  flex: 1;
}

.main-content.sidebar-expandida {
  margin-left: 200px;
  width: calc(100% - 200px);
}
</style>