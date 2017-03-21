<template>
  <div class='book-item' @click="selectBook(book)">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ['book', 'selectBook'],
    methods: {
      onClick() {
        console.log('Clicked: ', this.book);
        this.$emit('bookSelected', this.book);
      }
    }
  }
</script>

<style scoped>
  .book-item {
    width: 250px;
    margin: 10px 0px;
    border-bottom: 1px solid gray;
    padding-bottom: 20px
  }
</style>
