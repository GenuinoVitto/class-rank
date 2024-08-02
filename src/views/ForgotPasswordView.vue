<template>
    <div class="container d-flex align-items-center justify-content-center min-vh-100">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title text-center">Forgot Password</h5>
            <form @submit.prevent="sendResetLink">
              <div class="mb-3">
                <input type="email" class="form-control" placeholder="DLSU Email" v-model="email" required>
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-success">Send Reset Link</button>
              </div>
            </form>
            <div v-if="message" :class="{'text-success': success, 'text-danger': !success}" class="mt-2">{{ message }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ForgotPasswordView',
    data() {
      return {
        email: '',
        message: '',
        success: false
      }
    },
    methods: {
      async sendResetLink() {
        try {
          const response = await axios.post('http://localhost:5000/forgot-password', {
            email: this.email
          });
          this.message = response.data.message;
          this.success = response.data.success;
        } catch (error) {
          console.error('Error sending reset link:', error);
          this.message = 'An error occurred while sending the reset link.';
          this.success = false;
        }
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
    filter: blur(10px);
    z-index: -1;
  }
  .text-danger {
    color: #dc3545;
  }
  .text-success {
    color: #28a745;
  }
  </style>
  