<template>
  <div class="feed-container">
    <h1>Latest Stories</h1>

    <div class="posts-grid">
      <article v-for="post in posts" :key="post.id" class="mini-card">
        <div class="card-img-container">
          <img :src="post.image || 'https://via.placeholder.com/300'" />
        </div>
        <div class="card-info">
          <h3>{{ post.title }}</h3>
          <button @click="openPost(post)" class="read-btn">Ver Mais</button>
        </div>
      </article>
    </div>

    <Transition name="fade">
      <div v-if="selectedPost" class="modal-overlay" @click.self="closePost">
        <div class="modal-content">
          <button class="close-modal" @click="closePost">✕</button>
          
          <img :src="selectedPost.image" class="modal-img" v-if="selectedPost.image" />
          
          <div class="modal-body">
            <span class="date">{{ new Date(selectedPost.id).toLocaleDateString() }}</span>
            <h2>{{ selectedPost.title }}</h2>
            <div class="full-text">
              {{ selectedPost.content }}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { posts } from '../Editor/store.js';

// Estado para controlar o Modal
const selectedPost = ref(null);

// Função para abrir
const openPost = (post) => {
  selectedPost.value = post;
  // Opcional: trava o scroll da página atrás
  document.body.style.overflow = 'hidden';
};

// Função para fechar
const closePost = () => {
  selectedPost.value = null;
  document.body.style.overflow = 'auto';
};
</script>

<style scoped>
.feed-container h1{
  text-align: center;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  padding: 2em;
}

.mini-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  border: 1px solid var(--border-input);
}

.card-img-container img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-info { padding: 15px; text-align: center; }

.read-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
}

/* MODAL STYLES */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: white;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  border-radius: 20px;
  overflow-y: auto; /* Permite rolar se o texto for muito longo */
  position: relative;
  animation: slideUp 0.3s ease-out;
}

.close-modal {
  position: absolute;
  top: 15px;
  right: 15px;
  background: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  border: none;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  cursor: pointer;
  z-index: 10;
}

.modal-img { width: 100%; height: 350px; object-fit: cover; }

.modal-body { padding: 30px; }

.full-text {
  line-height: 1.8;
  color: #444;
  white-space: pre-wrap; /* Preserva as quebras de linha do usuário */
  font-size: 1.1rem;
}

/* Animações */
@keyframes slideUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>