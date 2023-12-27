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
    path: '/AdminHomePage',
    name: 'AdminHomePage',
    component: () => import('@/views/admin/AdminHomePage.vue'),
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('@/components/siteBody/GoogleMaps.vue'),
  },
  {
    path: '/OperatorHomePage',
    name: 'OperatorHomePage',
    component: () => import('@/views/operator/OperatorHomePage.vue'),
  },
  {
    path: '/InformationAddView',
    name: 'InformationAddView',
    component: () => import('@/views/InformationAdd/InformationAddView.vue'),
  },
];
