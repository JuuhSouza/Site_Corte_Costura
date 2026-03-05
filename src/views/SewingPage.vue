<template> 
    <section id="startSewingPage">
            <Banner />
     </section>

     <section id="historySewing">
        <CardSobre />
     </section>

     <section id="sewingTimeline">
        <Timeline/>
     </section>

     <section id="revolution">
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
import Banner from '../components/SewingPage/Banner.vue';
import cardAbout from '../components/SewingPage/cardAbout.vue';
import Footer from '../components/Footer.vue';
import Revolution from '../components/SewingPage/Revolution.vue';
import Timeline from '../components/SewingPage/Timeline.vue';
import TimelineMachine from '../components/SewingPage/TimelineMachine.vue';


export default {
    name: 'SewingPage',
    components: {
        Banner, cardAbout, Timeline, Revolution, TimelineMachine, Footer
    }
}

</script>