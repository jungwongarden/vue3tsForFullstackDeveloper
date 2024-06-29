<template>
  <div>
    <Visual :src="src" alt="User" />
    <Breadcrumb :group="breadcrumbGroup" :current="current" :href="href"/>
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">사용자 상세 정보</h1>
        <table class="table is-bordered">
          <tbody>
            <tr>
              <th>ID</th>
              <td>{{ user.id }}</td>
            </tr>
            <tr>
              <th>PW</th>
              <td>
                <input type="password" class="input" id="pw" v-model="user.pw" readonly>
              </td>
            </tr>
            <tr>
              <th>사용자 이름</th>
              <td>{{ user.name }}</td>
            </tr>
            <tr>
              <th>이메일</th>
              <td>{{ user.email }}</td>
            </tr>
            <tr>
              <th>가입일</th>
              <td>{{ user.regdate }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
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
      src: require('@/assets/vs018.jpg'),
      breadcrumbGroup: 'User',
      current: 'Detail',
      href: '/user/mypage'
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

<style scoped>
.container {
  margin-top: 30px;
}
</style>