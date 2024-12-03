<template>
    <div class="card">
      <img :src="`/imatges/${destination.image}`" :alt="destination.name" />
      <h2>{{ destination.name }}</h2>
      <p>{{ destination.description }}</p>
      <router-link :to="'/destination/' + destination.id + '/' + destination.slug">
        Ver más
      </router-link>
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
  