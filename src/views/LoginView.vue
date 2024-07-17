<template>
  <div class="container d-flex align-items-center justify-content-center min-vh-100">
    <div class="col-md-6">
      <div class="card shadow">
        <div class="card-body">
          <h5 class="card-title text-center">Welcome to ClassRank</h5>
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="email" class="form-label">DLSU email</label>
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
</template>

<script>
import axios from 'axios';
import loginBg from '@/assets/login-bg.png';

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:5000/login', {
          email: this.email,
          password: this.password
        });
        console.log('Login successful:', response.data);
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    signUp() {
      this.$router.push('/register');
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

</style>