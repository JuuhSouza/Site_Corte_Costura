import { ref, watch } from 'vue';

// Carrega do localStorage ou inicia vazio
export const posts = ref(JSON.parse(localStorage.getItem('my-blog-posts') || '[]'));

// Salva sempre que mudar
watch(posts, (newVal) => {
    localStorage.setItem('my-blog-posts', JSON.stringify(newVal));
}, { deep: true });