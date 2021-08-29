<template>
  <v-app>
    <v-app-bar color="indigo darken-2" app>
      <v-app-bar-title class="white--text">MinuteCycle</v-app-bar-title>
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
