<template>
    <footer>
    <ul class="social_icon">
        <li><a href="https://github.com/JuuhSouza"><i class="fa-brands fa-github"></i></a></li>
        <li><a href="https://www.linkedin.com/in/j%C3%BAlia-souza-0577572b2/"><i class="fa-brands fa-linkedin"></i></a></li>
       <!--  <li><a href="https://www.instagram.com/juliasouzak4/"> <i class="fa-brands fa-instagram"></i></a></li> -->
    </ul>
    <p>Desenvolvido por Júlia Souza | &copy; 2026</p>
    
   </footer>
</template>

<script>
    export default {
        name : "Footer",
    }
</script>

<style scoped>
footer {
    position: relative;
    width: 93%;
    background: var(--background-color-footer);
    min-height: 100px;
    padding: 20px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2em;
}

footer .social_icon{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 1px 0;
}

footer .social_icon li{
    list-style: none;
}

footer .social_icon li a {
    font-size: 2em;
    color: var(--text-color-footer);
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;
}

footer .social_icon li a:hover {
    transform: translateY(-10px);
}

footer p {
    color: var(--color-text);
    text-align: center;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 1em;
}

</style>