<template>
  <main>
    <div>
      <div class="loginInput">
        <el-input v-model="userName" placeholder="Нэвтрэх нэр оруулна уу" clearable> </el-input>
        <el-input v-model="password" placeholder="Нууц үг оруулна уу" show-password></el-input>
        <el-row>
          <el-button type="success" @click="login">Нэвтрэх</el-button>
        </el-row>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userName: '',
      password: null,
    };
  },
  methods: {
    login() {
      console.log('object');
    },
  },
};
</script>
<style scoped>
.loginInput {
  width: 20%;
  margin: 10% 10% 0 30%;
  border: 1px solid rgb(72 255 55);
}
</style>
