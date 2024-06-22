<template>
    <div>
      <h1>Community</h1>
      <div class="form">
        <input v-model="newPost.title" placeholder="Post Title" /> <br><br>
        <textarea v-model="newPost.content" placeholder="Post Content"></textarea> <br><br>
        <button @click="addPost">Add Post</button>
      </div>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">{{ post.title }}</router-link>
          <button @click="deletePost(post.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  import { Post } from '@/model';
  
  export default defineComponent({
    name: 'Community',
    data() {
      return {
        newPost: {
          title: '',
          content: ''
        }
      };
    },
    computed: {
      posts(): Post[] {
        const store = useStore();
        return store.state.posts;
      }
    },
    methods: {
      async addPost() {
        const store = useStore();
        const post: Post = {
          id: Math.floor(Math.random() * 1000), // 임의의 ID 생성 (실제로는 서버에서 생성)
          title: this.newPost.title,
          content: this.newPost.content
        };
        await store.dispatch('addPost', post);
        this.newPost.title = '';
        this.newPost.content = '';
      },
      async deletePost(id: number) {
        const store = useStore();
        await store.dispatch('deletePost', id);
      }
    }
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>