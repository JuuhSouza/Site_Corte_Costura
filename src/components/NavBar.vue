
<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <nav>
    <div class="container">
      <div :class="['sidebar', { 'expandida': aberto }]">
        
        <div class="btn-menu" @click="alternarSidebar">
          <i :class="aberto ? 'fa-solid fa-angles-left' : 'fa-solid fa-angles-right'"></i>
        </div>

        <div class="menu">
          <ul class="infos">
  <li v-for="(item, index) in itemMenu" 
      :key="index" 
      :class="{'active' : itemAtivo === index}">

      <div class="menu-item-container"
           @click.stop="item.subMenu ? alternarSubMenu(index) : selecionarItem(index)">
           
           <router-link v-if="!item.subMenu" :to="{ path: item.path, hash: item.hash }" class="menu-link">
             <i :class="item.icon"></i>
             <span v-if="aberto" class="link-text">{{ item.titulo }}</span>
           </router-link>

           <div class="menu-link" v-else>
             <i :class="item.icon"></i>
             <span v-if="aberto" class="link-text"> {{ item.titulo }}</span>
             <i v-if="aberto" :class="['fa-solid fa-chevron-down seta', { 'girar': item.aberto }]"></i>
           </div>
      </div>

      <transition name="fade"> 
        <ul v-if="item.subMenu && item.aberto && aberto" class="sub-menu">
          <li v-for="(sub, subIndex) in item.subMenu" :key="subIndex" 
          @click.stop="selecionarSubItem(sub.titulo)">
            <router-link :to="{ path: sub.path, hash: sub.hash }"> {{ sub.titulo }}</router-link>
          </li>
        </ul>
      </transition>
  </li>
</ul>

          <div class="theme-toggle" @click="toggleTheme">
            <i :class="theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"></i>
            <span v-if="aberto" >
              {{ theme === 'light' ? '' : '' }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { useTheme } from '../composables/useTheme';

const { theme, toggleTheme } = useTheme();

const aberto = ref(true);
const itemAtivo = ref(0);
const subItemAtivo = ref('');
const selecionarSubItem = (titulo) => {
  subItemAtivo.value = titulo;
}
const emit = defineEmits(['status-sidebar']);

const itemMenu = ref([
  {
    titulo: 'Início',
    icon: 'fa-solid fa-house',
    path: '/',
    hash: '#inicio',
  },
  {
    titulo: 'História',
    icon: 'fa-solid fa-book',
    path: '/',
    hash: '#',
    aberto: false,
    subMenu: [
      {
        titulo: 'Costura',
        path: '/',
        hash: '#historia'
      }
    ]
  },
  {
    titulo: 'Timeline',
    icon: 'fa-solid fa-timeline',
    path: '/',
    hash: '#',
    subMenu: [
      {
        titulo: 'Máquinas de costura',
        path: '/',
        hash: '#timelineMachine'
      }
    ]
  },
  {
    titulo: 'Costura',
    icon: 'fa-solid fa-scissors',
    path: '/costura',
    hash: '#'
  },
  {
    titulo: 'Moldes',
    icon: 'fa-solid fa-shirt',
    path: '/',
    hash: '#'
  },
  {
    titulo: 'Desfiles',
    icon: 'fa-brands fa-shirtsinbulk',
    path: '/',
    hash: '#'
  }
]);

const alternarSidebar = () => {
  aberto.value = !aberto.value;
  emit('status-sidebar', aberto.value);
};

const alternarSubMenu = (index) => {
  if (!aberto.value) {
    aberto.value = true;
    emit('status-sidebar', true);
  }

  const estaAberto = itemMenu.value[index].aberto;

  // fecha todos
  itemMenu.value.forEach(item => {
    if (item.subMenu) item.aberto = false;
  });

  // abre apenas se ele não estava aberto
  if (!estaAberto) {
    itemMenu.value[index].aberto = true;
  }

  itemAtivo.value = index;
};

const selecionarItem = (index) => {
  itemAtivo.value = index;
};
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 200px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color-sidebar);
    padding: 24px 0px;
    border-radius: 0 20px 20px 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: visible;
/*     box-shadow: 2px 0 0 rgb(0, 25, 253); */
}

.sidebar:not(.expandida) {
    width: 80px;
    padding-left: 0;
}

.sidebar:not(.expandida) .btn-menu {
    align-self: unset;
    right: -15px;
    padding-right: 0;

}

.btn-menu i {
    font-size: 30px;
    position: absolute;
    right: -25px;
    width: 50px;
    height: 50px;
    background-color: var(--background-sidebar-btn);
    color: var(--color-sidebar);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    z-index: 1001;
    transition: all 0.3s ease;
}

.menu-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 100%;
}

.menu{
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    margin-top: 3em;
}

.menu a {
    color: var(--color-sidebar);
    font-size: 1em;
    text-decoration: none;
}

.menu span{
    padding: 1em 0;
}

.menu i {
    margin-left: -1em ;
}

ul.infos {
    padding: 0;
    margin: 0;
}

ul.infos li {
    list-style: none;
    display: block;
    flex-direction: column;
    width: calc(100% - 15px);
    align-items: flex-start;
    min-height: auto;
    height: auto;
    margin: 10px 0 10px 15px;
    padding: 10px 15px;
    border-radius: 20px 0px 0px 45px;
    color: var(--color-sidebar);
    cursor: pointer;
    white-space: normal;
    transition: all .4s ease;
    position: relative;
    overflow: visible;
}

ul.infos li.active {
    background-color: var(--background-sidebar-active);
        border-radius: 10px 0px 0px 35px;
}

ul.infos li.active i,
ul.infos li.active a {
    color: var(--color-sidebar-active);
    font-weight: 600;
}

.link-text{
  margin-left: 15px;
  margin-right: 10px;
  max-width: calc(100% - 40px);
  white-space: normal;
  word-break: break-word;
  display: inline-block;
}
    
ul.infos li i{
    width: 22px;
    font-size: 22px;
    text-align: center ;
    margin-left: 0;
}

.sub-menu{
  list-style: none;
  padding: 5px 0 5px 20px;
  margin: 0;
  width: 100%;
  max-width: 160px;
  display: block;
}

.sub-menu li{
  width: 100%;
  padding: 0; 
  min-height: auto;
}

.sub-menu a{
  display: block;
  font-size: 1rem;
  transition: all .4s ease;
  text-align: start;
  margin-left: -2em;
  width: 100%;
  color: var(--color-submenu);
  white-space: normal !important;
  word-wrap: break-word;
  line-height: 1.2;
}

.seta{
  margin-left: auto;
  transition: transform 0.3s ease;
}

.seta.girar{
  transform: rotate(180deg);
}

.menu-item-container {
    display: flex;
    align-items: center;
    width: 100%;
}

.active-sub a {
  background-color: var(--background-sidebar-active);
  color: var(--color-sidebar-active);
  font-weight: 600;
  border-radius: 20px 0px 0px 45px;
}

/* MODO ESCURO BOTAO */
.theme-toggle {
    cursor: pointer; 
    margin-top: 20px; 
    text-align: center;
    margin-left: 2em;
    min-height: 40px; 
    display: flex;
    justify-content: center;
    align-items: center;
}

.theme-toggle i {
    display: inline-block;
    font-size: 2em;
    color: var(--dark-mode-sidebar-btn);
    transition: color 0.3s ease, transform 0.2s ease;
    animation: rotateIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-toggle i:hover {
    filter: brightness(1.2);
    transform: scale(1.2) rotate(15deg);
}

@keyframes rotateIn {
    from {
        transform: rotate(-180deg) scale(0);
        opacity: 0;
    }
    to {
        transform: rotate(0deg) scale(1);
        opacity: 1;
    }
}

</style>