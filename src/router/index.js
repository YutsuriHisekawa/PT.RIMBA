import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Layouts/Login.vue';
import Dashboard from '../views/Layouts/Dashboard.vue';
import Home from '../views/Page/Home.vue';



const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
    ],
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
});



// Navigasi Guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !localStorage.getItem('userToken')) {
    // Jika rute memerlukan autentikasi dan user belum login, redirect ke halaman login
    next('/login');
  } // Jika user sudah login dan mencoba mengakses halaman login
  else if (to.path === '/login' && localStorage.getItem('userToken')) {
    next('/');  // Redirect ke halaman home atau halaman lain yang Anda inginkan
  } 
  else {
    next();
  }
});
export default router
