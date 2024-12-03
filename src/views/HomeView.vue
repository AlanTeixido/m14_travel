<template>
  <div>
    <h1>Destinos</h1>
    <ul>
      <li v-for="destination in destinations" :key="destination.id">
        <img :src="`/imatges/${destination.image}`" :alt="destination.name" />
        <h2>{{ destination.name }}</h2>
        <p>{{ destination.description }}</p>
        <router-link :to="'/destination/' + destination.slug">Ver más</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      destinations: []
    };
  },
  mounted() {
    fetch('/src/assets/data.json') 
      .then((response) => response.json())
      .then((data) => {
        this.destinations = data.destinations;
      });
  }
};
</script>
