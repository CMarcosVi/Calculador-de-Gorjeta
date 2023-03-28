<template>
  <div>
    <p>Select Tip %</p>
    <div>
      <div v-for="porcentagem in porcentagemApagar" :key="porcentagem.value">
        <input :type="porcentagem.type" :value="porcentagem.value" :placeholder="porcentagem.placeholder" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Porcentagem",
  data() {
    return {
      porcentagemApagar: [
        { type: "button", value: "5" },
        { type: "button", value: "10" },
        { type: "button", value: "15" },
        { type: "button", value: "25" },
        { type: "button", value: "50" },
        { type: "text", value: "", placeholder:"Custom"},
      ],
    };
  },
};
</script>

<style>
</style>