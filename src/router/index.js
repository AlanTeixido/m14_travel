import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DestinationDetailView from '../views/DestinationDetail.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/destination/:slug',
    name: 'destination-detail',
    component: DestinationDetailView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
