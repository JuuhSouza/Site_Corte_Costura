
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
            <li v-for="(item, index) in itemManu" 
                :key="index" 
                :class="{'active' : itemAtivo === index}" 
                @click="selecionarItem(index)">
              <a href="#"> <i :class="item.icon"></i> </a>
              <a href="#" v-if="aberto"> {{ item.titulo }}</a>
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
const emit = defineEmits(['status-sidebar']);

const itemManu = [
  { titulo: 'Início', icon: 'fa-solid fa-house' },
  { titulo: 'Costura', icon: 'fa-solid fa-scissors' },
  { titulo: 'Moldes', icon: 'fa-solid fa-shirt' },
  { titulo: 'Desfiles', icon: 'fa-brands fa-shirtsinbulk' }
];

const alternarSidebar = () => {
  aberto.value = !aberto.value;
  emit('status-sidebar', aberto.value);
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

.menu{
    overflow: hidden;
    height: 100%;
    margin-top: 3em;
}

.menu a {
    color: var(--color-sidebar);
    font-size: 1.2em;
    font-weight: 500;
    text-decoration: none;
    margin-left: 20px ;
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
    display: flex;
    align-items: center;
    height: 50px;
    margin: 10px 0 10px 15px;
    padding: 10px 15px;
    border-radius: 20px 0px 0px 45px;
    color: var(--color-sidebar);
    cursor: pointer;
    white-space: nowrap;
    transition: all .4s ease;
    position: relative;
}

ul.infos li.active {
    background-color: var(--background-sidebar-active);
        border-radius: 20px 0px 0px 45px;
}

ul.infos li.active i,
ul.infos li.active a {
    color: var(--color-sidebar-active);
    font-weight: 600;
}
    
ul.infos li i{
    width: 22px;
    font-size: 22px;
    text-align: center ;
}

/* MODO ESCURO BOTAO */
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