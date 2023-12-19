<template>
  <div class="headerLogo">
    <div class="logoName">
      <img src="../../../public/Logo.png" />
      <p>ХИЛИЙН БООМТЫН ЗАХИРГАА</p>
    </div>
    <div>
      <div>
        <el-row>
          <el-button type="primary" @click="login">Нэвтрэх</el-button>
        </el-row>
      </div>
      <p><i class="el-icon-phone"></i>Утас: 262611</p>
      <p><i class="el-icon-Email"></i> Info@bpa.gov.mn</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {},
  methods: {
    login() {
      console.log('object');
    },
  },
};
</script>

<style scoped>
.logoName {
  display: flex;
}

.logoName > p {
  font-size: x-large;
}

.headerLogo img {
  /* width: 4%; */
  height: 75px;
  margin-right: 11px;
}

.headerLogo {
  display: flex;
  justify-content: space-evenly;

  /* border: 2px solid rgb(125 125 219); */
}
</style>
