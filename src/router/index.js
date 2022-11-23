import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../components/Home.vue'
import AllProducts from '../components/AllProducts.vue'
import Details from '../components/Details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'Home',
      component:HomeVue
    },
    {
      path:'/AllProducts',
      name:'AllProducts',
      component:AllProducts
    },
    {
      path:'/Details/:id',
      name:'Details',
      component:Details
    },
    {
      path:'/AllProducts/Details/:id',
      name:'Details',
      component:Details
    },

    
  ]
})

export default router
