<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    // HelloWorld
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
  },
};
</script>
