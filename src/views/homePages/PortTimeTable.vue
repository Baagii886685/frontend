<template>
  <main>
    <div>
      <p>Боомтын үндсэн цагийн хуваарь оруулах хуудсанд тавтай морилно уу.</p>
      <p>{{ borderPortName.name }}</p>
    </div>
    <div class="borderPort" v-for="value in borderPortName" :key="value._id">
      <el-button @click="portClick(value.name, value._id)" type="success" plain style="margin-left: 20px;">
        {{ value.name }}
      </el-button>
    </div>
    <div>

      <el-drawer title="I am the title" :visible.sync="drawer" :width="70" :size="900" :with-header="false">
        <span class="is-size-4 garchig">{{ name }}ын цагийн хуваарь оруулах гэж байна</span>
        <div>
          <el-checkbox v-model="portWork">Боомт ажилдаггүй бол намайг сонгоорой.</el-checkbox>
        </div>
        <div v-if="!portWork">
          <div>
            <div>
              <p>Эхлэх болон хаах цаг тохируулна уу</p>
            </div>
            <el-time-select placeholder="Эхлэх цаг" v-model="startTime"
              :picker-options="{ start: '05:00', step: '00:30', end: '23:00' }">
            </el-time-select>
            <el-time-select placeholder="Дуусах цаг" v-model="endTime"
              :picker-options="{ start: '05:00', step: '00:30', end: '23:59', minTime: startTime }">
            </el-time-select>
          </div>

          <div>
            <el-checkbox v-model="checked">Цайны цаггүй бол намайг сонго</el-checkbox>
            <div v-if="!checked">
              <div>
                <p>Цайны цаг оруулна уу?</p>
              </div>
              <el-time-select placeholder="Эхлэх цаг" v-model="tsaiStartTime" :picker-options="{
                start: '05:00',
                step: '00:30',
                end: '23:00'
              }">
              </el-time-select>
              <el-time-select placeholder="Дуусах цаг" v-model="tsaiEndTime" :picker-options="{
                start: '05:00',
                step: '00:30',
                end: '23:59',
                minTime: tsaiStartTime
              }">
              </el-time-select>
            </div>
            <div>
              <p>Тайлбар оруулна уу</p>
            </div>
            <el-input type="textarea" :rows="2" placeholder="Тайлбар оруулна уу" v-model="portDescription">
            </el-input>

            <el-checkbox v-model="amraltiinOdor">Амралтын өдөргүй бол намайг сонго</el-checkbox>
            <div v-if="!amraltiinOdor">
              <div>
                <p>Амрах гараг сонгоно уу</p>
              </div>
              <div>
                <el-checkbox-group v-model="checkboxGroup1">
                  <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox-button>
                </el-checkbox-group>
              </div>
            </div>
          </div>
          <div class="block">
            <span class="demonstration">Хүчинтэй хугацаа</span>
            <el-date-picker v-model="value1" type="daterange" range-separator="To" start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
          </div>
          <el-row>

            <el-button @click="additionalTransportation = !additionalTransportation" type="warning">Нэмэлт тээврийн цаг
              оруулах</el-button>

          </el-row>
          <div v-if="additionalTransportation">
            <div>
              <div>
                <p>Бусад тээврийн нэр оруулна</p>
                <el-input placeholder="Тээврийн нэрийг оруулна уу" v-model="additionName"></el-input>
              </div>
              <div>
                <div>
                  <p>Эхлэх болон хаах цаг тохируулна уу</p>
                </div>
                <el-time-select placeholder="Эхлэх цаг" v-model="additionStartTime" :picker-options="{
                  start: '05:00',
                  step: '00:30',
                  end: '23:00'
                }">
                </el-time-select>
                <el-time-select placeholder="Дуусах цаг" v-model="additionEndTime" :picker-options="{
                  start: '05:00', step: '00:30', end: '23:59', minTime: additionStartTime
                }">
                </el-time-select>
              </div>
              <el-checkbox v-model="nemeltChecked">Цайны цаггүй бол намайг сонго</el-checkbox>
              <div v-if="!nemeltChecked">
                <div>
                  <p>Цайны цаг оруулна уу?</p>
                </div>
                <el-time-select placeholder="Эхлэх цаг" v-model="additionTsaiStartTime"
                  :picker-options="{ start: '05:00', step: '00:30', end: '23:00' }">
                </el-time-select>
                <el-time-select placeholder="Дуусах цаг" v-model="additionTsaiEndTime" :picker-options="{
                  start: '05:00', step: '00:30', end: '23:59',
                  minTime: additionTsaiStartTime
                }">
                </el-time-select>
              </div>
              <div>

                <el-checkbox v-model="nemeltAmraltiinOdor">Амралтын өдөргүй бол намайг сонго</el-checkbox>
                <div v-if="!nemeltAmraltiinOdor">
                  <el-checkbox-group v-model="checkboxGroup2">
                    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox-button>
                  </el-checkbox-group>
                </div>
              </div>
            </div>

          </div>
          <div v-else>
            <p>бусад экспорт импорт байхгүй Oh no 😢</p>
          </div>
        </div>
        <el-row>
          <el-button type="primary" plain>Цэвэрлэх</el-button>
          <el-button type="success" @click="borderPortTimeSave" :plain="true">Хадгалах</el-button>
        </el-row>

      </el-drawer>

    </div>
  </main>
</template>
<script>
import { post } from '@/utils/request';


export default {
  data() {
    return {
      portWork: false,
      checked: false,
      nemeltChecked: false,
      nemeltAmraltiinOdor: false,
      amraltiinOdor: false,
      startTime: null,
      endTime: null,
      tsaiStartTime: null,
      tsaiEndTime: null,
      portDescription: null,
      value1: null,
      additionName: null,
      additionStartTime: null,
      additionEndTime: null,
      additionTsaiStartTime: null,
      additionTsaiEndTime: null,
      checkboxGroup1: ['Бямба', 'Ням'],
      checkboxGroup2: ['Ням'],
      additionalTransportation: false,
      cities: ['Даваа', 'Мягмар', 'Лхавга', 'Пүрэв', 'Баасан', 'Бямба', 'Ням'],
      name: null,
      drawer: false,
      borderPortName: null,
    }
  },
  async mounted() {
    this.allTime();
  },
  methods: {
    async allTime() {
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
    async borderPortTimeSave() {
      try {
        if (localStorage.getItem("userId") && localStorage.getItem("portId")) {
          const myData = {
            additionalTransportation: this.additionalTransportation,
            portWork: this.portWork,
            checked: this.checked,
            nemeltChecked: this.nemeltChecked,
            nemeltAmraltiinOdor: this.nemeltAmraltiinOdor,
            amraltiinOdor: this.amraltiinOdor,
            startTime: this.startTime,
            endTime: this.endTime,
            tsaiStartTime: this.tsaiStartTime,
            tsaiEndTime: this.tsaiEndTime,
            portDescription: this.portDescription,
            value1: this.value1,
            additionName: this.additionName,
            additionStartTime: this.additionStartTime,
            additionEndTime: this.additionEndTime,
            additionTsaiStartTime: this.additionTsaiStartTime,
            additionTsaiEndTime: this.additionTsaiEndTime,
            checkboxGroup1: this.checkboxGroup1,
            checkboxGroup2: this.checkboxGroup2,
            createUserId: localStorage.getItem("userId"),
            borderPortId: localStorage.getItem("portId"),
          }
          const res = await post('/portTimeSave', myData);
          // console.log("object=>", res.data.data);
          if (res.data.data.success === true) {
            this.$message({
              message: 'цагийн хуваарь амжилттай хадгаллаа.',
              type: 'Амжилттай'
            });
          }
        } else {
          this.$notify.error({
            title: 'Алдаа',
            message: 'Цагийн хуваарь бүрэн оруулна уу'
          });
        }


      } catch {
        alert("Алдаа гарлаа ахин оролдоно уу")
      }
    },
    portClick(value, id) {
      this.name = value;
      console.log("value=> ", value, "id => ", id);
      localStorage.setItem("portId", id);
      this.drawer = true
    }
  }
}
</script>
<style scoped>
.garchig {
  margin: 5%;
}

.el-switch {
  /* width: 30%; */
  margin: 3%;
}

.borderPort {
  margin: 1%;
}
</style>


