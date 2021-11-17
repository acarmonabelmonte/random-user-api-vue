<template>
  <form class="mt-12 w-full px-2 sm:px-6" @submit.prevent="login">
    <div class="flex flex-col mt-5">
      <label for="email" class="text-lg font-semibold leading-tight"
        >Name</label
      >
      <input
        required
        v-model="user.name"
        id="name"
        name="name"
        class="
          signup-input
          focus:outline-none focus:border focus:border-indigo-700
        "
        type="text"
      />
    </div>
    <div class="flex flex-col mt-5">
      <label for="email" class="text-lg font-semibold leading-tight"
        >Email</label
      >
      <input
        required
        v-model="user.email"
        id="email"
        name="email"
        class="
          signup-input
          focus:outline-none focus:border focus:border-indigo-700
        "
        type="email"
      />
    </div>
    <div class="flex flex-col mt-5">
      <label for="email" class="text-lg font-semibold leading-tight"
        >Phone</label
      >
      <input
        required
        v-model="user.phone_number"
        id="phone"
        name="phone"
        class="
          signup-input
          focus:outline-none focus:border focus:border-indigo-700
        "
        type="tel"
      />
    </div>
    <div class="flex flex-col mt-5">
      <label for="email" class="text-lg font-semibold leading-tight"
        >Postal Code</label
      >
      <input
        required
        v-model="user.postal_code"
        id="postal_code"
        name="postal_code"
        class="
          signup-input
          focus:outline-none focus:border focus:border-indigo-700
        "
        type="text"
      />
    </div>
    <div class="flex flex-col mt-4 w-full lg:w-1/3 mb-4">
      <button type="submit" class="signup-btn">Sign Up</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        name: "Example Name",
        email: "example@email.com",
        phone_number: "666666666",
        postal_code: "66666",
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