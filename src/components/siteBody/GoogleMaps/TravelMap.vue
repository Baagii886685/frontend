<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <GoogleMapLoader
    :mapConfig="mapConfig"
    apiKey="AIzaSyBiPe-vi5d22hPsqEQnZ557KysDCF1GSpE"
  >
  // insert your google maps api key to render styled map
    <template slot-scope="{ google, map }">
      <GoogleMapMarker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      />
      <GoogleMapLine
        v-for="line in lines"
        :key="line.id"
        :path.sync="line.path"
        :google="google"
        :map="map"
      />
    </template>
  </GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from "./GoogleMapLoader.vue";
import GoogleMapMarker from "./GoogleMapMarker.vue";
import GoogleMapLine from "./GoogleMapLine.vue";

import { mapSettings } from "@/constants/mapSettings";

export default {
  components: {
    GoogleMapLoader,
    GoogleMapMarker,
    GoogleMapLine
  },

  data() {
    return {
      markers: [
        {
          id: "a",
          position: { lat: 46.98362458028422, lng: 103.78496581395437 }
        },
        {
          id: "b",
          position: { lat: 48.98362458028422, lng: 108.78496581395437 }
        },
        {
          id: "c",
          position: { lat: 50.98362458028422, lng: 103.78496581395437 }
        }
      ],
      lines: [
        {
          id: "1",
          path: [{ lat: 46.98362458028422, lng: 103.78496581395437 }, { lat: 48.98362458028422, lng: 109.78496581395437 }]
        },
        {
          id: "2",
          path: [{ lat: 50.98362458028422, lng: 103.78496581395437 }, { lat: 46.98362458028422, lng: 103.78496581395437 }]
        }
      ]
    };
  },

  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: { lat: 46.98362458028422, lng: 103.78496581395437 }
      };
    },

    mapCenter() {
      return this.markers[1].position;
    }
  }
};
</script>
