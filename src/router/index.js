import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import RandomUsers from '../views/RandomUsers.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/random-users',
    name: 'RandomUsers',
    component: RandomUsers,
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Home' && !store.state.users.currentUser) next({
    name: 'Home'
  })
  if (to.name === 'Home' && store.state.users.currentUser) next({
    name: 'RandomUsers'
  })
  else next()
})

export default router