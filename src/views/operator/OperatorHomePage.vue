<template>
  <main>
    <div class="operatorNavbar">
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
        <el-radio-button label="top">дээд</el-radio-button>
        <el-radio-button label="right">Зүүн</el-radio-button>
        <el-radio-button label="bottom">доод</el-radio-button>
        <el-radio-button label="left">Баруун</el-radio-button>
      </el-radio-group>

      <el-tabs :tab-position="tabPosition" style="height: 200px">
        <el-tab-pane label="Мэдээ оруулах"><InformationAddView /></el-tab-pane>
        <el-tab-pane label="Config">хоёр</el-tab-pane>
        <el-tab-pane label="Role">гурав</el-tab-pane>
        <el-tab-pane label="Task">Дөрөв</el-tab-pane>
      </el-tabs>
    </div>
  </main>
</template>
<script>
import InformationAddView from '../InformationAdd/InformationAddView.vue';

export default {
  components: {
    InformationAddView,
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
  border: 2px solid greenyellow;

  /* width: 20%; */
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
