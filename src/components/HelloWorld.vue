<template>
  <div>
    <div>
      <!-- <HeaderView /> -->
      <HeaderView />
    </div>
    <div>
      <NavbarMenu />
    </div>
    <div>
      <!-- <GoogleMaps /> -->
    </div>
    <div>
      <!-- <FooterView /> -->
    </div>
  </div>
</template>
<script>
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// });
// import HeaderView from '@/components/headerFooter/HeaderView.vue';
import HeaderView from '@/views/header/HeaderView.vue';
import NavbarMenu from '@/views/header/NavbarMenu.vue';
// import NavbarMenu from '@/components/headerFooter/NavbarMenu.vue';
// import FooterView from '@/components/headerFooter/FooterView.vue';
// import GoogleMaps from '@/components/siteBody/GoogleMaps.vue';
export default {
  components: { HeaderView, NavbarMenu },
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
