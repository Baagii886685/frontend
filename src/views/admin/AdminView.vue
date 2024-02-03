<template>
  <main>
    <div>
      <div class="loginInput">
        <el-input v-model="userName" @keyup.enter.native="login" placeholder="Нэвтрэх нэр оруулна уу" clearable>
        </el-input>
        <el-input v-model="password" @keyup.enter.native="login" placeholder="Нууц үг оруулна уу"
          show-password></el-input>
        <el-row class="login-button">
          <el-button type="success" @click="login">Нэвтрэх</el-button>
        </el-row>
      </div>
    </div>
  </main>
</template>
<script>
import { post } from '@/utils/request';

export default {
  components: {},
  data() {
    return {
      userName: '',
      password: null,
    };
  },
  methods: {
    localSave(res) {
      sessionStorage.setItem('token', res.data.token)

      localStorage.setItem('userId', res.data.id);
      // localStorage.setItem('token', res.data.token);
      localStorage.setItem('firstname', res.data.name);
      localStorage.setItem('lastname', res.data.userName);
    },
    async login() {
      try {
        const res = await post('/login', {
          username: this.userName,
          password: this.password,
          // username: "admin1",
          // firstName: "users",
          // lastName:"user",
          // birthday: "2000-09-16",
          // phoneNumber: 88998899,
          // email: "test11@gmail.com",
          // password: "user",
        });
        console.log('res.data:', res.data);
        // console.log('res.data.lastname:', res.data.userName);

        if (res.data.userType === 'admin' && res.data.token && res.data.id) {
          this.$router.push({ path: '/AdminHomePage' });
          this.localSave(res);
        } else if (res.data.userType === 'user') {
          this.$router.push({ path: '/OperatorHomePage' });
          this.localSave(res);
        } else {
          this.$message.error('Нэвтрэх нэр эсвэл нууц үг буруу байна.');
        }
      } catch (error) {
        alert('Алдаа гарлаа');
      }
    },
  },
};
</script>
<style scoped>
.el-button {
  width: 100%;
  margin: 2%;

}

.el-input {
  margin: 2%;
}

.loginInput {
  width: 20%;
  margin: 10% 10% 0 30%;
  /* border: 1px solid rgb(72 255 55); */
}
</style>
