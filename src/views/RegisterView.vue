<template>
    <div class="container d-flex align-items-center justify-content-center min-vh-100">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title text-center">Register for ClassRank</h5>
            <form @submit.prevent="register">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="name" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">DLSU email</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
              </div>
              <div class="mb-3">
                <label for="role" class="form-label">Role</label>
                <select class="form-select" id="role" v-model="role" required>
                  <option value="student">Student</option>
                  <option value="administrator">Administrator</option>
                </select>
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-success">Register</button>
              </div>
            </form>
          </div>
          <div class="card-footer text-muted text-center">
            Already have an account? <button class="btn btn-link p-0" @click="redirectToLogin">Login here</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'RegisterView',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        role: 'student'
      }
    },
    methods: {
      async register() {
        try {
          const response = await axios.post('http://localhost:5000/register', {
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role
          });
          console.log('Registration successful:', response.data);
        } catch (error) {
          console.error('Registration failed:', error);
        }
      },
      redirectToLogin() {
        this.$router.push('/login');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  