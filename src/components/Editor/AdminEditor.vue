<template>
  <div class="admin-container">
    <button class="fab" @click="isDrawerOpen = true">＋</button>

    <div v-if="isDrawerOpen" class="overlay" @click="closeDrawer"></div>

    <aside class="drawer" :class="{ 'open': isDrawerOpen }">
      <h3>{{ form.id ? 'Editar Postagem' : 'Nova Postagem' }}</h3>
      
      <div class="field">
        <input v-model="form.title" placeholder="Título do post" />
      </div>
      
      <div class="field">
        <textarea v-model="form.content" placeholder="Conteúdo..."></textarea>
      </div>

      <div class="field">
        <label class="upload-label">
          Upload Imagem
          <input type="file" @change="handleImage" accept="image/*" hidden />
        </label>
        <img v-if="form.image" :src="form.image" class="preview-img" />
      </div>

      <div class="drawer-actions">
        <button @click="savePost" class="btn-save">Confirmar</button>
        <button @click="closeDrawer" class="btn-cancel">Cancelar</button>
      </div>
    </aside>

    <main class="admin-grid">
      <div v-for="post in posts" :key="post.id" class="post-card">
        <img :src="post.image || 'https://via.placeholder.com/150'" class="card-img" />
        <div class="card-content">
          <h4>{{ post.title }}</h4>
          <div class="card-btns">
            <button @click="editPost(post)" class="btn-edit">Editar</button>
            <button @click="deletePost(post.id)" class="btn-delete">Excluir</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { posts } from '../Editor/store.js';

// Controle da Aba
const isDrawerOpen = ref(false);

// Estado do Formulário (Otimizado em um único objeto)
const form = ref({
  id: null,
  title: '',
  content: '',
  image: null
});

//Lógica da Imagem
const handleImage = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (f) => form.value.image = f.target.result;
  reader.readAsDataURL(file);
};

// Salvar 
const savePost = () => {
  if (!form.value.title || !form.value.content) return alert("Preencha tudo!");

  if (form.value.id) {
    // Modo Edição
    const index = posts.value.findIndex(p => p.id === form.value.id);
    posts.value[index] = { ...form.value };
  } else {
    // Modo Criação
    posts.value.unshift({ ...form.value, id: Date.now() });
  }
  closeDrawer();
};

//Edição
const editPost = (post) => {
  form.value = { ...post }; // Copia os dados para o formulário
  isDrawerOpen.value = true;
};

// Deletar
const deletePost = (id) => {
  if (confirm("Deseja excluir este post?")) {
    posts.value = posts.value.filter(p => p.id !== id);
  }
};

const closeDrawer = () => {
  isDrawerOpen.value = false;
  form.value = { id: null, title: '', content: '', image: null };
};
</script>

<style scoped>
/* Layout e Botão Flutuante */
.admin-container { 
  padding: 20px; 
}

.fab { 
  position: fixed; 
  bottom: 30px; 
  right: 30px; 
  width: 60px; 
  height: 60px; 
  border-radius: 50%; 
  background: var(--background-editor); 
  color: var(--color-editor); 
  border: none; 
  font-size: 30px; 
  cursor: pointer; 
  z-index: 100; 
  box-shadow: 0 4px 10px rgba(0,0,0,0.3); 
}

.drawer { 
  position: fixed; 
  top: 0; 
  right: -400px; 
  width: 350px; 
  height: 100vh; 
  background: var(--background-menu-add); 
  z-index: 1000; 
  transition: 0.4s; 
  padding: 25px; 
  box-shadow: -5px 0 15px rgba(0,0,0,0.1); 
  display: flex; 
  flex-direction: 
  column; gap: 15px; 
}

.drawer.open { 
  right: 0; 
}

.overlay { 
  position: fixed; 
  inset: 0; 
  background: rgba(0,0,0,0.5); 
  z-index: 999; 
  backdrop-filter: blur(2px); 
}

/* Inputs e Preview */
input, textarea { 
  width: 100%; 
  padding: 12px; 
  border: 1px solid var(--border-input); 
  border-radius: 8px; 
  font-family: inherit; 
}

textarea { 
  height: 150px; 
  resize: none; 
}

.preview-img { 
  width: 100%; 
  height: 150px; 
  object-fit: cover; 
  border-radius: 8px; 
  margin-top: 10px; 
}

.upload-label { 
  display: block; 
  background: var(--upload-background); 
  padding: 10px; 
  text-align: center; 
  border-radius: 8px; 
  cursor: pointer; 
  border: 1px var(--border-input); 
}

/* Grid de Posts */
.admin-grid { 
  display: grid;
  grid-template-columns:
  repeat(auto-fill, minmax(250px, 1fr)); 
  gap: 20px; 
}

.post-card { 
  background: var(--background-card);
  color: var(--color-post);
  border-radius: 12px; 
  border: 1px solid var(--border-input); 
  overflow: hidden; 
}

.card-img { 
  width: 100%; 
  height: 140px; 
  object-fit: cover; 
}

.card-content { 
  padding: 15px; 
}

.card-btns { 
  display: flex; 
  gap: 10px; 
  margin-top: 10px; 
}

.btn-save { 
  background: var(--btn-background-save); 
  color: var(--color-save); 
  border: none; 
  padding: 10px; 
  margin: 0 1em;
  border-radius: 8px; 
  cursor: pointer;
}

.btn-cancel{
  background: var(--btn-background-cancel); 
  color: var(--btn-color-cancel); 
  border: none; 
  padding: 10px; 
  border-radius: 8px; 
  cursor: pointer;
}

.btn-edit { 
  flex: 1; 
  background: var(--edit-background); 
  border: none; 
  padding: 8px; 
  border-radius: 5px; 
  cursor: pointer; 
}

.btn-delete { 
  flex: 1; 
  background: var(--delet-background); 
  color: var(--color-delet); 
  border: none; 
  padding: 8px; 
  border-radius: 5px; 
  cursor: pointer; 
}

</style>