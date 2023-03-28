<template>
  <main>
    <h1>SPLITTER</h1>
    <div>
      <InputGorjeta />
      <Porcentagem />
      <div>
        <h2>Number of People</h2>
        <input type="Number" placeholder="0">
      </div>
      <Final/>
    </div>
  </main>
</template>

<script>
import InputGorjeta from "./componentes/InputGorjeta.vue";
import Porcentagem from "./componentes/Porcentagem.vue";
import Final from "./componentes/ValorFinal.vue";
export default {
  name: "App",
  components: {
    InputGorjeta,
    Porcentagem,
    Final
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
