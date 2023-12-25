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
        <el-menu-item index="1"><router-link to="/">Нүүр</router-link></el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">Бидний тухай</template>
          <el-menu-item index="2-1"><router-link to="/about">Байгууллагын тухай</router-link></el-menu-item>
          <el-menu-item index="2-2"><router-link to="/">Байгууллагын бүтэц</router-link></el-menu-item>
        </el-submenu>
        <el-menu-item index="9"><router-link to="/portabout">Боомтын тухай</router-link></el-menu-item>
      </el-menu>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
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
