<template>
  <main>
    <div class="operatorNavbar">
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
        <el-radio-button label="top">дээд</el-radio-button>
        <!-- <el-radio-button label="right">Зүүн</el-radio-button>
        <el-radio-button label="bottom">доод</el-radio-button> -->
        <el-radio-button label="left">Баруун</el-radio-button>
      </el-radio-group>

      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="Нийтэлсэн мэдээ харах"><InformationView /></el-tab-pane>
        <el-tab-pane label="Мэдээ оруулах"><InformationAddView /></el-tab-pane>
        <el-tab-pane label="Даргын мэндчилгээ оруулах"><AboutView /></el-tab-pane>
        <el-tab-pane label="Боомтын мэдээлэл оруулах">Дөрөв</el-tab-pane>
        <el-tab-pane label="Байгуулагын тухай мэдээлэл оруулах">Дөрөв</el-tab-pane>
        <el-tab-pane label="Байгуулагын тухай мэдээлэл оруулах">Дөрөв</el-tab-pane>
        <el-tab-pane label="Байгуулагын тухай мэдээлэл оруулах">Дөрөв</el-tab-pane>
      </el-tabs>
    </div>
  </main>
</template>
<script>

import InformationAddView from '../InformationAdd/InformationAddView.vue';
import InformationView from '../InformationAdd/InformationView.vue';
import AboutView from "../about/AboutPortView.vue";

export default {
  components: {
    InformationAddView,
    InformationView,
    AboutView,
  },
  data() {
    return {
      tabPosition: 'left',
    };
  },
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
