<template>
  <div class="signup-container">
    <h2>Create an Account</h2>
    <p>Sign up to create your own personal digital library</p>
    <div class="signup-form-group">
      <input
        type="text"
        class="signup-form-username"
        placeholder="Username"
        v-model="credentials.username"/>
    </div>
    <div class="signup-form-group">
      <input
        type="text"
        class="signup-form-password"
        placeholder="Password"
        v-model="credentials.password"/>
    </div>
    <hr />
    <div>
      <button @click="submit">Create Account</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        credentials: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      submit() {
        let data = {
          username: this.credentials.username,
          password: this.credentials.password
        };

        this.$http.post('createAccount', data)
      }
    }

  }
</script>

<style scoped>
</style>


