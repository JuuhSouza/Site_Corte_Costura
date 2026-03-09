<template>
  <div class="feed-wrapper">
    
    <header class="search-header">
      <h1>Explorar Costura</h1>
      
      <div class="search-container">
        <input v-model="searchQuery" type="text" placeholder="Pesquisar por título..." class="search-input" />
      </div>

      <nav class="category-nav">
        <button :class="{ active: selectedCategory === '' }" @click="selectedCategory = ''">Todos</button>
        <button 
          v-for="cat in categories" 
          :key="cat" 
          :class="{ active: selectedCategory === cat }"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </nav>
    </header>

    <main class="posts-grid">
      <div v-if="filteredPosts.length === 0" class="empty-msg">
        Nenhum resultado encontrado para sua busca.
      </div>

      <article v-for="post in filteredPosts" :key="post.id" class="post-card">
        <div class="card-badge" v-if="post.category">{{ post.category }}</div>
        <img :src="post.image || 'https://via.placeholder.com/300'" class="card-img" />
        <div class="card-body">
          <h3>{{ post.title }}</h3>
          <button @click="openModal(post)" class="btn-more">Ver Mais</button>
        </div>
      </article>
    </main>

    <Transition name="fade">
      <div v-if="selectedPost" class="modal-overlay" @click.self="closeModal">
        <div class="modal-box">
          <button class="btn-close" @click="closeModal">✕</button>
          <img :src="selectedPost.image" v-if="selectedPost.image" class="modal-hero" />
          <div class="modal-text">
            <span class="modal-tag">{{ selectedPost.category }}</span>
            <h2>{{ selectedPost.title }}</h2>
            <p class="modal-content-text">{{ selectedPost.content }}</p>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { posts } from '../Editor/store.js';

const searchQuery = ref('');
const selectedCategory = ref('');
const selectedPost = ref(null);

const categories = ['Moldes', 'Desfiles', 'Pontos de Costura', 'Tecidos'];

const filteredPosts = computed(() => {
  return posts.value.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    const matchesCategory = selectedCategory.value === '' || post.category === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });
});

const openModal = (post) => {
  selectedPost.value = post;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedPost.value = null;
  document.body.style.overflow = 'auto';
};
</script>

<style scoped>
.feed-wrapper { 
  max-width: 1100px; 
  margin: 0 auto; 
  padding: 40px 20px; 
}

.search-header { 
  text-align: center; 
  margin-bottom: 50px; 
}
.search-input { 
  width: 100%; 
  max-width: 500px; 
  padding: 15px 25px; 
  border-radius: 50px; 
  border: 2px solid #eee; 
  color: var(--color-search-feed);
  font-size: 1rem; 
  margin: 20px 0; 
  outline: none; 
  transition: 0.3s; 
}

.search-input:focus { 
  border-color: #2563eb; 
  box-shadow: 0 0 10px rgba(37,99,235,0.1); 
}

.category-nav { 
  display: flex; 
  justify-content: center; 
  gap: 10px; 
  flex-wrap: wrap; 
}

.category-nav button { 
  padding: 8px 20px; 
  border-radius: 20px; 
  border: 1px solid #ddd; 
  background: white; 
  cursor: pointer; 
  transition: 0.3s; 
}

.category-nav button.active { 
  background: #2563eb; 
  color: white; 
  border-color: #2563eb; 
  font-weight: bold; 
}

/* Grid de Cards */
.posts-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
  gap: 30px;
}

.post-card { 
  background: white; 
  border-radius: 15px; 
  overflow: hidden; 
  box-shadow: 0 5px 15px rgba(0,0,0,0.05); 
  position: relative; 
  border: 1px solid #f0f0f0; 
  transition: 0.3s; 
}

.post-card:hover { 
  transform: translateY(-5px); 
}

.card-badge { 
  position: absolute; 
  top: 15px; 
  left: 15px; 
  background: #2563eb; 
  color: white; 
  padding: 5px 12px; 
  border-radius: 20px; 
  font-size: 0.7rem; 
  font-weight: bold; 
  z-index: 2; 
}

.card-img { 
  width: 100%; 
  height: 200px;
  object-fit: cover; 
}

.card-body { 
  padding: 20px; 
  text-align: center; 
}

.btn-more { 
  background: #2563eb; 
  color: white; 
  border: none; 
  padding: 10px 25px; 
  border-radius: 25px; 
  cursor: pointer; 
  font-weight: bold; 
  margin-top: 10px; 
}
  
/* Modal */
.modal-overlay { 
  position: fixed; 
  inset: 0; 
  background: rgba(0,0,0,0.8); 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  z-index: 9999; 
  padding: 20px; 
  backdrop-filter: blur(4px); 
}

.modal-box { 
  background: white; 
  width: 100%; 
  max-width: 800px; 
  max-height: 90vh; 
  border-radius: 20px; 
  overflow-y: auto; 
  position: relative; 
}

.btn-close { 
  position: absolute; 
  top: 20px; 
  right: 20px; 
  background: white; 
  border: none; 
  width: 40px; 
  height: 40px; 
  border-radius: 50%; 
  cursor: pointer; 
  box-shadow: 0 2px 10px rgba(0,0,0,0.2); 
  font-weight: bold; 
  z-index: 10; 
}

.modal-hero { 
  width: 100%; 
  height: 400px; 
  object-fit: cover; 
}

.modal-text { 
  padding: 40px; 
}

.modal-tag { 
  color: #2563eb; 
  font-weight: bold; 
  text-transform: uppercase; 
  font-size: 0.8rem; 
}

.modal-content-text { 
  line-height: 1.8; 
  color: #444; 
  margin-top: 20px;
  white-space: pre-wrap; 
  font-size: 1.1rem; 
}

.fade-enter-active, 
.fade-leave-active { 
  transition: opacity 0.3s; 
}

.fade-enter-from, 
.fade-leave-to { 
  opacity: 0; 
}

</style>