<!-- eslint-disable vue/attributes-order -->
<template>
  <main>
    <div class="scroll-container big-medeelel">
      <div class="content" ref="scrollContent">
        <div class="medeeMedeelel">
          <h3>Онцлох мэдээ</h3>
        </div>
        <div class="demo-image">
          <div class="block" v-for="value in sortedItems" :key="value._id" @click="infoClick(value._id)">
            <div class="info">
              <div>
                <el-image
                  class="info-image"
                  style="width: 150px; height: 170px"
                  :src="`http://localhost:8000/${value.photoOne}`"
                  :fit="fit"
                ></el-image>
              </div>
              <div class="title-date">
                <div class="news-title">
                  <h2>{{ value.infoTitle }}</h2>
                </div>
                <div>
                  <div class="news-date">
                    <span><b>Нийтэлсэн огноо:</b> {{ $moment(value.createdAt).format('YYYY-MM-DD, HH:MM') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <el-dialog :title="newsInfo.infoTitle" :visible.sync="centerDialogVisible" width="35%" center>
          <div class="my-news">
            <p class="is-size-5">{{ newsInfo.textOne }}</p>
            <el-image
              class="info-image"
              style="width: 100%"
              :src="`http://localhost:8000/${newsInfo.photoOne}`"
              :fit="fit"
            ></el-image>
            <p class="is-size-5">{{ newsInfo.textTwo }}</p>
            <el-image
              class="info-image"
              style="width: 100%"
              :src="`http://localhost:8000/${newsInfo.photoTwo}`"
              :fit="fit"
            ></el-image>
            <p class="is-size-5">{{ newsInfo.textThree }}</p>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="centerDialogVisible = false">Хаах</el-button>
            <!-- <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button> -->
          </span>
        </el-dialog>
      </div>
    </div>
  </main>
</template>

<script>
import { post } from '@/utils/request';

export default {
  data() {
    return {
      message: 'Hello, Vue!',
      dialogTitle: null,
      news: [],
      centerDialogVisible: false,
      fit: null,
      newsInfo: [],
    };
  },
  async mounted() {
    const res = await post('/infoNews');
    this.news = res.data.data;
    console.log('res.data.data =>', res.data.data);
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    sortedItems() {
      // Sort the items based on the 'createdAt' property
      return this.news.slice().sort((a, b) => {
        // Assuming 'createdAt' is a string in ISO format
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    },
  },
  methods: {
    infoClick(id) {
      this.centerDialogVisible = true;
      this.news.forEach((element) => {
        if (element._id === id) {
          this.newsInfo = element;
        }
      });
    },
  },
};
</script>
<style scoped>
.big-medeelel {
  background-color: #e9e6e6;
  border-radius: 5px;
  margin: 2%;
}
.medeeMedeelel {
  /* border: 1px solid red; */
  border-left: #3c5a96 5px solid;
  border-radius: 3px;
  text-align: left;
  margin-left: 5%;
}
.medeeMedeelel > h3 {
  margin-left: 1%;
}
.info-image {
  border-radius: 5px;
  border: 1px solid rgb(0, 0, 0);
}
.title-date {
  /* border: 2px solid rgb(0, 0, 0); */
  width: 100%;
}
.my-news {
  word-break: break-word;
  /* white-space: normal; */
}
.news-date {
  /* border: 2px solid green; */
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  /* background-color: #333; */
  /* color: #fff; */
  padding: 10px;
  text-align: right;
}

.news-title {
  /* border: 2px solid red; */
  font-size: 0.7rem;
  text-align: left;
  margin: 2%;
}

.info {
  display: flex;
  position: relative; /* Add relative positioning to .info */
}

.block {
  border: 1px solid yellow;
  background-color: #ccc;
  position: relative;
  border-radius: 5px;
  /* display: inline-block; */
  padding: 10px;
  /* background-color: #3498db; */
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s, opacity 0.3s;
}
.block:hover {
  transform: scale(1.03);
  opacity: 0.9;
}
.scroll-container {
  max-height: 522px;
  overflow-y: auto;
  border: 1px solid #ccc;
}

.content {
  padding: 10px;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
