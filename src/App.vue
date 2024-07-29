<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import axios from 'axios'
import HomeView from './views/HomeView.vue';
import HelloWorld from './components/HelloWorld.vue';
import LoginView from './views/LoginView.vue';

const router = useRouter()
const toggleDropdown = ref(false)

const signOut = async () => {
  try {
    // Assuming you are using JWT and you need to invalidate the token on the server
    console.log("logout");
    // Clear user data from localStorage or any other storage
    localStorage.removeItem('user')

    // Redirect to login or home page
    setTimeout(() => {
        alert("Logging Out...")
        router.push('/login') // Redirect to login page
    }, 1000); // 2000 milliseconds = 2 seconds
  } catch (error) {
    console.error('Error signing out:', error)
  }
}

onMounted(() => {
  const button = document.getElementById('user-menu-button')
  const dropdown = document.getElementById('user-dropdown')
  
  button.addEventListener('click', () => {
    dropdown.classList.toggle('hidden')
  })
})
</script>

<template>
  <!-- NAVBAR -->
  <nav class="bg-white border-b border-gray-200 dark:bg-gray-900 sticky top-0 z-50 h-16">
    <div class="max-w-screen-xl flex items-center justify-between mx-auto h-full px-4">
      <a href="/Threads" class="flex items-center space-x-2  rtl:space-x-reverse no-underline">
        <img src="/src/assets/logo-img.png" class="h-10" alt="ClassRank Logo" />
        <span class="text-green-800 text-2xl font-semibold whitespace-nowrap dark:text-white logo-text">classrank</span>
      </a>

      <div class="flex-grow flex justify-center md:order-2">
        <div class="relative w-full max-w-md">
          <input 
            v-model="searchQuery"
            type="text" 
            id="search-navbar" 
            class="block w-full p-2 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center" 
            placeholder="Search..." 
            aria-label="Search"
          >
          <button 
            class="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none" 
            aria-label="Search button"
          >
            <svg 
              class="w-5 h-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 20 20"
            >
              <path 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- User -->
      <div class="flex items-center md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
        <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom" href="views/ProfileView.vue">
          <span class="sr-only">Open user menu</span>
          <img class="w-10 h-10 rounded-full" src="/src/assets/blank-profile.png" alt="user photo">
        </button>
        <!-- Dropdown menu -->
        <div class="absolute translate-y-28 z-50 hidden  text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white">User</span>
            <span class="block text-sm text-gray-500 truncate dark:text-gray-400">classrank.com</span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li class="hover:bg-gray-100 dark:hover:bg-gray-600">
              <a href="/Threads" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white no-underline">Dashboard</a>
            </li>
            <li class="hover:bg-gray-100 dark:hover:bg-gray-600">
              <button @click="signOut" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
            </li>
          </ul>
        </div>
        <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>

      <div class="flex md:order-1">
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>

      <div class="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-search">
        <div class="relative mt-3 md:hidden">
          <input type="text" id="search-navbar" class="block w-full p-2 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
          <div class="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- END OF NAVBAR -->

  <!-- router view for pages -->
  <RouterView />
</template>

<script>
import ThreadView from './views/ThreadView.vue';
export default {
  components: {
    ThreadView
  },
  data() {
    return {
      searchQuery: ''
    };
  }
}
</script>

<style scoped>
nav {
  height: 4rem;
}
.logo-text {
  font-size: 1.5rem;
}

.relative.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.pe-10 {
  padding-right: 2.5rem;
}

.pe-3 {
  padding-right: 0.75rem;
}

input:focus {
  outline: none;
  border-color: #2563eb; 
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.4); 
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.4);
}

#user-dropdown {
  min-width: 12rem; 
}
</style>