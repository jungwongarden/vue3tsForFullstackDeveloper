<template>
    <div>
      <Visual :src="src" alt="Create Data Room" />
      <Breadcrumb group="Data Room" current="Create" :href="href" />
      <div class="container mt-5">
        <h2>Create New Data</h2>
        <form @submit.prevent="createData">
          <div class="mb-3">
            <label for="title" class="form-label">Title:</label>
            <input type="text" id="title" v-model="title" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">Content:</label>
            <textarea id="content" v-model="content" class="form-control" required></textarea>
          </div>
          <div class="mb-3">
            <label for="author" class="form-label">Author:</label>
            <input type="text" id="author" v-model="author" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="file" class="form-label">Upload File:</label>
            <input type="file" id="file" @change="handleFileUpload" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary">Create</button>
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