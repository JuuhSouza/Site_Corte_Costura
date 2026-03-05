<template>
    <div class="infos-tear">
        <div class="info">
            <h1> História do tear</h1>
            <p>A história do tear é uma das jornadas tecnológicas mais fascinantes da humanidade. Ela começa com galhos de árvores e termina em processadores de computador.Linha do tempo dessa evolução que "teceu" o mundo moderno:</p>

            <h2>O Tear de Pesos (Antiguidade: A Origem Vertical)</h2>
            <p>Os primeiros teares eram estruturas simples de madeira encostadas em paredes. Como funcionava: Os fios verticais (urdume) eram amarrados em pedras ou pesos de argila para ficarem esticados. O tecelão passava o fio horizontal (trama) manualmente, cruzando um a um. O Legado: Foi assim que civilizações como a Grega e a Egípcia criaram as túnicas e mantos que vemos em estátuas e pinturas antigas.</p>
            
            <h2>O Tear de Pedal (Idade Média: A Libertação das Mãos)</h2>
            <p>Por volta do século X, surgiu uma inovação que mudou o ritmo da produção: o uso dos pés.A Mudança: Com pedais, o tecelão conseguia abrir o espaço entre os fios (chamado de "cala") mecanicamente.O Impacto: Isso permitiu que as mãos ficassem livres apenas para passar a lançadeira (o estojo que leva o fio da trama). A produção ficou muito mais rápida, e o tecido deixou de ser um item de luxo extremo para se tornar um produto comercial.</p>
          
        </div>
    </div>
</template>

<script>
export default {
        name: 'Tear'
    }
</script>

<style scoped>

.infos-tear{
    padding: 2em;
    margin: 3em;
    text-align: center;
    align-items: center;
}

.info h1{
    margin-top: -1em;
    font-size: 2.5em;
    color: var(--color-title-tear);
}

.info p{
    font-size: 1.1em;
    color: var(--p-tear);
}
</style>