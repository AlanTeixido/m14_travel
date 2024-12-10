<template>
    <div class="experience-details">
      <h1>{{ experience?.name }}</h1>
      <img :src="`/imatges/${experience?.image}`" :alt="experience?.name" />
      <p>{{ experience?.description }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import data from '@/assets/data.json';
  
  const route = useRoute();

  const destinationId = parseInt(route.params.id);
  const destination = data.destinations.find((dest) => dest.id === destinationId);

  const experience = computed(() => {
    return destination.experiences.find((exp) => exp.slug === route.params.experienceSlug);
  })

  </script>
  