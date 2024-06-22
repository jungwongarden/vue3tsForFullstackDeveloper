<template>
    <div v-if="data">
      <Visual :src="src" alt="Edit Data Room" />
      <Breadcrumb group="Data Room" current="Edit" :href="href" />
      <div class="container mt-5">
        <h2>Edit Data</h2>
        <form @submit.prevent="updateData">
          <div class="mb-3">
            <label for="title" class="form-label">Title:</label>
            <input type="text" id="title" v-model="data.title" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">Content:</label>
            <textarea id="content" v-model="data.content" class="form-control" required></textarea>
          </div>
          <div class="mb-3">
            <label for="author" class="form-label">Author:</label>
            <input type="text" id="author" v-model="data.author" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="file" class="form-label">Upload New File:</label>
            <input type="file" id="file" @change="handleFileUpload" class="form-control">
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
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