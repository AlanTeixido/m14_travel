<template>
  <router-link :to="`/destination/${destination.id}`" class="card">
    <h2>{{ destination.name }}</h2>
    <img :src="`/imatges/${destination.image}`" :alt="destination.name" />
  </router-link>
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
