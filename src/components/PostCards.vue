<script setup>
defineProps(['post', 'index']); // Recebe o objeto do post e a posição
defineEmits(['remover']);       // Avisa quando o botão de excluir for clicado
</script>

<template>
  <div class="card">
    <h3>{{ post.titulo }}</h3>
    <p>{{ post.conteudo }}</p>
    <button @click="$emit('remover', index)">Excluir</button>
  </div>
</template>