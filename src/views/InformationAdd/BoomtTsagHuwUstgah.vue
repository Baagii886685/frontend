<template>
  <main>
    <div>
      <p>Боомтын үндсэн цагийн хуваарь устгана.</p>
      <p>{{ borderPortName.name }}</p>
    </div>
    <div class="borderPort" v-for="value in borderPortName" :key="value._id">
      <el-button @click="portClick(value.name, value._id)" type="info" plain style="margin-left: 20px;">
        {{ value.name }}ыг устгах
      </el-button>
    </div>

    <el-dialog title="Устгах" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div v-if="mainTsagiinHuvaari != null">
        <span>{{ portName }}ын үндсэн цагын хуваарь</span>
        <div v-for="value in mainTsagiinHuvaari" :key="value._id">
          <div v-if="!value.date || value.date > 0">
            <div v-if="value.startTime">
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
                    <span>цагийн хуваарь: {{ value.additionStartTime }} - {{ value.additionEndTime }}</span>
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
                  <span class="oorchlogdoh-honog">{{ value.date }} Хоногын дараа цагийн хуваарьт өөрчлөлт
                    орно.</span>
                </div>
              </div>
              <div v-else-if="!value.portWork && value.portDescription && !value.startTime && !value.endTime">
                <span><b>{{ value.portDescription }}</b></span>
              </div>
              <div v-else>
                <p><b>цагийн хуваарь оруулаагүй байна</b></p>
              </div>
            </div>
            <div v-if="value.date">
              <el-row>
                <el-button @click="decsView" type="success" plain>{{ btnDescription }}</el-button>
              </el-row>
            </div>


          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Хаах</el-button>
            <el-button type="primary" @click="borderPortTimeDelete(value._id)">Устгах</el-button>
          </span>
        </div>
      </div>
      <div v-else>
        <span>{{ portName }} цагийн хуваарь оруулаагүй байна.</span>
      </div>
    </el-dialog>
    <div>
    </div>
  </main>
</template>
<script>
import { post } from '@/utils/request';

export default {
  data() {
    return {
      portName: null,
      dialogVisible: false,
      visible: false,
      mainTsagiinHuvaari: [],
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
        console.error("алдаа гарлаа:", error);
      }
    },
    async borderPortTimeDelete(id) {
      console.log("Id =>", id);
      // console.log("portName =>", localStorage.getItem("portName"));
      try {
        const res = await post('/borderPortTimeDelete', { myId: id });
        // console.log("res =>", res.data);
        // this.dialogVisible = false;
        if (res.data.success === true) {
          this.dialogVisible = false;
          this.$message({
            message: res.data.data,
            type: 'success'
          });
        }
      } catch (error) {
        console.error("алдаа гарлаа:", error);
      }

    },
    handleClose(done) {
      this.$confirm('Үйлдэл хийхгүй хаах гэж байна. Боомт устгахгүйг анхаарна уу')
        .then(() => {
          done();
        })
        .catch((error) => {
          console.log("алдаа", error);
        });
    },
    async portClick(value, id) {
      this.portName = value;
      this.dialogVisible = true;
      try {
        const myData = {
          portId: id,
        }
        const res = await post('/portMainTimeView', myData);
        if (res.data.success === true) {
          this.mainTsagiinHuvaari = res.data.data;
        }
      } catch (error) {
        console.error("алдаа гарлаа:", error);
      }
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


