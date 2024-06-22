<template>
    <div v-if="data">
      <Visual :src="src" alt="Data Detail" />
      <Breadcrumb group="Data Room" current="Detail" :href="href" />
      <div class="container mt-5">
        <h1>Data Detail</h1>
        <table class="table table-bordered">
          <tr>
            <th>ID</th>
            <td>{{ data.id }}</td>
          </tr>
          <tr>
            <th>Title</th>
            <td>{{ data.title }}</td>
          </tr>
          <tr>
            <th>Author</th>
            <td>{{ data.author }}</td>
          </tr>
          <tr>
            <th>Date</th>
            <td>{{ data.resdate }}</td>
          </tr>
          <tr>
            <th>Content</th>
            <td>{{ data.content }}</td>
          </tr>
          <tr>
            <th>File</th>
            <td><a :href="fileUrl" download>Download</a></td>
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