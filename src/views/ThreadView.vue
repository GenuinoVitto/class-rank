<template>
  <div class="w-screen h-screen flex">
    <div class="w-[250px] h-full bg-gray-200 px-3 py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
        <li>
          <RouterLink to="/home" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="30" viewBox="0 0 50 50">
              <path d="M 24.960938 2.1015625 A 1.0001 1.0001 0 0 0 24.386719 2.3105469 L 1.3867188 20.210938 A 1.0001 1.0001 0 1 0 2.6132812 21.789062 L 4 20.708984 L 4 48 A 1.0001 1.0001 0 0 0 5 49 L 18.832031 49 A 1.0001 1.0001 0 0 0 19.158203 49 L 30.832031 49 A 1.0001 1.0001 0 0 0 31.158203 49 L 45 49 A 1.0001 1.0001 0 0 0 46 48 L 46 20.708984 L 47.386719 21.789062 A 1.0001 1.0001 0 1 0 48.613281 20.210938 L 25.613281 2.3105469 A 1.0001 1.0001 0 0 0 24.960938 2.1015625 z M 25 4.3671875 L 44 19.154297 L 44 47 L 32 47 L 32 29 A 1.0001 1.0001 0 0 0 31 28 L 19 28 A 1.0001 1.0001 0 0 0 18 29 L 18 47 L 6 47 L 6 19.154297 L 25 4.3671875 z M 20 30 L 30 30 L 30 47 L 20 47 L 20 30 z"></path>
            </svg>
            <span class="ms-3">Home</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/threads" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 no-underline">
            <svg id="Layer_1" x="0px" y="0px" width="20" height="30" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 96.44"><title>open-book</title><path d="M12,73.51q.2-34.74.39-69.38A3.21,3.21,0,0,1,15,1h0C23.4-.75,36.64-.31,45.63,3.14a35.46,35.46,0,0,1,16,11.65,37.34,37.34,0,0,1,16-11.15C86.12.4,99-.38,108.23,1A3.2,3.2,0,0,1,111,4.14h0V73.8A3.21,3.21,0,0,1,107.77,77a3.49,3.49,0,0,1-.74-.09A53.45,53.45,0,0,0,83.58,79.1a71,71,0,0,0-15.77,8.26,69.09,69.09,0,0,1,21.24-3.1,125.42,125.42,0,0,1,27.41,3.48V14.84h3.21a3.21,3.21,0,0,1,3.21,3.21V91.94a3.21,3.21,0,0,1-3.21,3.21,3.18,3.18,0,0,1-1-.17A121.77,121.77,0,0,0,89,90.65a61.89,61.89,0,0,0-25.76,5.26,3.39,3.39,0,0,1-3.64,0,61.86,61.86,0,0,0-25.76-5.26A121.77,121.77,0,0,0,4.24,95a3.18,3.18,0,0,1-1,.17A3.21,3.21,0,0,1,0,91.94V18.05a3.21,3.21,0,0,1,3.21-3.21H6.42v72.9a125.42,125.42,0,0,1,27.41-3.48,68.84,68.84,0,0,1,22.71,3.57A48.7,48.7,0,0,0,41,79.39c-7-2.3-17.68-3.07-25.49-2.4A3.21,3.21,0,0,1,12,74.06a5,5,0,0,1,0-.55ZM73.64,64.4a2.3,2.3,0,1,1-2.5-3.85,51.46,51.46,0,0,1,11.8-5.4,53.73,53.73,0,0,1,13-2.67,2.29,2.29,0,1,1,.25,4.58,49.42,49.42,0,0,0-11.79,2.46A46.73,46.73,0,0,0,73.64,64.4Zm.2-17.76a2.29,2.29,0,0,1-2.46-3.87,52.71,52.71,0,0,1,11.74-5.3A54.12,54.12,0,0,1,95.9,34.85a2.3,2.3,0,0,1,.25,4.59,49.3,49.3,0,0,0-11.63,2.4,48,48,0,0,0-10.68,4.8Zm.06-17.7a2.3,2.3,0,1,1-2.46-3.89,52.54,52.54,0,0,1,11.72-5.27,53.71,53.71,0,0,1,12.74-2.6,2.29,2.29,0,1,1,.25,4.58,49.35,49.35,0,0,0-11.59,2.39A47.91,47.91,0,0,0,73.9,28.94ZM51.74,60.55a2.3,2.3,0,1,1-2.5,3.85,46.73,46.73,0,0,0-10.72-4.88,49.42,49.42,0,0,0-11.79-2.46A2.29,2.29,0,1,1,27,52.48a53.73,53.73,0,0,1,13,2.67,51.46,51.46,0,0,1,11.8,5.4ZM51.5,42.77A2.29,2.29,0,0,1,49,46.64a48,48,0,0,0-10.68-4.8,49.3,49.3,0,0,0-11.63-2.4A2.3,2.3,0,0,1,27,34.85a54.12,54.12,0,0,1,12.78,2.62,52.71,52.71,0,0,1,11.74,5.3Zm-.06-17.72A2.3,2.3,0,1,1,49,28.94a47.91,47.91,0,0,0-10.66-4.79,49.35,49.35,0,0,0-11.59-2.39A2.29,2.29,0,1,1,27,17.18a53.71,53.71,0,0,1,12.74,2.6,52.54,52.54,0,0,1,11.72,5.27ZM104.56,7c-7.42-.7-18.06.12-24.73,2.65A30,30,0,0,0,64.7,21.46V81.72a76.76,76.76,0,0,1,16.72-8.66,62.85,62.85,0,0,1,23.14-2.87V7ZM58.28,81.1V21.37c-3.36-5.93-8.79-9.89-14.93-12.24-7-2.67-17.75-3.27-24.56-2.3l-.36,63.56c7.43-.27,17.69.68,24.52,2.91a54.94,54.94,0,0,1,15.33,7.8Z"/></svg>
            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Threads</span>
          </RouterLink>
        </li>
        <!-- <li>
          <RouterLink to="/classes" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 no-underline">
            <svg x="0px" y="0px" xmlns="http://www.w3.org/2000/svg" width="20" height="25" id="teaching"><path d="M8.373 14.917a3.277 3.277 0 0 0 3.273-3.274 3.279 3.279 0 0 0-3.273-3.276 3.28 3.28 0 0 0-3.275 3.276 3.278 3.278 0 0 0 3.275 3.274zm0-5.55a2.276 2.276 0 0 1 0 4.55 2.277 2.277 0 0 1-2.275-2.274 2.278 2.278 0 0 1 2.275-2.276zm13.018 3.173h4.027a.5.5 0 0 0 0-1h-4.027a.5.5 0 0 0 0 1z"></path><path d="M31.525 24.478h-.635V4.815a.5.5 0 0 0-.5-.5H1.611a.5.5 0 0 0-.5.5v19.663H.473a.5.5 0 0 0-.5.5v2.207a.5.5 0 0 0 .5.5h31.053a.5.5 0 0 0 .5-.5v-2.207a.5.5 0 0 0-.501-.5zM2.111 5.315H29.89v19.163H12.639v-4.426l2.909.979a.5.5 0 0 0 .493-.101l3.56-3.187 1.123-.198a.498.498 0 0 0 .411-.534l-.223-2.636a.5.5 0 0 0-.498-.458h-.281l.422-1.76a.5.5 0 0 0-.973-.233l-.402 1.674-.12-.082a.506.506 0 0 0-.461-.052.504.504 0 0 0-.306.349l-.306 1.271-2.771 2.234-3.062-2.161a.495.495 0 0 0-.288-.091H5.565c-.526 0-.845.23-1.02.423-.458.507-.396 1.258-.391 1.292v7.699H2.111V5.315zM.973 25.478h3.184v1.207H.973v-1.207zm4.183 1.207v-1.709l-.003-8.247c-.01-.101.003-.424.136-.57.023-.025.084-.093.307-.093h6.112l3.24 2.287a.5.5 0 0 0 .602-.02l3.197-2.577a.507.507 0 0 0 .173-.272l.177-.735.121.082c.008.005.018.003.024.008.044.026.088.052.14.064a.518.518 0 0 0 .116.014h.456l.146 1.723-.813.144a.503.503 0 0 0-.247.12l-3.448 3.088-3.293-1.108a.499.499 0 0 0-.659.473v7.329H5.156zm25.869 0H12.639v-1.207h18.387v1.207z"></path></svg>
            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Classes</span>
          </RouterLink>
        </li> -->
      </ul>
    </div>

    <div class="flex-1 h-full bg-gray-100 p-8 overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-xl font-bold">Active Threads</h1>
        <button @click="toggleCreateForm" class="bg-green-500 text-white px-4 py-2 rounded create-button">Create</button>
      </div>
      <div v-if="showCreateForm" class="bg-white p-4 rounded shadow mb-4">
        <input v-model="newThread.name" type="text" placeholder="Class Name" class="block w-full mb-2 p-2 border rounded">
        <input v-model="newThread.code" type="text" placeholder="Class Code" class="block w-full mb-2 p-2 border rounded">
        <textarea v-model="newThread.description" placeholder="Description" class="block w-full mb-2 p-2 border rounded" maxlength="1000" style="resize: none;"></textarea>
        <p class="text-right text-gray-500">{{ remainingCharacters }} characters left</p>
        <div class="flex space-x-4">
          <button @click="addThread" class="bg-blue-500 text-white px-4 py-2 rounded add-thread-button">Add Class</button>
          <button @click="cancelEdit" class="bg-red-500 text-white px-4 py-2 rounded cancel-button" v-if="isEditing">Cancel</button>
        </div>
        <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
        <p v-if="successMessage" class="text-green-500">{{ successMessage }}</p>
      </div>
      <div class="space-y-4">
        <div v-for="(thread, index) in threads" :key="index" class="bg-white p-4 rounded shadow">
          <div class="flex items-center space-x-4">
            <img src="https://via.placeholder.com/50" alt="Profile Picture" class="w-10 h-10 rounded-full">
            <div class="flex-1">
              <h2 class="font-semibold">{{ thread.name }}</h2>
              <p class="text-gray-500">{{ thread.code }}</p>
              <p class="text-gray-400 text-sm">{{ formatTime(thread.time) }}</p>
            </div>
            <button @click="editThread(index)" class="text-yellow-500 hover:text-yellow-700 bg-yellow-100 px-2 py-1 rounded edit-button">Edit</button>
            <button @click="deleteThread(index)" class="text-red-500 hover:text-red-700 bg-red-100 px-2 py-1 rounded delete-button">Delete</button>
          </div>
          <p class="mt-2 break-words">{{ thread.description }}</p>
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
        code: '',
        description: ''
      },
      threads: [],
      errorMessage: '',
      successMessage: '',
      maxCharacters: 1000,
      editIndex: null,
      isEditing: false,
      originalThread: {}
    }
  },
  computed: {
    remainingCharacters() {
      return this.maxCharacters - this.newThread.description.length;
    },
  },
  methods: {
    toggleCreateForm() {
      this.showCreateForm = !this.showCreateForm;
      this.errorMessage = '';
      this.successMessage = '';
      this.resetForm();
    },
    addThread() {
      this.errorMessage = '';
      this.successMessage = '';

      if (!this.newThread.name && !this.newThread.description) {
        this.errorMessage = 'Class name and description are required';
        return;
      }
      if (!this.newThread.name) {
        this.errorMessage = 'Class name is required';
        return;
      }
      if (!this.newThread.description) {
        this.errorMessage = 'Description is required';
        return;
      }

      if (this.isEditing) {
        if (JSON.stringify(this.newThread) === JSON.stringify(this.originalThread)) {
          this.errorMessage = 'No changes made';
          return;
        }
        this.threads.splice(this.editIndex, 1, { ...this.newThread, time: new Date().toISOString() });
        this.isEditing = false;
        this.editIndex = null;
        this.successMessage = 'Class updated successfully';
      } else {
        this.threads.unshift({ ...this.newThread, time: new Date().toISOString() });
        this.successMessage = 'Class added successfully';
      }

      setTimeout(() => {
        localStorage.setItem('threads', JSON.stringify(this.threads));
        this.resetForm();
        this.showCreateForm = false;
      }, 500); // Short delay before updating the page

      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    },
    deleteThread(index) {
      this.threads.splice(index, 1);
      localStorage.setItem('threads', JSON.stringify(this.threads));
    },
    editThread(index) {
      this.newThread = { ...this.threads[index] };
      this.originalThread = { ...this.threads[index] };
      this.showCreateForm = true;
      this.editIndex = index;
      this.isEditing = true;
    },
    cancelEdit() {
      this.resetForm();
      this.showCreateForm = false;
      this.isEditing = false;
    },
    formatTime(time) {
      const date = new Date(time);
      return date.toLocaleString();
    },
    loadThreads() {
      const storedThreads = localStorage.getItem('threads');
      if (storedThreads) {
        this.threads = JSON.parse(storedThreads);
      }
    },
    resetForm() {
      this.newThread.name = '';
      this.newThread.code = '';
      this.newThread.description = '';
      this.errorMessage = '';
      this.successMessage = '';
    }
  },
  mounted() {
    this.loadThreads();
  }
}
</script>

<style scoped>
button {
  transition: background-color 0.3s;
}
.create-button:hover {
  background-color: #3b7a33; 
}
.add-thread-button:hover {
  background-color: #3b5998; 
}
.cancel-button:hover {
  background-color: #cc0000; 
}
.delete-button:hover {
  background-color: #ff1a1a; 
}
.edit-button:hover {
  background-color: #ffd700;
}
textarea {
  resize: none; 
}
.break-words {
  word-break: break-word; 
}
.font-semibold {
  margin-bottom: 1px;
}
.text-gray-500 {
  margin-bottom: 1px;
  font-size: 1.3rem;
}
.text-gray-400 {
  font-size: 0.8rem;
}
</style>