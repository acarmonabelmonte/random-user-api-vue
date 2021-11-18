<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    currentUser() {
      return this.$store.state.users.currentUser;
    },
  },
};
</script>

