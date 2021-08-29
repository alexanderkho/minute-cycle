<template>
  <v-container class="bg-grey-lighten-3">
    <v-row class="bg-gray">
      <h1>{{ bike.model }}</h1>
    </v-row>
    <p>Detail Page Coming soon....</p>
    <router-link to="/">Go Back</router-link>
  </v-container>
</template>

<script>
import { bikes } from "../data";

export default {
  name: "BikeDetail",
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
      console.log("yo", bike);
      if (!bike) this.$router.push({ path: "/not-found" });
      this.bike = bike;
    }
  }
};
</script>
