<template>
  <main>
    <div class="big-taniltsuulga">
      <div class="taniltsuulga-main">
        <div v-for="value in myData" :key="value._id">
            <div class="garchig">
              <p>{{ value.name }}</p>
            </div>
            <!-- <p class="text">asdf{{ value.text }}</p> -->
            <p class="text">{{ value.text1 }}</p>
            <p class="text">{{ value.text2 }}</p>
            <p class="text">{{ value.text3 }}</p>
            <p class="text">{{ value.text4 }}</p>
            <div v-if="value.text5">
              <p class="text">{{ value.text5 }}</p>
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

  data(){
    return{
      myData:[],
    }
  },
  mounted(){
    this.taniltsuulga();
  },
  methods:{
    async taniltsuulga(){
      const res = await post('/taniltsuulgaView');
      console.log("res.data=>", res.data);
      this.myData = res.data.data;
    }
  },

}
</script>
<style scoped>
.garchig{
  font-size: 1.2rem;
  font-weight: 540;
  width: 11%;
  /* text-align: center; */
  border-bottom: 5px solid #ffd200;
  margin: 1% 0 1% 1%;
  color: #3c5a96;
}
.text{
  font-family: Arial, Helvetica, sans-serif;
  margin: 0.5%;
  text-align: left;
  margin-left: 20px;
  cursor: default;
}
.text::before {
      content: '\2022'; /* Unicode character for a bullet point */
      color: black;
      margin-right: 5px; /* Adjust the spacing between the bullet point and text */
    }
.big-taniltsuulga{
  border: 1px solid red;
  width: 100%;
  text-align: -webkit-center;
}
.taniltsuulga-main{
  /* border: 1px solid blue; */
  text-align: left;
  width: 70%;
  margin: 0.5%;
}
</style>
