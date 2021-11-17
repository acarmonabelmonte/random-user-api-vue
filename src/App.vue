<template>
  <div id="app">
    <LogoutButton />
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
};
</script>

