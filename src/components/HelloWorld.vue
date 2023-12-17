<template>
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sint voluptates iusto alias optio nam quas iure
      ratione! Iusto numquam deserunt in hic adipisci modi sequi magnam veniam odit doloremque. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. At corrupti eaque a repudiandae ea dignissimos suscipit commodi illo vel ex
      nobis minus autem sint nesciunt, voluptatum ipsum perspiciatis aut. At. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Cum placeat ipsam necessitatibus corporis perferendis tempore atque? Omnis at aut, deleniti
      atque architecto repudiandae iusto consectetur corporis alias doloremque ut labore.
    </p>
    <h2>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, cum rem! Eum, pariatur necessitatibus.
      Delectus deserunt quibusdam qui at iste in ipsam obcaecati? Optio, dolorum est veniam ad architecto mollitia?
    </h2>
    <h3>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloremque doloribus cum! Sequi iure illo quam
      porro amet ullam suscipit reprehenderit, non hic deserunt sunt natus officiis aut! Nobis, sit?
    </h3>
    <h4>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae atque non illo blanditiis illum adipisci,
      rerum obcaecati, laudantium quam eum aliquid voluptas rem incidunt quas aut debitis porro? Veniam, saepe.
    </h4>
    <h5>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptate provident nemo ducimus excepturi eum repellat, facere ea doloribus facilis aspernatur aliquid ut magnam rerum? In tempora illo pariatur eaque.
    </h5>
    <h6>made in mongolia</h6>
  </div>
</template>
<script>
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// });
export default {
  methods: {
    open() {
      this.$message('This is a message.');
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h('p', null, [h('span', null, 'Message can be '), h('i', { style: 'color: teal' }, 'VNode')]),
      });
    },
  },
};
</script>
<style scoped></style>
