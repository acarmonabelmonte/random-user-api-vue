<template>
  <div class="random-users">
    <h1>RandomUsers</h1>
    <p>{{ currentUser }}</p>
    <br />
    <p>{{ randomUsers }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RandomUsers",
  methods: {
    ...mapActions({
      getRandomUsers: "users/getRandomUsers",
    }),
  },
  mounted() {
    this.getRandomUsers();
  },
  computed: {
    randomUsers() {
      return this.$store.state.users.randomUsers;
    },
    currentUser() {
      return this.$store.state.users.currentUser;
    },
  },
};
</script>