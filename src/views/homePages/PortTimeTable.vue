<template>
  <main>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt odio hic atque veritatis. Cupiditate impedit, perferendis corporis hic a repudiandae. Neque quod aut a soluta odit fugit magnam explicabo non.</p>
      <p>{{ borderPortName.name }}</p>
    </div>
    <div class="borderPort" v-for="value in borderPortName" :key="value._id">
            <el-button @click="portClick(value.name, value._id)" type="primary" style="margin-left: 20px;">
              {{ value.name }}
      </el-button>
    </div>
    <div>

      <el-drawer
        title="I am the title"
        :visible.sync="drawer"
        :width="70"
        :size="900"
        :with-header="false">
        <span class="is-size-4 garchig">{{ name }}ын цагийн хуваарь оруулах гэж байна</span>
        <div v-for="(key, index) in ognoo" :key="index" class="block">
          <el-switch
            :id="key"
            v-model="key.value"
            active-text="Ажиллана"
            inactive-text="Амрана">
          </el-switch>
            <el-date-picker
              :id="key"
              v-model="key.time"
              type="datetimerange"
              start-placeholder="Эхлэх огноо"
              end-placeholder="Хаах огноо"
              :default-time="['08:00:00']">
            </el-date-picker>
          </div>
          <!-- <div class="block">
            <el-switch
            v-model="input2"
            active-text="Ажиллана"
            inactive-text="Амрана">
          </el-switch>
              <el-date-picker
                v-model="value2"
                type="datetimerange"
                start-placeholder="Эхлэх огноо"
                end-placeholder="Хаах огноо"
                :default-time="['08:00:00']">
              </el-date-picker>
          </div>
          <div class="block">
            <el-switch
            v-model="input3"
            active-text="Ажиллана"
            inactive-text="Амрана">
          </el-switch>
              <el-date-picker
                v-model="value3"
                type="datetimerange"
                start-placeholder="Эхлэх огноо"
                end-placeholder="Хаах огноо"
                :default-time="['08:00:00']">
              </el-date-picker>
          </div>
          <div class="block">
            <el-switch
            v-model="input4"
            active-text="Ажиллана"
            inactive-text="Амрана">
          </el-switch>
              <el-date-picker
                v-model="value4"
                type="datetimerange"
                start-placeholder="Эхлэх огноо"
                end-placeholder="Хаах огноо"
                :default-time="['08:00:00']">
              </el-date-picker>
          </div>
          <div class="block">
            <el-switch
            v-model="input5"
            active-text="Ажиллана"
            inactive-text="Амрана">
          </el-switch>
              <el-date-picker
                v-model="value5"
                type="datetimerange"
                start-placeholder="Эхлэх огноо"
                end-placeholder="Хаах огноо"
                :default-time="['08:00:00']">
              </el-date-picker>
          </div>
          <div class="block">
            <el-switch
            v-model="input6"
            active-text="Ажиллана"
            inactive-text="Амрана">
          </el-switch>
              <el-date-picker
                v-model="value6"
                type="datetimerange"
                start-placeholder="Эхлэх огноо"
                end-placeholder="Хаах огноо"
                :default-time="['08:00:00']">
              </el-date-picker>
          </div>
          <div class="block">
            <el-switch
            v-model="input7"
            active-text="Ажиллана"
            inactive-text="Амрана">
          </el-switch>
              <el-date-picker
                v-model="value7"
                type="datetimerange"
                start-placeholder="Эхлэх огноо"
                end-placeholder="Хаах огноо"
                :default-time="['08:00:00']">
              </el-date-picker>
          </div> -->

            <el-row>
                <el-button type="primary" plain>Цэвэрлэх</el-button>
                <el-button type="success" @click="borderPortTimeSave" :plain="true">Хадгалах</el-button>
                <el-button type="primary" @click="allTime">Бүх өдрүүдэд хуулах</el-button>
            </el-row>

      </el-drawer>

    </div>
  </main>
</template>
<script>
import { post } from '@/utils/request';


export default{
  data(){
    return{
      ognoo:[
        { value: false, time: "" },
        { value: false, time: "" },
        { value: false, time: "" },
        { value: false, time: "" },
        { value: false, time: "" },
        { value: false, time: "" },
        { value: false, time: "" },
      ],
      name: null,
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      drawer: false,
      borderPortName: null,
      input1: true,
      input2: true,
      input3: true,
      input4: true,
      input5: true,
      input6: true,
      input7: true,
    }
  },
  async mounted() {
    try {
      const myData = {
        userId: localStorage.getItem("userId"),
      }
      const res = await post('/borderPortViewNames', myData);
      // console.log("res =>", res.data.data);
      this.borderPortName = res.data.data;
    } catch (error) {
      console.error("Error fetching border port data:", error);
    }
  },
  methods:{
    allTime(){
      this.value2 = this.value1;
      this.value3 = this.value1;
      this.value4 = this.value1;
      this.value5 = this.value1;
      this.value6 = this.value1;
      this.value7 = this.value1;
    },
    async borderPortTimeSave(){
      try{
        console.log("this.ognoo", this.ognoo);
        if(this.ognoo){
          const myData = {
            portId: localStorage.getItem("portId"),
            userId: localStorage.getItem("userId"),
            ognoo: this.ognoo,
          }
          const res = await post('/portTimeSave', myData);
          // console.log("object=>", res.data.data);
          if(res.data.data.success === true){
            this.$message({
              message: 'Цагын хуваарь амжилттай хадгаллаа.',
              type: 'Амжилттай'
            });
            this.name = null;
            this.value1 = '';
            this.value2 = '';
            this.value3 = '';
            this.value4 = '';
            this.value5 = '';
            this.value6 = '';
            this.value7 = '';
            this.drawer = false;
            this.borderPortName = null;
            this.input1 = true;
            this.input2 = true;
            this.input3 = true;
            this.input4 = true;
            this.input5 = true;
            this.input6 = true;
            this.input7 = true;
          }
        }else{
          this.$notify.error({
            title: 'Алдаа',
            message: 'Цагийн хуваарь бүрэн оруулна уу'
          });
        }


      }catch{
        alert("Алдаа гарлаа ахин оролдоно уу")
      }
    },
    portClick(value, id){
      this.name = value;
      console.log("value=> ", value , "id => ", id);
      localStorage.setItem("portId", id);
      this.drawer = true
    }
  }
}
</script>
<style scoped>
.garchig{
  margin: 5%;
}
.el-switch{
  /* width: 30%; */
  margin: 3%;
}
.borderPort{
  margin: 1%;
}
</style>


