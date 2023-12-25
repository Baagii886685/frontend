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
        // console.log('res.data.name:', res.data.name);
        // console.log('res.data.lastname:', res.data.userName);
        localStorage.setItem('firstname', res.data.name);
        localStorage.setItem('lastname', res.data.userName);
        if (res.data.userType === 'admin') {
          this.$router.push({ path: '/AdminHomePage' });
        } else {
          this.$router.push({ path: '/OperatorHomePage' });
        }
      } catch (error) {
        alert('Алдаа гарлаа');
      }
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
