<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <section id="start">
        <Parallax/>
    </section>
    
    <section>
        <History/>
    </section>

    <section>
        <Tear/>
    </section>

    <section id="tearHistory">
        <TearHistory/>
    </section>

</template>

<script>
import History from '../components/FabricPage/History.vue';
import Parallax from '../components/FabricPage/Parallax.vue';
import TearHistory from '../components/FabricPage/TearHistory.vue';
import Tear from '../components/FabricPage/Tear.vue';
/* import Footer from '../components/Footer.vue';
 */
export default {
    name: 'FabricPage',
    components: {
        History, Parallax, TearHistory, Tear
    }
}
</script>