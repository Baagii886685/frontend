export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/homePages/AboutView.vue'),
  },
  {
    path: '/portabout',
    name: 'portabout',
    component: () => import('@/views/homePages/PortAboutView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/admin/AdminView.vue'),
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('@/views/homePages/HomePage.vue'),
  },
];
