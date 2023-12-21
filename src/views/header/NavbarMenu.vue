<template>
  <main>
    <div>
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#3c5a96"
        text-color="#fff"
        active-text-color="#ffd200"
        @select="handleSelect"
      >
        <el-menu-item index="1"><router-link to="">Нүүр</router-link></el-menu-item>
        <el-menu-item index="7"><router-link to="/about">Бидний тухай</router-link></el-menu-item>
        <el-menu-item index="8"><router-link to="/portabout">Боомтын тухай</router-link></el-menu-item>
        <el-menu-item index="9">Баяр-Очир </el-menu-item>
        <el-submenu index="2">
          <template v-slot:title>Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-submenu index="2-4">
            <template v-slot:title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-menu-item index="4">быөйыбө</el-menu-item>
        <el-menu-item index="5">ыбөыйбай</el-menu-item>
        <el-menu-item index="6">монгол</el-menu-item>
      </el-menu>
    </div>
  </main>
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
