<template>
  <v-container class="bg-grey-lighten-3">
    <v-row class="bg-gray">
      <left-rail></left-rail>
      <v-col cols="6">
        <inventory-container></inventory-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import LeftRail from "@/components/LeftRail.vue";
import InventoryContainer from "@/components/InventoryContainer.vue";

export default {
  name: "Home",
  components: {
    LeftRail,
    InventoryContainer
  }
};
</script>
