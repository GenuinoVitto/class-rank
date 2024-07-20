<template>
  <div class="container d-flex align-items-center justify-content-center min-vh-100">
    <div class="col-md-6">
      <div class="card shadow">
        <div class="card-body">
          <h5 class="card-title text-center">ClassRank Registration</h5>
          <form @submit.prevent="register">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Name" v-model="name" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">DLSU email</label>
              <input type="email" class="form-control" id="email" placeholder="example@dlsu.edu.ph" v-model="email" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" required>
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
      if (!this.validateEmail(this.email)) {
        alert('Please enter a valid DLSU email address.');
        return;
      }
      try {
        const response = await axios.post('http://localhost:5000/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role
        });
        console.log('Registration successful:', response.data);
      } catch (error) {
        console.error('Registration failed:', error.response.data);
        alert(error.response.data.message);
      }
    },
    redirectToLogin() {
      this.$router.push('/login');
    },
    validateEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@dlsu\.edu\.ph$/;
      return re.test(email);
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