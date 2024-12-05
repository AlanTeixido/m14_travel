<template>
    <div class="card">
        <h3>{{ experience.name }}</h3>
        <img :src="`/imatges/${experience.image}`" :alt="experience.name" />
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
  