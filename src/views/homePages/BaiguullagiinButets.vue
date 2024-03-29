<template>
  <main>
    <div class="big-page">
      <div class="garchig-big-body">
        <div class="butets-garchig">
          <span>Байгууллагын бүтэц</span>
        </div>
      </div>
      <div class="butets-dawtalt">
        <div v-for="item in myArray" :key="item._id">
          <div class="butets-text">
            <p>{{ item.description }}</p>
          </div>
        <div>
            <el-image
            class="info-image"
            style="width: 55%;"
            :src="baseUrl + item.photoOne"
            :fit="fit"></el-image>
          </div>

      </div>
      </div>
    </div>

  </main>
</template>
<script>
import { post } from '@/utils/request';




export default{
  components:{

  },
  data() {
    return {
      baseUrl: 'https://bpa.gov.mn/app/',
      myArray: [],
    };
  },
  mounted(){
    this.butetsduudah();
  },
  methods:{
    async butetsduudah(){
      const res = await post('/butetsHaray');
      console.log("res=>", res.data);
      this.myArray = res.data.data;
    }
  }
}
</script>
<style scoped>
.garchig-big-body{
  text-align: left;
  padding-left: 12%;

}
.butets-garchig{
  /* text-align: left; */

  font-size: 1.2rem;
  width: 13%;
  border-bottom: 5px solid #ffd200;
  color: #3c5a96;
  font-weight: 500;
}
.butets-text{
  text-align: left;
  /* border: 1px solid red; */
  width: 85%;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  margin: 2% 1% 3% 1%;
}
.big-page{
  /* border: 1px solid red; */
  text-align: -webkit-center;
  margin: 1% 2%;
}
.butets-dawtalt{
  width: 80%;
  /* border: 1px solid blue; */
}
</style>
