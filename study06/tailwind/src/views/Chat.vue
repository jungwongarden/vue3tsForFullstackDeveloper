<template>
  <div>
    <Visual :src="src" alt="채팅" />
    <Breadcrumb :group="breadcrumbGroup" :current="currentRoom" :href="href" />
    <div class="container mx-auto mt-5">
      <h1 class="text-3xl font-bold">채팅</h1>
      <hr class="my-4">
      <div class="mb-4">
        <label for="roomSelect" class="block text-sm font-medium text-gray-700">채팅방 선택</label>
        <select v-model="selectedRoom" id="roomSelect"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="room1">상품에 대한 대화방</option>
          <option value="room2">서비스에 대한 대화방</option>
          <option value="room3">회사에 대한 대화방</option>
          <option value="room4">기타 대화방</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700">대화명</label>
        <input type="text" v-model="username" id="username"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="대화명을 입력하세요" required>
      </div>
      <div class="flex mb-4">
        <button @click="connectWebSocket"
          class="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          채팅 시작하기
        </button>
      </div>
      <div v-if="isConnected">
        <h2>{{ currentRoom }}</h2>
        <div class="space-y-2">
          <div v-for="message in messages" :key="message.id"
            class="bg-gray-100 px-4 py-2 rounded-lg shadow-md">
            <strong>{{ message.sender }}:</strong> {{ message.content }}
          </div>
        </div>
        <form @submit.prevent="sendMessage">
          <div class="mt-3 flex">
            <input type="text" v-model="newMessage"
              class="flex-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="메시지 입력..." required>
            <button type="submit"
              class="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400">
              전송
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Visual from '@/components/Visual.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

export default defineComponent({
  name: 'Chat',
  components: {
    Visual,
    Breadcrumb
  },
  data() {
    return {
      src: new URL('@/assets/vs030.jpg', import.meta.url).href,
      breadcrumbGroup: '채팅',
      href: '/chat',
      selectedRoom: 'room1',
      username: '',
      currentRoom: '',
      websocket: null as WebSocket | null,
      messages: [] as { id: number; sender: string; content: string }[],
      newMessage: '',
      isConnected: false
    };
  },
  methods: {
    connectWebSocket() {
      if (!this.username) {
        alert('대화명을 입력해주세요.');
        return;
      }

      const websocketUrl = `ws://${window.location.hostname}:3000/${this.selectedRoom}?username=${this.username}`;
      this.websocket = new WebSocket(websocketUrl);

      this.websocket.onopen = () => {
        console.log('WebSocket 연결 성공');
        this.isConnected = true;
        this.currentRoom = this.selectedRoom;
      };

      this.websocket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        this.messages.push(message);
      };

      this.websocket.onclose = () => {
        console.log('WebSocket 연결 종료');
        this.isConnected = false;
      };

      this.websocket.onerror = (error) => {
        console.error('WebSocket 오류:', error);
        alert('WebSocket 연결 중 오류가 발생했습니다.');
      };
    },

    sendMessage() {
      if (!this.newMessage) return;

      const message = {
        id: this.messages.length + 1,
        sender: this.username,
        content: this.newMessage
      };

      if (this.websocket && this.websocket.readyState === WebSocket.OPEN) {
        this.websocket.send(JSON.stringify(message));
        this.newMessage = '';
      } else {
        alert('WebSocket 연결이 끊겼습니다. 다시 연결해주세요.');
      }
    }
  }
});
</script>