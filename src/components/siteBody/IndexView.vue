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
    <div class="carousel">
      <div>
        <CountryBorderView />
      </div>
      <div>

      </div>
    </div>


  </div>

</main>
</template>
<script>
import GoogleMaps from './GoogleMaps.vue';
import InfoNewsView from './InfoNewsView.vue';
import CountryBorderView from './CountryBorderView.vue';

export default{
  components:{
    GoogleMaps,
    InfoNewsView,
    CountryBorderView,
  }
}
</script>
<style scoped>
.Body-main{
  text-align: -webkit-center;
}
.carousel{
  width: 80%;
}
.maps{
  width: 60%;
}

.news{
  width: 40%;
}

.MapAndNews{
  /* border: 2px solid forestgreen; */
  display: flex;
  width: 80%;
}
@media screen and (max-width: 768px) {
 .MapAndNews{
  display: block;
  width: 100%;
 }
 .news{
  width: 100%;
}
.maps{
  width: 100%;
}
}
</style>
