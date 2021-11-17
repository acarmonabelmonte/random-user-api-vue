<template>
  <button @click="logoutUser">Logout</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LogoutButton",
  methods: {
    ...mapActions({
      logout: "users/logout",
    }),
    logoutUser() {
      this.logout();
      this.$router.push("/");
    },
  },
};
</script>