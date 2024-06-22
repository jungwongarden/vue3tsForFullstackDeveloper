<template>
    <div>
      <h1>커뮤니티</h1>
      <div>
        <h2>게시글 등록</h2>
        <input v-model="newPost.title" placeholder="제목"/>
        <input v-model="newPost.content" placeholder="내용"/>
        <button @click="addPost">추가</button>
      </div>
      <div>
        <h2>게시글 목록</h2>
        <ul>
          <li v-for="post in posts" :key="post.id">
            <router-link :to="{ name: 'post-detail', params: { id: post.id }}">{{ post.title }}</router-link>
            <button @click="editPost(post)">수정</button>
            <button @click="deletePost(post.id)">삭제</button>
          </li>
        </ul>
      </div>
      <router-view></router-view>
      <button @click="replaceToPage('home')">홈으로 이동</button>
      <button @click="goBack">뒤로</button>
      <button @click="goForward">앞으로</button>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        newPost: {
          id: null,
          title: '',
          content: ''
        }
      };
    },
    computed: {
      ...mapState(['posts'])
    },
    methods: {
      addPost() {
        if (this.newPost.title && this.newPost.content) {
          const id = this.posts.length + 1;
          this.$store.dispatch('addPost', { ...this.newPost, id });
          this.newPost.title = '';
          this.newPost.content = '';
        }
      },
      editPost(post) {
        this.$router.push({ name: 'post-edit', params: { id: post.id } });
      },
      deletePost(id) {
        this.$store.commit('DELETE_POST', id);
      },
      replaceToPage(page) {
        this.$router.replace({ path: `/${page}` });
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
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>