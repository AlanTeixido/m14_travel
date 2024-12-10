<template>
    <div class="experience-show">
      <h2>{{ experience.name }}</h2>
      <img :src="`/imatges/${experience.image}`" :alt="experience.name" />
      <p>{{ experience.description }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import data from '@/assets/data.json'; 
  
  const route = useRoute();
  
  const destination = data.destinations.find(
    (dest) => dest.id === parseInt(route.params.id)
  ); 

  const experience = computed(()=> {
    return destination.experiences.find((exp) => exp.slug === route.params.experienceSlug)
  })
  
  </script>
  