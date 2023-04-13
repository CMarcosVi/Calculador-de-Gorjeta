<template>
  <div id="app">
    <h1 class="titleProject">SPLI<br />TTER</h1>
    <div class="corpo">
      <div class="corpoInicio">
        <InsiraValor />
        <ValorPorcentagem />
        <NumeroDePessoas />
      </div>
      <ResultadoFinal />
    </div>
  </div>
</template>

<script>
import InsiraValor from "./components/InsiraValor.vue";
import NumeroDePessoas from "./components/NumeroDePessoas.vue";
import ResultadoFinal from "./components/ResultadoFinal.vue";
import ValorPorcentagem from "./components/ValorPorcentagem.vue";

export default {
  name: "App",
  components: {
    InsiraValor,
    NumeroDePessoas,
    ResultadoFinal,
    ValorPorcentagem,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Rubik", sans-serif;
}
body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(270deg, #000, #55c);
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.titleProject {
  color: #fff;
  letter-spacing: 0.5rem;
  margin: 1rem;
}
.corpo {
  display: flex;
  background-color: #fff;
  justify-content: space-around;
  align-items: center;
  border-radius: 1rem;
  padding: 0rem 2.5rem;
  box-shadow: 0px 5px 38px 0px rgba(0, 0, 0, 0.75);
}
.blocos {
  margin: 3rem 0rem;
}
@media screen and (max-width: 630px) {
  .titleProject {
    font-size: 20px;
  }
  .blocos {
    margin: 1rem;
  }
  .tituloBlocos {
    font-size: 18px;
  }
  .corpo {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
