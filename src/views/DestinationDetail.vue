<template>
  <div class="destination-detail">
    <h1>{{ destination.name }}</h1>
    <img :src="`/imatges/${destination.image}`" :alt="destination.name" />
    <p>{{ destination.description }}</p>
    <h2>Experiencias</h2>
    <div class="experiences">
      <ExperienceCard
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :experience="experience"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import data from '@/assets/data.json'; 
import ExperienceCard from '@/components/ExperienceCard.vue';

const route = useRoute();
const destination = ref(null);

onMounted(() => {
  destination.value = data.destinations.find(
    (dest) => dest.id === parseInt(route.params.id)
  ); 
});
</script>
