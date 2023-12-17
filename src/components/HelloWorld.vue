<template>
  <div>
    <div>
      <HeaderView />
    </div>
    <div>
      <NavbarMenu />
    </div>
    <div>
      <GoogleMaps />
    </div>
    <div>
      <FooterView />
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
import HeaderView from '@/components/headerFooter/HeaderView.vue';
import NavbarMenu from '@/components/headerFooter/NavbarMenu.vue';
import FooterView from '@/components/headerFooter/FooterView.vue';
import GoogleMaps from '@/components/siteBody/GoogleMaps.vue';

export default {
  components: { HeaderView, NavbarMenu, FooterView, GoogleMaps },
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
