<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="`/destination/${destination.id}`"
    >
      {{ destination.name }}
    </router-link>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import data from '@/assets/data.json';

const destinations = ref(data.destinations);
</script>
