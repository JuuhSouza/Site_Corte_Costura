<template>
  <div class="feed">
    <h1>Latest Posts</h1>
    <div v-if="posts.length === 0">No posts yet.</div>
    
    <article v-for="post in posts" :key="post.id" class="blog-post">
      <img v-if="post.image" :src="post.image" />
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </article>
  </div>
</template>

<script setup>
import { posts } from '../Editor/store.js';
</script>

<style scoped>
.feed { 
    max-width: 800px;
    margin: 0 auto; 
    padding: 20px; 
}

.blog-post { 
    margin-bottom: 40px; 
    border-bottom: 1px solid #eee; 
    padding-bottom: 20px; 
}

.blog-post img { 
    width: 100%; 
    max-height: 400px; 
    object-fit: cover; 
    border-radius: 12px; 
    }
</style>