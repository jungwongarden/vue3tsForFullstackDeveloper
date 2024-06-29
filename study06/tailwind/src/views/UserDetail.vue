<template>
  <div>
    <Visual :src="src" alt="User" />
    <Breadcrumb group="User" current="Detail" :href="href"/>
    <div class="container mt-5">
      <h1 class="text-2xl font-bold">사용자 상세 정보</h1>
      <div class="overflow-hidden border border-gray-200 shadow sm:rounded-lg mt-4">
        <table class="min-w-full divide-y divide-gray-200">
          <tbody class="bg-white divide-y divide-gray-200">
            <tr class="bg-gray-50">
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <td class="px-6 py-4 whitespace-nowrap">{{ user.id }}</td>
            </tr>
            <tr class="bg-white">
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PW</th>
              <td class="px-6 py-4 whitespace-nowrap"><input type="password" v-model="user.pw" readonly
                  class="block w-full px-3 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></td>
            </tr>
            <tr class="bg-gray-50">
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
              <td class="px-6 py-4 whitespace-nowrap">{{ user.name }}</td>
            </tr>
            <tr class="bg-white">
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <td class="px-6 py-4 whitespace-nowrap">{{ user.email }}</td>
            </tr>
            <tr class="bg-gray-50">
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration Date</th>
              <td class="px-6 py-4 whitespace-nowrap">{{ user.regdate }}</td>
            </tr>
          </tbody>
        </table>
      </div>
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
      src: require('@/assets/vs018.jpg'),
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

<style scoped>
/* 추가적인 스타일링 필요 시 여기에 작성 */
</style>