<template>
  <div>
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#074A96"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1">Нүүр</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Бидний тухай</template>
        <el-menu-item index="2-1">Байгууллагын бүтэц</el-menu-item>
        <el-menu-item index="2-2">мэдээлэл оруулна</el-menu-item>
        <el-menu-item index="2-3">цэс бичнэ</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">Задаргаатай цэс оруулна</template>
          <el-menu-item index="2-4-1">мэдээ</el-menu-item>
          <el-menu-item index="2-4-2">Мэдээ</el-menu-item>
          <el-menu-item index="2-4-3">Мэдээ</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">Боомтуудын мэдээлэл</el-menu-item>
      <el-menu-item index="4">Холбоо барих</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped></style>
