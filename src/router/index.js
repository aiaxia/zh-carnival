import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Photo from '../views/Photo.vue'
import Hongbao from '../views/Hongbao.vue'
import Imgmerge from '../views/imgmerge.vue'

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/photo',
    name: '拍照',
    component: Photo
  },
  {
    path: '/hongbao',
    name: '红包',
    component: Hongbao
  },
  {
    path: '/imgmerge',
    name: '照片合并',
    component: Imgmerge
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
