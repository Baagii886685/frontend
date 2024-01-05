<template>
  <main>
    <div class="newsInput">
      <el-input v-model="titleText" type="textarea" autosize placeholder="Мэдээний гарчиг энд бичнэ үү"> </el-input>
      <div style="margin: 20px 0"></div>
      <el-input
        v-model="textarea1"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="Текст оруулна уу"
      >
      </el-input>
      <div class="goldoo">
        <div class="file is-boxed is-primary hiddenClass">
          <div class="group">
            <label class="file-label test">
              <input ref="file" type="file" class="file-input" @change="selectFileOne" />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"> Зураг оруулна уу </i>
                </span>
                <span class="file-label"> энд дар... </span>
              </span>
              <span v-if="fileOne" class="file-name">{{ fileOne.name }} </span>
            </label>
          </div>
        </div>
      </div>
      <el-input
        v-model="textarea2"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="Текст оруулна уу"
      >
      </el-input>
      <!-- <el-upload action="#" list-type="picture-card" :auto-upload="false">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{ file }">
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="el-upload-list__item-actions">
            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
              <i class="el-icon-zoom-in"></i>
            </span>
            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
              <i class="el-icon-download"></i>
            </span>
            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
      </el-upload>
      <el-input
        v-model="textarea2"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="Текст оруулна уу"
      >
      </el-input>
      <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog> -->
      <div class="goldoo">
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
              <span v-if="fileTwo" class="file-name">{{ fileTwo.name }} </span>
            </label>
          </div>
        </div>
      </div>
      <el-input
        v-model="textarea3"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="Текст оруулна уу"
      >
      </el-input>
      <el-row>
        <el-button type="primary" round>Цэвэрлэх</el-button>
        <el-button type="success" round @click="newsSave">Хадгалах</el-button>
      </el-row>
    </div>
  </main>
</template>
<script>
import { post } from '@/utils/request';

export default {
  data() {
    return {
      fileOne: ' ',
      fileTwo: ' ',
      titleText: '',
      textarea1: '',
      textarea2: '',
      textarea3: '',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
    };
  },
  methods: {
    selectFileOne($event) {
      this.fileOne = $event.target.files[0];
      this.error = false;
      this.message = '';
    },
    selectFile($event) {
      this.fileTwo = $event.target.files[0];
      this.error = false;
      this.message = '';
    },
    async newsSave() {
      try {
        const formData = new FormData();
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('titleText', this.titleText);
        formData.append('textarea1', this.textarea1);
        formData.append('textarea2', this.textarea2);
        formData.append('textarea3', this.textarea3);
        formData.append('fileOne', this.fileOne);
        formData.append('fileTwo', this.fileTwo);
        const res = await post('/medeeHadgalah', formData);
        if (res.data.success === true) {
          this.fileOne = ' ';
          this.fileTwo = ' ';
          this.titleText = ' ';
          this.textarea1 = ' ';
          this.textarea2 = ' ';
          this.textarea3 = ' ';
        } else {
          alert('алдаа гарлаа');
        }
        console.log('res => ', res);
      } catch (err) {
        console.log('Алдаа гарлаа');
      }
    },
  },
};
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
