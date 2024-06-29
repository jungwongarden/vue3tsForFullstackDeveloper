# 7. Vuejs와 Back-end 연동

## 7-1. Vuejs와 Back-end 연동 방법

- vue.js 3에서 Back-end와의 연동은 주로 HTTP 클라이언트를 사용하여 이루어집니다. 
- 일반적으로 사용하는 HTTP 클라이언트는 Axios이며, Fetch API도 많이 사용됩니다. 

### 7-1-1. Axios

#### 7-1-1-1. Axios 설치 및 설정

- 터미널에서 Axios를 프로젝트에 설치해야 합니다.

```sh
npm install axios
```

- 설치가 완료되면, Axios를 사용하여 HTTP 요청을 보낼 수 있습니다.

<br>

#### 7-1-1-2. Axios 기본 사용법

**Axios를 사용하여 Back-end API에 요청을 보내는 기본적인 방법 - Get 요청**

```js
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      data: null,
      error: null
    };
  },
  methods: {
    fetchData() {
      axios.get('https://api.example.com/data')
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          this.error = error;
        });
    }
  },
  created() {
    this.fetchData();
  }
};
```

- 위 예제에서는 Vue 컴포넌트가 생성될 때 created 훅에서 fetchData 메서드를 호출하여 API로부터 데이터를 가져옵니다.

<br>

**Axios를 사용하여 Back-end API에 요청을 보내는 기본적인 방법 - Post 요청**

```js
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      postData: null,
      error: null
    };
  },
  methods: {
    sendData() {
      axios.post('https://api.example.com/data', {
        key: 'value'
      })
        .then(response => {
          this.postData = response.data;
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
```

- 위 예제에서는 sendData 메서드를 사용하여 데이터를 서버로 전송합니다.

<br>

#### 7-1-1-3. Axios를 Vue 전역에서 사용

- Axios를 Vue 전역에서 사용하면 여러 컴포넌트에서 쉽게 Axios를 사용할 수 있습니다. 이를 위해 Axios를 플러그인 형태로 설정할 수 있습니다.

<br>

**1. Axios 플러그인 설정**

- 먼저, src/plugins/axios.js 파일을 생성하고 다음과 같이 설정합니다:

```js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export default axiosInstance;
```

<br>

**2. main.js에서 작성된 axios.js를 인스턴스로 추가**

- 작성된 axios.js 파일을 main.js에서 불러와서 Vue 인스턴스에 추가합니다.

<br>

```js
import { createApp } from 'vue';
import App from './App.vue';
import axiosInstance from './plugins/axios';

const app = createApp(App);

app.config.globalProperties.$axios = axiosInstance;

app.mount('#app');
```

<br>

**3. Axios 인스턴스 사용**

- 각 컴포넌트에서 전역으로 설정된 Axios 인스턴스를 사용할 수 있습니다.

<br>

```js
export default {
  name: 'App',
  data() {
    return {
      data: null,
      error: null
    };
  },
  methods: {
    fetchData() {
      this.$axios.get('/data')
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          this.error = error;
        });
    }
  },
  created() {
    this.fetchData();
  }
};
```

<br>

### 7-1-2. Vuex와의 연동

- Vuex를 사용한다면, Vuex 액션에서 Axios를 사용하여 API 요청을 처리할 수 있습니다.

<br>

#### 7-1-2-1. Vuex 액션에서 Axios 사용

**Vuex 스토어 설정**

```js
import { createStore } from 'vuex';
import axiosInstance from '../plugins/axios';

const store = createStore({
  state() {
    return {
      data: null,
      error: null
    };
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
    setError(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    fetchData({ commit }) {
      axiosInstance.get('/data')
        .then(response => {
          commit('setData', response.data);
        })
        .catch(error => {
          commit('setError', error);
        });
    }
  }
});

export default store;
```

<br>

**main.js에 Vuex 스토어 등록**

```js
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

const app = createApp(App);

app.use(store);

app.mount('#app');
```

<br>

**컴포넌트에서 Vuex 액션을 디스패치**

```js
export default {
  name: 'App',
  computed: {
    data() {
      return this.$store.state.data;
    },
    error() {
      return this.$store.state.error;
    }
  },
  methods: {
    fetchData() {
      this.$store.dispatch('fetchData');
    }
  },
  created() {
    this.fetchData();
  }
};
```

- Vue.js 3에서 Axios를 사용하여 Back-end와 연동하는 방법입니다. 
- Axios를 개별 컴포넌트에서 직접 사용할 수도 있고, 플러그인 형태로 설정하여 전역에서 사용할 수도 있으며, Vuex와 함께 사용하여 상태 관리를 효율적으로 할 수도 있습니다. 필요에 따라 적절한 방법을 선택하여 사용할 수 있습니다.

<br><br><br>

## 7-2. Vuejs의 Node Back-end 연동

### 7-2-1. Vue 프로젝트 생성 및 설정

- Vue 3 프로젝트를 생성하려면 Vue CLI를 사용하여 프로젝트를 생성합니다:

```bash
vue create study082
cd study082
npm install axios
```

<br>

**프로젝트 구조도**

```lua
study082/
├── src/
│   ├── api/
│   │   └── index.js          # Axios를 이용한 API 호출 관련 설정 및 함수
│   ├── components/
│   │   ├── BoardList.vue     # 게시판 글 목록 컴포넌트
│   │   ├── BoardDetail.vue   # 게시글 상세보기 컴포넌트
│   │   ├── BoardInsert.vue   # 게시글 작성 컴포넌트
│   │   └── BoardUpdate.vue   # 게시글 수정 컴포넌트
│   ├── router/
│   │   └── index.js          # Vue Router 설정 파일
│   ├── App.vue               # 루트 컴포넌트
│   └── main.js               # 애플리케이션 진입점
├── public/
│   ├── index.html            # 기본 HTML 파일
│   └── ...                   # 기타 정적 자원 (이미지 등)
├── package.json              # 프로젝트 메타데이터 및 종속성 관리
└── ...                       # 기타 설정 파일 등
```

<br>

**프로젝트 구성요소의 역할**

src/: 소스 코드가 위치하는 디렉토리입니다.
api/: API 호출 관련 설정과 함수들을 모아놓은 디렉토리입니다.
index.js: Axios를 이용하여 서버 API와 통신하는 함수들을 정의한 파일입니다.
components/: Vue 컴포넌트들을 모아놓은 디렉토리입니다.
BoardList.vue: 게시판 글 목록을 표시하는 컴포넌트입니다.
BoardDetail.vue: 게시글 상세보기를 표시하는 컴포넌트입니다.
BoardInsert.vue: 새로운 게시글을 작성하는 컴포넌트입니다.
BoardUpdate.vue: 기존 게시글을 수정하는 컴포넌트입니다.
router/: Vue Router 설정 파일을 모아놓은 디렉토리입니다.
index.js: 라우터 설정을 정의한 파일입니다.
App.vue: 루트 Vue 컴포넌트로서, 전체 애플리케이션의 레이아웃을 정의합니다.
main.js: Vue 애플리케이션의 진입점 파일로서, Vue 인스턴스를 생성하고 필요한 전역 설정을 합니다.
public/: 정적 파일들이 위치하는 디렉토리입니다. 주로 index.html과 이미지 등의 자원이 여기에 포함됩니다.
package.json: 프로젝트의 메타데이터와 종속성 관리를 위한 파일로, npm 패키지 관리를 위한 설정을 포함합니다.

<br><br>

### 7-2-2. Axios 설정

- src 폴더에 api 폴더를 만들고, 그 안에 index.js 파일을 생성합니다:
- src/api/index.js 파일에 게시글 목록, 게시글 상세보기, 게시글 생성, 수정, 삭제 기능을 추가합니다:

```javascript
// src/api/index.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getBoardList() {
        return apiClient.get('/board');
    },
    getBoardDetail(no) {
        return apiClient.get(`/board/${no}`);
    },
    createBoard(post) {
        return apiClient.post('/board', post);
    },
    updateBoard(no, post) {
        return apiClient.put(`/board/${no}`, post);
    },
    deleteBoard(no) {
        return apiClient.delete(`/board/${no}`);
    }
};
```

<br><br>

### 7-2-3. 라우터 설정

- Vue Router를 설정하여 게시판 글 목록, 상세보기, 글 등록, 글 수정, 글 삭제를 라우팅합니다

```javascript
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import BoardList from '../components/BoardList.vue';
import BoardDetail from '../components/BoardDetail.vue';
import BoardInsert from '../components/BoardInsert.vue';
import BoardUpdate from '../components/BoardUpdate.vue';

const routes = [
  {
    path: '/',
    name: 'BoardList',
    component: BoardList
  },
  {
    path: '/board/:no',
    name: 'BoardDetail',
    component: BoardDetail,
    props: true
  },
  {
    path: '/board/insert',
    name: 'BoardInsert',
    component: BoardInsert
  },
  {
    path: '/board/update/:no',
    name: 'BoardUpdate',
    component: BoardUpdate,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
```

<br><br>

### 7-2-4. Vue 컴포넌트에서 API 호출

#### 7-2-4-1. 게시판 글 목록 컴포넌트

```vue
<!-- src/components/BoardList.vue -->
<template>
  <div>
    <h1>게시판 글 목록</h1>
    <ul>
      <li v-for="post in posts" :key="post.no">
        <router-link :to="{ name: 'BoardDetail', params: { no: post.no } }">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import api from '../api';

export default {
  setup() {
    const posts = ref([]);

    onMounted(async () => {
      try {
        const response = await api.getBoardList();
        posts.value = response.data;
      } catch (error) {
        console.error(error);
      }
    });

    return {
      posts
    };
  }
};
</script>
```

<br>

#### 7-2-4-2. 글 상세보기 컴포넌트

```vue
<!-- src/components/BoardDetail.vue -->
<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <p><em>작성자: {{ post.author }}</em></p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import api from '../api';

export default {
  setup() {
    const route = useRoute();
    const post = ref({});

    onMounted(async () => {
      try {
        const response = await api.getBoardDetail(route.params.no);
        post.value = response.data;
      } catch (error) {
        console.error(error);
      }
    });

    return {
      post
    };
  }
};
</script>
```

<br>

#### 7-2-4-3. 글 등록 컴포넌트

**BoardInsert 컴포넌트**

```vue
<!-- src/components/BoardInsert.vue -->
<template>
  <div>
    <h1>게시글 작성</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">제목:</label>
        <input type="text" id="title" v-model="post.title" required>
      </div>
      <div>
        <label for="content">내용:</label>
        <textarea id="content" v-model="post.content" required></textarea>
      </div>
      <div>
        <label for="author">작성자:</label>
        <input type="text" id="author" v-model="post.author" required>
      </div>
      <button type="submit">작성</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import api from '../api';

export default {
  setup() {
    const post = ref({
      title: '',
      content: '',
      author: ''
    });

    const submitForm = async () => {
      try {
        await api.createBoard(post.value);
        alert('게시글이 작성되었습니다.');
      } catch (error) {
        console.error(error);
        alert('게시글 작성에 실패했습니다.');
      }
    };

    return {
      post,
      submitForm
    };
  }
};
</script>
```

<br>

#### 7-2-4-4. 글 수정 컴포넌트

**BoardUpdate 컴포넌트**

```vue
<!-- src/components/BoardUpdate.vue -->
<template>
  <div>
    <h1>게시글 수정</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">제목:</label>
        <input type="text" id="title" v-model="post.title" required>
      </div>
      <div>
        <label for="content">내용:</label>
        <textarea id="content" v-model="post.content" required></textarea>
      </div>
      <div>
        <label for="author">작성자:</label>
        <input type="text" id="author" v-model="post.author" required>
      </div>
      <button type="submit">수정</button>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import api from '../api';

export default {
  setup() {
    const route = useRoute();
    const post = ref({
      title: '',
      content: '',
      author: ''
    });

    onMounted(async () => {
      try {
        const response = await api.getBoardDetail(route.params.no);
        post.value = response.data;
      } catch (error) {
        console.error(error);
        alert('게시글을 불러오는데 실패했습니다.');
      }
    });

    const submitForm = async () => {
      try {
        await api.updateBoard(route.params.no, post.value);
        alert('게시글이 수정되었습니다.');
      } catch (error) {
        console.error(error);
        alert('게시글 수정에 실패했습니다.');
      }
    };

    return {
      post,
      submitForm
    };
  }
};
</script>
```

<br>

#### 7-2-4-5. 글 삭제 컴포넌트

**BoardDelete 기능**

```vue
<!-- src/components/BoardDetail.vue -->
<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <p><em>작성자: {{ post.author }}</em></p>
    <button @click="deletePost">삭제</button>
    <router-link :to="{ name: 'BoardUpdate', params: { no: post.no } }">수정</router-link>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '../api';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const post = ref({});

    onMounted(async () => {
      try {
        const response = await api.getBoardDetail(route.params.no);
        post.value = response.data;
      } catch (error) {
        console.error(error);
        alert('게시글을 불러오는데 실패했습니다.');
      }
    });

    const deletePost = async () => {
      try {
        await api.deleteBoard(route.params.no);
        alert('게시글이 삭제되었습니다.');
        router.push({ name: 'BoardList' });
      } catch (error) {
        console.error(error);
        alert('게시글 삭제에 실패했습니다.');
      }
    };

    return {
      post,
      deletePost
    };
  }
};
</script>
```

<br><br><br>

## 7-3. Vuejs의 Jsp/Servlet Back-end 연동

### 7-3-1. 프로젝트 생성 및 구조

#### 7-3-1-1. Vue.js 프로젝트 생성과 구조 설정

**Vue.js 프로젝트 생성**

```bash
npm install -g @vue/cli
vue create study083
cd study083
```

<br>

#### 7-3-1-2. Tailwind CSS 설정

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

<br>

**tailwind.config.js 파일을 수정하여 필요한 설정 추가**

```javascript
// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

<br>

**주요 설정 구성 요소**

mode: 'jit': Just-in-Time 컴파일 모드로, 필요한 CSS 클래스만을 동적으로 생성하여 번들 크기를 줄이는 방식입니다.
purge: 사용하지 않는 CSS를 자동으로 제거하기 위한 경로입니다. Vue.js의 파일 경로를 포함하여 모든 파일을 지정합니다.
darkMode: 테마 모드 설정입니다. 필요에 따라 media 또는 class로 설정할 수 있습니다.
theme와 variants: Tailwind CSS의 확장 옵션을 설정합니다.
plugins: Tailwind CSS의 플러그인을 추가하는 옵션입니다.

<br>

#### 7-3-1-3. 프로젝트 구조

```lua
study083/
├── public/
│   ├── index.html
├── src/
│   ├── assets/
│   │   └── tailwind.css
│   ├── components/
│   │   ├── BoardList.vue
│   │   ├── BoardDetail.vue
│   │   ├── BoardCreate.vue
│   │   ├── BoardEdit.vue
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── Home.vue
│   ├── App.vue
│   ├── main.js
└── package.json
```

<br><br>

### 7-3-2. Axios 설정

#### 7-3-2-1. Axios 설치

- Axios를 설치하고 설정 파일을 추가합니다.

```bash
npm install axios
```

<br>

#### 7-3-2-2. Axios 설정

**src/plugins/axios.js 파일을 생성하고 다음과 같이 설정합니다.**

```javascript
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 1000,
});

export default axiosInstance;
```

<br><br>

### 7-3-3. 라우터 설정

- Vue Router를 사용하여 라우터를 설정합니다.

**src/router/index.js 파일**

```javascript
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BoardList from '../components/BoardList.vue';
import BoardDetail from '../components/BoardDetail.vue';
import BoardCreate from '../components/BoardCreate.vue';
import BoardEdit from '../components/BoardEdit.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/boards', name: 'BoardList', component: BoardList },
  { path: '/boards/:no', name: 'BoardDetail', component: BoardDetail },
  { path: '/create', name: 'BoardCreate', component: BoardCreate },
  { path: '/edit/:no', name: 'BoardEdit', component: BoardEdit }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
```

<br>

### 7-3-4. Vue 컴포넌트 작성

**src/components/BoardList.vue**

```vue
<template>
  <div>
    <h1>게시판 목록</h1>
    <ul>
      <li v-for="board in boards" :key="board.no">
        <router-link :to="`/boards/${board.no}`">{{ board.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '../plugins/axios';

export default {
  data() {
    return {
      boards: []
    };
  },
  mounted() {
    this.fetchBoards();
  },
  methods: {
    fetchBoards() {
      axios.get('/board')
        .then(response => {
          this.boards = response.data;
        })
        .catch(error => {
          console.error('Error fetching boards:', error);
        });
    }
  }
};
</script>

<style scoped>
/* Tailwind CSS styles */
</style>
```

<br>

**src/components/BoardDetail.vue**

```vue
<template>
  <div>
    <h1>{{ board.title }}</h1>
    <p>{{ board.content }}</p>
    <router-link :to="`/edit/${board.no}`">수정</router-link>
    <button @click="deleteBoard">삭제</button>
  </div>
</template>

<script>
import axios from '../plugins/axios';

export default {
  data() {
    return {
      board: {}
    };
  },
  mounted() {
    this.fetchBoard();
  },
  methods: {
    fetchBoard() {
      axios.get(`/board/${this.$route.params.no}`)
        .then(response => {
          this.board = response.data;
        })
        .catch(error => {
          console.error('Error fetching board details:', error);
        });
    },
    deleteBoard() {
      axios.delete(`/board/${this.$route.params.no}`)
        .then(() => {
          this.$router.push('/boards');
        })
        .catch(error => {
          console.error('Error deleting board:', error);
        });
    }
  }
};
</script>

<style scoped>
/* Tailwind CSS styles */
</style>
```

<br>

**src/components/BoardCreate.vue**

```vue
<template>
  <form @submit.prevent="createBoard">
    <label>제목</label>
    <input v-model="newBoard.title" type="text">
    <label>내용</label>
    <textarea v-model="newBoard.content"></textarea>
    <button type="submit">등록</button>
  </form>
</template>

<script>
import axios from '../plugins/axios';

export default {
  data() {
    return {
      newBoard: {
        title: '',
        content: ''
      }
    };
  },
  methods: {
    createBoard() {
      axios.post('/board', this.newBoard)
        .then(() => {
          this.$router.push('/boards');
        })
        .catch(error => {
          console.error('Error creating board:', error);
        });
    }
  }
};
</script>

<style scoped>
/* Tailwind CSS styles */
</style>
```

<br>

**src/components/BoardEdit.vue**

```vue
<template>
  <form @submit.prevent="updateBoard">
    <label>제목</label>
    <input v-model="board.title" type="text">
    <label>내용</label>
    <textarea v-model="board.content"></textarea>
    <button type="submit">수정</button>
  </form>
</template>

<script>
import axios from '../plugins/axios';

export default {
  data() {
    return {
      board: {}
    };
  },
  mounted() {
    this.fetchBoard();
  },
  methods: {
    fetchBoard() {
      axios.get(`/board/${this.$route.params.no}`)
        .then(response => {
          this.board = response.data;
        })
        .catch(error => {
          console.error('Error fetching board details:', error);
        });
    },
    updateBoard() {
      axios.put(`/board/${this.$route.params.no}`, this.board)
        .then(() => {
          this.$router.push(`/boards/${this.$route.params.no}`);
        })
        .catch(error => {
          console.error('Error updating board:', error);
        });
    }
  }
};
</script>

<style scoped>
/* Tailwind CSS styles */
</style>
```

<br>

**src/views/Home.vue**

```vue
<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
/* Tailwind CSS styles */
</style>
```

<br>

**src/components/Header.vue**

```vue
<template>
  <header>
    <h1>Header</h1>
    <!-- Header content -->
  </header>
</template>

<script>
export default {
  // Header component logic
};
</script>

<style scoped>
/* Tailwind CSS styles */
</style>
```

<br>

**src/components/Footer.vue**

```vue
<template>
  <footer>
    <h1>Footer</h1>
    <!-- Footer content -->
  </footer>
</template>

<script>
export default {
  // Footer component logic
};
</script>

<style scoped>
/* Tailwind CSS styles */
</style>
```

<br><br><br>

## 7-4. Vuejs의 Springframework Legacy Back-end 연동

### 7-4-1. 프로젝트 생성 및 구조

#### 7-4-1-1. Vue.js 3 프로젝트 생성

```bash
vue create study084
```

<br>

#### 7-4-1-2. 프로젝트 구조

```lua
study084/
├── node_modules/
├── public/
│   ├── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── BoardList.vue
│   │   ├── BoardDetail.vue
│   │   ├── BoardCreate.vue
│   │   ├── BoardEdit.vue
│   ├── App.vue
│   ├── main.js
│   ├── router/
│   │   └── index.js
├── package.json
└── tailwind.config.js
```

<br><br>

### 7-4-2. Tailwind CSS 설정

#### 7-4-2-1. Tailwind CSS 추가

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

<br>

#### 7-4-2-2. Tailwind CSS 설정

**tailwind.config.js 파일을 통한 설정**

```javascript
module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

<br><br>

### 7-4-3. Axios 설정

#### 7-4-3-1. Axios 설치

```bash
npm install axios
```

<br>

#### 7-4-3-2. Axios 설정

**src/utils/axios.js 파일을 생성하고 Axios 인스턴스를 설정**

```javascript
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/posts',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
```

<br><br>

### 7-4-4. 라우터 설정

- Vue Router를 사용하여 라우팅을 설정합니다.

**src/router/index.js 파일을 통해 설정**

```javascript
import { createRouter, createWebHistory } from 'vue-router';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import BoardList from '../components/BoardList.vue';
import BoardDetail from '../components/BoardDetail.vue';
import BoardCreate from '../components/BoardCreate.vue';
import BoardEdit from '../components/BoardEdit.vue';

const routes = [
  {
    path: '/',
    components: {
      default: BoardList,
      header: Header,
      footer: Footer,
    },
  },
  {
    path: '/post/:id',
    components: {
      default: BoardDetail,
      header: Header,
      footer: Footer,
    },
  },
  {
    path: '/create',
    components: {
      default: BoardCreate,
      header: Header,
      footer: Footer,
    },
  },
  {
    path: '/edit/:id',
    components: {
      default: BoardEdit,
      header: Header,
      footer: Footer,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

<br><br>

### 7-4-5. Vue 컴포넌트 작성

#### 7-4-5-1. Header 및 Footer 컴포넌트

**src/components/Header.vue**

```vue
<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="container mx-auto">
      <h1 class="text-xl font-bold">My Blog</h1>
    </div>
  </header>
</template>

<script>
export default {
  // Component logic if needed
};
</script>

<style scoped>
/* Scoped styles for header */
</style>
```

<br>

**src/components/Footer.vue**

```vue
<template>
  <footer class="bg-gray-800 text-white p-4">
    <div class="container mx-auto">
      <p class="text-center">© 2024 My Blog. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  // Component logic if needed
};
</script>

<style scoped>
/* Scoped styles for footer */
</style>
```

<br>

#### 7-4-5-2. 게시판 글 목록 (BoardList.vue)

```vue
<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-6">Board List</h1>
    <router-link to="/create" class="btn btn-primary mb-4">Create New Post</router-link>
    <ul>
      <li v-for="post in posts" :key="post.no" class="mb-4">
        <router-link :to="{ name: 'BoardDetail', params: { id: post.no } }">
          <h2 class="text-xl font-bold">{{ post.title }}</h2>
        </router-link>
        <p>{{ post.content }}</p>
        <p>Author: {{ post.author }} | Views: {{ post.hits }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '../utils/axios';

export default {
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('/');
      this.posts = response.data;
    } catch (error) {
      console.error('There was an error!', error);
    }
  },
};
</script>

<style scoped>
.btn {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
</style>
```

<br>

#### 7-4-5-3. 게시판 글 상세보기 (BoardDetail.vue)

```vue
<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-6">{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <p>Author: {{ post.author }} | Views: {{ post.hits }}</p>
    <router-link :to="{ name: 'BoardEdit', params: { id: post.no } }" class="btn btn-primary">Edit</router-link>
    <button @click="deletePost" class="btn btn-danger">Delete</button>
  </div>
</template>

<script>
import axios from '../utils/axios';

export default {
  data() {
    return {
      post: {},
    };
  },
  async created() {
    const id = this.$route.params.id;
    try {
      const response = await axios.get(`/${id}`);
      this.post = response.data;
    } catch (error) {
      console.error('There was an error!', error);
    }
  },
  methods: {
    async deletePost() {
      const id = this.$route.params.id;
      try {
        await axios.delete(`/${id}`);
        this.$router.push('/');
      } catch (error) {
        console.error('There was an error!', error);
      }
    },
  },
};
</script>

<style scoped>
.btn {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}

.btn-danger {
  @apply bg-red-500 hover:bg-red-700;
}
</style>
```

<br>

#### 7-4-5-4. 게시글 등록 (BoardCreate.vue)

```vue
<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-6">Create New Post</h1>
    <form @submit.prevent="createPost">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input v-model="post.title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Content</label>
        <textarea v-model="post.content" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Author</label>
        <input v-model="post.author" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text">
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
    </form>
  </div>
</template>

<script>
import axios from '../utils/axios';

export default {
  data() {
    return {
      post: {
        title: '',
        content: '',
        author: '',
      },
    };
  },
  methods: {
    async createPost() {
      try {
        await axios.post('/', this.post);
        this.$router.push('/');
      } catch (error) {
        console.error('There was an error!', error);
      }
    },
  },
};
</script>

<style scoped>
.btn {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
</style>
```

<br>

#### 7-4-5-5. 게시글 수정 (BoardEdit.vue)

```vue
<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-6">Edit Post</h1>
    <form @submit.prevent="updatePost">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input v-model="post.title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Content</label>
        <textarea v-model="post.content" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Author</label>
        <input v-model="post.author" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text">
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    </form>
  </div>
</template>

<script>
import axios from '../utils/axios';

export default {
  data() {
    return {
      post: {},
    };
  },
  async created() {
    const id = this.$route.params.id;
    try {
      const response = await axios.get(`/${id}`);
      this.post = response.data;
    } catch (error) {
      console.error('There was an error!', error);
    }
  },
  methods: {
    async updatePost() {
      const id = this.$route.params.id;
      try {
        await axios.put(`/${id}`, this.post);
        this.$router.push('/');
      } catch (error) {
        console.error('There was an error!', error);
      }
    },
  },
};
</script>

<style scoped>
.btn {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
</style>
```

<br><br>

### 7-4-6. Main.js 파일 수정

- src/main.js 파일을 열고 Vue 애플리케이션에 헤더 및 푸터 컴포넌트를 추가합니다.

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

// 전역 컴포넌트 등록
const app = createApp(App);
app.component('Header', Header);
app.component('Footer', Footer);

app.use(router).mount('#app');
```

<br><br><br>

## 7-5. Vuejs의 Spring Boot Back-end 연동

### 7-5-1. 프로젝트 설정

#### 7-5-1-1. Vue.js 프로젝트 생성

```bash
vue create study085
cd study085
```

<br>

#### 7-5-1-2. Tailwind CSS 설치

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

<br>

#### 7-5-1-3. Axios 설치

```bash
npm install axios
```

<br>

#### 7-5-1-4. 프로젝트 구조

```lua
study085/
├── src/
│   ├── assets/
│   │   └── (이미지, 아이콘 등)
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.vue
│   │   │   └── Footer.vue
│   │   ├── PostList.vue
│   │   ├── PostDetail.vue
│   │   └── PostForm.vue
│   ├── services/
│   │   ├── api.js
│   │   └── postService.js
│   ├── views/
│   │   ├── Home.vue
│   │   ├── PostDetailPage.vue
│   │   └── PostFormPage.vue
│   ├── App.vue
│   ├── main.js
│   └── router.js
└── node_modules/
```

<br><br>

### 7-5-2. 애플리케이션 설정

**main.js (Vue 애플리케이션 진입점)**

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css'; // Tailwind CSS

createApp(App).use(router).mount('#app');
```

<br><br>

### 7-5-3. 라우터 설정

**router.js (Vue Router 설정)**

```javascript
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import PostDetailPage from './views/PostDetailPage.vue';
import PostFormPage from './views/PostFormPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/post/:id', component: PostDetailPage },
  { path: '/post/new', component: PostFormPage },
  { path: '/post/edit/:id', component: PostFormPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
```

### 7-5-4. Axios 설정

**api.js (Axios 설정)**

```javascript
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // Spring Boot 백엔드 API 엔드포인트
  headers: {
    'Content-type': 'application/json'
  }
});

export default apiClient;
```

<br><br>

### 7-5-5. 공통 Component 작성

**Header.vue**

```vue
<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold">Vue Spring Boot Board</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
/* Tailwind CSS를 이용한 Header 스타일 */
</style>
```

<br>

**Footer.vue**

```vue
<template>
  <footer class="bg-gray-800 text-white p-4 mt-8">
    <div class="container mx-auto">
      <p class="text-center">&copy; 2024 Vue Spring Boot Board</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
/* Tailwind CSS를 이용한 Footer 스타일 */
</style>
```

<br><br>

### 7-5-6.  전용 Component 작성

**PostList.vue**

```vue
<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">게시글 목록</h2>
    <!-- 여기에 게시글 목록을 표시 -->
  </div>
</template>

<script>
export default {
  name: 'PostList',
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    // 백엔드에서 게시글 목록을 가져오는 로직
  }
}
</script>

<style scoped>
/* Tailwind CSS를 이용한 PostList 컴포넌트 스타일 */
</style>
```

<br>

**PostDetail.vue**

```vue
<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">게시글 상세보기</h2>
    <!-- 여기에 게시글 상세 내용을 표시 -->
  </div>
</template>

<script>
export default {
  name: 'PostDetail',
  data() {
    return {
      post: {}
    };
  },
  mounted() {
    // 백엔드에서 게시글 상세 내용을 가져오는 로직
  }
}
</script>

<style scoped>
/* Tailwind CSS를 이용한 PostDetail 컴포넌트 스타일 */
</style>
```

<br>

**PostForm.vue**

```vue
<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">게시글 등록/수정</h2>
    <!-- 여기에 게시글 등록 및 수정 폼을 작성 -->
  </div>
</template>

<script>
export default {
  name: 'PostForm',
  data() {
    return {
      formData: {
        title: '',
        content: '',
        author: ''
      }
    };
  },
  methods: {
    savePost() {
      // API를 통해 게시글 저장 또는 수정
    }
  }
}
</script>

<style scoped>
/* Tailwind CSS를 이용한 PostForm 컴포넌트 스타일 */
</style>
```

<br>

**PostDetailPage.vue**

```vue
<template>
  <div>
    <Header />
    <main class="container mx-auto">
      <PostDetail />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';
import PostDetail from '../components/PostDetail.vue';

export default {
  components: {
    Header,
    Footer,
    PostDetail
  },
  mounted() {
    // 라우팅 매개변수를 기반으로 게시글 상세 내용 가져오기
  }
}
</script>

<style scoped>
/* Tailwind CSS를 이용한 PostDetailPage 컴포넌트 스타일 */
</style>
```

<br>

**PostFormPage.vue**

```vue
<template>
  <div>
    <Header />
    <main class="container mx-auto">
      <PostForm />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';
import PostForm from '../components/PostForm.vue';

export default {
  components: {
    Header,
    Footer,
    PostForm
  },
  mounted() {
    // 새로 만들기 또는 수정을 위한 폼 데이터 초기화
  }
}
</script>

<style scoped>
/* Tailwind CSS를 이용한 PostFormPage 컴포넌트 스타일 */
</style>
```

<br><br>

### 7-5-7. Home Compnent 작성

**Home.vue**

```vue
<template>
  <div>
    <Header />
    <main class="container mx-auto">
      <PostList />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';
import PostList from '../components/PostList.vue';

export default {
  components: {
    Header,
    Footer,
    PostList
  }
}
</script>

<style scoped>
/* Tailwind CSS를 이용한 Home 컴포넌트 스타일 */
</style>
```

<br><br><br>

## 7-6. Vuejs의 Python Flask Back-end 연동

### 7-6-1. 프로젝트의 구조와 설정

```lua
study083/
├── app.py
├── service/
│   └── post_service.py
├── static/
├── templates/
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── Header.vue
    │   │   ├── Footer.vue
    │   │   ├── BoardList.vue
    │   │   ├── PostDetail.vue
    │   │   └── PostForm.vue
    │   ├── views/
    │   │   └── Home.vue
    │   ├── router/
    │   │   └── index.js
    │   ├── services/
    │   │   └── api.js
    │   └── main.js
    ├── .gitignore
    ├── babel.config.js
    ├── package.json
    ├── README.md
    ├── tailwind.config.js
    └── vue.config.js
```

<br>

**프로젝트 구성 요소의 역할**

app.py: Python Flask 애플리케이션 진입점 및 API 엔드포인트를 정의합니다.
service/: 백엔드의 서비스 로직을 포함하는 디렉터리입니다. post_service.py는 게시글 관련 비즈니스 로직을 정의합니다.
static/: 정적 파일을 저장하는 디렉터리로, Vue.js 프론트엔드에서 사용할 수 있습니다.
templates/: Flask에서 렌더링할 HTML 템플릿을 저장하는 디렉터리입니다.
frontend/: Vue.js 프론트엔드 코드가 위치하는 디렉터리입니다.
public/: 정적 파일을 저장하는 디렉터리로, 빌드된 파일이 여기에 저장됩니다.
src/: Vue.js 애플리케이션의 소스 코드가 포함된 디렉터리입니다.
assets/: 이미지 및 기타 정적 리소스를 저장하는 디렉터리입니다.
components/: Vue 컴포넌트들이 위치하는 디렉터리입니다.
views/: Vue 라우터에 의해 렌더링되는 각 페이지의 Vue 컴포넌트가 위치하는 디렉터리입니다.
router/: Vue Router 설정 파일이 위치하는 디렉터리입니다.
services/: Axios 인스턴스를 생성하여 API 호출을 관리하는 디렉터리입니다.
main.js: Vue 애플리케이션 진입점입니다.
기타 Vue.js 관련 파일들은 프로젝트 설정 파일(babel.config.js, package.json, README.md, tailwind.config.js, vue.config.js) 등이 포함됩니다.

<br>

**Vue.js 설정 (main.js)**

```javascript
// main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from './services/api';

createApp(App)
  .use(router)
  .mount('#app');
```

<br>

**Axios 설정 (services/api.js)**

```javascript
// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Flask 서버의 기본 URL
  timeout: 10000, // 타임아웃 설정
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
```

<br>

**Vue Router 설정 (router/index.js)**

```javascript
// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BoardList from '../components/BoardList.vue';
import PostDetail from '../components/PostDetail.vue';
import PostForm from '../components/PostForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/board',
    name: 'BoardList',
    component: BoardList,
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetail,
    props: true,
  },
  {
    path: '/new',
    name: 'NewPost',
    component: PostForm,
  },
  {
    path: '/edit/:id',
    name: 'EditPost',
    component: PostForm,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

<br><br>

### 7-6-2. 공통 Vue 컴포넌트 작성

**Home.vue**

```vue
<template>
  <div>
    <h1>환영합니다!</h1>
    <p>이 곳은 간단한 게시판 애플리케이션입니다.</p>
    <router-link to="/board">게시판 바로 가기</router-link>
  </div>
</template>

<script>
export default {
  // Home.vue 컴포넌트 로직
};
</script>

<style>
/* 필요한 CSS 스타일링 */
</style>
```

**Header.vue**

```vue
<template>
  <header>
    <nav>
      <!-- Header 내용 -->
    </nav>
  </header>
</template>

<script>
export default {
  // Header 컴포넌트 로직
};
</script>

<style>
/* 필요한 CSS 스타일링 */
</style>
```

<br>

**Footer.vue**

```vue
<template>
  <footer>
    <!-- Footer 내용 -->
  </footer>
</template>

<script>
export default {
  // Footer 컴포넌트 로직
};
</script>

<style>
/* 필요한 CSS 스타일링 */
</style>
```

<br><br>

### 7-6-3. 전용 Vue 컴포넌트 작성

#### 7-6-3-1. BoardList.vue (게시판 글 목록 컴포넌트)

```vue
<template>
  <div>
    <h2>게시글 목록</h2>
    <ul>
      <li v-for="post in posts" :key="post.no">
        <router-link :to="'/post/' + post.no">
          {{ post.title }}
        </router-link>
        <p>작성자: {{ post.author }}</p>
        <p>작성일: {{ post.resdate }}</p>
        <p>조회수: {{ post.hits }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '../services/api';

export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios.get('/posts')
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.error('게시글 목록을 불러오는 중 오류 발생:', error);
        });
    }
  }
};
</script>

<style>
/* 필요한 CSS 스타일링 */
</style>
```

<br>

#### 7-6-3-2. PostDetail.vue (게시글 상세 보기 컴포넌트)

```vue
<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>작성자: {{ post.author }}</p>
    <p>작성일: {{ post.resdate }}</p>
    <p>조회수: {{ post.hits }}</p>
    <div>{{ post.content }}</div>
    <router-link :to="'/edit/' + post.no">수정하기</router-link>
    <button @click="deletePost(post.no)">삭제하기</button>
  </div>
  <div v-else>
    <p>게시글을 불러오는 중입니다...</p>
  </div>
</template>

<script>
import axios from '../services/api';

export default {
  data() {
    return {
      post: null,
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      const postId = this.$route.params.id;
      axios.get(`/post/${postId}`)
        .then(response => {
          this.post = response.data;
        })
        .catch(error => {
          console.error('게시글을 불러오는 중 오류 발생:', error);
        });
    },
    deletePost(postId) {
      if (confirm('정말로 삭제하시겠습니까?')) {
        axios.delete(`/post/${postId}`)
          .then(() => {
            alert('게시글이 삭제되었습니다.');
            this.$router.push('/'); // 삭제 후 홈으로 이동
          })
          .catch(error => {
            console.error('게시글 삭제 중 오류 발생:', error);
          });
      }
    }
  }
};
</script>

<style>
/* 필요한 CSS 스타일링 */
</style>
```

<br>

#### 7-6-3-3. PostForm.vue (게시글 등록 폼 컴포넌트)

```vue
<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="title">제목</label>
      <input type="text" id="title" v-model="formData.title" required>
    </div>
    <div>
      <label for="author">작성자</label>
      <input type="text" id="author" v-model="formData.author" required>
    </div>
    <div>
      <label for="content">내용</label>
      <textarea id="content" v-model="formData.content" required></textarea>
    </div>
    <button type="submit">등록하기</button>
  </form>
</template>

<script>
import axios from '../services/api';

export default {
  data() {
    return {
      formData: {
        title: '',
        author: '',
        content: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      axios.post('/posts', this.formData)
        .then(() => {
          alert('게시글이 등록되었습니다.');
          this.$router.push('/'); // 등록 후 홈으로 이동
        })
        .catch(error => {
          console.error('게시글 등록 중 오류 발생:', error);
        });
    }
  }
};
</script>

<style>
/* 필요한 CSS 스타일링 */
</style>
```

<br>

#### 7-6-3-4. PostEdit.vue (게시글 수정 폼 컴포넌트)

```vue
<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="title">제목</label>
      <input type="text" id="title" v-model="formData.title" required>
    </div>
    <div>
      <label for="author">작성자</label>
      <input type="text" id="author" v-model="formData.author" required>
    </div>
    <div>
      <label for="content">내용</label>
      <textarea id="content" v-model="formData.content" required></textarea>
    </div>
    <button type="submit">수정하기</button>
  </form>
</template>

<script>
import axios from '../services/api';

export default {
  data() {
    return {
      formData: {
        title: '',
        author: '',
        content: ''
      }
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      const postId = this.$route.params.id;
      axios.get(`/post/${postId}`)
        .then(response => {
          this.formData = response.data;
        })
        .catch(error => {
          console.error('게시글을 불러오는 중 오류 발생:', error);
        });
    },
    handleSubmit() {
      const postId = this.$route.params.id;
      axios.put(`/post/${postId}`, this.formData)
        .then(() => {
          alert('게시글이 수정되었습니다.');
          this.$router.push(`/post/${postId}`); // 수정 후 상세 페이지로 이동
        })
        .catch(error => {
          console.error('게시글 수정 중 오류 발생:', error);
        });
    }
  }
};
</script>

<style>
/* 필요한 CSS 스타일링 */
</style>
```

<br><br><br>

## 7-7. Vuejs의 Python FastAPI Back-end 연동

### 7-7-1. 프로젝트 생성 및 구조

#### 7-7-1-1. 프로젝트 생성

```bash
mkdir study087
cd study087
```

<br>

#### 7-7-1-2. 프로젝트 구조

```lua
study087/
├── frontend/         # Vue.js 프론트엔드
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── views/
│   │   ├── App.vue
│   │   └── main.js   # Axios 설정 및 라우터 설정
│   └── package.json
├── backend/          # FastAPI 백엔드
│   ├── main.py      # FastAPI 앱 생성 및 라우터 연결
│   ├── service/
│   │   └── post_service.py  # 비즈니스 로직
│   └── model/
│       └── post.py   # Pydantic 모델 정의
└── README.md
```

<br><br>

### 7-7-2. 프로젝트 설정

**Vue.js Front-end 설정 (frontend/main.js)**

```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { createRouter, createWebHistory } from 'vue-router'

// Axios 설정
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',  // FastAPI 서버 주소
  timeout: 10000,  // 타임아웃 설정
})

// 라우터 설정
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/posts', component: PostList },
    { path: '/posts/:id', component: PostDetail },
    { path: '/post/create', component: PostCreate },
    { path: '/posts/:id/edit', component: PostEdit },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
```

<br><br>

### 7-7-3. Axios 설정

```javascript
// frontend/components/PostService.js
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 10000,
})

export default {
  getAllPosts() {
    return axiosInstance.get('/posts')
  },

  getPost(postId) {
    return axiosInstance.get(`/posts/${postId}`)
  },

  createPost(postData) {
    return axiosInstance.post('/posts', postData)
  },

  updatePost(postId, postData) {
    return axiosInstance.put(`/posts/${postId}`, postData)
  },

  deletePost(postId) {
    return axiosInstance.delete(`/posts/${postId}`)
  },
}
```

<br>

### 7-7-4. Tailwind CSS Framework 설정

#### 7-7-4-1. App.vue

```html
<!-- frontend/src/App.vue -->
<template>
  <div class="min-h-screen bg-gray-100">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
/* Tailwind CSS classes */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
```

<br>

### 7-7-5. Component 작성

#### 7-7-5-1. 게시판 글 목록 (components/PostList.vue)

```html
<template>
  <div>
    <h1 class="text-2xl font-bold">게시판</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'PostDetail', params: { id: post.id }}">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import PostService from '../services/PostService'

export default {
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.fetchPosts()
  },
  methods: {
    fetchPosts() {
      PostService.getAllPosts()
        .then(response => {
          this.posts = response.data
        })
        .catch(error => {
          console.error('Error fetching posts:', error)
        })
    },
  },
}
</script>
```

#### 7-7-5-2. 게시판 글 상세보기 (components/PostDetail.vue)

```html
<template>
  <div>
    <h1 class="text-2xl font-bold">{{ post.title }}</h1>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
import PostService from '../services/PostService'

export default {
  data() {
    return {
      post: {},
    }
  },
  mounted() {
    this.fetchPost()
  },
  methods: {
    fetchPost() {
      const postId = this.$route.params.id
      PostService.getPost(postId)
        .then(response => {
          this.post = response.data
        })
        .catch(error => {
          console.error('Error fetching post:', error)
        })
    },
  },
}
</script>
```

<br>

#### 7-7-5-3. 게시글 등록 (components/PostCreate.vue)

```html
<template>
  <form @submit.prevent="createPost">
    <input type="text" v-model="post.title" placeholder="제목" required />
    <textarea v-model="post.content" placeholder="내용" required></textarea>
    <button type="submit">등록</button>
  </form>
</template>

<script>
import PostService from '../services/PostService'

export default {
  data() {
    return {
      post: {
        title: '',
        content: '',
        author: '사용자',  // 사용자명 설정
      },
    }
  },
  methods: {
    createPost() {
      PostService.createPost(this.post)
        .then(response => {
          console.log('Post created:', response.data)
          // 게시글 등록 후 처리 로직 추가
        })
        .catch(error => {
          console.error('Error creating post:', error)
        })
    },
  },
}
</script>
```

<br>

#### 7-7-5-4. 게시글 수정 (components/PostEdit.vue)

```html
<template>
  <form @submit.prevent="updatePost">
    <input type="text" v-model="post.title" placeholder="제목" required />
    <textarea v-model="post.content" placeholder="내용" required></textarea>
    <button type="submit">수정</button>
  </form>
</template>

<script>
import PostService from '../services/PostService'

export default {
  data() {
    return {
      post: {},
    }
  },
  mounted() {
    this.fetchPost()
  },
  methods: {
    fetchPost() {
      const postId = this.$route.params.id
      PostService.getPost(postId)
        .then(response => {
          this.post = response.data
        })
        .catch(error => {
          console.error('Error fetching post:', error)
        })
    },
    updatePost() {
      const postId = this.$route.params.id
      PostService.updatePost(postId, this.post)
        .then(response => {
          console.log('Post updated:', response.data)
          // 게시글 수정 후 처리 로직 추가
        })
        .catch(error => {
          console.error('Error updating post:', error)
        })
    },
  },
}
</script>
```

<br>

#### 7-7-5-5. 게시글 삭제 (components/PostDetail.vue 에서)

```html
<template>
  <div>
    <h1 class="text-2xl font-bold">{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <button @click="deletePost">삭제</button>
  </div>
</template>

<script>
import PostService from '../services/PostService'

export default {
  methods: {
    deletePost() {
      const postId = this.$route.params.id
      PostService.deletePost(postId)
        .then(() => {
          console.log('Post deleted')
          // 게시글 삭제 후 처리 로직 추가
        })
        .catch(error => {
          console.error('Error deleting post:', error)
        })
    },
  },
}
</script>
```

<br><br>

### 7-7-6. 공통 Vue 컴포넌트 모듈화 (components/Header.vue, components/Footer.vue)

**Header.vue**

```html
<!-- frontend/src/components/Header.vue -->
<template>
  <header class="bg-gray-800 text-white py-4 px-6">
    <h1 class="text-xl font-bold">Study083</h1>
    <nav>
      <router-link to="/">홈</router-link>
      <router-link to="/posts">게시판</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  // 필요한 경우 헤더와 관련된 자바스크립트 로직 추가
}
</script>

<style scoped>
/* Tailwind CSS 클래스들을 사용하여 스타일링 */
</style>
```

<br>

**Footer.vue**

```html
<!-- frontend/src/components/Footer.vue -->

<template>
  <footer class="bg-gray-800 text-white py-4 px-6">
    &copy; 2024 Study083. All rights reserved.
  </footer>
</template>

<script>
export default {
  // 필요한 경우 푸터와 관련된 자바스크립트 로직 추가
}
</script>

<style scoped>
/* Tailwind CSS 클래스들을 사용하여 스타일링 */
</style>
```

<br>

**메인 Vue 어플리케이션에서 공통 컴포넌트 연결 (App.vue)**

```html
<!-- frontend/src/App.vue -->
<template>
  <div class="min-h-screen bg-gray-100">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
/* 필요한 경우 전역 스타일링 추가 */
</style>
```

<br><br><br>

## 7-8. Vuejs의 Node Javascript Next Framework Back-end 연동

### 7-8-1. 프로젝트 생성

Vue 프로젝트 생성

```bash
npm install -g @vue/cli
vue create study083
```

<br><br>

### 7-8-2. 프로젝트 구조

```lua
study088/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   ├── views/
│   │   ├── PostList.vue
│   │   ├── PostDetail.vue
│   │   ├── PostCreate.vue
│   │   ├── PostEdit.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   ├── main.js
│   └── tailwind.config.js
├── package.json
└── vue.config.js
```

<br><br>

### 7-8-3. 애플리케이션 설정

**1. main.js**

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

createApp(App).use(router).mount('#app');
```

<br>

**2. tailwind.config.js**

```javascript
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

<br>

**3. router/index.js**

```javascript
import { createRouter, createWebHistory } from 'vue-router';
import PostList from '../views/PostList.vue';
import PostDetail from '../views/PostDetail.vue';
import PostCreate from '../views/PostCreate.vue';
import PostEdit from '../views/PostEdit.vue';

const routes = [
    { path: '/', component: PostList },
    { path: '/posts/:id', component: PostDetail },
    { path: '/create', component: PostCreate },
    { path: '/edit/:id', component: PostEdit },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
```

<br><br>

### 7-8-4. 공통 Component 작성

**components/Header.vue**

```vue
<template>
  <header class="bg-blue-500 text-white p-4">
    <h1 class="text-2xl">My Board</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/create">Create Post</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
}
</style>
```

<br>

**components/Footer.vue**

```vue
<template>
  <footer class="bg-gray-800 text-white p-4 text-center">
    <p>&copy; 2024 My Board</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
```

<br>

**App.vue**

```vue
<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>
```

<br><br>

### 7-8-5. 개별 Component 작성

**views/PostList.vue**

```vue
<template>
  <div>
    <h1 class="text-2xl">Post List</h1>
    <ul>
      <li v-for="post in posts" :key="post.no">
        <router-link :to="'/posts/' + post.no">{{ post.title
}}</router-link>
</li>
</ul>

  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/api/posts');
      this.posts = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
```

<br>

**views/PostDetail.vue**

```vue
<template>
  <div>
    <h1 class="text-2xl">{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <p><strong>Author:</strong> {{ post.author }}</p>
    <p><strong>Date:</strong> {{ new Date(post.resdate).toLocaleString() }}</p>
    <button @click="deletePost">Delete</button>
    <router-link :to="'/edit/' + post.no">Edit</router-link>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

export default {
  data() {
    return {
      post: {},
    };
  },
  async created() {
    const route = useRoute();
    try {
      const response = await axios.get(`http://localhost:3000/api/posts/${route.params.id}`);
      this.post = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async deletePost() {
      const router = useRouter();
      try {
        await axios.delete(`http://localhost:3000/api/posts/${this.post.no}`);
        router.push('/');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
```

<br>

**views/PostCreate.vue**

```vue
<template>
  <div>
    <h1 class="text-2xl">Create Post</h1>
    <form @submit.prevent="createPost">
      <div>
        <label for="title">Title</label>
        <input type="text" v-model="title" required />
      </div>
      <div>
        <label for="content">Content</label>
        <textarea v-model="content" required></textarea>
      </div>
      <div>
        <label for="author">Author</label>
        <input type="text" v-model="author" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      content: '',
      author: '',
    };
  },
  methods: {
    async createPost() {
      try {
        await axios.post('http://localhost:3000/api/posts', {
          title: this.title,
          content: this.content,
          author: this.author,
        });
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
```

<br>

**views/PostEdit.vue**

```vue
<template>
  <div>
    <h1 class="text-2xl">Edit Post</h1>
    <form @submit.prevent="updatePost">
      <div>
        <label for="title">Title</label>
        <input type="text" v-model="post.title" required />
      </div>
      <div>
        <label for="content">Content</label>
        <textarea v-model="post.content" required></textarea>
      </div>
      <div>
        <label for="author">Author</label>
        <input type="text" v-model="post.author" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

export default {
  data() {
    return {
      post: {
        title: '',
        content: '',
        author: '',
      },
    };
  },
  async created() {
    const route = useRoute();
    try {
      const response = await axios.get(`http://localhost:3000/api/posts/${route.params.id}`);
      this.post = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async updatePost() {
      const router = useRouter();
      try {
        await axios.put(`http://localhost:3000/api/posts/${this.post.no}`, this.post);
        router.push(`/posts/${this.post.no}`);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
```

<br><br>

### 7-8-6. Axios 설정

- 프론트엔드에서 Axios를 사용할 때, Axios를 공통 설정 파일로 설정해 두는 것이 좋습니다. 
- 예를 들어, src/axios.js 파일을 만들어서 Axios 인스턴스를 설정할 수 있습니다.

```javascript
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export default instance;
```

<br><br><br>
