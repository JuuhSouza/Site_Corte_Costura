<template>
  <div class="texto-postagem">
        <div class="infos">
            <h1>Sistema de postagem</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas voluptatibus quod eos accusantium perspiciatis, dolores debitis repellat labore consectetur eaque dolore nobis reprehenderit nesciunt fugit eveniet doloremque, voluptatum vel.</p>
        </div>
    </div>
  <div class="container">
    <h1>Meu Feed Vue</h1>

    <form @submit.prevent="adicionarPost" class="post-form">
      <input v-model="novoTitulo" placeholder="Título" required />
      <textarea v-model="novoConteudo" placeholder="Conteúdo" required></textarea>
      <button type="submit">Publicar</button>
    </form>

    <div class="feed">
      <PostCards 
        v-for="(item, i) in posts" 
        :key="i" 
        :post="item" 
        :index="i"
        @remover="excluirPost" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import PostCards from './PostCards.vue';

const posts = ref([]);
const novoTitulo = ref('');
const novoConteudo = ref('');

// Carregar do LocalStorage ao iniciar
onMounted(() => {
  const salvos = localStorage.getItem('posts_vue');
  if (salvos) {
    posts.value = JSON.parse(salvos);
  }
});

// Observar mudanças e salvar automaticamente
watch(posts, (newValue) => {
  localStorage.setItem('posts_vue', JSON.stringify(newValue));
}, { deep: true });

const adicionarPost = () => {
  posts.value.unshift({
    titulo: novoTitulo.value,
    conteudo: novoConteudo.value,
    data: new Date().toLocaleString()
  });

  // Limpar campos após publicar
  novoTitulo.value = '';
  novoConteudo.value = '';
};

const excluirPost = (index) => {
  posts.value.splice(index, 1);
};
</script>

<style scoped>
.texto-postagem{
    padding: 2em 10em;
    margin: 0 2em;
    margin-top: -4em;
    align-items: center;
    text-align: center;
}

.infos h1{
    font-size: 2.5em;
    color: var(--color-info);
}

.infos p{
    font-size: 1.2em;
    color: var(--color-p-info);
}

.container { 
    max-width: 600px; 
    margin: 0 auto; 
    font-family: Arial, sans-serif; 
}

.post-form { 
    display: flex; 
    flex-direction: column; 
    gap: 10px; 
    margin-bottom: 2rem;
}

input, textarea { 
    padding: 10px; 
    border: 1px solid #ddd; 
    border-radius: 4px; 
}

button { 
    padding: 10px; 
    background: #42b883; 
    color: white; 
    border: none; 
    cursor: pointer; 
}
</style>