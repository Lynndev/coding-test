<template>
  <div>
    <v-snackbar
      v-model="notifications.status"
      :right="true"
      :top="true"
      color="green lighten-2"
    >
      {{ notifications.message }}
    </v-snackbar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      show: true,
      timeout: null,
    };
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(), 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  computed: mapState("Notification", ["notifications"]),
  methods: mapActions("Notification", ["remove"]),
};
</script>

<style scoped>
.notification-container {
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 40px;
}
.notification-bar {
  margin: 1em 0 1em;
}
</style>
