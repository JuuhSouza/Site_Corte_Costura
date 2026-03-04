<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <section id="start">
        <Parallax/>
    </section>
    
    <section>
        <History/>
    </section>

    <section >
        <TearHistory/>
    </section>

</template>

<script>
import History from '../components/Tecidos/History.vue';
import Parallax from '../components/Tecidos/Parallax.vue';
import TearHistory from '../components/Tecidos/TearHistory.vue';

export default {
    name: 'Tecidos',
    components: {
        History, Parallax, TearHistory
        
    }
}
</script>