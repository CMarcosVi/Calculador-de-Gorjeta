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
* {
  margin: 0;
  padding: 0;
}
body {
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background: linear-gradient(270deg, #0E6251, #28B463);
}
#app{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
.corpo{
  display:flex;
  background-color:#fff;
  border-radius:1rem;
  box-shadow: 0px 5px 38px 0px rgba(0,0,0,0.75);
}
</style>
