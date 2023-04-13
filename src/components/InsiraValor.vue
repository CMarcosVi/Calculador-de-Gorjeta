<template>
  <div>
    <h1>Bill</h1>
    <input v-model="valorInput" type="number" placeholder="0" min="0" />
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