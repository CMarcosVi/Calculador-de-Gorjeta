<template>
  <div>
    <h1>Porcentagem da Gorjeta</h1>
    <input
      id="porcentagemInput"
      v-model="porcentagemInput"
      type="number"
      placeholder="0"
      min="0"
      max="50"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      porcentagemInput: 0,
    };
  },
  watch: {
    porcentagemInput(newValue) {
      this.$store.commit("setPorcentagemValue", newValue);
    },
  },
};
</script>