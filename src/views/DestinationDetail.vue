<template>
    <div>
      <h1>{{ destination.name }}</h1>
      <img :src="`/images/${destination.image}`" :alt="destination.name" class="destination-detail-image" />
      <p>{{ destination.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        destination: {},
      };
    },
    async mounted() {
      const { id } = this.$route.params;
      const response = await fetch("/src/assets/data.json");
      const data = await response.json();
      this.destination = data.destinations.find(dest => dest.id === id);
    },
  };
  </script>
  
  <style scoped>
  .destination-detail-image {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
  </style>
  