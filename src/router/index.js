import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.detail',
    component: () => import('@/views/DestinationDetail.vue'),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.detail',
        component: () => import('@/components/ExperienceCard.vue'),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
