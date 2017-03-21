<template>
  <div id="app">
    <div>
      <app-login
        :logUserIn="logUserIn"
        v-if="!loggedIn"></app-login>
    </div>
    <div v-if="loggedIn">
      <div class='header'>
        <h1>{{ header }}</h1>
        <div class="main-add-book">
          <button
            class="btn btn-default btn-lg"
            @click="addBook">Add New Book</button>
          <button
            class="btn btn-danger btn-lg"
            @click="logout">Log Out</button>
        </div>
      </div>
      <div class="main-container" v-if="loggedIn">
        <div>
          <app-book-list
            :books="books"
            :selectBook="selectBook" ><app-book-list>
        </div>
        <div class="main-container selected-book">
          <app-selected-book
            :book="selectedBook"
            @bookSelected="selectedBook = $event"
            v-if="!showBookForm"></app-selected-book>
        </div>
        <div class="main-container book-form">
          <app-book-form
            :cancel="addBook"
            v-if="showBookForm"></app-selected-book>
        </div>
      </div>
      <hr />
      <div>
        <button @click="fetchBooks">Fetch Books</button>
      </div>
    </div>
  </div>
</template>

<script>
  import BookList from './components/BookList.vue';
  import SelectedBook from './components/SelectedBook.vue';
  import NewBookForm from './components/NewBookForm.vue';
  import Login from './components/Login.vue';

  export default {
    data() {
      return {
        header: "Walker's Library",
        books: [],
        selectedBook: {},
        resources: {},
        showBookForm: false,
        loggedIn: false,
        userId: null,
      }
    },
    components: {
      appBookList: BookList,
      appSelectedBook: SelectedBook,
      appBookForm: NewBookForm,
      appLogin: Login,
    },
    methods: {
      selectBook(book) {
        this.selectedBook = book;
      },
      addBook() {
        this.showBookForm = !this.showBookForm;
      },
      fetchBooks() {
        console.log("Fetching Books");
        this.$http.get(`books/${this.userId}`)
          .then(response => {
            return response.json();
          })
          .then(data=> {
            let tmpArr = [];
            for(let key in data) {
              tmpArr.push(data[key])
            }
            this.books = tmpArr;
            this.selectedBook = tmpArr[0];
          });
      },
      logUserIn(user) {
        console.log('User: ', user);
        this.loggedIn = true;
        this.userId = user.id;
        localStorage.setItem("library-loggedIn", true);
        localStorage.setItem("library-userId", this.userId);
      },
      logout() {
        this.loggedIn = false;
        this.userId = null;
      }
    },
    computed: {
      getFullName() {
        return this.books.forEach((book) => {
          return `${book.author.firstName} ${book.author.middleName} ${book.author.lastName}`;
        });
      },
    },
    created() {
      this.loggedIn = localStorage.getItem("library-loggedIn");
      this.userId = localStorage.getItem("library-userId");
      if (this.userId && this.loggedIn) {
        this.fetchBooks();
      }
    },
  }
</script>

<style lang="css">

  .header {
    flex: 1 100%;
    background: lightblue;
    text-align: center;
    font-size: 3em;
    padding: 20px 0px;
  }

  .main-add-book {
    justify-content: end;
  }

  .main-container {
    display: flex;
  }

  .selected-book {
    border-left: 1px solid gray;
  }
</style>
