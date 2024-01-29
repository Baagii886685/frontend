<template>
  <main>
    <div class="operatorNavbar">
      <el-row>
        <el-button @click="logout" type="success">Гарах</el-button>
      </el-row>
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
        <el-radio-button label="top">дээд</el-radio-button>
        <!-- <el-radio-button label="right">Зүүн</el-radio-button>
        <el-radio-button label="bottom">доод</el-radio-button> -->
        <el-radio-button label="left">Баруун</el-radio-button>
      </el-radio-group>

      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="Нийтэлсэн мэдээ харах">
          <InformationView />
        </el-tab-pane>
        <el-tab-pane label="Мэдээ оруулах">
          <InformationAddView />
        </el-tab-pane>
        <el-tab-pane label="Даргын мэндчилгээ оруулах">
          <AboutView />
        </el-tab-pane>
        <el-tab-pane label="Боомтын мэдээлэл оруулах">
          <BorderPortInfoAdd />
        </el-tab-pane>
        <el-tab-pane label="Боомтын цагын хуваарь оруулах">
          <PortTimeTable />
        </el-tab-pane>
        <el-tab-pane label="Байгууллагын бүтэц оруулах">
          <BaiguullagiinButets />
        </el-tab-pane>
        <el-tab-pane label="Байгуулагын түүх оруулах">
          <BaiguullagiinTuuh />
        </el-tab-pane>
        <el-tab-pane label="Байгуулагын Танилцуулга оруулах">
          <BaiguullagiinTaniltsuulgaAdd />
        </el-tab-pane>
        <el-tab-pane label="Боомтын цагын хуваарь өөрчлөх">
          <BoomtNemeltTsagOruulah />
        </el-tab-pane>

      </el-tabs>
    </div>
  </main>
</template>
<script>
import BaiguullagiinTaniltsuulgaAdd from '../InformationAdd/baiguullagiinTaniltsuulgaAdd.vue';
import BaiguullagiinTuuh from '../InformationAdd/BaiguullagiinTuuhOruulah.vue';
import BaiguullagiinButets from '../InformationAdd/BaiguullagiinButetsOruulah.vue';
import InformationAddView from '../InformationAdd/InformationAddView.vue';
import InformationView from '../InformationAdd/InformationView.vue';
import AboutView from "../about/AboutPortView.vue";
import BorderPortInfoAdd from '../portAdminstrator/BorderPortsInfoAdd.vue';
import PortTimeTable from '../homePages/PortTimeTable.vue';
import BoomtNemeltTsagOruulah from '../InformationAdd/BoomtNemeltTsagOruulah.vue';
// import PortInformationAdd from "../portAdminstrator/PortInformationAdd.vue";

export default {
  components: {
    InformationAddView,
    InformationView,
    AboutView,
    BorderPortInfoAdd,
    PortTimeTable,
    BaiguullagiinButets,
    BaiguullagiinTuuh,
    BaiguullagiinTaniltsuulgaAdd,
    BoomtNemeltTsagOruulah
  },
  data() {
    return {
      tabPosition: 'left',
    };
  },
  methods: {
    logout() {
      console.log("object");
      window.localStorage.clear();
      this.$router.push({ path: "/" });
    },
  }
};
</script>
<style>
.operatorNavbar {
  border: 2px solid rgb(133 82 25);

  /* height: 30rem; */

  /* width: 20%; */
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
