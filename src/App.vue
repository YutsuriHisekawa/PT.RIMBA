<script setup>
import { ref, onMounted } from 'vue';
import sidebar from './components/sidebar.vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';
const route = useRoute();
const isLoggedIn = ref(false);
onMounted(() => {
  if (localStorage.getItem('userToken')) {
    isLoggedIn.value = true;
  }
  setTimeout(() => {
    showSpinner.value = false;
  }, 3000);
});
</script>

<template>

  <div class="">
  <sidebar v-if="route.path !== '/login'" />
      <RouterView></RouterView>
    </div>

</template>
