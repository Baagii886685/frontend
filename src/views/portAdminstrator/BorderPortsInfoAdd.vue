<template>
<main>
  <div>
      <h3>Боомт бүртгэх</h3>
    </div>
    <div class="BorderPortAdd">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">

        <el-form-item label-width="15%" label="Боомтын нэр" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label-width="15%" label="Үүсгэн байгуулагдсан он" prop="ognoo">
          <el-input type="textarea" v-model="ruleForm.ognoo"></el-input>
        </el-form-item>

        <el-form-item label-width="15%" label="Боомтын газар нутгийн байршил" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>

        <el-form-item label-width="15%" label="Улсын хилийн зай км" prop="borderKm">
          <el-input v-model="ruleForm.borderKm"></el-input>
        </el-form-item>

        <el-form-item label-width="15%" label="Сумаас боомт хүртэлх зай" prop="sumiinTovKm">
          <el-input v-model="ruleForm.sumiinTovKm"></el-input>
        </el-form-item>

        <el-form-item label-width="15%" label="аймгийн төвөөс зай" prop="clanKm">
          <el-input v-model="ruleForm.clanKm"></el-input>
        </el-form-item>

        <el-form-item label-width="15%" label="Улаанбаатар хотоос" prop="cityKm">
          <el-input v-model="ruleForm.cityKm"></el-input>
        </el-form-item>

        <el-form-item label-width="15%" label="Хиллэдэг боомтын мэдээлэл оруулах" prop="desc1">
          <el-input type="textarea" v-model="ruleForm.desc1"></el-input>
        </el-form-item>

        <el-form-item label-width="15%" label="Боомтын тайлбар" prop="desc2">
          <el-input type="textarea" v-model="ruleForm.desc2"></el-input>
        </el-form-item>

        <el-form-item label-width="15%" label="Боомтын тайлбар" prop="desc3">
          <el-input type="textarea" v-model="ruleForm.desc3"></el-input>
        </el-form-item>

        <el-form-item label-width="15%" label="Хиллэдэг улс" prop="region">
          <el-select v-model="ruleForm.region" placeholder="Хиллэдэг улс сонгоно уу">
            <el-option label="ОХУ" value="ОХУ"></el-option>
            <el-option label="БНХАУ" value="БНХАУ"></el-option>
          </el-select>
        </el-form-item>


        <div class="image-upload">
          <div class="goldoo">
            <div class="file is-boxed is-primary hiddenClass">
              <div class="group">
                <label class="file-label test">
                  <input ref="file" type="file" class="file-input" @change="selectFileOne" prop="portImage1" />
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"> Зураг оруулна уу </i>
                    </span>
                    <span class="file-label"> энд дар... </span>
                  </span>
                  <span v-if="ruleForm.portImage1" class="file-name">{{ ruleForm.portImage1.name }} </span>
                </label>
              </div>
            </div>
        </div>

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
                  <span v-if="ruleForm.portImage2" class="file-name">{{ ruleForm.portImage2.name }} </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="location">
          <div>
            <p>Боомтын байршлын уртраг өргөрөг оруулна уу</p>
          </div>
          <div class="location-input">
            <div class="urtrag-input">
              <el-form-item label-width="15%" label="Уртраг" prop="urtrag">
                <el-input v-model="ruleForm.urtrag" type="number" placeholder="00.0000000000000"></el-input>
              </el-form-item>
            </div>
            <div class="orgorog-input">
              <el-form-item label-width="15%" label="Өргөрөг" prop="orgorog">
                <el-input v-model="ruleForm.orgorog" type="number" placeholder="000.000000000000"></el-input>
              </el-form-item>
            </div>
          </div>
        </div>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">Хадгалах</el-button>
          <el-button @click="resetForm('ruleForm')">Цэвэрлэх</el-button>
        </el-form-item>

      </el-form>
    </div>

</main>
</template>
<script>
import { post } from '@/utils/request';

export default {
  data() {
    return {

      ruleForm: {
        name: null,
        ognoo: null,
        desc: null,
        borderKm: null,
        sumiinTovKm: null,
        clanKm: null,
        cityKm: null,
        desc1: null,
        desc2: null,
        desc3: null,
        region: null,
        urtrag: null,
        orgorog: null,
        portImage1: null,
        portImage2: null,

      },
      rules: {
        name: [
          { required: true, message: 'Боомтын нэрийг оруулна уу', trigger: 'blur' },
          { message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        ognoo: [
          { required: true, message: 'Байгуулагдсан он оруулна уу', trigger: 'change' }
        ],
        desc: [
          { required: true, message: 'Газар нутгийн байрлал заавал оруулна уу', trigger: 'blur' }
        ],

        borderKm: [
          { required: true, message: 'Улсын хилийн зайг оруулна уу  ', trigger: 'blur' }
        ],
        sumiinTovKm: [
          { required: true, message: 'сумын төвийн зайг оруулна уу  ', trigger: 'blur' }
        ],
        clanKm: [
          { required: true, message: 'аймгийн төвийн зайг оруулна уу  ', trigger: 'blur' }
        ],
        cityKm: [
          { required: true, message: 'аймгийн төвийн зайг оруулна уу  ', trigger: 'blur' }
        ],
        desc1: [
          { required: true, message: 'Боомтын тайлбар хэсгийг заавар оруулна', trigger: 'blur' }
        ],
        desc2: [
          { required: true, message: 'Боомтын тайлбар хэсгийг заавар оруулна', trigger: 'blur' }
        ],
        desc3: [
          { required: true, message: 'Боомтын тайлбар хэсгийг заавар оруулна', trigger: 'blur' }
        ],
        region: [
          { required: true, message: 'Хиллэдэг улс сонгоно уу', trigger: 'change' }
        ],
        urtrag: [
          { required: true, message: 'Боомтын байршлын уртраг код оруулна уу', trigger: 'blur' }
        ],
        orgorog: [
          { required: true, message: 'Боомтын байршлын өргөргийн код оруулна уу', trigger: 'blur' }
        ],
        portImage1: [
          { required: true, message: 'Боомтын зургийг заавал оруулна', trigger: 'blur' }
        ],
        portImage2: [
          { required: true, message: 'Боомтын зургийг заавал оруулна', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    selectFileOne($event){
      this.ruleForm.portImage1 = $event.target.files[0];
      this.error = false;
      this.message = '';
    },
    selectFile($event) {
      this.ruleForm.portImage2 = $event.target.files[0];
      this.error = false;
      this.message = '';
    },
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const formData = new FormData();
          formData.append('userId', localStorage.getItem('userId'));
          formData.append('name', this.ruleForm.name);
          formData.append('ognoo', this.ruleForm.ognoo);
          formData.append('desc', this.ruleForm.desc);
          formData.append('borderKm', this.ruleForm.borderKm);
          formData.append('sumiinTovKm', this.ruleForm.sumiinTovKm);
          formData.append('clanKm', this.ruleForm.clanKm);
          formData.append('cityKm', this.ruleForm.cityKm);
          formData.append('desc1', this.ruleForm.desc1);
          formData.append('desc2', this.ruleForm.desc2);
          formData.append('desc3', this.ruleForm.desc3);
          formData.append('region', this.ruleForm.region);
          formData.append('urtrag', this.ruleForm.urtrag);
          formData.append('orgorog', this.ruleForm.orgorog);
          formData.append('portImage1', this.ruleForm.portImage1);
          formData.append('portImage2', this.ruleForm.portImage2);

          const res = await post('/borderPortAdd', formData);
          if (res.data.success === true) {
            this.$notify({
              title: 'Мэдэгдэл',
              message: 'Амжилттай',
              type: 'success'
            });
            this.ruleForm.name = null;
            this.ruleForm.ognoo = null;
            this.ruleForm.desc = null;
            this.ruleForm.borderKm = null;
            this.ruleForm.sumiinTovKm = null;
            this.ruleForm.clanKm = null;
            this.ruleForm.cityKm = null;
            this.ruleForm.desc1 = null;
            this.ruleForm.desc2 = null;
            this.ruleForm.desc3 = null;
            this.ruleForm.region = null;
            this.ruleForm.urtrag = null;
            this.ruleForm.orgorog = null;
            this.ruleForm.portImage1 = null;
            this.ruleForm.portImage2 = null;

          } else {
            alert('алдаа гарлаа');
          }
          console.log('res => ', res);


          // console.log('name:>', this.ruleForm.name);
          // console.log('ognoo:>', this.ruleForm.ognoo);
          // console.log('desc:>', this.ruleForm.desc);
          // console.log('borderKm:>', this.ruleForm.borderKm);
          // console.log('sumiinTovKm:>', this.ruleForm.sumiinTovKm);
          // console.log('clanKm:>', this.ruleForm.clanKm);
          // console.log('cityKm:>', this.ruleForm.cityKm);
          // console.log('desc1:>', this.ruleForm.desc1);
          // console.log('desc2:>', this.ruleForm.desc2);
          // console.log('desc3:>', this.ruleForm.desc3);
          // console.log('region:>', this.ruleForm.region);
          // console.log('urtrag:>', this.ruleForm.urtrag);
          // console.log('orgorog:>', this.ruleForm.orgorog);
          // alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
    // eslint-disable-next-line indent
    }
}
</script>

<style scoped>
  ::v-deep input[type="number"]::-webkit-inner-spin-button,
  ::v-deep input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::v-deep input[type="number"] {
    -moz-appearance: textfield;
  }
.  .custom-input {
    width: 50%; /* Adjust the width as needed */
    border: 1px solid blue;
  }
.goldoo{
  border: 1px solid blue;
  margin: 2%;
}
.image-upload{
  border: 1px solid rgb(0, 0, 0);
  display: flex;
}
.test{
  /* border: 2px solid red; */
  width: 100%;
  text-align: left;

}
  .orgorog-input .el-form-item__content,
  .urtrag-input .el-form-item__content {
    border: 2px solid yellow;
    width: 100%; /* Adjust width if needed */
  }

  .orgorog-input {
    border: 2px solid yellow;
    width: 50%;
  }

  .urtrag-input {
    border: 2px solid yellow;
    width: 50%;
  }

  .location-input {
    border: 2px solid blue;
    display: flex;
  }

  .location {
    border: 2px solid rgb(0, 0, 0);
  }

  .BorderPortAdd {
    border: 1px solid rgb(89, 248, 187);
    width: 60%;
  }
</style>
