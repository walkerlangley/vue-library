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
          <md-button
            class="md-raised md-primary"
            @click.native="addBook">Add New Book</md-button>
          <md-button
            class="md-raised md-accent"
            @click.native="logout">Log Out</md-button>
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
        <md-button
          @click.native="fetchBooks">Fetch Books</md-button>
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
        user: {
          userId: null,
          firstName: '',
          lastName: ''
        }
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
        fetch(`http://localhost:3000/books/${this.user.userId}`, { method: 'GET' })
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
        this.user.userId = user.id;
        this.user.firstName = user.firstName;
        this.user.lastName = user.lastName;
        localStorage.setItem("library-loggedIn", true);
        localStorage.setItem("library-userId", this.user.userId);
        localStorage.setItem("library-userFirstName", this.user.firstName);
        localStorage.setItem("library-userLastName", this.user.lastName);
      },
      logout() {
        console.log('Logging Out');
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
      this.user.userId = localStorage.getItem("library-userId");
      this.user.firstName = localStorage.getItem("library-userFirstName");
      this.user.lastName = localStorage.getItem("library-userLastName");
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
