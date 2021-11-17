<template>
  <div id="app">
    <LogoutButton v-if="currentUser" />
    <router-view />
  </div>
</template>

<script>
import LogoutButton from "@/components/UI/LogoutButton.vue";
export default {
  name: "Home",
  components: {
    LogoutButton,
  },
  computed: {
    currentUser() {
      return this.$store.state.users.currentUser;
    },
  },
};
</script>

