<template>
  <div class="blocos">
    <h1 class="tituloBlocos">Bill</h1>
    <p>Valor em Reais</p>
    <input v-model="valorInput" type="number" min="0" />
  </div>
</template>

<script>
export default {
  computed: {
    valorInput: {
      get() {
        return this.$store.state.valorInput;
      },
      set(value) {
        this.$store.commit("setValorInput", value);
      },
    },
  },
};
</script>
<style>
.tituloBlocos{
  font-weight:300;

}
.blocos{
  margin:3rem 0rem;
}


</style>