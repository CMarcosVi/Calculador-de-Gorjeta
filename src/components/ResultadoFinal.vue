<template>
  <div class="blocoValorFinal">
    <div>
      <div class="tituloDoTotal">
        <h1>Total</h1>
        <h2>/Por Pessoa</h2>
      </div>
      <p class="resultado">R${{ result }}</p>
    </div>
    <div>
      <button class="botaoDeCalcular" @click="calcular">Calcular</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "valorInput",
      "PorcentagemValue",
      "NumeroPessoas",
      "result",
    ]),
  },
  methods: {
    ...mapMutations([
      "setValorInput",
      "setPorcentagemValue",
      "setNumeroPessoas",
    ]),
    ...mapActions(["calcular"]),
  },
};
</script>
<style>
.blocoValorFinal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem;
  color: white;
}
.tituloDoTotal {
  margin: 2.5rem;
}
.botaoDeCalcular {
  border-radius: 1rem;
  border-style: none;
  padding: 0.25rem 1rem;
}
.resultado {
  text-align: center;
  margin: 1rem;
}
</style>
