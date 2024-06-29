<template>
    <div class="w-full bg-gray-200 py-2">
      <nav aria-label="breadcrumb" class="container mx-auto">
        <ol class="flex space-x-2 text-gray-700">
          <li class="breadcrumb-item">
            <a href="#" class="text-blue-600 hover:underline">Home</a>  &gt;
          </li>
          <li class="breadcrumb-item">
            <a :href="href" id="group" class="text-blue-600 hover:underline">{{ group }}</a>  &gt; 
          </li>
          <li class="breadcrumb-item text-gray-500" aria-current="page" id="current">{{ current }}</li>
        </ol>
      </nav>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Breadcrumb',
    props: {
      group: {
        type: String,
        required: true
      },
      current: {
        type: String,
        required: true
      },
      href: {
        type: String,
        required: true
      }
    }
  });
  </script>
  
  <style scoped>
  /* Additional custom styles if needed */
  </style>