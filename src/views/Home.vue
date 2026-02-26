<template> 
    <section id="inicio">
            <Banner />
     </section>
    <CardSobre />

     <section id="historia">
        <Timeline/>
     </section>

     <section>
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
import Banner from '../components/Banner.vue';
import CardSobre from '../components/CardSobre.vue';
import Footer from '../components/footer.vue';
import FormCard from '../components/FormCard.vue';
import Revolution from '../components/Revolution.vue';
import Timeline from '../components/Timeline.vue';
import TimelineMachine from '../components/TimelineMachine.vue';


export default {
    name: 'Home',
    components: {
        Banner, CardSobre, /* FormCard */ Timeline, Revolution, TimelineMachine, Footer
    }
}

</script>