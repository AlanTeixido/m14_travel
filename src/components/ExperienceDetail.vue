<template>
    <div class="experience-details">
      <h1>{{ experience?.name }}</h1>
      <img :src="`/imatges/${experience?.image}`" :alt="experience?.name" />
      <p>{{ experience?.description }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import data from '@/assets/data.json';
  
  const route = useRoute();
  const experience = ref(null);
  
  onMounted(() => {
    const destinationId = parseInt(route.params.id);
    const experienceSlug = route.params.experienceSlug;
  
    const destination = data.destinations.find((dest) => dest.id === destinationId);
  
    if (destination) {
      experience.value = destination.experiences.find(
        (exp) => exp.slug === experienceSlug
      );
    }
  });
  </script>
  