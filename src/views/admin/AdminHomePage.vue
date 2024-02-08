<template>
  <main>
    <div class="operatorNavbar">
      <div>
        <el-row>
          <el-button @click="logout" type="success">Гарах</el-button>
        </el-row>
      </div>
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="хэрэглэгч бүртгэх">
          <createUser />
        </el-tab-pane>
        <el-tab-pane label="Нийтэлсэн мэдээ харах">
          <InformationView />
        </el-tab-pane>
        <el-tab-pane label="Мэдээ оруулах">
          <InformationAddView />
        </el-tab-pane>
        <el-tab-pane label="Даргын мэндчилгээ оруулах">
          <AboutView />
        </el-tab-pane>
        <el-tab-pane label="Боомт бүртгэх">
          <BorderPortInfoAdd />
        </el-tab-pane>
        <el-tab-pane label="Боомт устгах">
          <BorderPortDelete />
        </el-tab-pane>
        <el-tab-pane label="цагийн хуваарь оруулах">
          <PortTimeTable />
        </el-tab-pane>
        <el-tab-pane label="үндсэн цагийн хуваарь устгах">
          <BoomtTsagHuwUstgah />
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
        <el-tab-pane label="Цагийн хуваарийн өөрчлөлт оруулах">
          <BoomtNemeltTsagOruulah />
        </el-tab-pane>
        <el-tab-pane label="Цагийн хуваарийн өөрчлөлтийг устгах">
          <BoomtiinTsagiinOorchloltUstgah />
        </el-tab-pane>
      </el-tabs>
    </div>
  </main>
</template>
<script>
import createUser from './CreateUser.vue';
import BaiguullagiinTaniltsuulgaAdd from '../InformationAdd/baiguullagiinTaniltsuulgaAdd.vue';
import BaiguullagiinTuuh from '../InformationAdd/BaiguullagiinTuuhOruulah.vue';
import BaiguullagiinButets from '../InformationAdd/BaiguullagiinButetsOruulah.vue';
import InformationAddView from '../InformationAdd/InformationAddView.vue';
import InformationView from '../InformationAdd/InformationView.vue';
import AboutView from "../about/AboutPortView.vue";
import BorderPortInfoAdd from '../portAdminstrator/BorderPortsInfoAdd.vue';
import PortTimeTable from '../homePages/PortTimeTable.vue';
import BoomtNemeltTsagOruulah from '../InformationAdd/BoomtNemeltTsagOruulah.vue';
import BorderPortDelete from '../portAdminstrator/BorderPortDelete.vue';
import BoomtTsagHuwUstgah from '../InformationAdd/BoomtTsagHuwUstgah.vue';
import BoomtiinTsagiinOorchloltUstgah from '../InformationAdd/BoomtiinTsagiinOorchloltUstgah.vue';

export default {
  components: {
    createUser,
    InformationAddView,
    InformationView,
    AboutView,
    BorderPortInfoAdd,
    PortTimeTable,
    BaiguullagiinButets,
    BaiguullagiinTuuh,
    BaiguullagiinTaniltsuulgaAdd,
    BoomtNemeltTsagOruulah,
    BorderPortDelete,
    BoomtTsagHuwUstgah,
    BoomtiinTsagiinOorchloltUstgah
  },
  data() {
    return {
      tabPosition: 'left',
    };
  },
  mounted() {
    this.myCurrent();
  },
  methods: {
    logout() {
      console.log("object");
      window.localStorage.clear();
      this.$router.push({ path: "/" });
    },
    myCurrent() {
      try {
        if (!sessionStorage.getItem("token")) {
          this.$router.push({ path: "/" });
        }
      } catch (error) {
        console.log("алдаа гарлаа. ", error);
      }
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
