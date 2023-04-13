<template>
  <div>

    <div>
      <div>
        <h1>Total</h1>
        <h2>/Person</h2>
      </div>
      <p>R${{ result }}</p>
    </div>
    <div>
      <button @click="calcular">Calculate</button>
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