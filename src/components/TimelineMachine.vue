<template>
  <div class="timeline-horizontal-title">
    <h1>Linha do tempo das máquinas de costura</h1>
  </div>

  <div class="timeline-wrapper">
    <swiper
      :slides-per-view="'auto'"
      :space-between="30"
      :grab-cursor="true"
      class="mySwiper"
    >
      <swiper-slide v-for="item in timeline" :key="item.name" class="timeline-card">
        <div class="photo-wrapper">
          <img :src="item.img" :alt="item.name" class="event-photo" />
          <div class="timeline-dot"></div>
        </div>

        <div class="event-info">
          <span class="date">{{ item.date }}</span>
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
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
          date: '1790',
          name: 'Thomas Saint',
          description: 'O inglês Thomas Saint patenteou um design para uma máquina que costurava couro. Ela usava uma "sovela" (furador) para abrir o caminho para a agulha.',
          img: new URL('../assets/img/1790_maquina.png', import.meta.url).href
        },
        {
          date: '1830',
          name: 'Barthélemy Thimonnier',
          description: 'O francês Thimonnier criou a primeira máquina realmente funcional e feita de madeira. Ele chegou a ter 80 máquinas produzindo uniformes para o exército francês, até que alfaiates furiosos queimaram sua fábrica.',
          img: new URL('../assets/img/1830_maquina.jpg', import.meta.url).href
        },
        {
          date: '1846',
          name: 'Elias Howe',
          description: 'Howe criou a agulha com o furo na ponta e o sistema de lançadeira (bobina) que criava o "lockstitch" (ponto preso), que não desmancha fácil. É a base de todas as máquinas modernas.',
          img: new URL('../assets/img/1846_maquina.jpg', import.meta.url).href
        },
        {
          date: '1851',
          name: 'Isaac Singer',
          description: 'Singer aperfeiçoou o design de Howe. Ele introduziu o pedal de pé (deixando as mãos livres) e a agulha que se movia na vertical (em vez de horizontal). Ele também criou o sistema de vendas a prazo, o que permitiu que famílias comuns comprassem a máquina.',
          img: new URL('../assets/img/1851_maquina.jpg', import.meta.url).href
        },
        {
          date: '1933',
          name: 'Singer Featherweight 221',
          description: 'Até então, as máquinas eram móveis pesados de ferro fundido. A Singer lançou a Featherweight, feita de alumínio, leve o suficiente para ser carregada em uma maleta. É um item de colecionador até hoje.',
          img: new URL('../assets/img/1933_maquina.webp', import.meta.url).href
        },
        {
          date: '1979',
          name: 'Singer Athena 2000',
          description: 'A primeira máquina de costura eletrônica do mundo controlada por microchips. Ela automatizou a escolha dos pontos, eliminando a necessidade de trocar discos de metal (cams) manualmente para fazer desenhos.',
          img: new URL('../assets/img/1979_maquina.webp', import.meta.url).href
        },
        {
          date: '2024 - 2026',
          name: 'Alta Tecnologia e Inteligência Artificial',
          description: 'As máquinas atuais, como as da linha Luminaire ou Bernina 990, possuem projetores que mostram o desenho no tecido antes de costurar, câmeras que escaneiam o tecido e telas touch dignas de um tablet.',
          img: new URL('../assets/img/2026_maquina.jpg', import.meta.url).href
        }
      ]
    }
  }
}
</script>

<style scoped>
.timeline-horizontal-title h1{
  text-align: center;
  font-size: 2.3em;
  padding:2em auto;
  color: var(--tittle-color-machine);
}

.timeline-wrapper {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  padding: 100px 0;
  overflow: hidden;
}

.mySwiper::before{
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-line-machine);
  z-index: 0;
  transform: translateY(-50%);
}

.timeline-card {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: transparent;
  height: auto;
  padding-bottom: 20px;
}

.photo-wrapper {
  position: relative;
  margin-bottom: 40px;
  z-index: 2;
}

.event-photo {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
/*   margin-top: 1em; */
  border: 2px solid var(--border-dot-machine);
  position: relative;
  z-index: 2;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 105%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  background-color: var(--background-dot-machine);
  border: 4px solid var(--border-dot-machine);
  border-radius: 50%;
  box-shadow: 0 0 0 4px var(--box-shadow-timeline-machine);
  z-index: 3;
}

.event-info h3 {
  margin: 1px 0;
  color: var(--color-title-timeline-machine);
  font-size: 1.2em;
}

.date {
  font-weight: bold;
  color: var(--color-date-machine);
  font-size: 1.5em;
}

.event-info p {
  margin: 10px 0;
  font-size: 1em;
  color: var(--color-p-timeline-machine);
  line-height: 1.4;
}
</style>