<template>
  <div>
    <div>
      <div>
        asdf
        <TravelMap class="travel-map" />
      </div>
      <div class="MeMaps">
        <l-map style="height: 450px" :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="markerLatLng"></l-marker>
        </l-map>
      </div>

    </div>
  </div>
</template>
<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import TravelMap from "./GoogleMaps/TravelMap.vue";


export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    TravelMap,
  },

  data() {
    return {
      map: null,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 5.499999999,
      center: [46.98362458028422, 103.78496581395437],
      markerLatLng: [47.92101883891807, 106.90835256720116],
    };
  },
};
</script>
<style scoped>
.travel-map {
  height: 600px;
  border: 1px solid blue;
}
</style>
