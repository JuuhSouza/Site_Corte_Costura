<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    
    <nav>
        <div class="container">
            <div :class="['sidebar', { 'expandida': aberto }]">
                <div class="menu">
                    <div class="btn-menu" @click="alternarSidebar">
                        <i class="fa-solid fa-bars"></i>
                    </div>

                    <ul class="infos" v-for="(item, index) in itemManu" :key="index">
                        <li>
                            <a href=""> <i :class="item.icon"></i> </a>
                            <a href="#" v-if="aberto"> {{ item.titulo }}</a>    
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            aberto: true,
            itemManu: [
                {
                    titulo: 'Início',
                    icon: 'fa-solid fa-house',
                },
                {
                    titulo: 'Costura',
                    icon: 'fa-solid fa-scissors',
                },
                {
                    titulo: 'Moldes',
                    icon: 'fa-solid fa-shirt',
                }
            ]
        }
    },
    methods: {
        alternarSidebar() {
            this.aberto = !this.aberto;
        }
    }
}
</script>

<style scoped>
.sidebar {
    width: 200px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: red;
    padding: 24px 0 24px 40px;
    border-radius: 0 20px 20px 0;
    transition: width 0.3s ease;
    overflow: hidden;
    box-shadow: 2px 0 0 rgb(0, 25, 253);
}

.sidebar:not(.expandida) {
    width: 80px;
}

.btn-menu {
    cursor: pointer;
    margin-bottom: 20px;
    font-size: 24px;
}

.menu a {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    margin-left: 15px;
}

ul.infos {
    padding: 0;
}

ul.infos li {
    list-style: none;
    display: flex;
    align-items: center;
    height: 40px;
    padding: 10px 0;
    transition: all .5s ease;
}

ul.infos li:hover {
   background-color: blue;
   cursor: pointer;
    border-radius: 20px 0 0 20px;
}

</style>