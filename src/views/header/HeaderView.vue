<template>
  <div class="headerLogo">
    <div class="logoName">
      <img src="../../../public/Logo.png" />
      <div class="adminstratorName">
        <p>ХИЛИЙН БООМТЫН ЗАХИРГАА</p>
      </div>
    </div>
<div class="big-address-background">
  <div class="my-address">
        <p><i class="el-icon-phone-outline"></i> Утас: 262611</p>
        <p><i class="el-icon-s-promotion"></i> Info@bpa.gov.mn</p>
      </div>
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
.big-address-background{
  height: 100%;
  place-self: center;
}

.adminstratorName{
  font-size: 1.5rem;
  font-weight: 10;
  place-self: center;
}
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
  padding: 0.3%;
  /* border: 2px solid rgb(125 125 219); */
}
</style>
