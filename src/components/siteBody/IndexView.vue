<template>
<main>
  <div class="Body-main">
    <div class="MapAndNews">
    <div class="maps">
      <GoogleMaps />
    </div>
    <div class="news">
      <InfoNewsView />
    </div>

  </div>

  </div>
</main>
</template>
<script>
import GoogleMaps from './GoogleMaps.vue';
import InfoNewsView from './InfoNewsView.vue';


export default{
  components:{
    GoogleMaps,
    InfoNewsView,
  }
}
</script>
<style scoped>
.Body-main{
  text-align: -webkit-center;
}
.maps{
  width: 70%;
}
.news{
  width: 50%;
}
.MapAndNews{
  /* border: 2px solid forestgreen; */
  display: flex;
  width: 80%;
}
</style>
