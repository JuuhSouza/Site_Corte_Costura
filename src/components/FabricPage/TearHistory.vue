<template>
  <section class="timeline-section">
    <div class="timeline-horizontal-title">
      <h1>Evolução do Tear</h1>
      <p class="subtitle">A jornada da tecelagem através dos séculos</p>
    </div>

    <div class="timeline-wrapper">
      <swiper
        :slides-per-view="'auto'"
        :space-between="50"
        :centered-slides="true"
        :grab-cursor="true"
        class="mySwiper"
      >
        <swiper-slide v-for="item in timeline" :key="item.name" class="timeline-card">
          <div class="photo-wrapper">
            <img :src="item.img" :alt="item.name" class="event-photo" />
          </div>

          <div class="event-info">
            <span class="date-tag">{{ item.date }}</span>
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  name: 'Timeline',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      timeline: [
        {
          date: 'A Origem Primitiva',
          name: 'O Tear Manual',
          description: 'Os primeiros teares eram simples molduras de madeira. O princípio era básico: esticar fios verticais (o urdume) e passar fios horizontais (a trama).',
          img: new URL('../../assets/img/tearManual.jpg', import.meta.url).href
        },
        {
          date: 'Idade Média',
          name: 'O Tear de Pedal',
          description: 'A introdução do pedal permitiu usar os pés para separar os fios, deixando as mãos livres para lançar a lançadeira com muito mais rapidez.',
          img: new URL('../../assets/img/tearPedal.jpg', import.meta.url).href
        },
        {
          date: 'O "Pai" da Computação',
          name: 'O Tear de Jacquard',
          description: 'O primeiro sistema a usar cartões perfurados para criar padrões complexos, antecipando a lógica dos computadores modernos.',
          img: new URL('../../assets/img/tearJacquard.jpg', import.meta.url).href
        },
        {
          date: 'Revolução Industrial',
          name: 'O Tear Mecânico',
          description: 'Com a força do vapor, os teares deixaram de depender da força humana, tornando-se gigantes de ferro operando ininterruptamente.',
          img: new URL('../../assets/img/tearMecanico.jpg', import.meta.url).href
        }
      ]
    }
  }
}
</script>

<style scoped>
.timeline-section {
  margin-top: -6em;
  padding: 80px 0; 
  overflow: visible;
}

.timeline-horizontal-title {
  text-align: center;
  margin-bottom: 60px; 
  position: relative;
  z-index: 10;
}

.timeline-horizontal-title h1 {
  font-size: 2.8em;
  font-weight: 700;
  color: var(--tittle-color-machine);
  margin-bottom: 10px;
}

.subtitle {
  color: var(--subtitle-tear);
  font-style: italic;
}

.timeline-wrapper {
  position: relative;
  padding: 20px 0; 
}

.mySwiper {
  overflow: visible !important; 
  padding-top: 20px !important;
}

.mySwiper::before {
  content: "";
  position: absolute;
  top: 60%;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    var(--color-line-machine) 50%, 
    var(--color-line-machine) 80%, 
    transparent 100%
  );
  z-index: 1;
}

.timeline-card {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.4;
  transform: scale(0.85);
}

.swiper-slide-active.timeline-card {
  opacity: 1;
  transform: scale(1);
}

.photo-wrapper {
  position: relative;
  margin-bottom: 30px;
  z-index: 2;
}

.event-photo {
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 2px solid var(--border-photo);
  transition: all 0.3s ease;
}

.timeline-card:hover .event-photo {
  transform: translateY(-15px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.event-info {
  margin-top: 20px;
  padding: 0 15px;
}

.date-tag {
  display: inline-block;
  font-weight: 700;
  color: var(--date-tear);
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 8px;
}

.event-info h3 {
  margin: 5px 0 15px 0;
  color: var(--color-title-tear);
  font-size: 1.4em;
}

.event-info p {
  font-size: 0.95em;
  color: var(--p-tear);
  line-height: 1.6;
  max-width: 260px;
}
</style>