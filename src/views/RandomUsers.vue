<template>
  <div class="bg-white h-screen text-primary-500">
    <div class="mx-auto flex lg:justify-center h-full flex-col lg:flex-row">
      <div class="w-full bg-gray-100 flex flex-col relative">
        <div class="bg-gray-100 pb-10">
          <div class="bg-primary-500 pt-8 pb-16">
            <div
              class="
                container
                px-6
                mx-auto
                flex flex-col
                lg:flex-row
                items-start
                lg:items-center
                justify-between
              "
            >
              <div>
                <h4 class="text-2xl font-bold leading-tight text-white">
                  {{ currentUser.name }}
                </h4>
              </div>
              <div class="mt-6 lg:mt-0">
                <LogoutButton />
              </div>
            </div>
          </div>
          <CurrentUserData :user-data="currentUser" />
        </div>
        <div class="flex-1 flex flex-col justify-center pb-8 -mt-3 lg:-mt-36">
          <RandomUsersList :users="randomUsers" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoutButton from "@/components/UI/LogoutButton.vue";
import RandomUsersList from "@/components/Users/RandomUsersList.vue";
import CurrentUserData from "@/components/Users/CurrentUserData.vue";
import { mapActions } from "vuex";
export default {
  name: "RandomUsers",
  components: {
    LogoutButton,
    RandomUsersList,
    CurrentUserData,
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