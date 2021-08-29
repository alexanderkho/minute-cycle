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
        active: null
      },
      {
        name: "color",
        display: "Color",
        options: ["Black", "Red", "Yellow"],
        active: null
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
      const { filters } = state;
      let newBikes = [...bikes];
      filters.forEach((f) => {
        if (f.active) {
          newBikes = newBikes.filter((bike) =>
            bike[f.name].toLowerCase().includes(f.active.toLowerCase())
          );
        }
      });
      commit("updateBikes", newBikes);
    },
    clearFilters({ commit, state }) {
      const newFilters = state.filters.map((f) => ({
        ...f,
        active: null
      }));
      commit("updateFilters", newFilters);
    }
  },
  modules: {}
});
