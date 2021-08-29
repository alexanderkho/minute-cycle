<template>
  <v-card class="my-3 bike-card" elevation="10">
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <img
            class="bike-thumbnail"
            :src="require('../assets/' + bike.image)"
            :alt="bike.model"
          />
        </v-col>
        <v-col>
          <v-card-title>
            <router-link :to="bikeDetailUrl">
              {{ bike.model }}
            </router-link>
          </v-card-title>
          <v-card-subtitle class="py-0">
            Manufacturer: {{ bike.manufacturer }}
          </v-card-subtitle>
          <v-container>
            <v-row class="mt-2">
              <v-col cols="8"></v-col>
              <v-col>
                <v-btn @click="showDetail = !showDetail" icon>
                  <v-icon>{{
                    showDetail ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-expand-transition>
        <div v-show="showDetail">
          <v-card-text>
            {{ bike.description }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "BikeCard",
  props: {
    bike: Object
  },
  data() {
    return {
      showDetail: false
    };
  },
  computed: {
    bikeDetailUrl() {
      return "/bikes/" + this.bike.model.split(" ").join("-");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bike-thumbnail {
  max-width: 100%;
}

.v-card__text {
  word-break: break-word;
  hyphens: auto;
}
</style>
