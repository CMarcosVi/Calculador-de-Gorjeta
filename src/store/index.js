import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    valorInput: 0,
    result: null,
    PorcentagemValue: 0,
    NumeroPessoas: 0
  },
  mutations: {
    setValorInput(state, valor) {
      state.valorInput = valor;
    },
    setPorcentagemValue(state, valor) {
      state.PorcentagemValue = valor;
    },
    setNumeroPessoas(state, valor) {
      state.NumeroPessoas = valor;
    },
    setResult(state, valor) {
      state.result = valor;
    }
  },
  actions: {
    calcular({ state, commit }) {
      const valor =
        ((state.valorInput / 100.0) * state.PorcentagemValue) /
        state.NumeroPessoas;
      commit("setResult", valor.toFixed(2));
    }
  },
  getters: {
    valorInput: (state) => state.valorInput,
    PorcentagemValue: (state) => state.PorcentagemValue,
    NumeroPessoas: (state) => state.NumeroPessoas,
    result: (state) => state.result
  }
});
