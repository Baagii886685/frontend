<template>
  <main>
    <div>
      <p>Даргын мэндчилгээ оруулах хэсэг</p>
      <div>
        <div class="file is-boxed is-primary hiddenClass">
          <div class="group">
            <label class="file-label test">
              <input ref="file" type="file" class="file-input" @change="selectFile" />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"> Зураг оруулна уу </i>
                </span>
                <span class="file-label"> энд дар... </span>
              </span>
              <span v-if="file" class="file-name">{{ file.name }} </span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="Please input"
          v-model="textarea1">
        </el-input>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="Please input"
          v-model="textarea2">
        </el-input>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="Please input"
          v-model="textarea3">
        </el-input>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="Please input"
          v-model="textarea4">
        </el-input>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="Please input"
          v-model="textarea5">
        </el-input>
        <el-input placeholder="Please input" v-model="input1"></el-input>
        <el-input placeholder="Please input" v-model="input2"></el-input>
      </div>
      <div>
        <el-row>
        <el-button type="primary" plain @click="open1" round>Цэвэрлэх</el-button>
        <el-button type="success" round @click="mendchilgeeHadgalah">Хадгалах</el-button>
      </el-row>
      </div>
      <div>
        <div class="mendchilgee-big-main">

      <div class="mendchilgee-title">
        <p class="mendchilgee-darga">Хилийн боомтын захиргааны даргын мэндчилгээ</p>
      </div>
      <div v-for="value in myArray" :key="value._id" class="mendchilgee-main">

        <div class="mendchilgee">
          <div>
            <el-image
            class="info-image"
            style="width: 550px; height: 370px"
            :src="`http://localhost:8000/${value.photo}`"
            :fit="fit"></el-image>
          </div>
          <div class="mendchilgee-text">
            <p>{{ value.textarea1 }}</p>
            <p>{{ value.textarea2 }}</p>
            <p>{{ value.textarea3 }}</p>
            <p>{{ value.textarea4 }}</p>
          </div>
        </div>

        <div class="mendchilgee-text1">
          <p>{{ value.textarea5 }}</p>
          <div class="ner">
            <div class="albanTushaal-text">
              <p>{{ value.input1 }}</p>
            </div>
            <div class="albanTushaal-text">
              <p>{{ value.input2 }}</p>
            </div>
          </div>
        </div>
        <div>
          <el-row>
            <el-button @click="mendchilgeeUstgah(value._id)" type="danger">Устгах</el-button>
          </el-row>
        </div>
      </div>
    </div>
      </div>
    </div>
  </main>
</template>
<script>
import { post } from '@/utils/request';

export default{
  data(){
    return{
      file: null,
      textarea1:  null,
      textarea2: null,
      textarea3: null,
      textarea4: null,
      textarea5: null,
      input1: null,
      input2: null,
      myArray: [],
    }
  },
  async mounted(){
    try {
      const res = await post('/dargaMendchilgee');
      // console.log("res =>", res.data.data);
      this.myArray = res.data.data;
    } catch (error) {
      console.error("Error fetching border port data:", error);
    }
  },
  methods:{
    async mendchilgeeUstgah(value){
      console.log("value=>", value);
      const res = await post('/mendchilgeeUstgah', { id: value });
      if (res.data.success === true) {
        this.$notify({
          title: 'Мэдэгдэл',
          message: 'Устгагдлаа',
          type: 'success'
        });
      } else {
        alert('алдаа гарлаа');
      }
    },
    selectFile($event) {
      this.file = $event.target.files[0];
      this.error = false;
      this.message = '';
    },
    open1(){
      this.file = null;
      this.$notify({
        title: 'Мэдэгдэл',
        message: 'Амжилттай цэвэрлэгдлээ',
        type: 'success'
      });
    },
    async mendchilgeeHadgalah(){
      try {
        const formData = new FormData();
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('textarea1', this.textarea1);
        formData.append('textarea2', this.textarea2);
        formData.append('textarea3', this.textarea3);
        formData.append('textarea4', this.textarea4);
        formData.append('textarea5', this.textarea5);
        formData.append('input1', this.input1);
        formData.append('input2', this.input2);
        formData.append('photo', this.file);
        const res = await post('/mendchilgeeHadgalah', formData);
        if (res.data.success === true) {
          this.file = null;
          this.textarea1 = null;
          this.textarea2 = null;
          this.textarea3 = null;
          this.textarea4 = null;
          this.textarea5 = null;
          this.input1 = null;
          this.input2 = null;
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
    },
  }
}
</script>
<style scoped>
.goldoo {
  margin: 2%;
}

.newsInput {
  width: 70%;

  /* height: 40rem; */
  padding: 1%;
  margin: 1.5%;
  border: 2px solid blue;
}
/* хуулав */
.mendchilgee-darga{
  color: #3c5a96;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
}
.ner{
  text-align: center;
}
.albanTushaal-text{
  margin: 1.5%;
}
.mendchilgee-text1{
  text-align: left;
  margin: 0 1%;
  margin-bottom: 7%;

}
.mendchilgee-text{
  margin: 0 1%;
}
.mendchilgee-title{
  /* border: 1px solid rgb(83, 228, 64); */
  width: 80%;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 700;
}
.mendchilgee-title > p{
  /* border: 1px solid rgb(0, 255, 13); */
  width: 32%;
  border-bottom: 5px solid #fed101;
}
.mendchilgee{
  /* border: 1px solid rgb(103, 255, 43); */
  text-align: left;
  margin: 1%;
  display: flex;
}
.mendchilgee-big-main{
  text-align: -webkit-center;
  font-family: Arial, Helvetica, sans-serif;
  border: 2px solid blue;
  color: black;
  margin: 1%;

}
.mendchilgee-main{
  /* border: 1px solid red; */
  width: 80%;
  text-align: center;
}
@media screen and (max-width: 768px) {
.mendchilgee{
  display: block;

}
.mendchilgee-title > p{
  /* border: 1px solid rgb(0, 255, 13); */
  width: 63%;
  margin: 1% 0 2% 5%;
  text-align: center;
  border-bottom: 5px solid #fed101;
}
.mendchilgee-title{
  width: 100%;
  /* border: 1px solid red; */
}
.mendchilgee-main{}
}
</style>




