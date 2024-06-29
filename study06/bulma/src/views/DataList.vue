<template>
  <div>
    <Visual :src="src" alt="Data List" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">Data List</h1>
        <table class="table is-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in datarooms" :key="data.id">
              <td>{{ data.id }}</td>
              <td>{{ data.title }}</td>
              <td>{{ data.author }}</td>
              <td>{{ data.resdate }}</td>
              <td>
                <router-link :to="{ name: 'DataDetail', params: { id: data.id } }" class="button is-primary is-small">View</router-link>
                <router-link :to="{ name: 'DataEdit', params: { id: data.id } }" class="button is-warning is-small">Edit</router-link>
                <button @click="deleteData(data.id)" class="button is-danger is-small">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
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
import datarooms from '@/assets/dataroom.json';

export default defineComponent({
  name: 'DataList',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      datarooms,
      src: new URL('@/assets/vs018.jpg', import.meta.url).href,
      breadcrumbGroup: 'Data Room',
      current: 'List',
      href: "/data/list"
    };
  },
  methods: {
    async deleteData(id: number) {
      if (confirm('Are you sure you want to delete this data?')) {
        try {
          await axios.delete(`http://localhost:3000/data/${id}`);
          this.datarooms = this.datarooms.filter(data => data.id !== id);
        } catch (error) {
          console.error(error);
          alert('Error deleting data!');
        }
      }
    }
  }
});
</script>