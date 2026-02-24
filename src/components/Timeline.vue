<template>
  <section class="timeline-section">
    <div class="title">
      <h1>Evolução das máquinas de costura</h1>
    </div>

    <div class="timeline-container">
      <div class="timeline-line"></div>

      <div 
        class="timeline-item" 
        v-for="(item, index) in timeline" 
        :key="index"
      >
        <div class="timeline-dot"></div>

        <div class="timeline-img">
          <img :src="item.img" :alt="item.name">
        </div>
        
        <div class="timeline-content">
          <span class="date">{{ item.date }}</span>
          <h2>{{ item.name }}</h2>
          <p>{{ item.descricao }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      timeline: [
        {
          name: 'titulo',
          descricao: '....',
          img: new URL('../assets/img/parallax1.png', import.meta.url).href
        },
        {
          name: 'titulo',
          descricao: '....',
          img: new URL('../assets/img/parallax1.png', import.meta.url).href // Use imagens diferentes aqui
        },
        {
          name: 'titulo',
          descricao: '....',
          img: new URL('../assets/img/parallax1.png', import.meta.url).href
        }
      ]
    }
  }
}
</script>

<style scoped>
.title{
    align-items: center;
    text-align: center;
    font-size: 1.5em;
    margin: 2em;
    margin-top: -3em;
    color: var(--tittle-color-timeline);
}
.timeline-section {
  padding: 80px 20px;
}

.timeline-container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 70px;
}

.timeline-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background-color: var(--color-line);
  z-index: 1;
}

.timeline-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 2;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background-color: var(--background-dot);
  border: 4px solid var(--border-dot);
  border-radius: 50%;
  box-shadow: 0 0 0 4px var(--box-shadow-timeline);
  z-index: 3;
}

.timeline-img, .timeline-content {
  width: 45%;
}

.timeline-img img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(255, 255, 255, 0.1);
transition: all .4s ease-in-out;
}

.timeline-img img:hover {
      transform: scale(1.05) !important;
}

.timeline-content h2 {
  margin-top: 0;
  color: var(--color-timeline);
}

.timeline-content p {
  margin-top: 0;
  color: var(--color-p-timeline);
}

.date {
  font-weight: bold;
  color: #3498db;
  display: block;
  margin-bottom: 5px;
}
</style>