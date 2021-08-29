<template>
  <v-navigation-drawer permanent>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Bike Inventory
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ resultsCount }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <div v-for="filter in filters" :key="filter.name">
      <v-list-item>
        <v-list-item-title class="text-h6">
          {{ filter.display }}
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-checkbox
          v-for="option in filter.options"
          :label="option"
          :key="option"
        ></v-checkbox>
      </v-list-item>
      <v-divider></v-divider>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LeftRail",
  computed: {
    ...mapState(["bikes", "filters"]),
    resultsCount() {
      const count = this.bikes.length;
      const label = count === 1 ? "result" : "results";
      return count + " " + label;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-rail {
  border: 1px solid gray;
  height: 100%;
}
</style>
