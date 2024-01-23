<template>
  <main>
    <div class="borderPort-big">

      <div class="borderPortAllInfo">
        <div>
          <div class="title">
            <p>Монгол улсын хилийн боомтууд</p>
          </div>
          <!-- <table border="1">
            <tr>
              <th colspan="2">Хилийн боомт</th>
              <th>Монгол-Орос</th>
              <th>Монгол-Хятад</th>
              <th>Агаарын боомт</th>
              <th>Нийт</th>
            </tr>
            <tr>
              <td rowspan="4">Төрөл</td>
              <td>Агаарын замын</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>6</td>

            </tr>
            <tr>
              <td>Төмөр замын</td>
              <td>2</td>
              <td>4</td>
              <td></td>
              <td>6</td>
            </tr>
            <tr>
              <td>Авто замын</td>
              <td>14</td>
              <td>13</td>
              <td></td>
              <td>27</td>
            </tr>
            <tr>
              <td>Нийт</td>
              <td>19</td>
              <td>19</td>
              <td>1</td>
              <td>39</td>
            </tr>
            <tr>
              <td rowspan="3">Зэрэглэл</td>
              <td>Олон улсын</td>
              <td>4</td>
              <td>2</td>
              <td></td>
              <td>6</td>
            </tr>
            <tr>
              <td>Хоёр талын</td>
              <td>12</td>
              <td>15</td>
              <td></td>
              <td>27</td>
            </tr>
            <tr>
              <td>Нийт</td>
              <td>16</td>
              <td>17</td>
              <td></td>
              <td>33</td>
            </tr>
            <tr>
              <td rowspan="4">Ажиллах горим</td>
              <td>Байнга</td>
              <td>13</td>
              <td>17</td>
              <td></td>
              <td>30</td>
            </tr>
            <tr>
              <td>Түр</td>
              <td>1</td>
              <td></td>
              <td></td>
              <td>1</td>
            </tr>
            <tr>
              <td>Дамжин өнгөрөх</td>
              <td>2</td>
              <td></td>
              <td></td>
              <td>2</td>
            </tr>
            <tr>
              <td>Нийт</td>
              <td>16</td>
              <td>17</td>
              <td></td>
              <td>33</td>
            </tr>

          </table> -->
      </div>
        <div class="pointer-hover" v-for="(value, index) in sortedBorderPortInfo" :key="index">
          <div>
                <div class="OneBorderPort" @click="portClick(value._id)">
                  <div class="image-container">
                    <el-image
                        class="info-image"
                        :src="`http://localhost:8000/${value.portImage2}`"
                      >
                    </el-image>
                  </div>

                  <div class="borderPort-desc">
                      <p> <b>{{ value.name }}</b></p>
                      <p> <b>Байгуулагдсан он:</b> {{ value.ognoo }}</p>
                      <p> <b>Газар нутгийн байршил:</b> {{ value.desc }}</p>
                      <!-- <p> * {{ value.borderKm }}</p> -->
                      <!-- <p> * {{ value.sumiinTovKm }}</p> -->
                      <!-- <p> * {{ value.clanKm }}</p> -->
                      <!-- <p> * {{ value.cityKm }}</p> -->
                      <!-- <p> * {{ value.desc1 }}</p> -->
                      <!-- <p> * {{ value.desc2 }}</p> -->
                      <!-- <p> * {{ value.desc3 }}</p> -->
                      <p> <b>Хиллэдэг улс:</b> {{ value.region }}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div>
        <el-drawer
        title="I am the title"
        :visible.sync="drawer"
        :size="900"
        :with-header="false">
        <br>
        <span class="title">{{ portInfo.name }}ын дэлгэрэнгүй мэдээлэл</span>
        <div class="port-image-info">
        <p>{{ portInfo.name }}ын зураг</p>
        </div>
        <div class="image-view">
              <el-image
                  :src="`http://localhost:8000/${portInfo.portImage1}`"
                >
              </el-image>
        </div>
        <div class="image-view">
              <el-image
                  :src="`http://localhost:8000/${portInfo.portImage2}`"
                >
              </el-image>
          </div>

            <div class="border-info-text is-size-5">
              <div class="">
                <p><b> Боомтын нэр:</b> {{ portInfo.name }}</p>
              </div>
              <p><b>Байгуулагдсан он:</b> {{ portInfo.ognoo }}</p>
              <p> <b>Газар нутгийн байршил:</b> {{ portInfo.desc }}</p>
              <div class="boomtiin-zai">
                <p><b>-</b> {{ portInfo.borderKm }}</p>
                <p><b>-</b> {{ portInfo.sumiinTovKm }}</p>
                <p><b>-</b> {{ portInfo.clanKm }}</p>
                <p><b>-</b> {{ portInfo.cityKm }}</p>
              </div>

              <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ portInfo.desc1 }}</p> <br>
              <p>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ portInfo.desc2 }}</p>
              <!-- <p> - {{ portInfo.desc3 }}</p> -->
          </div>
          <div class="text-footer">
            <p>хилийн боомтын захиргаа</p>
          </div>

      </el-drawer>
      </div>
    </div>
  </main>
</template>
<script>
import { post } from '@/utils/request';

export default{

  data(){
    return{
      borderPortInfo: [],
      drawer: false,
      portInfo: {},
      tableData: [{
        id: 'Төрөл',
        amount1: '3',
        amount2: '3.2',
        amount3: 10
      }, {
        id: 'Зэрэглэл',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: 'Ажиллах горим',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      },
      {
        id: '12987125',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      },
      {
        id: '12987125',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      },
      {
        id: '12987125',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      },{
        id: '12987125',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987125',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987125',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      },  {
        id: '12987126',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }]
    }
  },
  async mounted() {
    try {
      const res = await post('/borderPortView');
      // console.log("res =>", res.data.data);
      this.borderPortInfo = res.data.data;
    } catch (error) {
      console.error("Error fetching border port data:", error);
    }
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    sortedBorderPortInfo() {
      return this.borderPortInfo.slice().sort((a, b) => {
        // Assuming 'region' can only be "ОХУ" or "БНХАУ"
        const regionOrder = { "ОХУ": 2, "БНХАУ": 1 };

        const regionA = a.region.toUpperCase(); // Convert to uppercase for case-insensitive comparison
        const regionB = b.region.toUpperCase();

        return regionOrder[regionA] - regionOrder[regionB];
      });
    },
  },
  methods:{
    portClick(value){
      console.log("Id =>", value);
      this.drawer = true;
      this.borderPortInfo.forEach(element => {
        if(element._id === value){
          this.portInfo = element;
          console.log("element =>", element);
        }
      });
    },
  },

}
</script>
<style scoped>
.borderPort-desc{
  /* border: 1px solid blue; */
  padding: 1% 0 1% 1%;
}
.table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    border: 1px solid #cac9c9;

    padding: 8px;
    text-align: center;
  }
  tr:hover {
    background-color: #dadada; /* Change the background color on hover */
    cursor: pointer;
  }
.port-image-info{
  text-align: left;
  /* border: 2px solid red; */
  font-size: 1.5rem;
  width: 55%;
  margin: 2% 0;
}
.text-footer{
  margin-bottom: 5%;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;
}
.boomtiin-zai{
  /* border: 1px solid red; */
  margin: 2% 0 2% 7%;
}
.border-info-text{
  /* border: 1px solid blue; */
  width: 60%;
  text-align: left;
  margin-bottom: 5%;
}
.image-view{
  border: 2px solid rgb(0, 0, 0);
  width: 40%;
  margin: 2%;
}
.info-image{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 150px;
  padding: 1.8%;
}

.pointer-hover {
  cursor: default;
  /* transition: cursor 0.3s, box-shadow 0.3s; */
  /* box-shadow: 0 0 0 transparent;  */

  &:hover {
    cursor: pointer;
    /* box-shadow: 0 0 10px 2px red;  */
  }
}
.image-container {

  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 200px;
  height: 150px; */
}
.borderPort-big{
  text-align: -webkit-center;
}
.OneBorderPort {
  border: 1px solid rgb(66, 110, 255);
  border-radius: 5px;
  background-color: azure;
  display: flex;
  text-align: left;
  margin: 1.5%;
  overflow: hidden;
  position: relative;
  transition: background-color 0.3s ease-in-out; /* Add a smooth transition effect */
  transition: transform 0.3s ease-in-out;
  &:hover {
    /* background-color: rgb(216, 216, 216); */
    transform: scale(1.005);
    border: 1px solid black;
    background: linear-gradient(to right, rgb(117, 157, 252), rgb(179, 184, 184));
    color: aliceblue  ;
  }
}


.borderPortAllInfo{
  border: 1px solid rgb(58, 58, 58);
  background-color: rgb(237, 247, 255);
  width: 80%;
  padding: 1%;
}
</style>
