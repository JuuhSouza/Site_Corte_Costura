<template> 
    <Banner />
    <CardSobre />
    <!-- <FormCard/> -->
     <Timeline/>
     <Revolution/>
     <TimelineMachine/>
</template>

<script>
import Banner from '../components/Banner.vue';
import CardSobre from '../components/CardSobre.vue';
import FormCard from '../components/FormCard.vue';
import Revolution from '../components/Revolution.vue';
import Timeline from '../components/Timeline.vue';
import TimelineMachine from '../components/TimelineMachine.vue';


export default {
    name: 'Home',
    components: {
        Banner, CardSobre, /* FormCard */ Timeline, Revolution, TimelineMachine
    }
}

</script>