<template>
  <div class='main selected-book'>
    <div class="selected-book-title">
      {{ this.book.title }}
    </div>
    <div class="selected-book-author">
      {{ this.book.author }}
    </div>
    <div>
      <img
         :src="this.book.imageUrl" />
    </div>
    <div class="selected-book-description">
      {{ this.book.description }}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['book'],
  }
</script>

<style scoped>
  .main {
    text-align: center;
    margin: 0px 10px;
    padding: 0px 10px;
  }

  .selected-book-title {
    font-size: 2.5em;
      margin: 30px 0px 10px 0px;
  }

  .selected-book-author {
    font-size: 1.5em;
      margin-bottom: 10px;
  }

  .selected-book-description {
    font-size: 1.3em;
  }
</style>

