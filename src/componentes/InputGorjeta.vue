<template>
  <div>
    <h2>Bill</h2>
    <input v-model="ValoraPagar" />
  </div>
</template>

<script>
export default {
  name: "InputGorjeta",
  data() {
    return {
      ValoraPagar: "",
    };
  },
};
</script>

<style>
</style>