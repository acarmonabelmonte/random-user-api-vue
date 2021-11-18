<template>
  <div class="container px-6 mx-auto">
    <div
      class="
        rounded
        shadow
        relative
        bg-white
        z-10
        -mt-8
        sm:-mt-12 sm:mb-8
        lg:w-1/3
        h-24
      "
    >
      <ul class="mx-5 py-2">
        <li><span class="font-bold">Email: </span>{{ userData.email }}</li>
        <li>
          <span class="font-bold">Phone Number: </span
          >{{ userData.phone_number }}
        </li>
        <li>
          <span class="font-bold">Postal Code: </span>{{ userData.postal_code }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
};
</script>