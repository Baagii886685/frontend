<template>
  <main>
    <div class="big-main">
      <div class="boomt-tsagiin-huvaari">
        <div class="is-size-4 division">
          <p class="my-font">Хилийн боомтын захиргааны 4 хэлтсийн чиг үүрэг</p>
        </div>
        <el-carousel height="200px" direction="vertical" :autoplay="false">
          <el-carousel-item v-for="item in carouselItems" :key="item">
            <h3 class="medium">{{ item.title }}</h3>
            <h3 class="medium">{{ item.content }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      carouselItems: [
        {
          title: "Захиргаа, санхүү, аж ахуйн хэлтэс",
          content: "Захиргааны өдөр тутмын үйл ажиллагааг тасралтгүй хангах зорилгоор үйл ажиллагааг төлөвлөх, тайлагнах, байгууллагын ил тод байдлыг ханган ажиллаж, захиргааны сар, улирал, жилийн төсвийн гүйцэтгэл, санхүүгийн тайлан тэнцлийг гарган тайлагнах, удирдлагыг холбогдох мэдээллээр өдөр тутам хангах юм.",
          // eslint-disable-next-line global-require
          // image: require("../../assets/images/Logo.png")
        },
        {
          title: "Боомтын хөгжлийн бодлого төлөвлөлтийн хэлтэс",
          content: "Хөгжлийн бодлого, төлөвлөлтийн баримт бичгийг боловсруулах, хөрш орнуудын боомтын хөгжлийн төлөвлөлттэй уялдуулан боомтын хөгжлийн ерөнхий болон хэсэгчилсэн төлөвлөгөөг тодотгох, шинээр боловсруулсан ажлыг холбогдох байгууллагуудтай хамтран зохион байгуулах.",
          // eslint-disable-next-line global-require
          // image: require("../../assets/images/Logo.png")
        },
        {
          title: "Боомтын үйл ажиллагааны хэлтэс",
          content: "Хилийн хяналтын байгууллагын хэвийн ажиллах нөхцлийг бүрдүүлэх, боомтын нэвтрүүлэх хүчин чадлыг нэмэгдүүлэх чиглэлээр хилийн хяналтын байгууллагуудын үйл ажиллагаанд бүх талын дэмжлэг үзүүлж, улс хоорондын тээврийн зохицуулалтын чиглэлээр хөрш орнуудын ижил чиг үүрэг бүхий байгууллагуудтай хамтран ажиллах, мэдээлэл солилцох, холбогдох ажлуудыг зохион байгуулах",
          // eslint-disable-next-line global-require
          // image: require("../../assets/images/Logo.png")
        },
        {
          title: "Гадаад хамтын ажиллагааны хэлтэс",
          content: "Гадаад улсын төрийн байгууллага, олон улсын байгууллагуудтай хилийн боомтын асуудлаар хамтарч ажиллах, туршлага солилцож, гадаад харилцааны шугамаар хоёр орны хэлэлцэж тохирсон санааг хөрш орнуудын хилийн боомтуудын ижил түвшний байгууллагуудтай хамтран хэрэгжүүлэх ажлыг зохион байгуулах.",
          // eslint-disable-next-line global-require
          // image: require("../../assets/images/Logo.png")
        }
      ]
    };
  },
};
</script>

<style scoped>
.item {
  color: black;
}

.my-font {
  font-family: "Arial";
  font-size: 1.2rem;
}

.big-main {
  /* background-color: #d3dce6; */
  padding: 2%;
  /* border: 1px solid black; */
  margin-bottom: 1%;
}

.division {
  /* border: 1px solid red; */
  margin: 2%;
  text-transform: uppercase;
}

.item {
  position: relative;
  height: 100%;
}

.item__content {
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 3px;
}

.item__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.el-carousel__item:nth-child(1n) {

  background-color: #e9e9e9;
}

/* .el-carousel__item:nth-child(2n + 1) {
  background-color: #0043a0;
} */
</style>
