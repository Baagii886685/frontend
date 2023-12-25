<template>
  <main>
    <div class="footer">
      <p>Хилийн боомтын захиргаа &copy; {{ formattedDate }}</p>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      formattedDate: null,
    };
  },
  mounted() {
    // Example usage of $moment
    this.formattedDate = this.$moment().format('YYYY-MM-DD');
  },
};
</script>
<style scoped>
.footer {
  /* border: 2px solid green; */
  background-color: #fff;
}
</style>
