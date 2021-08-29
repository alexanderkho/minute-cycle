<template>
  <v-app>
    <v-app-bar color="#5f8ee4" app>
      <v-app-bar-title>
        <router-link to="/" class="white--text text-h5">
          MinuteCycle
        </router-link>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <router-link to="/about" class="white--text">About</router-link>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
