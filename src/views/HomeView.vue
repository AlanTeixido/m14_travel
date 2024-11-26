<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
import data from '@/assets/data.json'; 

export default {
  mounted() {
    console.log('Datos cargados del JSON:', data);
  },
};
</script>
