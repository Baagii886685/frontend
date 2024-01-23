<template>
  <div>
    <div>
      <div class="is-size-4">
        <p class="my-title-fond">Монгол улсын хилийн боомтуудын байршил</p>
      </div>
      <div class="MeMaps" style="height: 500px" :zoom="zoom" :center="center">
        <l-map style="height: 498px" :zoom="zoom" :center="center">
          <l-tile-layer class="test" :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="markerLatLng" :icon="pointIcon">
            <l-popup :lat-lng="markerLatLng">
              <div>
                <h2 class="is-size-5">Хилийн боомтын захиргаа</h2>
                <p><b>Хаяг: </b>Засгийн газрын байр 12, Барилгачдын талбай-3 Улаанбаатар 15170, Монгол Улс</p>
                <!-- <a href="https://www.facebook.com/" target="_blank">asdfasd</a> -->
              </div>
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="markerLatLngs" :icon="customIcon">
            <l-popup :lat-lng="markerLatLng">
              <div>
                <h2 class="is-size-5">Монгол улсын хойд цэг</h2>
                <p>
                  Хойд захын цэг Хөвсгөл аймгийн нутагт Монгол Шарын даваа 2091,6 тоот өндөрлөг дээр
                </p>
              </div>
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="urdTseg" :icon="customIcon">
            <l-popup :lat-lng="markerLatLng">
              <div>
                <h2 class="is-size-5">Монгол улсын урд цэг</h2>
                <p>
                  Өмнөд захын цэг Өмнөговь аймгийн нутагт Орвог Гашууны Бор толгой 799.9 тоот өндөрлөг дээр.
                </p>
              </div>
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="baruunTseg" :icon="customIcon">
            <l-popup :lat-lng="markerLatLng">
              <div>
                <h2 class="is-size-5">Монгол улсын баруун цэг</h2>
                <p>
                  Баруун захын цэг Баян Өлгий аймгийн нутагт Монгол Алтайн нуруу 3252.0 тоот өндөрлөгөөс 3371.0 тоот өндөрлөг
                </p>
              </div>
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="zuunTseg" :icon="customIcon">
            <l-popup :lat-lng="markerLatLng">
              <div>
                <h2 class="is-size-5">Монгол улсын зүүн цэг</h2>
                <p>
                  Дорнод аймгийн нутагт Модтой хамар уулын зүүн талд уулын хажуугийн 1305 тоот өндөрлөгөөс баруун өмнө зүгт 190.0 м зайд 1292.5 тоот өндөрлөг дээр.
                </p>
              </div>
            </l-popup>
          </l-marker>
          <div v-for="value in myLocation" :key="value._id">
            <l-marker :lat-lng="value.location" :icon="customIcon">
              <l-popup :lat-lng="markerLatLng">
                <div>
                  <h2>{{ value.name }}</h2>
                  <p>{{ value.borderKm }}</p>
                  <p>{{ value.desc1 }}</p>
                  <div v-if="value.today">
                    <p><b>Эхлэх цаг: {{ $moment(value.today.time[0]).format('YYYY-MM-DD HH:MM') }}</b></p>
                    <p><b>Хаах цаг: {{ $moment(value.today.time[1]).format('YYYY-MM-DD HH:MM') }}</b></p>
                  </div>
                  <div v-else>

                    <p><b>цагын хувиар оруулаагүй байна</b></p>
                  </div>
                  <el-row>
                    <el-button type="success" plain>Цагийн хуваарь дэлгэрэнгүй харах</el-button>
                  </el-row>
                </div>
              </l-popup>
            </l-marker>
          </div>
        </l-map>
      </div>
    </div>
  </div>
</template>

<script>
// import { format } from 'date-fns';
// import moment from 'moment';
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import { post } from '@/utils/request';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },

  data() {
    return {

      dateArray: [],
      myLocation: [],

      myCurrentDate: new Date(),
      // markers: [L.latLng(47.412, -1.218), L.latLng(47.41322, -1.219482), L.latLng(47.414, -1.22)],
      // isHovered: false,
      // map: null,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy;  Монголын боомтуудын байршил',
      zoom: 5.499999999,
      center: [46.98362458028422, 103.78496581395437],
      markerLatLng: [47.92101883891807, 106.90835256720116],
      markerLatLngs: [52.148354764942475, 98.91192171067132],
      urdTseg: [41.58183324406557, 105.00669463137],
      zuunTseg: [46.721722315578, 119.92987111842687],
      baruunTseg: [48.881315464679595, 87.7344797104239],
      customIcon: null,
      pointIcon: L.icon({
        iconUrl: './Logo.png', // Update with the path to your new icon
        iconSize: [32, 32], // Update with the size of your icon
        iconAnchor: [16, 16], // Update with the anchor point of your icon
        popupAnchor: [0, -16], // Update with the anchor point for popups
      }),
    };
  },

  async mounted() {
    try {
      // this.createCustomIcon();
      // console.log("value =>", typeof this.markerLatLngs);
      const res = await post('/borderLocation');

      console.log("res.data=>", res.data);
      res.data.data.forEach((element) => {
        const coordinates = element.location.split(',').map((coord) => parseFloat(coord.trim()));



        if(element.portOgnoo){
          for(const value of element.portOgnoo){
            for(const el of value.time){
              if(this.$moment(el).format('YYYY-MM-DD') === this.$moment(new Date()).format('YYYY-MM-DD')){

                console.log("taarsan ==>!!!>", this.$moment(el).format('YYYY-MM-DD HH:MM'));

                this.myLocation.push({
                  id: element._id,
                  name: element.name,
                  location: coordinates,
                  borderKm: element.borderKm,
                  today:value,
                  desc1: element.desc1,
                  desc2: element.desc2,
                });
              }
            }
          }
        } else{
          console.log("цагын хуваарь оруулаагүй байна.");
          this.myLocation.push({
            id: element._id,
            name: element.name,
            location: coordinates,
            borderKm: element.borderKm,
            desc1: element.desc1,
            desc2: element.desc2,
          });
        }



      });
      // this.myLocation = myObj;
      // console.log('myObj =>', this.myLocation);
    } catch (error) {
      console.error('Error fetching or processing data:', error);
    }
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {

  },
  methods: {
    // handleMarkerHover(isHovered) {
    //   this.isMarkerHovered = isHovered;
    // },
    minDate(value) {
      // Convert date strings to Date objects and find the minimum
      const dateObjects = value.map((dateString) => new Date(dateString));
      return new Date(Math.min(...dateObjects)).toISOString();
    },
    maxDate(value) {
      // Convert date strings to Date objects and find the maximum
      const dateObjects = value.map((dateString) => new Date(dateString));
      return new Date(Math.max(...dateObjects)).toISOString();
    },

    createCustomIcon() {
      this.customIcon = new L.Icon({
        iconUrl: './Logo.png',
        iconSize: [32, 32], // Adjust the size based on your image
        iconAnchor: [16, 16], // Adjust the anchor point based on your image
      });

      // Use the custom icon for markers
      // L.Marker.prototype.options.icon = this.customIcon;
    },

  },
};
</script>

<style scoped>
.my-title-fond{
  font-family: "Arial";
}
.MeMaps {
  border: 1px solid black;
}
.leaflet-tooltip {
  background-color: white;
  color: black;
  border: 1px solid #ccc;
  padding: 5px;
  height: 100px;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  /* width: 500px; */
}

.leaflet-marker-icon:hover + .leaflet-tooltip,
.leaflet-tooltip:hover {
  opacity: 1;
}
.travel-map {
  height: 600px;
  border: 1px solid blue;
}
.leaflet-tooltip.hovered {
  opacity: 0 !important; /* Use !important to override Leaflet's default styles */
}
</style>
