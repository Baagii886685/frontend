<template>
  <main>
    <div class="create-form">
      <p>Ажилтан бүртгэх хууда ASDFASDF ASDF ASDF ASDF ASDFASDF ASDF ASDF ASDF с</p>
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Нэвтрэх нэр" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="Нэр" prop="firstname">
          <el-input v-model="ruleForm.firstname"></el-input>
        </el-form-item>
        <el-form-item label="Овог" prop="lastname">
          <el-input v-model="ruleForm.lastname"></el-input>
        </el-form-item>
        <!-- <div class="block">
          <span class="demonstration">Төрсөн он сар өдөр</span>
          <el-date-picker v-model="ruleForm.birthday" type="datetime" placeholder="Төрсөн он сар өдөр">
          </el-date-picker>
        </div> -->
        <div class="block">
          <span>Утасны дугаар</span>
          <el-input v-model="ruleForm.phoneNumber" type="number" placeholder="Утасны дугаар оруулна уу" clearable>
          </el-input>
        </div>
        <div class="block">
          <span>Имэйл</span>
          <el-input v-model="ruleForm.email" placeholder="email оруулна уу" clearable> </el-input>
        </div>

        <el-form-item label="Төрөл" prop="region">
          <el-select v-model="ruleForm.userType" placeholder="Түвшин сонгоно уу">
            <el-option label="Админ" value="admin"></el-option>
            <el-option label="Хэрэглэгч" value="user"></el-option>
          </el-select>
        </el-form-item>
        <div class="block">
          <span>Нууц үг</span>
          <el-input v-model="ruleForm.password" placeholder="Please input password" show-password></el-input>
        </div>
        <el-form-item>
          <el-button :plain="true" type="primary" @click="submitForm('ruleForm')">Бүртгэх</el-button>
          <el-button @click="resetForm('ruleForm')">Цэвэрлэх</el-button>
        </el-form-item>
      </el-form>
    </div>
  </main>
</template>
<script>
import { post } from '@/utils/request';

export default {
  data() {
    return {
      ruleForm: {
        username: null,
        firstname: null,
        lastname: null,
        // birthday: null,
        phoneNumber: null,
        email: null,
        userType: null,
        password: null,
      },
      rules: {
        username: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
        ],
        firstname: [{ required: true, message: 'Please select Activity zone', trigger: 'blur' }],
        lastname: [{ required: true, message: 'Please select Activity zone', trigger: 'blur' }],
        birthday: [{ required: true, message: 'Please select Activity zone', trigger: 'blur' }],
        phoneNumber: [
          { type: 'number', required: true, message: 'Please pick a date', trigger: 'blur' },
          { min: 8, max: 8, message: 'Утасны дугаарын урт 8 тэмдэгт байна', trigger: 'blur' },
        ],
        email: [{ type: 'date', required: true, message: 'Please pick a time', trigger: 'blur' }],
        userType: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],

        password: [{ required: true, message: 'Нууц үг оруулна уу', trigger: 'blur' }],
      },
    };
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const myData = {
            username: this.ruleForm.username,
            firstname: this.ruleForm.firstname,
            lastname: this.ruleForm.lastname,
            phoneNumber: this.ruleForm.phoneNumber,
            email: this.ruleForm.email,
            userType: this.ruleForm.userType,
            password: this.ruleForm.password,
          };
          const res = await post('/createuser', myData);
          if (res.data.success === true) {
            // eslint-disable-next-line indent
            this.$message({
              // eslint-disable-next-line indent
              message: 'Хэрэглэгчийг бүртгэлээ нэвтрэх нэр нууц үгээр нэвтэрнэ үү.',
              // eslint-disable-next-line indent
              type: 'Амжилттай',
            });
            this.ruleForm.username = null;
            this.ruleForm.firstname = null;
            this.ruleForm.lastname = null;
            this.ruleForm.phoneNumber = null;
            this.ruleForm.email = null;
            this.ruleForm.userType = null;
            this.ruleForm.password = null;
          }
          console.log('res=>', res.data);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
.create-form {
  border: 1px solid blue;
  margin-bottom: 10rem;
}
</style>
