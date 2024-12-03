<template>
    <div class="card">
      <img :src="`/imatges/${experience.image}`" :alt="experience.name" />
      <h3>{{ experience.name }}</h3>
      <p>{{ experience.description }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    experience: {
      type: Object,
      required: true,
    },
  });
  </script>
  