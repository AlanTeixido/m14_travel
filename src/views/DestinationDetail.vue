<template>
  <div class="container">
    <router-link class="go-back" to="/">Go back</router-link>
    <h1>{{ destination?.name }}</h1>


    <div class="destination-details">
        <img :src="`/imatges/${destination?.image}`" :alt="destination?.name" />
        <p>{{ destination?.description }}</p>
    </div>

    <div class="experiences">
      <h2>Top experiences in {{ destination?.name }}</h2>
      <div class="cards">        
        <div
          class="card"
          v-for="experience in destination?.experiences"
          :key="experience.slug"
        >
          <router-link :to="`/destination/${destination.id}/${experience.slug}`">
            <img :src="`/imatges/${experience.image}`" :alt="experience.name" />
            <div class="card__text">{{ experience.name }}</div>
          </router-link>
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import data from '@/assets/data.json';

const route = useRoute();
const destination = ref(null);

const fetchDestination = () => {
  const id = parseInt(route.params.id);
  destination.value = data.destinations.find((dest) => dest.id === id);
};

watch(() => route.params.id, fetchDestination, { immediate: true });
</script>
