<script setup>
import HelloWorld from './components/HelloWorld.vue';
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
        </nav>
      </div>
    </header>

    <router-view />
  </div>
</template>

<style scoped></style>
