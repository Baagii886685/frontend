<template>
  <main>
    <div v-for="(value, index) in news" :key="index">
      <p>Гарчиг : {{ value.infoTitle }}</p>
      <p>эхний текст: {{ value.textOne }}</p>
      <div>
        <img class="lesson-img-size" :src="`http://localhost:8000/${value.photoOne}`" />
      </div>
      <p>текст 2: {{ value.textTwo }}</p>
      <div>
        <img class="lesson-img-size" :src="`http://localhost:8000/${value.photoTwo}`" />
      </div>
      <p>текст 3 : {{ value.textThree }}</p>
    </div>
  </main>
</template>

<script>
import { post } from '@/utils/request';

export default {
  data() {
    return {
      news: [],
    };
  },
  async mounted() {
    const res = await post('/infoNews');
    this.news = res.data.data;
  },
  methods: {
    // Your component methods go here
  },
};
</script>
<style scoped></style>
