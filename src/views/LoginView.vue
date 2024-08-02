<template>
  <div class="container d-flex align-items-center justify-content-center min-vh-100">
    <div class="col-md-6">
      <div class="card shadow">
        <div class="card-body">
          <h5 class="card-title text-center">Welcome to Class Rank!</h5>
          <form @submit.prevent="login">
            <div class="mb-3">
              <input type="email" class="form-control" placeholder="DLSU Email" id="email" v-model="email" required>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" required>
            </div>
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-success">Log in</button>
              <div v-if="successMessage" class="text-success mt-2">{{ successMessage }}</div>
              <button type="button" class="btn btn-outline-success" @click="signUp">Sign up</button>
            </div>
          </form>
          <div v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</div>
        </div>
        <div class="card-footer text-muted text-center">
          <!-- Forgot password? PREVIOUS -->
          <button class="btn btn-link p-0" @click="forgotPassword">Forgot password?</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      successMessage: ''  // Add this line
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:5000/login', {
          email: this.email,
          password: this.password
        });
        if (response.data.success) {
          this.successMessage = 'Logging you in...'; 
          this.errorMessage = '';
          setTimeout(() => {
            this.$router.push('/home');  // redirect after a delay
          }, 2000);  
        } else {
          this.errorMessage = response.data.message;
          this.successMessage = '';  
        }
      } catch (error) {
        console.error('Login failed:', error);
        this.errorMessage = 'Login failed, please try again.';
        this.successMessage = '';  // Clear success message on error
      }
    },
    signUp() {
      this.$router.push('/register');
    },
    forgotPassword() { // 
      this.$router.push('/forgot-password');
    }
  }
}
</script>

<style scoped>
.container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('@/assets/login-bg.png') no-repeat center center;
  background-size: cover;
  filter: blur(10px); /* blurred effect to the background image only */
  z-index: -1;
}
.text-danger {
  color: #dc3545;
}
</style>
