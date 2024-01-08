<!-- src/components/GoogleMap.vue -->
<template>
  <div>
    <GmapMap :center="center" :zoom="zoom">
      <!-- your map content goes here -->
    </GmapMap>
  </div>
</template>

<script>

// Example in GoogleMap.vue
import { gmapApi, GmapMap } from 'vue2-google-maps';


export default {
  components:{
    GmapMap,
  },
  data() {
    return {
      center: { lat: 37.7749, lng: -122.4194 }, // San Francisco coordinates
      zoom: 10,
    };
  },
  computed: {
    gmapApi() {
      return gmapApi();
    },
  },
};
</script>
<style scoped>
.map-container {
  height: 400px; /* Set an appropriate height */
}
</style>
