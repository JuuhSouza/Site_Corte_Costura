<template>
  <div class="admin-panel">
    <button class="fab" @click="isDrawerOpen = true">+</button>

    <div v-if="isDrawerOpen" class="overlay" @click="closeDrawer"></div>

    <aside class="drawer" :class="{ 'open': isDrawerOpen }">
      <h2>{{ form.id ? 'Editar Post' : 'Novo Post' }}</h2>
      
      <input v-model="form.title" placeholder="Título do post" class="input-field" />

      <div class="field">
        <label>Selecione a Categoria:</label>
        <select v-model="form.category" class="select-field">
          <option value="" disabled>Escolha categoria...</option>
          <option v-for="cat in categories" :key="cat" :value="cat">
            {{ cat }}
          </option>
        </select>
      </div>

      <textarea v-model="form.content" placeholder="Conteúdo..." class="text-field"></textarea>

      <label class="upload-label">
          Upload Imagem
          <input type="file" @change="handleImage" accept="image/*" hidden />
      </label>
      <img v-if="form.image" :src="form.image" class="preview" />

      <div class="actions">
        <button @click="savePost" class="btn-save">Publicar</button>
        <button @click="closeDrawer" class="btn-cancel">Cancelar</button>
      </div>
    </aside>

    <div class="grid">
      <article v-for="post in posts" :key="post.id" class="featured-card">
        
        <div class="card-image-wrapper">
          <span class="badge">{{ post.category }}</span>
          <img :src="post.image || 'https://via.placeholder.com/400x250'" />
        </div>

        <div class="card-content">
          <span class="post-date">{{ new Date(post.id).toLocaleDateString() }}</span>
          <h3>{{ post.title }}</h3>
          
          <div class="admin-actions">
            <button @click="openEdit(post)" class="btn-action-edit"> <i class="fa-solid fa-pencil"></i></button>
            <button @click="deletePost(post.id)" class="btn-action-delete"> <i class="fa-solid fa-trash-can"></i> </button>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { posts } from './store.js';

const isDrawerOpen = ref(false);

const categories = ['Moldes', 'Desfiles', 'Pontos de Costura', 'Tecidos'];

const form = ref({
  id: null,
  title: '',
  content: '',
  image: null,
  category: ''
});

const handleImage = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (f) => form.value.image = f.target.result;
  reader.readAsDataURL(file);
};

const savePost = () => {
  if (!form.value.title || !form.value.category) {
    return alert("Dê um título e escolha uma Categoria!");
  }

  if (form.value.id) {
    const index = posts.value.findIndex(p => p.id === form.value.id);
    posts.value[index] = { ...form.value };
  } else {
    // etiqueta da categoria escolhida
    posts.value.unshift({ ...form.value, id: Date.now() });
  }
  closeDrawer();
};

const deletePost = (id) => {
  if (confirm("Você tem certeza que deseja excluir esta postagem?")) {
    posts.value = posts.value.filter(p => p.id !== id);
  }
};

const openEdit = (post) => {
  form.value = { ...post };
  isDrawerOpen.value = true;
};

const closeDrawer = () => {
  isDrawerOpen.value = false;
  form.value = { id: null, title: '', content: '', image: null, category: '' };
};
</script>

<style scoped>
.drawer {
  position: fixed; 
  top: 0; 
  right: -400px; 
  width: 350px; 
  height: 100%; 
  background: var(--background-menu-add); 
  z-index: 2001; 
  transition: 0.4s; 
  padding: 25px; 
  box-shadow: -5px 0 15px rgba(0,0,0,0.1); 
}

.drawer.open { 
  right: 0; 
}

.overlay { 
  position: fixed; 
  inset: 0; 
  background: #00000080; 
  z-index: 2000; 
}

.grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); 
  gap: 30px; 
  padding: 40px 20px; 
  max-width: 1200px;
  margin: 0 auto;
}

.featured-card {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-input);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.featured-card:hover { 
  transform: translateY(-5px); 
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
}

.card-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge { 
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 0.7rem; 
  color: var(--color-category); 
  background-color: var(--background-category);
  padding: 5px 12px; 
  border-radius: 10px; 
  font-weight: bold; 
}

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.post-date { 
  font-size: 0.8rem; 
  color: var(--date-editor); 
  margin-bottom: 5px; 
}

.card-content h3 {
  font-size: 1.3rem;
  margin: 5px 0 10px 0;
  color:var(--color-editor);
}

.card-content p {
  font-size: 0.9rem;
  color: var(--color-editor);
  line-height: 1.5;
  margin-bottom: 20px;
  flex-grow: 1;
}

.admin-actions {
  display: flex;
  gap: 10px;
  border-top: 1px solid var(--border-input);
  padding-top: 15px;
}

.admin-panel {
  margin-left: 100px; 
  transition: margin 0.4s ease;
}

.sidebar-closed .admin-panel {
  margin-left: 80px;
}

.btn-action-edit, .btn-action-delete {
  flex: 1;
  padding: 5px 0;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

.btn-action-edit { 
  color: var(--color-edit);
  font-size: 1.2em;
  background-color: var(--background-btn);
  transition: all .5s ease;
}
.btn-action-delete { 
  color: var(--color-delet);
  font-size: 1.2em;
  background-color: var(--background-btn);
  transition: all .5s ease;
}

.btn-action-edit:hover { 
  background-color: var(--background-hover-edit);
  color: black;
}
.btn-action-delete:hover { 
  color: var(--color-delet-hover);
  background-color: var(--background-hover-delet);
}

.field { 
  margin: 15px 0; 
  display: flex; 
  flex-direction: column; 
  gap: 5px; 
}

.select-field { 
  padding: 10px; 
  border-radius: 8px; 
  color: var(--color-select);
  border: 1px solid var(--border-select); 
  background-color: var(--background-select); 
  cursor: pointer;
  font-size: 1rem; 
}

option{
  color: white;
}

.input-field, 
.text-field { 
  width: 100%; 
  padding: 12px; 
  margin-bottom: 10px; 
  border: 1px solid var(--border-input); 
  border-radius: 8px; 
  box-sizing: 
  border-box; 
}

.text-field { 
  height: 120px; 
}

.preview { 
  width: 100%;
   height: 120px; 
  object-fit: cover; 
  border-radius: 8px; 
  margin: 10px 0; 
}


.btns { 
  display: flex; 
  gap: 5px; 
  margin-top: 10px; 
}

.fab { 
position: fixed; 
bottom: 20px; 
right: 20px; 
width: 50px; 
height: 50px; 
border-radius: 50%; 
background: var(--background-editor); 
color: var(--color-editor); 
border: none; 
font-size: 24px; 
cursor: pointer; 
z-index: 1500; 
}

.upload-label{ 
  display: block; 
  background: var(--upload-background); 
  padding: 10px; 
  text-align: center; 
  border-radius: 8px; 
  cursor: pointer; 
  border: none; 
  transition: all .4s ease;
}

.upload-label:hover{ 
  opacity: 0.5;
}

.btn-save, 
.btn-cancel{
  padding: .5em .5em;
  cursor: pointer;
  margin: 1em .8em;
  margin-left: 0;
  color: var(--color-save);
  background-color: var(--btn-background-save);
  border-radius: 7px;
  border: 1px solid var(--border-input-add);
  transition: all .5s ease;
}

.btn-save:hover, 
.btn-cancel:hover{
  transform: translateY(-5px);
  color: var(--color-save);
  background-color: var(--btn-background-save);
  border: 1px solid var(--border-input-add);
}


</style>