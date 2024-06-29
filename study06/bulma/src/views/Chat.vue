<template>
  <div>
    <Visual :src="src" alt="채팅" />
    <Breadcrumb :group="breadcrumbGroup" :current="currentRoom" :href="href" />
    <section class="section">
      <div class="container mt-5">
        <h1 class="title">채팅</h1>
        <hr />
        <div class="field">
          <label for="roomSelect" class="label">채팅방 선택</label>
          <div class="control">
            <div class="select">
              <select v-model="selectedRoom" id="roomSelect">
                <option value="room1">상품에 대한 대화방</option>
                <option value="room2">서비스에 대한 대화방</option>
                <option value="room3">회사에 대한 대화방</option>
                <option value="room4">기타 대화방</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label for="username" class="label">대화명</label>
          <div class="control">
            <input type="text" class="input" id="username" v-model="username" required>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button @click="connectWebSocket" class="button is-primary">채팅 시작하기</button>
          </div>
        </div>
        <div v-if="isConnected">
          <h2>{{ currentRoom }}</h2>
          <div class="chat-messages">
            <div v-for="message in messages" :key="message.id" class="chat-message">
              <strong>{{ message.sender }}:</strong> {{ message.content }}
            </div>
          </div>
          <form @submit.prevent="sendMessage">
            <div class="field has-addons">
              <div class="control is-expanded">
                <input type="text" class="input" v-model="newMessage" placeholder="메시지 입력..." required>
              </div>
              <div class="control">
                <button type="submit" class="button is-primary">전송</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
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

<style scoped>
/* 추가적인 스타일링 필요 시 여기에 작성 */
</style>