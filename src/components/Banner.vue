<template>
  <section class="parallax-container wave-cut">
    <div class="parallax-bg"></div>
    
    <div v-observe-visibility="onElementObserved" :class="['content', { 'is-visible': visible }]"> <!-- scroll da pagina -->
      <div class="infos">
        <h1>A arte da moda</h1>
        <p>A experiência artesanal definitiva.</p>
      </div>
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

<style scoped>
   .parallax-container {
  height: 650px;
  position: relative;
  overflow: hidden;
  display: flex;
/*   align-items:center;
  justify-content: center; */
}

.wave-cut{
  clip-path: polygon(
    0% 0%,
    100% 0,
    95% 50%,
    100% 100%,
    0% 90%
  );
  -webkit-clip-path: ellipse(120% 90% at 30% 6%);
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background-image: url('../assets/img/parallax_1.png');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}

.content {
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: all 2s ease-out;
}

.content.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.infos h1 {
  color: var(--color-p-parallax);
  font-size: 3.5rem;
  text-align: center;
  margin-top: 2em;
  margin-left: 16.4em;
}

.infos p{
  color: var(--color-p-parallax);
  font-size: 1.3rem;
  margin-left: 40em;
}
</style>
