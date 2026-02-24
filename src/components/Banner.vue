<template>
  <section class="parallax-container">
    <div class="parallax-bg"></div>
    
    <div v-observe-visibility="onElementObserved" :class="['content', { 'is-visible': visible }]"> <!-- scroll da pagina -->
      <!-- <h1>A arte da moda</h1>
      <p>A experiência artesanal definitiva.</p> -->
    </div>
  </section>
</template>

<script>
    export default {
        name : 'Banner',
data() {
    return {
      visible: false
    }
  },
  methods: {
    // ativar a animação Intersection Observer
    onElementObserved() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.visible = true;
          }
        });
      }, { threshold: 0.3 }); // Dispara quando 30% do elemento estiver visível
      observer.observe(this.$el);
    }
  },
  mounted() {
    this.onElementObserved();
  }
}
</script>

