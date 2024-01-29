<template>
  <main>
    <div>
      <el-input
        type="textarea"
        autosize
        placeholder="Нэр оруулна уу"
        v-model="text1">
      </el-input>
      <el-input
        type="number"
        autosize
        placeholder="Тогтоолын дугаар оруулна уу"
        v-model="togtoolDugaar">
      </el-input>
      <el-input
        type="textarea"
        autosize
        placeholder="Тогтоолын линк оруулна уу"
        v-model="togtoolLink">
      </el-input>
      <div style="margin: 20px 0;"></div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="Текст оруулна уу"
        v-model="text2">
      </el-input>
      <div class="save-button">
        <el-row>
        <el-button type="primary">Цэвэрлэх</el-button>
        <el-button @click="tuuhHadgalah" type="success">Хадгалах</el-button>
      </el-row>
      </div>
      <div class="davtalt-page" v-for="item in myArray" :key="item._id">
        <div>
                  <el-image
                  class="info-image"
                  style="width: 550px; height: 370px"
                  :src="`http://localhost:8000/${item.photo}`"
                  :fit="fit"></el-image>
                </div>
              <p>{{ item.text1 }}</p>
              <p>{{ item.text2 }}</p>
              <el-row>
                <el-button @click="tuuhUstgah(item._id)" type="danger">Устгах</el-button>
              </el-row>
      </div>
    </div>
  </main>
</template>
<script>
import { post } from '@/utils/request';

export default{
  components:{},
  data(){
    return{
      text1: null,
      text2: null,
      myArray: [],
      togtoolDugaar: null,
      togtoolLink: null,
    }
  },
  mounted(){
    this.haruulahMedeeDuudah();
  },
  methods:{
    async tuuhUstgah(value){
      console.log("ustgah-value=>", value);
      try{
        const res = await post('/tuuhustgah', {id: value});
        if (res.data.success === true) {
          this.$notify({
            title: 'Мэдэгдэл',
            message: 'Амжилттай устаглаа',
            type: 'success'
          });
        } else {
          alert('алдаа гарлаа');
        }
      }catch(error){
        alert("Алдаа гарлаа");
      }
    },
    async haruulahMedeeDuudah(){
      try {
        const res = await post('/tuuhHaruulah');
        if (res.data.success === true) {
          this.myArray = res.data.data;
        } else {
          alert('алдаа гарлаа');
        }
        console.log('res => ', res);
      } catch (err) {
        console.log('Алдаа гарлаа');
      }
    },
    selectFile($event) {
      this.file = $event.target.files[0];
      this.error = false;
      this.message = '';
    },
    async tuuhHadgalah(){
      try {
        const myData = {
          text1: this.text1,
          text2: this.text2,
          togtoolDugaar: this.togtoolDugaar,
          togtoolLink: this.togtoolLink,
          userId: localStorage.getItem('userId'),
        }
        const res = await post('/tuuhHadgalah', myData);
        if (res.data.success === true) {
          this.text1 = null;
          this.text2 = null;
          this.togtoolDugaar = null;
          this.togtoolLink = null;
          this.$notify({
            title: 'Мэдэгдэл',
            message: 'Амжилттай хадгалагдлаа',
            type: 'success'
          });
        } else {
          alert('алдаа гарлаа');
        }
        console.log('res => ', res);
      } catch (err) {
        console.log('Алдаа гарлаа');
      }
    }
  }

}
</script>
<style scoped>
.davtalt-page{
  border: 1px solid red;
}
.save-button{
  margin: 1%;
}
</style>
