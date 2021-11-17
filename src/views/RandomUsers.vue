<template>
  <div class="random-users">
    <h1>RandomUsers</h1>
    <p>{{ currentUser }}</p>
    <br />
    <ul>
      <li v-for="(randomUser, index) in randomUsers" :key="index">
        {{ `${randomUser.name.first} ${randomUser.name.last}` }}
      </li>
    </ul>
    <RandomUserModal />
  </div>
</template>

<script>
import RandomUserModal from "@/components/Overlay/RandomUserModal.vue";
import { mapActions } from "vuex";
export default {
  name: "RandomUsers",
  components: {
    RandomUserModal,
  },
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