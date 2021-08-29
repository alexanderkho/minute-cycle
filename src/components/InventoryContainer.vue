<template>
  <v-container fluid>
    <bike-card v-for="(bike, i) in bikes" :bike="bike" :key="i"></bike-card>
    <div class="text-h6" v-show="bikes.length === 0">
      No bikes found, please try another filter
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import BikeCard from "./BikeCard.vue";

export default {
  components: { BikeCard },
  name: "InventoryContainer",
  computed: {
    ...mapState(["bikes"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
