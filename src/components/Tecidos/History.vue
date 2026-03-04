<template> 
  <section class="infos-section">
    <div class="title">
      <h1>História dos tecidos</h1>
    </div>

    <div class="container-card">  
      <div class="card-box"
           v-for="(item, index) in listaHistoria"
           :key="index" 
           data-aos="fade-down-right">
           
        <div class="content">
          <h1>{{ item.title }}</h1>
          <p>{{ item.description }}</p>
        </div>     
      </div>      
    </div>      
  </section>
</template>

<script>
export default {
  name: 'History',
  data() {
    return {
      // Renomeado para listaHistoria para clareza
      listaHistoria: [
        {
          title: 'Antiguidade: O Nascimento das Fibras Naturais',
          description: 'Nesta fase, o tecido era a conexão direta com a terra. O linho no Egito trazia pureza espiritual, a seda na China era um segredo imperial e a lã na Europa era a base da economia. O tecido era funcional, mas já separava quem tinha poder de quem não tinha.'
        },
        {
          title: 'Idade Média e Renascimento: O Tecido como Brasão',
          description: 'A tecelagem se torna uma arte refinada e cara. Surgem o veludo e o brocado. As cores e texturas funcionavam como um código visual: apenas a nobreza podia usar certos tons e tecidos luxuosos. A roupa passa a ser a "moldura" da posição social.'
        },
        {
          title: 'Revolução Industrial: A Democratização do Fio',
          description: 'A invenção do tear mecânico tira o tecido das mãos artesanais e o leva para as máquinas. O algodão se torna a fibra global. Pela primeira vez na história, o tecido é produzido em massa, tornando as roupas mais baratas e acessíveis, mas mudando drasticamente as relações de trabalho.'
        },
        {
          title: 'Século XX: A Revolução do Laboratório',
          description: 'O homem para de depender apenas da natureza. Com a criação do Nylon, Poliéster e Lycra, os tecidos ganham elasticidade, durabilidade e praticidade. A moda se torna rápida, descartável e tecnológica, acompanhando o ritmo acelerado da vida moderna.'
        },
        {
          title: 'Atualidade: A Consciência Sustentável',
          description: 'O foco volta-se para o impacto ambiental. A indústria busca o equilíbrio: tecidos inteligentes (que interagem com o corpo) versus fibras biodegradáveis (que não poluem o planeta). A "Identidade Tecida" hoje é definida pela ética e pela inovação circular.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.title h1 {
  text-align: center;
  font-size: 2.3em;
  color: var(--color-tecido);
  border-radius: 20px;
  border-top: 1px solid var(--border-title-tecido);
  padding: 1em;
  margin: 2em 12em;
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
    font-size: 1.3em;
    color: var(--info-card);
}

.content p{
    font-size: 1em;
    color: var(--info-p-card);
    margin-top: -.9em;
}


</style>