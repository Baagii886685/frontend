<template>
  <main>
    <div class="big-page-tuuh">
      <div class="tuuh-page">
        <div class="tuuh-title">
          <p class="baiguullagiin-tuuh">Байгууллагын түүх</p>
        </div>

        <div v-for="item in myArray" :key="item._id" class="tuuh-davtalt">
              <div class="one-tuuh">
                <div class="tuuh-garchig">
                  <p class="tuuhiin-title">{{ item.text1 }}</p>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.text2 }}</span>
                  <div class="togtool-dugaar">
                    <p>Засгийн газрын {{ item.togtoolDugaar }} дугаар тогтоолыг үзэхийг хүсвэл <a :href="item.togtoolLink" target="_blank">энд</a> дарна уу</p>
                  </div>
                </div>

              </div>
            </div>
            <div>
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
    }
  },
  mounted(){
    this.haruulahMedeeDuudah();
  },
  methods:{
    async haruulahMedeeDuudah(){
      try {
        const res = await post('/tuuhHaruulah');
        if (res.data.success === true) {
          this.myArray = res.data.data;
        } else {
          alert('алдаа гарлаа');
        }
        console.log('res => ', res);
      } catch (err) {
        console.log('Алдаа гарлаа');
      }
    }
  }
}
</script>

<style scoped>
.tuuhiin-title{
  font-size: 1.4rem;
  margin: 1% 3%;
}
.togtool-dugaar{
  /* border: 1px solid red; */
  margin: 2%;
  text-align: center;
}
.one-tuuh{
  display: flex;
}
.tuuh-zurag{
  /* border: 1px solid blue; */
}
.tuuh-garchig{
  font-family: Arial, Helvetica, sans-serifa;

}
.tuuh-davtalt{
  text-align: left;
  padding-top: 2%;
}
.baiguullagiin-tuuh{
  width: 13%;
  border-bottom: 5px solid #ffd200;
  color: #3c5a96;
  font-weight: 500;
}
.tuuh-title{
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
}
.tuuh-page{
  /* border: 1px solid blue; */
  width: 80%;
  padding: 1% 1% 1% 6%;
  /* padding-left: 20%; */
}
.big-page-tuuh{
  /* border: 1px solid red; */
  color: black;
  text-align: -webkit-center;
}
</style>



