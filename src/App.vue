<script setup>
import HelloWorld from './components/HelloWorld.vue'; 
// import NavbarMenu from './components/headerFooter/NavbarMenu.vue';
import FooterView from './views/footer/FooterView.vue';
</script>

<template>
  <div id="app">
    <header>
      <div>
        <HelloWorld />

        <nav>
          <!-- <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/about1">About1</router-link> -->
          <!-- <NavbarMenu /> -->

        </nav>
      </div>
    </header>

    <router-view />
    <div>
      <FooterView />
    </div>
  </div>
</template>

<style scoped>
.test {
  border: 3px solid red;
}
</style>
