import Vue from "vue";
import Vuex from "vuex";
import { bikes } from "../data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bikes: [...bikes],
    filters: [
      {
        name: "manufacturer",
        display: "Manufacturer",
        options: ["Ducati", "BMW", "Indian"],
        current: []
      },
      {
        name: "color",
        display: "Color",
        options: ["Black", "Red", "Yellow"],
        current: []
      }
    ]
  },
  mutations: {
    updateFilters(state, payload) {
      state.filters = payload;
    },
    updateBikes(state, payload) {
      state.bikes = payload;
    }
  },
  actions: {
    filterBikes({ state, commit }) {
      //eslint-disable-next-line
      const { filters } = state;
      const newBikes = bikes;
      //TODO: logic to filter bikes based on fitlers
      commit("updateFilters", newBikes);
    }
  },
  modules: {}
});
