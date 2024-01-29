<template>
  <main>
    <div>
      <div class="zurag-oruulah">
        <div>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="Тайлбар текст оруулна уу"
            v-model="textarea">
          </el-input>
        </div>
        <div class="goldoo">
        <div class="file is-boxed is-primary hiddenClass">
          <div class="group">
            <label class="file-label test">
              <input ref="file" type="file" class="file-input" @change="selectFileOne" />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload">Зураг оруулна уу </i>
                </span>
                <span class="file-label"> энд дар... </span>
              </span>
              <span v-if="fileOne" class="file-name">{{ fileOne.name }} </span>
            </label>
          </div>
          </div>
        </div>
    </div>
    <div>
      <el-row>
        <el-button type="primary">Цэвэрлэх</el-button>
        <el-button @click="butetsHadgalah" type="success">Хадгалах</el-button>
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
      fileOne: '',
      textarea: null,
    }
  },
  methods:{
    async butetsHadgalah(){
      try {
        const formData = new FormData();
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('fileOne', this.fileOne);
        formData.append('textarea', this.textarea);
        const res = await post('/butetsHadgalah', formData);
        if (res.data.success === true) {
          this.fileOne = '';
          this.textarea = null;
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
    selectFileOne($event) {
      this.fileOne = $event.target.files[0];
      this.error = false;
      this.message = '';
    },
  },

}

</script>
<style scoped>
.goldoo{
  /* border: 1px solid red; */
  width: 166px;
  margin: 2%;
}
.zurag-oruulah{
  /* display: flex; */
  /* border: 1px solid blue; */
  width: 70%;
}
</style>
