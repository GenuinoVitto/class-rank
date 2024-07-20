<template>
  <div class="w-screen h-screen flex">
    <div class="w-[400px] h-full bg-gray-200 px-3 py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
        <image src=""></image>
        <li>
          <RouterLink to="/" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="30" viewBox="0 0 50 50">
              <path d="M 24.960938 2.1015625 A 1.0001 1.0001 0 0 0 24.386719 2.3105469 L 1.3867188 20.210938 A 1.0001 1.0001 0 1 0 2.6132812 21.789062 L 4 20.708984 L 4 48 A 1.0001 1.0001 0 0 0 5 49 L 18.832031 49 A 1.0001 1.0001 0 0 0 19.158203 49 L 30.832031 49 A 1.0001 1.0001 0 0 0 31.158203 49 L 45 49 A 1.0001 1.0001 0 0 0 46 48 L 46 20.708984 L 47.386719 21.789062 A 1.0001 1.0001 0 1 0 48.613281 20.210938 L 25.613281 2.3105469 A 1.0001 1.0001 0 0 0 24.960938 2.1015625 z M 25 4.3671875 L 44 19.154297 L 44 47 L 32 47 L 32 29 A 1.0001 1.0001 0 0 0 31 28 L 19 28 A 1.0001 1.0001 0 0 0 18 29 L 18 47 L 6 47 L 6 19.154297 L 25 4.3671875 z M 20 30 L 30 30 L 30 47 L 20 47 L 20 30 z"></path>
            </svg>
            <span class="ms-3">Home</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/threads" href="#" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Threads</span>
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="w-full h-full bg-gray-100 p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-xl font-bold">Threads</h1>
        <button @click="showCreateForm = !showCreateForm" class="bg-green-500 text-white px-4 py-2 rounded create-button">Create</button>
      </div>
      <div v-if="showCreateForm" class="bg-white p-4 rounded shadow mb-4">
        <input v-model="newThread.name" type="text" placeholder="Name" class="block w-full mb-2 p-2 border rounded">
        <textarea v-model="newThread.content" placeholder="Content" class="block w-full mb-2 p-2 border rounded"></textarea>
        <button @click="addThread" class="bg-blue-500 text-white px-4 py-2 rounded add-thread-button">Add Thread</button>
      </div>
      <div class="space-y-4">
        <div v-for="(thread, index) in threads" :key="index" class="bg-white p-4 rounded shadow">
          <div class="flex items-center space-x-4">
            <img src="https://via.placeholder.com/50" alt="Profile Picture" class="w-10 h-10 rounded-full">
            <div class="flex-1">
              <h2 class="font-semibold">{{ thread.name }}</h2>
              <p class="text-gray-500">{{ thread.time }}</p>
            </div>
            <button @click="deleteThread(index)" class="text-red-500 hover:text-red-700 bg-red-100 px-2 py-1 rounded delete-button">Delete</button>
          </div>
          <p class="mt-2">{{ thread.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCreateForm: false,
      newThread: {
        name: '',
        content: ''
      },
      threads: []
    }
  },
  methods: {
    addThread() {
      if (this.newThread.name && this.newThread.content) {
        this.threads.push({ ...this.newThread, time: 'Just now' });
        this.newThread.name = '';
        this.newThread.content = '';
        this.showCreateForm = false;
      } else {
        alert('Please fill in all fields');
      }
    },
    deleteThread(index) {
      this.threads.splice(index, 1);
    }
  }
}
</script>

<style scoped>
/* Improve the CSS styling if necessary */
button {
  transition: background-color 0.3s;
}
.create-button:hover {
  background-color: #3b7a33; 
}
.add-thread-button:hover {
  background-color: #3b5998; 
}
.delete-button:hover {
  background-color: #ff1a1a; 
}
</style>