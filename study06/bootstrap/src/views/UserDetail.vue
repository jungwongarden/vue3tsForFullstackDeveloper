<template>
  <div>
    <Visual :src="src" alt="User" />
    <Breadcrumb group="User" current="Detail" :href="href"/>
    <div class="container mt-5">
      <h1>User Detail</h1>
      <table class="table table-bordered">
        <tr>
          <th>ID</th>
          <td>{{ user.id }}</td>
        </tr>
        <tr>
          <th>PW</th>
          <td><input type="password" class="form-control" id="pw" v-model="user.pw" readonly></td>
        </tr>
        <tr>
          <th>Username</th>
          <td>{{ user.name }}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{{ user.email }}</td>
        </tr>
        <tr>
          <th>Registration Date</th>
          <td>{{ user.regdate }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';

export default defineComponent({
  name: 'UserDetail',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      user: {
        id: '',
        pw: '',
        name: '',
        email: '',
        regdate: ''
      },
      src: new URL('@/assets/vs018.jpg', import.meta.url).href,
      href: "/user/mypage"
    };
  },
  created() {
    // 예시: 세션에서 현재 사용자 정보를 가져와서 데이터 바인딩
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
    this.user.id = currentUser.id;
    this.user.pw = currentUser.pw;
    this.user.name = currentUser.name;
    this.user.email = currentUser.email;
    this.user.regdate = currentUser.regdate;
  }
});
</script>

<style>
.table td, .table th { line-height: 3; }
</style>