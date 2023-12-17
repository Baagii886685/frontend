<template>
  <div class="headerLogo">
    <div class="logoName">
      <img src="../../../public/Logo.png" />
      <p>ХИЛИЙН БООМТЫН ЗАХИРГАА</p>
    </div>
    <div>
      <p><i class="el-icon-phone"></i>Утас: 262611</p>
      <p><i class="el-icon-Email"></i> Info@bpa.gov.mn</p>
    </div>
  </div>
</template>

<script setup></script>

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
