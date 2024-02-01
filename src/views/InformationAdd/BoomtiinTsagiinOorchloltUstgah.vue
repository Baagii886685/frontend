<template>
  <main>
    <div>
      <p>Боомтын нэмэлт өөрчлөлтийн цагийн хуваарийг устгана.</p>
      <p>{{ borderPortName.name }}</p>
    </div>
    <div class="borderPort" v-for="value in borderPortName" :key="value._id">
      <el-button @click="portClick(value.name, value._id)" type="info" plain style="margin-left: 20px;">
        {{ value.name }}ыг устгах
      </el-button>
    </div>

    <el-dialog title="Устгах" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div v-for="value in mainTsagiinHuvaari" :key="value._id">
        <div class="big-comment">
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
              <span>цагийн хуваарь: {{ value.isAdditionStartTime }} - {{ value.isAdditionEndTime }}</span>
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
              $moment(value.isValue1[1]).format('MM-DD') }}</b></p>
          </div>

        </div>

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Хаах</el-button>
          <el-button type="primary" @click="borderPortTimeDelete(value._id)">Устгах</el-button>
        </span>
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
      // console.log("Id =>", id);
      // console.log("portName =>", localStorage.getItem("portName"));
      try {
        const res = await post('/PortaddTimeDelete', { myId: id });
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
        const res = await post('/borderPortNewTimes', myData);
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


