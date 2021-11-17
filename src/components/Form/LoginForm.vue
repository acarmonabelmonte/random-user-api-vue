<template>
  <form @submit.prevent="login">
    <label>Name:</label><br />
    <input type="text" v-model="user.name" /><br />
    <label>Email:</label><br />
    <input type="text" v-model="user.email" /><br />
    <label>Phone Number:</label><br />
    <input type="text" v-model="user.phone_number" /><br />
    <label>Postal Code:</label><br />
    <input type="text" v-model="user.postal_code" /><br />
    <button type="submit">Save</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone_number: "",
        postal_code: "",
      },
    };
  },
  methods: {
    ...mapActions({
      loginUser: "users/login",
    }),
    login() {
      this.loginUser(this.user);
      this.$router.push("/random-users");
    },
  },
};
</script>