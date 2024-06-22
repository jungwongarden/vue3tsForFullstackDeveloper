<template>
    <div>
      <router-link to="/">홈</router-link>
      <router-link to="/about">소개</router-link>
      <router-link to="/product">상품</router-link>
      <router-link to="/community">커뮤니티</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header'
  };
  </script>
  
  <style scoped>
  div {
    display: flex;
    gap: 10px;
  }
  </style>