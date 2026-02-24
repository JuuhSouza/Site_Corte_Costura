<template> 
    <Banner />
    <CardSobre />
    <!-- <FormCard/> -->
     <Timeline/>
</template>

<script>
import Banner from '../components/Banner.vue';
import CardSobre from '../components/CardSobre.vue';
import FormCard from '../components/FormCard.vue';
import Timeline from '../components/Timeline.vue';


export default {
    name: 'Home',
    components: {
        Banner, CardSobre, /* FormCard */ Timeline
    }
}

</script>