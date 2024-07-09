<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow">
            <div class="card-body">
              <h5 class="card-title text-center">Welcome to ClassRank</h5>
              <form @submit.prevent="login">
                <div class="mb-3">
                  <label for="email" class="form-label">Dlsu email</label>
                  <input type="email" class="form-control" id="email" v-model="email" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" v-model="password" required>
                </div>
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-success">Log in</button>
                  <button type="button" class="btn btn-outline-success" @click="signUp">Sign up</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-muted text-center">
              Forget password?
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        // Handle login logic here
        console.log('Login attempt with:', this.email, this.password);
      },
      signUp() {
        // Handle sign-up logic or redirect here
        console.log('Redirect to sign-up page');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  