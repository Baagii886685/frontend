<template>
  <main>
    <div class="main-footer">
      <p>&copy; {{ formattedDate }}он БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН. ХИЛИЙН БООМТЫН ЗАХИРГАА</p>
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
    this.formattedDate = this.$moment().format('YYYY');
  },
};
</script>
<style scoped>
.main-footer {
  font-size: 0.8rem;
  text-align: center;
  color: white;
  background-color: #3c5a96;
  height: 70px;
  padding-top: 1%;
  /* border: 1px solid green; */
}
</style>
