<template>
  <div class="container">
    <h1 class="title">Destinations</h1>
    <div class="destinations">
      <div v-for="(destination, index) in destinations" :key="index" class="destination-card">
        <router-link :to="`/destination/${destination.id}`">
          <img :src="`/images/${destination.image}`" :alt="destination.name" class="destination-image" />
          <div class="destination-info">
            <h2>{{ destination.name }}</h2>
            <p>{{ destination.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      destinations: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch("/src/assets/data.json");
      const data = await response.json();
      this.destinations = data.destinations;
    } catch (error) {
      console.error("Error loading data:", error);
    }
  },
};
</script>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
  text-align: center;
}

.title {
  color: var(--color-heading);
  font-size: 2rem;
  margin-bottom: 2rem;
}

.destinations {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.destination-card {
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
}

.destination-card:hover {
  transform: scale(1.05);
}

.destination-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.destination-info {
  padding: 1rem;
}

h2 {
  color: var(--color-heading);
  font-size: 1.5rem;
  margin: 0 0 1rem;
}

p {
  color: var(--color-text);
  font-size: 1rem;
  line-height: 1.5;
}
</style>
