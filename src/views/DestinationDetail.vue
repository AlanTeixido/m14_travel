<template>
  <div v-if="destination">
    <h1>{{ destination.name }}</h1>
    <img :src="`/imatges/${destination.image}`" :alt="destination.name" />
    <p>{{ destination.description }}</p>
    <h2>Experiencias</h2>
    <ul>
      <li v-for="experience in destination.experiences" :key="experience.slug">
        <img :src="`/imatges/${experience.image}`" :alt="experience.name" />
        <h3>{{ experience.name }}</h3>
        <p>{{ experience.description }}</p>
      </li>
    </ul>
    <router-link to="/">Volver</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      destination: null
    };
  },
  mounted() {
    const slug = this.$route.params.slug;
    fetch('/src/assets/data.json') 
      .then((response) => response.json())
      .then((data) => {
        this.destination = data.destinations.find((dest) => dest.slug === slug);
      });
  }
};
</script>
