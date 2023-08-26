<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <RouterView></RouterView>
</template>

<style>
/* Agregar estilos para la vista de dispositivos pequeños */
@media (max-width: 768px) {
  .flex-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .section-small {
    width: 50%;
  }
}
</style>
