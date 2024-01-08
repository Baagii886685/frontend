<template>
  <main>
    <div class="footer">
      <p>ХИЛИЙН БООМТЫН ЗАХИРГАА &copy; {{ formattedDate }} БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН</p>
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
  font-size: 1rem;
  text-align-last: center;
  background-color: #fff;
  border: 1px solid green;
}
</style>
