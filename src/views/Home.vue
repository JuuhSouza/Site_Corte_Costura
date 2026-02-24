<template> 
    <Banner />
    <CardSobre />
</template>

<script>
import Banner from '../components/Banner.vue';
import CardSobre from '../components/CardSobre.vue';


export default {
    name: 'Home',
    components: {
        Banner, CardSobre
    }
}

</script>