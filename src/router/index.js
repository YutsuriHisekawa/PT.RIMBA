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



router.beforeEach((to, from, next) => {
  // Cek keberadaan token di localStorage untuk menentukan status autentikasi
  const isAuthenticated = !!localStorage.getItem('userToken');
  
  // Jika user mencoba mengakses halaman selain 'Login' dan belum diautentikasi
  if (to.name !== 'Login' && !isAuthenticated) {
    next({ name: 'Login' });
  } 
  // Jika user sudah diautentikasi dan mencoba mengakses halaman 'Login'
  else if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'Home' });  // Misalnya Anda ingin mengalihkan ke halaman 'Home' setelah login
  } 
  else {
    next();
  }
});
export default router
