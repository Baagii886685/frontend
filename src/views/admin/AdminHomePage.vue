<template>
  <main>
    <div class="operatorNavbar">
      <div>
        <el-row>
          <el-button @click="logout" type="success">Гарах</el-button>
        </el-row>
      </div>
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="хэрэглэгч бүртгэх"><createUser /></el-tab-pane>
        <el-tab-pane label="aa">asdfasdf</el-tab-pane>
        <el-tab-pane label="bb">sdf</el-tab-pane>
        <el-tab-pane label="cc">asdfasdf</el-tab-pane>
      </el-tabs>
    </div>
  </main>
</template>
<script>
import createUser from './CreateUser.vue';
// import PortInformationAdd from "../portAdminstrator/PortInformationAdd.vue";

export default {
  components: {
    createUser,
  },
  data() {
    return {
      tabPosition: 'left',
    };
  },
  methods:{
    logout(){
      console.log("object");
      window.localStorage.clear();
      this.$router.push({ path: "/" });
    }
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
