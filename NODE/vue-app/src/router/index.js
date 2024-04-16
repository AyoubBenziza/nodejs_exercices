import { createWebHistory, createRouter} from 'vue-router'


import Index from '@/components/Index.vue'
import Create from '@/components/Create.vue'
import Edit from '@/components/Edit.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/create', component: Create },
  { path: '/edit/:id', component: Edit },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router