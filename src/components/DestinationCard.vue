<template>
    <div class="container">
        <h2>{{ destination.name }}</h2>
        <img :src="`/imatges/${destination.image}`" :alt="destination.name" />
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    destination: {
      type: Object,
      required: true,
    },
  });
  </script>
  