<template>
  <div class="home">
    <h1>Home Page</h1>
    <LoginForm />
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
