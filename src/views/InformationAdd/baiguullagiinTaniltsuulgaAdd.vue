<template>
  <main>
    <div class="big-menu">
      <div class="alsiin-kharaa">
        <p class="is-size-5">Байгууллагын алсын хараа оруулна.</p>
        <el-input
          type="textarea"
          autosize
          placeholder="Алсын хараа гарчиг оруулна."
          v-model="alsiinKharaa">
        </el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="текст оруулна уу"
          v-model="alsiinKharaa1">
        </el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="текст оруулна уу"
          v-model="alsiinKharaa2">
        </el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="текст оруулна уу"
          v-model="alsiinKharaa3">
        </el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="текст оруулна уу"
          v-model="alsiinKharaa4">
        </el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="текст оруулна уу"
          v-model="alsiinKharaa5">
        </el-input>
        <el-row>
          <el-button type="primary" @click="reset1" round>Цэвэрлэх</el-button>
          <el-button type="success" @click="alsiinKharaaSave" round>Хадгалах</el-button>
          <!-- <el-button type="info" round>Info</el-button>
          <el-button type="warning" round>Warning</el-button>
          <el-button type="danger" round>Danger</el-button> -->
        </el-row>
      </div>
      <div class="erhem-zorilgo">
        <p class="is-size-5">Эрхэм зорилго энд оруулна</p>
        <div>
          <el-input
            type="textarea"
            autosize
            placeholder="текст оруулна уу"
            v-model="zorilgo">
          </el-input>
          <div style="margin: 20px 0;"></div>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="текст оруулна уу"
            v-model="zorilgo1">
          </el-input>
          <div style="margin: 20px 0;"></div>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="текст оруулна уу"
            v-model="zorilgo2">
          </el-input>
          <div style="margin: 20px 0;"></div>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="текст оруулна уу"
            v-model="zorilgo3">
          </el-input>
          <div style="margin: 20px 0;"></div>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="текст оруулна уу"
            v-model="zorilgo4">
          </el-input>
          <div style="margin: 20px 0;"></div>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="текст оруулна уу"
            v-model="zorilgo5">
          </el-input>
          <el-row>
            <el-button type="primary" @click="reset" round>Цэвэрлэх</el-button>
            <el-button type="success" @click="zorilgoSave" round>Хадгалах</el-button>
          </el-row>

        </div>
      </div>

    </div>
    <div class="add-view-big">
      <div>
        <p>Хилийн боомтын захиргааны эрх зүйн орчин</p>
      </div>
      <div>
        <p>Хилийн боомтын захиргааны бүрэн эрх</p>
      </div>
    </div>
  </main>
</template>
<script>
import { post } from '@/utils/request';

export default{
  components:{

  },
  data(){
    return{
      alsiinKharaa: null,
      alsiinKharaa1: null,
      alsiinKharaa2: null,
      alsiinKharaa3: null,
      alsiinKharaa4: null,
      alsiinKharaa5: null,
      zorilgo: null,
      zorilgo1: null,
      zorilgo2: null,
      zorilgo3: null,
      zorilgo4: null,
      zorilgo5: null,
    }
  },
  methods:{
    async alsiinKharaaSave(){
      try{
        if(this.alsiinKharaa && this.alsiinKharaa2 && this.alsiinKharaa3 && this.alsiinKharaa4){
          const myData = {
            alsiinKharaa : this.alsiinKharaa,
            alsiinKharaa1: this.alsiinKharaa1,
            alsiinKharaa2: this.alsiinKharaa2,
            alsiinKharaa3: this.alsiinKharaa3,
            alsiinKharaa4: this.alsiinKharaa4,
            alsiinKharaa5: this.alsiinKharaa5,
            userId: localStorage.getItem('userId'),
          }
          const res = await post('/taniltsuulgaHadgalah', myData);
          if(res.data.success===true){
            this.$notify({
              title: 'Мэдэгдэл',
              message: 'Амжилттай хадгаллаа',
              type: 'success'
            });
            this.alsiinKharaa = null;
            this.alsiinKharaa1 = null;
            this.alsiinKharaa2 = null;
            this.alsiinKharaa3 = null;
            this.alsiinKharaa4 = null;
            this.alsiinKharaa5 = null;
          }else{
            this.$notify.error({
              title: 'Алдаа',
              message: 'Хадгалхад алдаа гарлаа'
            });
          }
        }else{
          alert("Мэдээ дутуу оруулсан байна.")
        }
      }catch(error){
        console.log("Алдаа гарлаа");
      }
    },
    async zorilgoSave(){
      const myData = {
        alsiinKharaa : this.zorilgo,
        alsiinKharaa1: this.zorilgo1,
        alsiinKharaa2: this.zorilgo2,
        alsiinKharaa3: this.zorilgo3,
        alsiinKharaa4: this.zorilgo4,
        alsiinKharaa5: this.zorilgo5,
        userId: localStorage.getItem('userId'),
      }
      const res = await post('/taniltsuulgaHadgalah', myData);
      if(res.data.success===true){
        this.$notify({
          title: 'Мэдэгдэл',
          message: 'Амжилттай хадгаллаа',
          type: 'success'
        });
        this.zorilgo = null;
        this.zorilgo1 = null;
        this.zorilgo2 = null;
        this.zorilgo3 = null;
        this.zorilgo4 = null;
        this.zorilgo5 = null;
      }else{
        this.$notify.error({
          title: 'Алдаа',
          message: 'Хадгалхад алдаа гарлаа'
        });
      }
    },
    reset(){
      this.zorilgo = null;
      this.zorilgo1 = null;
      this.zorilgo2 = null;
      this.zorilgo3 = null;
      this.zorilgo4 = null;
      this.zorilgo5 = null;
    },
    reset1(){
      this.alsiinKharaa =null;
      this.alsiinKharaa1= null;
      this.alsiinKharaa2= null;
      this.alsiinKharaa3= null;
      this.alsiinKharaa4= null;
      this.alsiinKharaa5= null;
    }
  }
}
</script>
<style scoped>
.add-view-big{
  display: flex;
}
.erhem-zorilgo{
  border: 1px solid red;
  width: 45%;
  margin: 1%;
}
.big-menu{
  display: flex;
}
.el-input{
  margin: 1%;
}
.alsiin-kharaa{
  border: 1px solid blue;
  width: 45%;
  margin: 1%;
}

</style>
