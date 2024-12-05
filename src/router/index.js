import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DestinationDetail from '@/views/DestinationDetail.vue';
import ExperienceDetail from '@/components/ExperienceDetail.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/destination/:id',
    name: 'DestinationDetail',
    component: DestinationDetail,
    props: true,
    children: [
      {
        path: ':experienceSlug',
        name: 'ExperienceDetail',
        component: ExperienceDetail,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
