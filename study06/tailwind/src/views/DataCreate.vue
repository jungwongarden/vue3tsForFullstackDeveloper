<template>
  <div>
    <Visual :src="src" alt="Create Data Room" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <div class="container mx-auto mt-5">
      <h2 class="text-3xl font-bold">Create New Data</h2>
      <form @submit.prevent="createData" class="mt-4">
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">Title:</label>
          <input type="text" id="title" v-model="title"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required>
        </div>
        <div class="mb-4">
          <label for="content" class="block text-sm font-medium text-gray-700">Content:</label>
          <textarea id="content" v-model="content"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required></textarea>
        </div>
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium text-gray-700">Author:</label>
          <input type="text" id="author" v-model="author"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required>
        </div>
        <div class="mb-4">
          <label for="file" class="block text-sm font-medium text-gray-700">Upload File:</label>
          <input type="file" id="file" @change="handleFileUpload"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required>
        </div>
        <button type="submit"
          class="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          Create
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
import axios from 'axios';

export default defineComponent({
  name: 'DataCreate',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      title: '',
      content: '',
      author: '',
      file: null as File | null,
      src: new URL('@/assets/vs018.jpg', import.meta.url).href,
      breadcrumbGroup: 'Data Room',
      current: 'Create',
      href: "/data/list"
    };
  },
  methods: {
    handleFileUpload(event: Event) {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        this.file = target.files[0];
      }
    },
    async createData() {
      if (!this.file) {
        alert('File is required!');
        return;
      }

      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('author', this.author);
      formData.append('file', this.file);

      try {
        const response = await axios.post('http://localhost:3000/data', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (response.data.success) {
          alert('Data created successfully!');
          this.$router.push({ name: 'DataList' });
        } else {
          alert('Failed to create data!');
        }
      } catch (error) {
        console.error(error);
        alert('Error creating data!');
      }
    }
  }
});
</script>