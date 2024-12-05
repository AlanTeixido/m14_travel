<template>
  <div class="destination-details">
    <h1>{{ destination?.name }}</h1>
    <img :src="`/imatges/${destination?.image}`" :alt="destination?.name" />
    <p>{{ destination?.description }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import data from '@/assets/data.json';

const route = useRoute();
const destination = ref(null);

onMounted(() => {
  const id = parseInt(route.params.id); // Obtiene el ID de la URL
  destination.value = data.destinations.find((dest) => dest.id === id); // Busca el destino en el JSON
});
</script>
