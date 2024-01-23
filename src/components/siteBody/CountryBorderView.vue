<template>
  <main>
<div class="big-main">
  <div class="boomt-tsagiin-huvaari">
      <div class="is-size-4 division">
        <p class="my-font">Хилийн боомтын захиргааны хэлтсийн чиг үүрэг</p>
      </div>
      <el-carousel :interval="4000" type="card" height="300px">
    <el-carousel-item>
      <div class="item">
        <div class="is-size-4">
          Захиргаа, санхүү, аж ахуйн хэлтэс
        </div>
        <div class="item__content">
          Захиргааны өдөр тутмын үйл ажиллагааг тасралтгүй хангах зорилгоор үйл ажиллагааг төлөвлөх, тайлагнах, байгууллагын ил тод байдлыг ханган ажиллаж, захиргааны сар, улирал, жилийн төсвийн гүйцэтгэл, санхүүгийн тайлан тэнцлийг гарган тайлагнах, удирдлагыг холбогдох мэдээллээр өдөр тутам хангах юм.
        </div>
        <img class="item__image" src="https://eventsget.sgp1.cdn.digitaloceanspaces.com/webcontents/eventscontents/2021/images/02_24/WURUR74681/1614152283-modern-age-office-administration-and-management.jpg" alt="" />
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="item">
        <div class="is-size-4">
          Боомтын хөгжлийн бодлого төлөвлөлтийн хэлтэс
        </div>
        <div class="item__content">
          Хөгжлийн бодлого, төлөвлөлтийн баримт бичгийг боловсруулах, хөрш орнуудын боомтын хөгжлийн төлөвлөлттэй уялдуулан боомтын хөгжлийн ерөнхий болон хэсэгчилсэн төлөвлөгөөг тодотгох, шинээр боловсруулсан ажлыг холбогдох байгууллагуудтай хамтран зохион байгуулах.
        </div>
        <img class="item__image" src="https://www.royalhaskoningdhv.com/-/media/images/projects/maritime/assessment-and-feasibility-studies-for-the-anaklia-deep-sea-port-development-h.jpg?h=1080&iar=0&w=1920&hash=B258FDABB59951787D46BD0AE5272D35" alt="" />
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="item">
        <div class="is-size-4">
          Боомтын үйл ажиллагааны хэлтэс
        </div>
        <div class="item__content">
          Хилийн хяналтын байгууллагын хэвийн ажиллах нөхцлийг бүрдүүлэх, боомтын нэвтрүүлэх хүчин чадлыг нэмэгдүүлэх чиглэлээр хилийн хяналтын байгууллагуудын үйл ажиллагаанд бүх талын дэмжлэг үзүүлж, улс хоорондын тээврийн зохицуулалтын чиглэлээр хөрш орнуудын ижил чиг үүрэг бүхий байгууллагуудтай хамтран ажиллах, мэдээлэл солилцох, холбогдох ажлуудыг зохион байгуулах
        </div>
        <img class="item__image" src="https://d3n5uof8vony13.cloudfront.net/Pictures/1024x536/2/5/2/287252_supplychainrecovery_352101.jpg" alt="" />
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="item">
        <div class="is-size-4">
          Гадаад ажиллагааны хэлтэс
        </div>
        <div class="item__content">
          Гадаад улсын төрийн байгууллага, олон улсын байгууллагуудтай хилийн боомтын асуудлаар хамтарч ажиллах, туршлага солилцож, гадаад харилцааны шугамаар хоёр орны хэлэлцэж тохирсон санааг хөрш орнуудын хилийн боомтуудын ижил түвшний байгууллагуудтай хамтран хэрэгжүүлэх ажлыг зохион байгуулах.
        </div>
        <img class="item__image" src="https://indonesia.fes.de/fileadmin/_processed_/9/4/csm_Fotolia_94883014_Subscription_Monthly_XXL_70aa944640.jpg" alt="" />
      </div>
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
      items: [
        {
          title: "Захиргаа, санхүү, аж ахуйн хэлтэс",
          chigUureg: "Захиргааны өдөр тутмын үйл ажиллагааг тасралтгүй хангах зорилгоор үйл ажиллагааг төлөвлөх, тайлагнах, байгууллагын ил тод байдлыг хангах ажиллах",
          images: ["./101a.png"],
        },
        {
          title: "Боомтын үйл ажиллагааны хэлтэс",
          chigUureg: "Захиргааны өдөр тутмын үйл ажиллагааг тасралтгүй хангах зорилгоор үйл ажиллагааг төлөвлөх, тайлагнах, байгууллагын ил тод байдлыг хангах ажиллах",
          images: ["./101a.png"],
        },
        {
          title: "Боомтын хөгжлийн бодлого төлөвлөлтийн хэлтэс",
          chigUureg: "Захиргааны өдөр тутмын үйл ажиллагааг тасралтгүй хангах зорилгоор үйл ажиллагааг төлөвлөх, тайлагнах, байгууллагын ил тод байдлыг хангах ажиллах",
          images: ["./101a.png"],
        },
        {
          title: "Гадаад ажиллагааны хэлтэс",
          chigUureg: "Захиргааны өдөр тутмын үйл ажиллагааг тасралтгүй хангах зорилгоор үйл ажиллагааг төлөвлөх, тайлагнах, байгууллагын ил тод байдлыг хангах ажиллах",
          images: ["./101a.png"],
        },
        // Add more items as needed
      ],
    };
  },
};
</script>

<style scoped>
.my-font{
  font-family: "Arial";
}
.big-main{
  background-color: #d3dce6;
  padding: 2%;
  border: 1px solid black;
  margin-bottom: 1%;
}
.division{
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

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #99a9bf;
}
</style>
