<template>
  <div>
    <div class="w-full h-full">
      <div class="container mx-auto px-6">
        <div class="sm:shadow rounded bg-white">
          <div
            v-for="(user, index) in users"
            :key="index"
            @click="showDetails(user)"
            class="
              cursor-pointer
              xl:w-full
              w-11/12
              mx-auto
              flex flex-wrap
              items-center
              justify-between
              px-8
              mb-2
              xl:mb-0
              lg:mb-0
              border-b border-gray-300
              hover:bg-primary-100
            "
          >
            <div class="xl:w-1/4 py-5">
              <div class="flex items-center">
                <div class="w-12 h-12 rounded">
                  <img
                    :src="user.picture.thumbnail"
                    alt=""
                    class="
                      h-full
                      w-full
                      object-cover
                      rounded
                      overflow-hidden
                      shadow
                    "
                  />
                </div>
                <p class="text-lg pl-2 font-normal">
                  {{ `${user.name.first} ${user.name.last}` }}
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 py-5">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-mail"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#173F4F"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
                <p class="text-sm pl-2 font-normal">
                  {{ `Email: ${user.email}` }}
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 py-5">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-calendar-event"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#173F4F"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <line x1="16" y1="3" x2="16" y2="7" />
                  <line x1="8" y1="3" x2="8" y2="7" />
                  <line x1="4" y1="11" x2="20" y2="11" />
                  <rect x="8" y="15" width="2" height="2" />
                </svg>
                <p class="text-sm pl-2 font-normal">
                  {{ `Age: ${user.dob.age}` }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    showDetails(user) {
      console.log(user);
    },
  },
};
</script>