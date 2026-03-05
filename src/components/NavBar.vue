<template>
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
                :class="{'active' : itemAtivo === index}"
                @click="item.subMenu ? alternarSubMenu(index) : selecionarItem(index)">

                <div class="menu-item-container">
                    <router-link v-if="!item.subMenu" :to="{ path: item.path, hash: item.hash }" class="menu-link">
                        <i :class="item.icon"></i>
                        <span v-if="aberto" class="link-text">{{ item.titulo }}</span>
                    </router-link>

                    <div class="menu-link" v-else>
                        <i :class="item.icon"></i>
                        <span v-if="aberto" class="link-text">{{ item.titulo }}</span>
                        <i v-if="aberto" :class="['fa-solid fa-chevron-down seta', { 'girar': item.aberto }]"></i>
                    </div>
                </div>

                <transition name="menu-fade"> 
                    <ul v-if="item.subMenu && item.aberto && aberto" class="sub-menu" @click.stop>
                        <li v-for="(sub, subIndex) in item.subMenu" :key="subIndex" 
                            @click.stop="selecionarSubItem(sub.titulo)">
                            <router-link :to="{ path: sub.path, hash: sub.hash }" class="sub-link"> 
                                {{ sub.titulo }}
                            </router-link>
                        </li>
                    </ul>
                </transition>
            </li>
          </ul>

          <div class="theme-toggle" @click="toggleTheme">
            <i :class="theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"></i>
            <span v-if="aberto" class="link-text" style="margin-left: 10px;">
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
const emit = defineEmits(['status-sidebar']);

const itemMenu = ref([
  { titulo: 'Início', icon: 'fa-solid fa-house', path: '/', hash: '#inicio' },
  {
    titulo: 'História',
    icon: 'fa-solid fa-book',
    path: '/',
    hash: '#',
    aberto: false,
    subMenu: [
      { titulo: 'Costura', path: '/', hash: '#historia' },
      { titulo: 'Tecidos', path: '/FabricPage', hash: '#start' },
      { titulo: 'Pontos', path: '/', hash: '#' },
      { titulo: 'Máquinas de costura', path: '/', hash: '#revolucaoIndustrial' }
    ]
  },
  {
    titulo: 'Timeline',
    icon: 'fa-solid fa-timeline',
    path: '/',
    hash: '#',
    aberto: false,
    subMenu: [
      { titulo: 'Costura', path: '/', hash: '#sewing' },
      { titulo: 'Máquinas', path: '/Tecidos', hash: '#timelineMachine' },
      { titulo: 'Tecidos', path: '/SewingPage', hash: '#tearHistory' }
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

  const estadoAtual = itemMenu.value[index].aberto;
  
  // Fecha outros submenus abertos para não poluir a tela
  itemMenu.value.forEach((item, i) => {
    if (item.subMenu && i !== index) item.aberto = false;
  });

  itemMenu.value[index].aberto = !estadoAtual;
  itemAtivo.value = index;
};

const selecionarItem = (index) => {
  itemAtivo.value = index;
};

const selecionarSubItem = (titulo) => {
  subItemAtivo.value = titulo;
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
    padding: 24px 0;
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar:not(.expandida) {
    width: 80px;
}

.btn-menu i {
    position: absolute;
    right: -15px;
    top: 20px;
    width: 40px;
    height: 40px;
    background-color: var(--background-sidebar-btn);
    color: var(--color-sidebar);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.menu {
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 40px;
    flex-grow: 1;
}

ul.infos {
    padding: 0;
    margin: 0;
    list-style: none;
}

ul.infos li {
    padding: 12px 20px;
    margin: 4px 0 4px 10px;
    border-radius: 20px 0px 0px 45px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--color-sidebar);
}

ul.infos li.active {
    background-color: var(--background-sidebar-active);
    color: var(--color-active);
}

.menu-item-container {
    display: flex;
    align-items: center;
}

.menu-link {
    display: flex;
    align-items: center;
    width: 100%;
    text-decoration: none;
    color: inherit;
}

.menu-link i:first-child {
    font-size: 1.4em;
    min-width: 30px;
    text-align: center;
}

.link-text {
    margin-left: 15px;
    white-space: nowrap;
    font-size: 0.95rem;
}

.seta {
    margin-left: auto;
    font-size: 1.4em;
    transition: transform 0.3s;
}

.seta.girar {
    transform: rotate(180deg);
}

.sub-menu {
    list-style: none;
    padding: 10px 0 5px 45px;
}

.sub-link {
    display: block;
    padding: 0;
    margin-left: -2em;
    text-decoration: none;
    color: var(--color-active);
    font-size: 1em;
    transition: all 0.4s ease;
    font-weight: 500;
  }

.sub-link:hover {
    opacity: 0.7;
    color: var(--color-submenu-hover);
}

.sidebar:not(.expandida) ul.infos li {
    padding: 12px 0;
    margin-left: 0;
    border-radius: 0;
    display: flex;
    justify-content: center;
}

.theme-toggle {
    cursor: pointer; 
    margin-top: 20px; 
    text-align: center;
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