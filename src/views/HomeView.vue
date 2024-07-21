<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const username = ref(''); // should be dynamically fetched based on logged-in user

onMounted(async () => {
  // Fetch username or other user data here
});
</script>
<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-200 to-blue-200 text-gray-700 overflow-hidden">
    <div class="w-full max-w-6xl p-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-4xl font-bold text-center mb-6">Welcome to ClassRank, {{ username }}!</h1>
      
      <div class="flex flex-col md:flex-row gap-6 mb-8">
        
        <div class="flex-1 md:w-2/3 lg:w-1/3 flex flex-col items-center bg-blue-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h2 class="text-2xl font-semibold mb-2">Call to Action</h2>
          <p class="text-center">Have you taken a new class? Share your experiences!</p>
        </div>
        
        <div class="flex-1 md:w-2/3 lg:w-1/3 flex flex-col items-center bg-yellow-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h2 class="text-2xl font-semibold mb-2">About the Platform</h2>
          <p class="text-center">Helping Lasallians succeed by sharing firsthand class experiences.</p>
        </div>
        
        <div class="flex-1 md:w-2/3 lg:w-1/3 flex flex-col items-center bg-purple-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h2 class="text-2xl font-semibold mb-2">How It Works</h2>
          <p class="text-center">Register, find classes, share reviews!</p>
        </div>

        <div class="flex-1 md:w-2/3 lg:w-1/3 flex flex-col items-center bg-pink-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h2 class="text-2xl font-semibold mb-2">Latest Reviews</h2>
          <p class="text-center">Stay updated with the most recent class reviews from fellow students.</p>
        </div>

      </div>
      
      <div class="text-center">
        <router-link to="/threads" class="bg-green-500 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105 no-underline">Start Sharing</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-gradient-to-r {
  background: linear-gradient(to right, #e0f2f1, #f1f8e9); /* Subtle pastel gradient */
}

.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.text-gray-700 {
  color: #4a4a4a;
}
.p-6 {
  padding: 1.5rem;
}
.bg-white {
  background-color: white;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.text-4xl {
  font-size: 2.25rem;
}
.font-bold {
  font-weight: 700;
}
.text-center {
  text-align: center;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.text-2xl {
  font-size: 1.3rem;
}
.mb-8 {
  margin-bottom: 2rem;
}
.flex-col {
  flex-direction: column;
}
.md\:flex-row {
  flex-direction: row;
}
.gap-6 {
  gap: 1.5rem;
}
.bg-blue-100 {
  background-color: #ebf8ff;
}
.bg-yellow-100 {
  background-color: #fffbea;
}
.bg-purple-100 {
  background-color: #faf5ff;
}
.bg-pink-100 {
  background-color: #ffe4e6;
}
.font-semibold {
  font-weight: 600;
}
.transition-transform {
  transition: transform 0.3s;
}
.transform {
  transform: scale(1);
}
.hover\:scale-105:hover {
  transform: scale(1.05);
}
.bg-green-500 {
  background-color: #48bb78;
}
.text-white {
  color: white;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.no-underline {
  text-decoration: none;
}
.overflow-hidden {
  overflow: hidden;
}
</style>
