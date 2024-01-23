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
    }
  },
  methods:{
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
</style>




