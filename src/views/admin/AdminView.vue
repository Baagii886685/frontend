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
        const response = await post('/login1', {
          username: 'admin1',
          firstName: 'baagii',
          lastName: 'admin',
          birthday: '1900-08-16',
          phoneNumber: 88668566,
          email: 'info@bpa.gov.mn',
          password: 'admin',
        });
        console.log('Login Response:', response);
        // Handle the response as needed
      } catch (error) {
        // Handle errors
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
