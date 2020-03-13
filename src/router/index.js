import Vue from 'vue'
import VueRouter from 'vue-router'
import cinema from './cinema'
import mine from './mine'
import movie from './movie'

Vue.use(VueRouter)

const routes = [
  cinema,
  mine,
  movie,
  {
    path: '/*',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})

export default router
