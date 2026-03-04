<template> 
    <section id="inicio">
            <Banner />
     </section>
    <CardSobre />

     <section id="historia">
        <Timeline/>
     </section>

     <section id="revolucaoIndustrial">
        <Revolution/>
     </section>

     <section id="timelineMachine">
        <TimelineMachine/>
     </section>
     
     <section>
        <Footer/>
     </section>
</template>

<script>
import Banner from '../components/Home/Banner.vue';
import CardSobre from '../components/Home/CardSobre.vue';
import Footer from '../components/Footer.vue';
import FormCard from '../components/FormCard.vue';
import Revolution from '../components/Home/Revolution.vue';
import Timeline from '../components/Home/Timeline.vue';
import TimelineMachine from '../components/Home/TimelineMachine.vue';


export default {
    name: 'Home',
    components: {
        Banner, CardSobre, /* FormCard */ Timeline, Revolution, TimelineMachine, Footer
    }
}

</script>