<template>
  <div v-if="data">
    <Visual :src="src" alt="Data Detail" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href" />
    <div class="container mx-auto mt-5">
      <h1 class="text-3xl font-bold">Data Detail</h1>
      <table class="mt-5 w-full border-collapse border border-gray-300">
        <tr class="border-b border-gray-300">
          <th class="py-2 px-4 bg-gray-100">ID</th>
          <td class="py-2 px-4">{{ data.id }}</td>
        </tr>
        <tr class="border-b border-gray-300">
          <th class="py-2 px-4 bg-gray-100">Title</th>
          <td class="py-2 px-4">{{ data.title }}</td>
        </tr>
        <tr class="border-b border-gray-300">
          <th class="py-2 px-4 bg-gray-100">Author</th>
          <td class="py-2 px-4">{{ data.author }}</td>
        </tr>
        <tr class="border-b border-gray-300">
          <th class="py-2 px-4 bg-gray-100">Date</th>
          <td class="py-2 px-4">{{ data.resdate }}</td>
        </tr>
        <tr class="border-b border-gray-300">
          <th class="py-2 px-4 bg-gray-100">Content</th>
          <td class="py-2 px-4">{{ data.content }}</td>
        </tr>
        <tr class="border-b border-gray-300">
          <th class="py-2 px-4 bg-gray-100">File</th>
          <td class="py-2 px-4">
            <a :href="fileUrl" download class="text-blue-500 hover:underline">Download</a>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
import datarooms from '@/assets/dataroom.json';

export default defineComponent({
  name: 'DataDetail',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      data: null as any,
      fileUrl: '',
      src: new URL('@/assets/vs018.jpg', import.meta.url).href,
      breadcrumbGroup: 'Data Room',
      current: 'Detail',
      href: "/data/list"
    };
  },
  created() {
    const route = useRoute();
    const id = parseInt(route.params.id as string, 10);
    this.data = datarooms.find(d => d.id === id);
    if (this.data && this.data.dataurl) {
      this.fileUrl = `${process.env.BASE_URL}assets/upload/${this.data.dataurl.split('/').pop()}`;
    }
  }
});
</script>