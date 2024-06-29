<template>
  <div>
    <Visual :src="src" alt="Create Data Room" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h2 class="title">Create New Data</h2>
        <form @submit.prevent="createData">
          <div class="field">
            <label for="title" class="label">Title:</label>
            <div class="control">
              <input type="text" id="title" v-model="title" class="input" required>
            </div>
          </div>
          <div class="field">
            <label for="content" class="label">Content:</label>
            <div class="control">
              <textarea id="content" v-model="content" class="textarea" required></textarea>
            </div>
          </div>
          <div class="field">
            <label for="author" class="label">Author:</label>
            <div class="control">
              <input type="text" id="author" v-model="author" class="input" required>
            </div>
          </div>
          <div class="field">
            <label for="file" class="label">Upload File:</label>
            <div class="control">
              <input type="file" id="file" @change="handleFileUpload" class="input" required>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button type="submit" class="button is-primary">Create</button>
            </div>
          </div>
        </form>
      </div>
    </section>
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