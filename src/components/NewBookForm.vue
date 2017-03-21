<template>
  <div class="book-form-container">
    <form class="new-book-form">
      <div class="new-book-title">
        <label for="title">Book Title:</label>
        <input v-model="title" name="title" id="" value="" />
      </div>
      <div class="new-book-author">
        <label for="author">Author:</label>
        <input v-model="author" name="" id="" value="" />
      </div>
      <div class="new-book-description">
        <label for="description">Description:</label>
        <input v-model="description" name="" id="" value="" />
      </div>
      <div class="new-book-year-written">
        <label for="yearWritten">Year Written:</label>
        <input v-model="yearWritten" name="" id="" value="" />
      </div>
      <hr />
      <div>
        <button @click.prevent="addBook">Add Book</button>
      </div>
      <div>
        <button @click="cancel()">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props: ['cancel'],
    data() {
      return {
        title: '',
        author: '',
        description: '',
        yearWritten: ''
      }
    },
    methods: {
      addBook() {
        let data = {
          title: this.title,
          author: this.author,
          description: this.description
        };

        this.$http.post('book', data)
          .then(resp => {
            return JSON.parse(resp.body);
          })
          .then(data => {
            this.books.push(data);
          });
      }
    }
  }
</script>

<style scoped>
  .book-form-container {
    flex: 1 100%;
  }

  .new-book-title {
    margin: 30px 0px;
  }

  .new-book-author {
    margin: 30px 0px;
  }

  .new-book-description {
    margin: 30px 0px;
  }
</style>

