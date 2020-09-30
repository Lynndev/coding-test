<template>
  <v-app>
    <snack-bar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SnackBar from "@/components/notification/SnackBar";

export default {
  components: {
    SnackBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
