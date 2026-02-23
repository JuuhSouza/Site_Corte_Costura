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
body{
  font-family: var(--font);
}
.main-content {
  transition: margin-left 0.3s ease; /* Suaviza o movimento junto com a sidebar */
  margin-left: 200px;
  width: calc(100% -200px);
  flex: 1;
}

.main-content.sidebar-expandida {
  margin-left: 200px; /* Margem quando a sidebar está aberta */
}
</style>