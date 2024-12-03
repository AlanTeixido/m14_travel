<template>
    <div class="experience-show">
      <h2>{{ experience.name }}</h2>
      <img :src="`/imatges/${experience.image}`" :alt="experience.name" />
      <p>{{ experience.description }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import data from '@/assets/data.json'; 
  
  const route = useRoute();
  const experience = ref(null);
  
  onMounted(() => {
    const destination = data.destinations.find(
      (dest) => dest.id === parseInt(route.params.id)
    ); 
    if (destination) {
      experience.value = destination.experiences.find(
        (exp) => exp.slug === route.params.experienceSlug
      ); 
    }
  });
  </script>
  