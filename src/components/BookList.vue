<template>
  <div class='main book-list'>
    <md-card>
    <app-book
      v-for="(book, i) in books"
      :book="book"
      :selectBook="selectBook">
      <div class='book-title'>{{ book.title }}</div>
      <div class='book-author'>{{ book.author }}</div>
      <img
        class="img-thumbnail"
        :src='book.imageUrl' />
      <div class='book-description'>{{ book.description }}</div>
      <div class='book-description'>{{ book.read }}</div>
    </app-book>
    </md-card>
  </div>
</template>

<script>
  import BookListItem from './BookListItem.vue';

  export default {
    props: ['books', 'selectBook'],
    components: {
      appBook: BookListItem
    },
    methods: {
      onClick() {
        console.log('Clicked');
      }
    }
  }
</script>

<style scoped>

  .book-title {
    font-size: 24px;
  }

  .book-description {
    font-size: 12px
  }
</style>
