<template>
    <div>
      <h1>Community Page</h1>
      <p>Manage your community posts here.</p>
      <div>
        <h2>Post List</h2>
        <ul>
          <li v-for="post in posts" :key="post.id">
            {{ post.title }} - {{ post.content }}
            <button @click="deletePost(post.id)">Delete</button>
          </li>
        </ul>
      </div>
      <div>
        <h2>Add Post</h2>
        <form @submit.prevent="addPost">
          <input v-model="newPost.title" placeholder="Title" />
          <input v-model="newPost.content" placeholder="Content" />
          <button type="submit">Add</button>
        </form>
      </div>
      <button @click="replaceToPage('home')">Replace to Home</button>
      <button @click="goBack">Back</button>
      <button @click="goForward">Forward</button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        newPost: {
          id: 0,
          title: '',
          content: ''
        }
      };
    },
    computed: {
      ...mapState(['posts'])
    },
    methods: {
      ...mapActions(['addPost', 'deletePost']),
      addPost() {
        this.addPost({ ...this.newPost, id: Date.now() });
        this.newPost = { id: 0, title: '', content: '' };
      },
      replaceToPage(page) {
        this.$router.replace({ name: page });
      },
      goBack() {
        this.$router.go(-1);
      },
      goForward() {
        this.$router.go(1);
      }
    }
  };
  </script>