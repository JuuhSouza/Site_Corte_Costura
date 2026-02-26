<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
<section class="infos-section">
    <div class="title">
            <h1>Revolução industrial</h1>
        </div>

    <div class="container-card">  
        <div class="card-box"
            v-for="(cardsInfo, index) in cardsInfo"
            :key="index" 
            data-aos="fade-down-right">
            <div class="content">
                <h1>{{ cardsInfo.name }}</h1>
                <p>{{ cardsInfo.descricao }}</p>
            </div>     
        </div>      
    </div>      

</section>
</template>

<script>
export default {
    name: 'Revolution',
    data() {
        return {
            cardsInfo: [
                {
                    name: 'Revolução Industrial',
                    descricao: 'Máquinas de Costura: No século XIX, a invenção da máquina de costura por Elias Howe e Isaac Singer revolucionou a produção têxtil, permitindo a produção em massa de roupas.'
                },
                {
                    name: 'Século XX',
                    descricao: 'Democratização da Moda: A costura doméstica ganhou popularidade com o surgimento de padrões e revistas de moda. A indústria da moda se expandiu, e o prêt-à-porter (pronto para vestir) começou a dominar.'
                },
                {
                    name: 'Século XXI',
                    descricao: 'Sustentabilidade e Tecnologia: A costura enfrenta novos desafios com o foco em práticas sustentáveis e a introdução de tecnologia, como impressão 3D e tecidos inteligentes. O DIY (faça você mesmo) também se tornou uma tendência, com muitas pessoas aprendendo a costurar por prazer e necessidade.'
                },
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
    padding: 1em 0;
    color: var(--title-color-card);
    margin-top: -1em;
}
.container-card{
    position: relative;
    margin-top: -5em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px 2em;
    gap: 40px 60px;
}

.card-box{
    position: relative;
    width: 350px;
    height: 290px;
    border: 2px var(--color-border-card) solid;
    border-radius: 20px;
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

.content h1{
    font-size: 1.7em;
    color: var(--info-card);
}

.content p{
    font-size: 1em;
    color: var(--info-p-card);
    margin-top: -.9em;
}

</style>