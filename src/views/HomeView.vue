<template>
  <div class="home container">
    <h1>All destinations</h1>
    <div class="destinations">
      <DestinationCard
        v-for="destination in destinations"
        :key="destination.id"
        :destination="destination"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import data from "@/assets/data.json";
import DestinationCard from "@/components/DestinationCard.vue";

const destinations = computed(() => data.destinations);
</script>
