<template>
  <div class="GoogleMaps">
    <div class="mapMongolia">
      <div class="myMaps">
        <l-map style="height: 450px" :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="markerLatLng"></l-marker>
        </l-map>
      </div>
      <div class="myName">
        <info-news-view />
      </div>
    </div>
    <div>
      <p>lorem</p>
    </div>
  </div>
</template>
<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import InfoNewsView from './InfoNewsView.vue';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    InfoNewsView,
  },
  data() {
    return {
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
.myMaps {
  width: 50%;
  border: 8px solid rgb(0 0 0);
}

.mapMongolia {
  display: flex;
  width: 100%;
  border: 3px solid green;
}

.myName {
  width: 50%;
  border: 2px solid rgb(255 26 159);
}

.GoogleMaps {
  /* height: 600px; */
  border: 2px solid rgb(167 0 28);
}
</style>
