<template>
  <div v-if="data">
    <Visual :src="src" alt="Edit Data Room" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h2 class="title">Edit Data</h2>
        <form @submit.prevent="updateData">
          <div class="field">
            <label for="title" class="label">Title:</label>
            <div class="control">
              <input type="text" id="title" v-model="data.title" class="input" required>
            </div>
          </div>
          <div class="field">
            <label for="content" class="label">Content:</label>
            <div class="control">
              <textarea id="content" v-model="data.content" class="textarea" required></textarea>
            </div>
          </div>
          <div class="field">
            <label for="author" class="label">Author:</label>
            <div class="control">
              <input type="text" id="author" v-model="data.author" class="input" required>
            </div>
          </div>
          <div class="field">
            <label for="file" class="label">Upload New File:</label>
            <div class="control">
              <input type="file" id="file" @change="handleFileUpload" class="input">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button type="submit" class="button is-primary">Update</button>
            </div>
          </div>
        </form>
      </div>
    </section>
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