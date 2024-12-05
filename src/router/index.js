import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DestinationDetail from '@/views/DestinationDetail.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/destination/:id',
    name: 'destination-detail',
    component: DestinationDetail,
    props: true, // Esto pasa los parámetros como props al componente
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
