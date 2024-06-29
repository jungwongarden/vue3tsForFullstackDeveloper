<template>
  <div>
    <Visual :src="src" alt="Data List" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <div class="container mx-auto mt-5">
      <h1 class="text-3xl font-bold">Data List</h1>
      <table class="table-auto w-full mt-5 border-collapse border border-gray-200">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Title</th>
            <th class="px-4 py-2">Author</th>
            <th class="px-4 py-2">Date</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in datarooms" :key="data.id" class="border-t border-gray-200">
            <td class="px-4 py-2">{{ data.id }}</td>
            <td class="px-4 py-2">{{ data.title }}</td>
            <td class="px-4 py-2">{{ data.author }}</td>
            <td class="px-4 py-2">{{ data.resdate }}</td>
            <td class="px-4 py-2">
              <router-link :to="{ name: 'DataDetail', params: { id: data.id } }" class="text-indigo-600 hover:text-indigo-900 mr-2">View</router-link>
              <router-link :to="{ name: 'DataEdit', params: { id: data.id } }" class="text-yellow-600 hover:text-yellow-900 mr-2">Edit</router-link>
              <button @click="deleteData(data.id)" class="text-red-600 hover:text-red-900">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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