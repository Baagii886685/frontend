<template>
  <main>
    <div class="newsInput">
      <el-input v-model="textarea1" type="textarea" autosize placeholder="Мэдээний гарчиг энд бичнэ үү"> </el-input>
      <div style="margin: 20px 0"></div>
      <el-input
        v-model="textarea2"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="Текст оруулна уу"
      >
      </el-input>
      <el-upload action="#" list-type="picture-card" :auto-upload="false">
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
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      textarea1: '',
      textarea2: '',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
    };
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
  },
};
</script>
<style scoped>
.newsInput {
  width: 70%;
  padding: 1%;
  margin: 1.5%;
  border: 2px solid blue;
}
</style>
