<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
<section class="infos-section">
    <div class="title">
            <h1>Oque tem aq?</h1>
        </div>

    <div class="container-card">  
        <div class="card-box"
            v-for="(cardsInfo, index) in cardsInfo"
            :key="index" 
            data-aos="fade-down-right">
            <div class="content">
                <i v-if="cardsInfo.icon.startsWith('fa')" :class="cardsInfo.icon"></i>
                <img v-else :src="cardsInfo.icon" :alt="cardsInfo.name">

                <h1>{{ cardsInfo.name }}</h1>
                <p>{{ cardsInfo.descricao }}</p>

            </div>     
        </div>      
    </div>      
</section>
</template>

<script>
export default {
    name: 'cardSobre',
    data() {
        return {
            cardsInfo: [
                {
                    name: 'Tipos de pontos',
                    descricao: 'Conhecimento em tipos de pontos para costura',
                    icon: 'fa-brands fa-css3-alt'
                },
                {
                    name: 'HTML 5',
                    descricao: 'Conhecimento em CSS 3',
                    icon: 'fa-brands fa-html5'
                }
        ]
    }
  }
}

</script>

<style scoped>
.title h1{
    background-color: var(--background-color-card);
    text-align: center;
    font-size: 2.8em;
 /*    margin-top: -3em; */
    padding: 1em 0;
    color: var(--title-color-card);
}
.container-card{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px 0;
    gap: 40px 60px;
}

.card-box{
    position: relative;
    width: 300px;
    height: 300px;
    border: 2px red solid;
   /*  box-shadow: inset 20px 20px 20px rgba(255, 255, 255, 0.2),
    25px 35px 20px rgba(255, 255, 255, 0.05),
    25px 30px 30px rgba(255, 255, 255, 0),
    inset -20px -20px 25px rgba(255, 255, 255, 0.103); */
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;transition: border-radius 0.5s ease-in-out, transform 0.3s ease !important;
}

.card-box:hover {
    transform: scale(1.05) !important;
}

.content{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 40px;
    gap: 15px;
}

.content img{
    width: 100%;
}

.content i{
    font-size: 4em;
    color: var(--icone-hardskill);
}

.content h1{
    font-size: 1.5em;
    color: var(--title-color-card);
}

.content p{
    font-size: 1.2em;
    color: var(--icone-hardskill);
    margin-top: -.9em;
}

</style>