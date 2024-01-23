<template>
  <main>
    <div>
      <div class="line"></div>
      <div class="big-navbar">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo my-navbar"
          mode="horizontal"
          active-text-color="#ffd200"
          :active-style="{ borderBottom: '2px solid red' }"
          text-color="white"
          @select="handleSelect"
        >
          <router-link to="/"><el-menu-item index="1">Нүүр</el-menu-item></router-link>
          <el-submenu index="2">
            <template slot="title">Бидний тухай</template>
            <router-link to="/dargaMendchilgee"><el-menu-item index="2-1">Даргын мэндчилгээ</el-menu-item></router-link>
            <router-link to="/baiguullagiinTaniltsuulga"><el-menu-item index="2-2">Байгууллагын танилцуулга</el-menu-item></router-link>
            <router-link to="/baiguullagiinButets"><el-menu-item index="2-3">Байгууллагын бүтэц</el-menu-item></router-link>
            <router-link to="/baiguullagiinTuuh"><el-menu-item index="2-4">Байгууллагын түүх</el-menu-item></router-link>

          </el-submenu>
          <router-link to="/portabout"><el-menu-item index="3">Боомтын тухай</el-menu-item></router-link>
          <!-- <router-link to="/"><el-menu-item index="4">Хууль тогтоомж</el-menu-item></router-link> -->
            <!-- <router-link to="/"><el-menu-item index="5">Ил тод байдал</el-menu-item></router-link> -->
            <!-- <router-link to="/"><el-menu-item index="6">Холбоо барих</el-menu-item></router-link> -->
        </el-menu>
      </div>
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

<style scoped>
.el-menu .active-menu-item:hover {
  background-color: #7eb6ff;
  border-bottom: 2px solid green;
}

 /* .el-menu .el-menu-item:hover {
  background-color: #7eb6ff;
  border-bottom: 2px solid green;
} */
  .my-navbar ::v-deep .el-submenu.is-opened > .el-submenu__title {
    background-color: #3c5a96 !important;
  }

  .el-menu .el-menu-item,
  .el-submenu__title {
    background-color: rgb(60 90 150 / 100%);
  }

.big-navbar {
  text-align: -webkit-center;
  background-color: #3c5a96;
}

.my-navbar {
  display: flex;
  width: 80%;
  background-color: #3c5a96;
}

.router-link:hover {
  background-color: #51963c; /* Replace with your actual color */
}
</style>
