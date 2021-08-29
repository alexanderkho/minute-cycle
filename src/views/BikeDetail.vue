<template>
  <v-container class="bg-grey-lighten-3">
    <v-row class="bg-gray">
      <v-col cols="4">
        <div class="text-h5">{{ bike.model }}</div>
        <img
          :src="require('../assets/' + bike.image)"
          class="bike-img"
          :alt="bike.model"
        />
      </v-col>
      <v-col>
        <bike-detail-table :bike="bike"></bike-detail-table>
      </v-col>
    </v-row>
    <router-link to="/">Go Back</router-link>
  </v-container>
</template>

<script>
import { bikes } from "../data";
import BikeDetailTable from "../components/BikeDetailTable.vue";

export default {
  name: "BikeDetail",
  components: { BikeDetailTable },
  data() {
    return {
      bike: null
    };
  },
  created() {
    this.getBike();
  },
  methods: {
    getBike() {
      const model = this.$route.params.model.split("-").join(" ");
      const bike = bikes.find((bike) => bike.model === model);
      if (!bike) this.$router.push({ path: "/not-found" });
      this.bike = bike;
    }
  }
};
</script>

<style>
.bike-img {
  max-width: 100%;
}
</style>
