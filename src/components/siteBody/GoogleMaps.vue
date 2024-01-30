<template>
  <div>
    <div>
      <div class="is-size-4">
        <p class="my-title-fond">Монгол улсын хилийн боомтуудын байршил</p>
      </div>
      <div class="MeMaps" style="height: 500px" :zoom="zoom" :center="center">
        <l-map style="height: 498px" :zoom="zoom" :center="center" @click="testing"
          :options="{ attributionControl: false, minZoom: yourMinZoom, maxZoom: yourMaxZoom, }">
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
                  Баруун захын цэг Баян Өлгий аймгийн нутагт Монгол Алтайн нуруу 3252.0 тоот өндөрлөгөөс 3371.0 тоот
                  өндөрлөг
                </p>
              </div>
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="zuunTseg" :icon="customIcon">
            <l-popup :lat-lng="markerLatLng">
              <div>
                <h2 class="is-size-5">Монгол улсын зүүн цэг</h2>
                <p>
                  Дорнод аймгийн нутагт Модтой хамар уулын зүүн талд уулын хажуугийн 1305 тоот өндөрлөгөөс баруун өмнө
                  зүгт 190.0 м зайд 1292.5 тоот өндөрлөг дээр.
                </p>
              </div>
            </l-popup>
          </l-marker>
          <div v-for="value in myLocation" :key="value._id" @click="testing">
            <l-marker :lat-lng="value.location" :icon="customIcon" @click="testing">
              <l-popup :lat-lng="markerLatLng" class="big-comment">
                <p><b>{{ value.name }}</b></p>
                <!-- Өөрчлөгдсөн цагийн хувиарыг харуулна -->
                <div v-if="value.isValue1 && value.date <= 0 && value.myEndDate > 0">
                  <span>{{ value.borderKm }}</span>
                  <div v-if="!value.portWork && value.startTime">
                    <!-- <p>{{ value.desc1 }}</p> -->

                    <span><b>{{ value.tsagiinHuwaariTailbar }}</b></span> <br>
                    <span><b>{{ value.isPortDescription }}</b></span>
                    <div class="comment">
                      <span>Цагийн хуваарь: {{ value.isStartTime }} - {{ value.isEndTime }}</span>
                      <div v-if="!value.isChecked">
                        <span>Цайны цаг: {{ value.isTsaiStartTime }} - {{ value.isTsaiEndTime }}</span>
                      </div>
                      <div v-else>
                        <span><b>Цайны цаггүй!!!</b></span>
                      </div>
                    </div>
                    <div v-if="!value.isAmraltiinOdor">
                      <div class="boomt-amraltiin-odor comment">
                        <div>
                          <span>Амрах гараг:&nbsp; </span>
                        </div>
                        <div v-for="item in value.isCheckboxGroup1" :key="item._id">
                          <span> {{ item }},&nbsp;&nbsp; </span>
                        </div>
                      </div>
                    </div>
                    <div v-else class="comment">
                      <span><b>Амралтын өдөргүй</b></span>
                    </div>
                    <!-- Нэмэлт тээвэртэй бол -->
                    <div v-if="value.isAdditionalTransportation">
                      <p><b>{{ value.isAdditionName }}</b></p>
                      <div class="comment">
                        <span>цагийн хувиар: {{ value.isAdditionStartTime }} - {{ value.isAdditionEndTime }}</span>
                        <div v-if="!value.isNemeltChecked">
                          <span>Цайны цаг: {{ value.isAdditionTsaiStartTime }} - {{ value.isAdditionTsaiEndTime }}</span>
                        </div>
                        <div v-else>
                          <span><b>Цайны цаггүй!!!</b></span>
                        </div>
                        <div v-if="!value.isNemeltAmraltiinOdor">
                          <div class="boomt-amraltiin-odor">
                            <div>
                              <span>Амрах гараг:&nbsp; </span>
                            </div>
                            <div v-for="item in value.isCheckboxGroup2" :key="item._id">
                              <span> {{ item }},&nbsp;&nbsp; </span>
                            </div>
                          </div>
                        </div>
                        <div v-else>
                          <span><b>Амралтын өдөргүй</b></span>
                        </div>
                      </div>
                    </div>
                    <div v-if="value.isValue1">
                      <p><b>цагийн хуваарь хүчинтэй хугацаа: {{ $moment(value.isValue1[0]).format('YYYY-MM-DD') }} - {{
                        $moment(value.isValue1[1]).format('YYYY-MM-DD') }}</b></p>
                    </div>
                  </div>
                  <div v-else-if="!value.portWork && value.portDescription && !value.startTime && !value.endTime">
                    <span><b>{{ value.portDescription }}</b></span>
                  </div>
                  <div v-else>
                    <p><b>цагийн хувиар оруулаагүй байна</b></p>
                  </div>
                </div>
                <!-- цагийн хувиар хэвийн бөгөөд өөрчлөлтын цагийн болоогүй байгаа үед харагдана -->
                <div v-if="!value.date || value.date > 0">
                  <div v-if="!centerDialogVisible">
                    <span>{{ value.borderKm }}</span>
                    <div v-if="!value.portWork && value.startTime">
                      <!-- <p>{{ value.desc1 }}</p> -->
                      <span><b>{{ value.portDescription }}</b></span>
                      <div class="comment">
                        <span>Цагийн хуваарь: {{ value.startTime }} - {{ value.endTime }}</span>
                        <div v-if="!value.checked">
                          <span>Цайны цаг: {{ value.tsaiStartTime }} - {{ value.tsaiEndTime }}</span>
                        </div>
                        <div v-else>
                          <span><b>Цайны цаггүй!!!</b></span>
                        </div>
                      </div>
                      <div v-if="!value.amraltiinOdor">
                        <div class="boomt-amraltiin-odor comment">
                          <div>
                            <span>Амрах гараг:&nbsp; </span>
                          </div>
                          <div v-for="item in value.checkboxGroup1" :key="item._id">
                            <span> {{ item }},&nbsp;&nbsp; </span>
                          </div>
                        </div>
                      </div>
                      <div v-else class="comment">
                        <span><b>Амралтын өдөргүй</b></span>
                      </div>
                      <!-- Нэмэлт тээвэртэй бол -->
                      <div v-if="value.additionalTransportation">
                        <p><b>{{ value.additionName }}</b></p>
                        <div class="comment">
                          <span>цагийн хувиар: {{ value.additionStartTime }} - {{ value.additionEndTime }}</span>
                          <div v-if="!value.nemeltChecked">
                            <p>Цайны цаг: {{ value.additionTsaiStartTime }} - {{ value.additionTsaiEndTime }}</p>
                          </div>
                          <div v-else>
                            <span><b>Цайны цаггүй!!!</b></span>
                          </div>
                          <div v-if="!value.nemeltAmraltiinOdor">
                            <div class="boomt-amraltiin-odor">
                              <div>
                                <span>Амрах гараг:&nbsp; </span>
                              </div>
                              <div v-for="item in value.checkboxGroup2" :key="item._id">
                                <span> {{ item }},&nbsp;&nbsp; </span>
                              </div>
                            </div>
                          </div>
                          <div v-else>
                            <span><b>Амралтын өдөргүй</b></span>
                          </div>
                        </div>
                      </div>
                      <div v-if="value.value1">
                        <p><b>цагийн хуваарь хүчинтэй хугацаа: {{ $moment(value.value1[0]).format('YYYY-MM-DD') }} - {{
                          $moment(value.value1[1]).format('YYYY-MM-DD') }}</b></p>
                      </div>
                      <div v-if="value.date > 0">
                        <span class="oorchlogdoh-honog">{{ value.date }} Хоногын дараа цагийн хувиарт өөрчлөлт
                          орно.</span>
                      </div>
                    </div>
                    <div v-else-if="!value.portWork && value.portDescription && !value.startTime && !value.endTime">
                      <span><b>{{ value.portDescription }}</b></span>
                    </div>
                    <div v-else>
                      <p><b>цагийн хувиар оруулаагүй байна</b></p>
                    </div>
                  </div>
                  <div v-if="centerDialogVisible" :lat-lng="markerLatLng" class="big-comment">
                    <p>{{ value.tsagiinHuwaariTailbar }}</p>
                    <p>{{ value.isPortDescription }}</p>
                    <span>Цагийн хуваарь: {{ value.isStartTime }} - {{ value.isEndTime }}</span><br>
                    <span>Цайны цаг: {{ value.isTsaiStartTime }} - {{ value.isTsaiEndTime }}</span>

                    <div v-if="!value.isAmraltiinOdor && value.isCheckboxGroup1">
                      <div class="boomt-amraltiin-odor comment">
                        <div>
                          <span>Амрах гараг:&nbsp; </span>
                        </div>
                        <div v-for="item in value.isCheckboxGroup1" :key="item._id">
                          <span> {{ item }},&nbsp;&nbsp; </span>
                        </div>
                      </div>
                    </div>
                    <div v-else class="comment">
                      <span><b>Амралтын өдөргүй</b></span>
                    </div>
                    <div v-if="value.isAdditionalTransportation">
                      <p><b>{{ value.isAdditionName }}</b></p>
                      <div class="comment">
                        <span>цагийн хувиар: {{ value.isAdditionStartTime }} - {{ value.isAdditionEndTime }}</span>
                        <div v-if="!value.isNemeltChecked">
                          <span>Цайны цаг: {{ value.isAdditionTsaiStartTime }} - {{ value.isAdditionTsaiEndTime }}</span>
                        </div>
                        <div v-else>
                          <span><b>Цайны цаггүй!!!</b></span>
                        </div>
                        <div v-if="!value.isNemeltAmraltiinOdor">
                          <div class="boomt-amraltiin-odor">
                            <div>
                              <span>Амрах гараг:&nbsp; </span>
                            </div>
                            <div v-for="item in value.isCheckboxGroup2" :key="item._id">
                              <span> {{ item }},&nbsp;&nbsp; </span>
                            </div>
                          </div>

                        </div>
                        <div v-else>
                          <span><b>Амралтын өдөргүй</b></span>
                        </div>
                      </div>
                    </div>
                    <div v-if="value.isValue1">
                      <p><b>цагийн хуваарь хүчинтэй хугацаа: {{ $moment(value.isValue1[0]).format('YYYY-MM-DD') }} - {{
                        $moment(value.isValue1[1]).format('YYYY-MM-DD') }}</b></p>
                    </div>

                  </div>
                  <div v-if="value.date">
                    <el-row>
                      <el-button @click="decsView" type="success" plain>{{ btnDescription }}</el-button>
                    </el-row>
                  </div>


                </div>
                <!-- Өөрчлөгдөх цагийн хуваарь -->




              </l-popup>
            </l-marker>
          </div>
        </l-map>
      </div>
    </div>
  </div>
</template>

<script>

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
      btnDescription: 'Энд дарж үзнэ үү',
      centerDialogVisible: false,
      dateArray: [],
      myLocation: [],
      // dateToday: 0,
      myCurrentDate: new Date(),
      // markers: [L.latLng(47.412, -1.218), L.latLng(47.41322, -1.219482), L.latLng(47.414, -1.22)],
      // isHovered: false,
      // map: null,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy;  Монголын боомтуудын байршил',
      yourMaxZoom: 18,
      yourMinZoom: 5,
      zoom: 5.499999999,
      center: [46.98362458028422, 103.78496581395437],
      markerLatLng: [47.92101883891807, 106.90835256720116],
      markerLatLngs: [52.148354764942475, 98.91192171067132],
      urdTseg: [41.58183324406557, 105.00669463137],
      zuunTseg: [46.721722315578, 119.92987111842687],
      baruunTseg: [48.881315464679595, 87.7344797104239],
      customIcon: null,
      pointIcon: L.icon({
        iconUrl: './Logo.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16],
      }),
    };
  },

  async mounted() {
    try {
      const res = await post('/borderLocation');
      console.log("res.data=>", res.data);
      res.data.data.forEach(element => {
        const coordinates = element.location.split(',').map((coord) => parseFloat(coord.trim()));
        let startMyDate = null;
        let endMyDate = null;
        if (element.isValue1) {
          startMyDate = this.$moment(element.isValue1[0]).diff(this.$moment(new Date()), 'days');
          endMyDate = this.$moment(element.isValue1[1]).diff(this.$moment(new Date()), 'days');
          console.log("startMyDate=>", startMyDate);
          console.log("endMyDate=>", endMyDate);
          // if (startMyDate <= 7 && startMyDate > 0) {
          //   console.log("startMyDate 7 - s baga", startMyDate);
          //   console.log("endMyDate 7 - s baga", endMyDate);
          //   // this.dateToday = startMyDate;
          // } else {
          //   console.log("7-s ih", startMyDate);
          // }
        }
        this.myLocation.push({
          date: startMyDate,
          myEndDate: endMyDate,
          id: element._id,
          // Боомт цайны цагтай эсэх
          checked: element.checked,
          name: element.name,
          // Нэмэлт тээвэртэй эсэх
          additionalTransportation: element.additionalTransportation,
          portWork: element.portWork,
          // Боомтын эхлэх цаг
          startTime: element.startTime,
          // Боомтын хаах цаг
          endTime: element.endTime,
          // Нэмэлт тээврийн нэр нүүрс гэх мэт
          additionName: element.additionName,
          // нэмэлт тээврийн эхлэх цаг
          additionStartTime: element.additionStartTime,
          // Боомтын нэмэлт тээврийн хаах цаг
          additionEndTime: element.additionEndTime,
          // нэмэлт тээврийн цайны цаг эхлэх
          additionTsaiStartTime: element.additionTsaiStartTime,
          // боомтын амралтын өдөртэй эсэх утга true, false
          amraltiinOdor: element.amraltiinOdor,
          // Боомтын амралтын өдөр
          checkboxGroup1: element.checkboxGroup1,
          // Боомтын нэмэлт тээврийн амралтын өдөр
          checkboxGroup2: element.checkboxGroup2,
          // Нэмэлт тээвэр амралтын өдөргүй бол утга true, false
          nemeltAmraltiinOdor: element.nemeltAmraltiinOdor,
          // Нэмэлт тээвэр цайны цагтай эсэх утга true, false
          nemeltChecked: element.nemeltChecked,
          // Боомтын тайлбар оруулдаг цагийн хувиарын талаар
          portDescription: element.portDescription,
          // Боомтын цайны эхлэх цаг
          tsaiStartTime: element.tsaiStartTime,
          // Боомтын цайны дуусах цаг
          tsaiEndTime: element.tsaiEndTime,
          // Боомтын цагийн хувиар хүчинтэй хугацаа
          value1: element.value1,
          // Боомтын байршил
          location: coordinates,
          // Боомтын хилээс зай км
          borderKm: element.borderKm,
          // нэмэл тээврийн цагийн хуваарь
          additionTsaiEndTime: element.additionTsaiEndTime,
          desc1: element.desc1,
          desc2: element.desc2,
          // цагийн хуваарь өөрчлөлийн шалтгаан
          tsagiinHuwaariTailbar: element.tsagiinHuwaariTailbar,
          isAdditionalTransportation: element.isAdditionalTransportation,
          isPortWork: element.isPortWork,
          isChecked: element.isChecked,
          isNemeltChecked: element.isNemeltChecked,
          isNemeltAmraltiinOdor: element.isNemeltAmraltiinOdor,
          isAdditionTsaiEndTime: element.isAdditionTsaiEndTime,
          isStartTime: element.isStartTime,
          isEndTime: element.isEndTime,
          isTsaiStartTime: element.isTsaiStartTime,
          isTsaiEndTime: element.isTsaiEndTime,
          isPortDescription: element.isPortDescription,
          isValue1: element.isValue1,
          isAdditionName: element.isAdditionName,
          isAdditionStartTime: element.isAdditionStartTime,
          isAdditionEndTime: element.isAdditionEndTime,
          isAdditionTsaiStartTime: element.isAdditionTsaiStartTime,
          isCheckboxGroup1: element.isCheckboxGroup1,
          isCheckboxGroup2: element.isCheckboxGroup2,
        });


      });
      // this.myLocation = myObj;
      // console.log('myObj =>', this.myLocation);
    } catch (error) {
      console.error('Error fetching or processing data:', error);
    }
  },

  methods: {
    testing() {
      console.log("Дарагдсан");
      this.centerDialogVisible = false;
    },
    decsView() {
      this.centerDialogVisible = !this.centerDialogVisible;
      if (this.btnDescription === 'Буцах') {
        this.btnDescription = 'Энд дарж үзнэ үү';
      } else {
        this.btnDescription = 'Буцах';
      }
    },
    // handleMarkerHover(isHovered) {
    //   this.isMarkerHovered = isHovered;
    // },

    createCustomIcon() {
      this.customIcon = new L.Icon({
        iconUrl: './Logo.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      // L.Marker.prototype.options.icon = this.customIcon;
    },

  },
};
</script>

<style scoped>
.oorchlogdoh-honog {
  color: #ffd200;
}

.comment {
  margin-left: 5%;
}

.big-comment {
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
}

.boomt-amraltiin-odor {
  display: flex;
}

.my-title-fond {
  font-family: "Arial";
}

.MeMaps {
  border: 1px solid rgb(0, 0, 0);

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

.leaflet-marker-icon:hover+.leaflet-tooltip,
.leaflet-tooltip:hover {
  opacity: 1;
}

.travel-map {
  height: 600px;
  border: 1px solid blue;
}

.leaflet-tooltip.hovered {
  opacity: 0 !important;
  /* Use !important to override Leaflet's default styles */
}
</style>
