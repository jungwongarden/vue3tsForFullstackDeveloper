<template>
  <div v-if="data">
    <Visual :src="src" alt="Edit Data Room" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <div class="container mx-auto mt-5">
      <h2 class="text-3xl font-bold">Edit Data</h2>
      <form @submit.prevent="updateData" class="mt-5">
        <div class="mb-3">
          <label for="title" class="block text-sm font-medium text-gray-700">Title:</label>
          <input type="text" id="title" v-model="data.title" class="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" required>
        </div>
        <div class="mb-3">
          <label for="content" class="block text-sm font-medium text-gray-700">Content:</label>
          <textarea id="content" v-model="data.content" rows="5" class="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" required></textarea>
        </div>
        <div class="mb-3">
          <label for="author" class="block text-sm font-medium text-gray-700">Author:</label>
          <input type="text" id="author" v-model="data.author" class="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" required>
        </div>
        <div class="mb-3">
          <label for="file" class="block text-sm font-medium text-gray-700">Upload New File:</label>
          <input type="file" id="file" @change="handleFileUpload" class="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        </div>
        <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Update
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
import axios from 'axios';
import datarooms from '@/assets/dataroom.json';

export default defineComponent({
  name: 'DataEdit',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      data: null as any,
      file: null as File | null,
      src: new URL('@/assets/vs018.jpg', import.meta.url).href,
      breadcrumbGroup: 'Data Room',
      current: 'Edit',
      href: "/data/list"
    };
  },
  created() {
    const route = useRoute();
    const id = parseInt(route.params.id as string, 10);
    this.data = datarooms.find(d => d.id === id);
  },
  methods: {
    handleFileUpload(event: Event) {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        this.file = target.files[0];
      }
    },
    async updateData() {
      if (!this.data) {
        alert('No data to update!');
        return;
      }

      const formData = new FormData();
      formData.append('title', this.data.title);
      formData.append('content', this.data.content);
      formData.append('author', this.data.author);
      if (this.file) {
        formData.append('file', this.file);
      }

      try {
        const response = await axios.post(`http://localhost:3000/data/${this.data.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (response.data.success) {
          alert('Data updated successfully!');
          this.$router.push({ name: 'DataDetail', params: { id: this.data.id } });
        } else {
          alert('Failed to update data!');
        }
      } catch (error) {
        console.error(error);
        alert('Error updating data!');
      }
    }
  }
});
</script>