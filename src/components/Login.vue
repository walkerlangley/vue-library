<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h2>Login</h2>
          <hr>
          <div class="form-group">
            <label for="username">Username</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Username"
                v-model="credentials.username"/>
            </div>
            <div class="form-group">
            <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Password"
                v-model="credentials.password"/>
            </div>
            <div>
              <button
                class="btn btn-primary"
                @click="login">Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props: ['logUserIn'],
    data() {
      return {
        credentials: {
          username: '',
          password: '',
        }
      }
    },
    methods: {
      login() {
        let data = {
          username: this.credentials.username,
          password: this.credentials.password,
        }

        this.$http.post('login', data)
          .then(resp => {
            if (resp.status === 200) {
              return resp.json();
            }
          })
          .then(user => {
            this.logUserIn(user);
          });
      }
    }
  }
</script>

<style>
</style>
