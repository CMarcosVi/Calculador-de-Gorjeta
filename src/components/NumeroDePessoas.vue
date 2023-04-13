<template>
  <div class="blocos">
    <div>
      <h1 class="tituloBlocos">Numero de pessoas</h1>
    </div>
    <input
      id="numeroPessoasInput"
      v-model="numeroPessoasInput"
      type="number"
      placeholder="0"
      min="0"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      numeroPessoasInput: 0,
    };
  },
  watch: {
    numeroPessoasInput(newValue) {
      this.$store.commit("setNumeroPessoas", newValue);
    },
  },
};
</script>