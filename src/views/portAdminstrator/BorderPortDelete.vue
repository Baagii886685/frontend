<template>
  <main>
    <div>
      <p>Боомтын үндсэн цагийн хуваарь оруулах хуудсанд тавтай морилно уу.</p>
      <p>{{ borderPortName.name }}</p>
    </div>
    <div class="borderPort" v-for="value in borderPortName" :key="value._id">
      <el-button @click="portClick(value.name, value._id)" type="danger" plain style="margin-left: 20px;">
        {{ value.name }}ыг устгах
      </el-button>
    </div>

    <el-dialog title="Устгах" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>{{ portName }}ыг устгахдаа итгэлтэй байна уу</span>
      <p>Цагийн хуваарь, нэмэлт цагийн өөрчлөлтүүд бүгд устахыг анхаарна уу</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Хаах</el-button>
        <el-button type="primary" @click="borderPortDelete">Устгах</el-button>
      </span>
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
      // name: null,
      // drawer: false,
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
    async borderPortDelete() {
      // console.log("portId =>", localStorage.getItem("portId"));
      // console.log("portName =>", localStorage.getItem("portName"));
      try {
        const myData = {
          portId: localStorage.getItem("portId"),
          portName: localStorage.getItem("portName"),
        }
        const res = await post('/borderPortDelete', myData);
        // console.log("res =>", res.data.data);
        this.dialogVisible = false;
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
    portClick(value, id) {
      this.portName = value;
      this.dialogVisible = true;
      console.log("value=> ", value, "id => ", id);
      localStorage.setItem("portId", id);
      localStorage.setItem("portName", value);
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


