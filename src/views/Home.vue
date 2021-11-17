<template>
  <div class="bg-white h-screen text-primary-500">
    <div class="mx-auto flex lg:justify-center h-full flex-col lg:flex-row">
      <form
        v-on:submit.prevent
        class="w-full lg:w-1/2 flex justify-center bg-gray-100 dark:bg-gray-900"
      >
        <div
          class="w-full sm:w-4/6 md:w-4/6 xl:w-2/3 mb-12 sm:mb-0 px-2 sm:px-0"
        >
          <div
            class="
              sm:py-20
              px-2
              flex flex-col
              items-center
              justify-center
              mt-8
              sm:mt-0
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-32 h-32"
              id="logo"
              viewBox="0 0 20 20"
              fill="#277898"
            >
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              />
            </svg>
          </div>
          <div class="pt-10 px-2 flex flex-col items-center justify-center">
            <h3
              class="text-2xl md:text-3xl sm:text-4xl font-bold leading-tight"
            >
              RandomUser Vue
            </h3>
          </div>
          <LoginForm />
        </div>
      </form>
      <div
        class="
          w-full
          lg:w-1/2
          bg-primary-200
          px-2
          py-12
          sm:p-12
          flex flex-col
          relative
        "
      >
        <div class="flex-1 flex flex-col justify-center">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2019/08/05/15/18/people-4386248_960_720.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/Form/LoginForm.vue";
export default {
  name: "Home",
  components: {
    LoginForm,
  },
};
</script>
