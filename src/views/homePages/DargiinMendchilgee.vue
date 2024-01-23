<template>
  <main>
    <div class="mendchilgee-big-main">
      <div class="mendchilgee-title">
        <p>Хилийн боомтын захиргааны даргын мэндчилгээ</p>
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
      </div>

    </div>
  </main>
</template>

<script>
import { post } from '@/utils/request';

export default{
  data(){
    return{
      myArray: [],
      tabPosition: 'left'

    }
  },
  async mounted() {
    try {
      const res = await post('/dargaMendchilgee');
      // console.log("res =>", res.data.data);
      this.myArray = res.data.data;
    } catch (error) {
      console.error("Error fetching border port data:", error);
    }
  },
  methods:{

  },
}

</script>
<style scoped>
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
  /* border: 2px solid blue; */
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
