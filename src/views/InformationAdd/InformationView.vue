<template>
  <div>
    <div class="demo-image">
      <div v-for="value in sortedItems" :key="value._id" class="block" @click="infoClick(value._id)">
        <div class="info">
          <div>
              <!-- Your Vue component content -->
              <div class="edit-icon">
              <el-tooltip placement="top">
                <div slot="content">

                  <p>Нийтлэл засварлах</p>
                </div>
                <el-button type="primary" icon="el-icon-edit" circle @click="postEdit(value._id)"></el-button>
              </el-tooltip>
              <el-tooltip placement="top">
                <div slot="content">
                  <p>Нийтлэл устгах</p>
                </div>
                <el-button type="danger" icon="el-icon-delete" circle @click="postDelete(value._id)"></el-button>
             </el-tooltip>
              </div>
            </div>

          <div>
          <el-image
          class="info-image"
          style="width: 150px; height: 170px"
          :src="`http://localhost:8000/${value.photoOne}`"
          :fit="fit"></el-image>
        </div>
        <div class="title-date">
          <div class="news-title">
              <h2>{{ value.infoTitle }}</h2>
            </div>
            <div >
              <div class="news-date">
                  <span><b>Нийтэлсэн огноо:</b> {{ $moment(value.createdAt).format('YYYY-MM-DD, HH:MM') }}</span>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { post } from '@/utils/request';

export default{
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
  computed: {
    sortedItems() {
      return this.news.slice().sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    },
  },
  async mounted() {
    const res = await post('/infoNews');
    this.news = res.data.data;
  },
  methods: {
    async postDelete(id){
      const res = await post('/infoDelete', {myData: id});
      if (res.data.success === true) {
        this.$notify({
          title: 'Мэдэгдэл',
          message: 'Амжилттай устаглаа',
          type: 'success'
        });
      } else {
        // eslint-disable-next-line no-alert
        alert('алдаа гарлаа');
      }
    },
    postEdit(id){
      console.log(id ," tai medeeg zasah");
    },
    infoClick(id){
      this.centerDialogVisible = true;
      this.news.forEach(element => {
        if(element._id === id){
          this.newsInfo = element;
        }
      });
    },
  },
}
</script>
<style scoped>
.edit-icon{
  border: 1px solid rgb(35, 149, 255);
  display: flex;
}
.info-image{
  border-radius: 10%;
  border: 1px solid rgb(0, 0, 0);
}
.title-date {
  /* border: 2px solid rgb(0, 0, 0); */
  width: 100%;
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
  border: 1px solid rgb(0, 0, 0);
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
  transform: scale(1.01);
  opacity: 0.9;
}
.scroll-container {
  max-height: 450px;
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




