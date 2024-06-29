# 6. Vuejs에 CSS Framework 적용

## 6-1. Bootstrap 적용

### 6-1-1. Bootstrap 특징

- Bootstrap은 가장 인기 있는 오픈 소스 CSS 프레임워크 중 하나로, 다양한 웹 애플리케이션과 웹사이트의 프론트엔드를 쉽게 구축할 수 있도록 돕습니다. 
- Bootstrap은 빠르고 일관성 있는 UI 개발을 가능하게 하는 강력한 CSS 프레임워크입니다. 반응형 디자인, 다양한 컴포넌트, 풍부한 유틸리티 클래스 등을 통해 웹 개발의 생산성을 높여줍니다. 그러나 파일 크기, 디자인 유연성 제한, 오버라이딩 필요성 등의 단점도 고려해야 합니다. Bootstrap은 빠른 프로토타이핑과 일관된 디자인이 중요한 프로젝트에 특히 유용합니다.

<br>

**특징**

1. 반응형 디자인: Bootstrap은 기본적으로 반응형 디자인을 지원하며, 모바일 퍼스트 접근 방식을 채택합니다.
2. 컴포넌트 기반: 다양한 UI 컴포넌트(버튼, 네비게이션 바, 모달 등)를 제공하여 빠르게 인터페이스를 구축할 수 있습니다.
3. 그리드 시스템: 12열 기반의 유연한 그리드 시스템을 제공하여 다양한 레이아웃을 손쉽게 구현할 수 있습니다.
4. 풍부한 유틸리티 클래스: 마진, 패딩, 텍스트 정렬 등 다양한 유틸리티 클래스를 제공하여 스타일링을 쉽게 할 수 있습니다.
5. 커스터마이징 가능: SCSS 변수를 사용하여 손쉽게 테마와 스타일을 커스터마이징할 수 있습니다.
6. 크로스 브라우저 호환성: 다양한 최신 브라우저와 호환되도록 설계되었습니다.
7. 자바스크립트 플러그인: 다양한 자바스크립트 플러그인을 제공하여 동적인 웹 기능을 쉽게 추가할 수 있습니다.

<br>

**장점**

1. 빠른 개발 속도: 미리 정의된 스타일과 컴포넌트를 사용하여 빠르게 UI를 구축할 수 있습니다.
2. 일관성: 프레임워크 전체에서 일관된 디자인과 사용자 경험을 유지할 수 있습니다.
3. 광범위한 문서화: 자세한 문서와 예제 코드가 제공되어 학습과 활용이 용이합니다.
4. 커뮤니티 지원: 큰 사용자 커뮤니티 덕분에 다양한 리소스와 지원을 쉽게 찾을 수 있습니다.
5. 풍부한 컴포넌트: 버튼, 카드, 모달, 알림 등 다양한 UI 컴포넌트를 제공하여 다양한 요구 사항을 충족할 수 있습니다.
6. 크로스 브라우저 호환성: 최신 브라우저와 잘 호환되며, 크로스 브라우저 이슈를 최소화합니다.

<br>

**단점**

1. 파일 크기: 기본 Bootstrap 파일은 비교적 크기 때문에, 성능 최적화를 위해 불필요한 부분을 제거하거나 커스터마이징이 필요할 수 있습니다.
2. 의존성: 자바스크립트 플러그인 사용 시 jQuery에 의존성이 있을 수 있습니다(특히 Bootstrap 4 이전 버전).
3. 제한된 디자인 유연성: 기본 제공되는 스타일이 강력하여, 독창적인 디자인을 구현하려면 상당한 커스터마이징이 필요할 수 있습니다.
4. 오버라이딩 필요성: 기본 스타일이 강력해서 프로젝트의 특정 요구사항에 맞추기 위해 CSS를 많이 오버라이딩해야 할 수 있습니다.
5. 비슷한 디자인: 많은 웹사이트가 Bootstrap을 사용하기 때문에, 기본 테마를 사용하는 경우 다른 사이트와 비슷한 디자인이 될 수 있습니다.

<br><br>

### 6-1-2. Bootstrap 의 설치와 도입

#### 6-1-2-1. Bootstap 설치

```bash
npm install bootstrap --save-dev
```

<br>

#### 6-1-2-2. Bootstrap 연결

**src/main.ts에서 연결**

```typescript
// Bootstrap의 JavaScript 파일 임포트
import 'bootstrap/dist/js/bootstrap.js';
// Bootstrap의 CSS 파일 임포트
import 'bootstrap/dist/css/bootstrap.css';
```

<br><br>

### 6-1-3. Bootstrap 을 적용한 애플리케이션 제작 실습

#### 6-1-3-1. 애플리케이션 생성 및 구조

**프로젝트 생성**

```shell
D:\gitRepository\vuejs\study06>vue create bootstrap

Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex
? Choose a version of Vue.js that you want to start the project with 3.x
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
? Save this as a preset for future projects? No
```

<br>

**필요한 라이브러리 및 패키지 설치**

```shell
D:\gitRepository\vuejs\study06>cd bootstrap
D:\gitRepository\vuejs\study06\bootstrap>npm install bootstrap --save-dev
D:\gitRepository\vuejs\study06\bootstrap>npm install axios --save-dev
D:\gitRepository\vuejs\study06\bootstrap>npm install webpack webpack-cli --save-dev
D:\gitRepository\vuejs\study06\bootstrap>npm install css-loader style-loader file-loader --save-dev
D:\gitRepository\vuejs\study06\bootstrap>npm install vue-loader vue-template-compiler --save-dev
D:\gitRepository\vuejs\study06\bootstrap>npm install express multer fs --save-dev
```

<br>

**프로젝트 구조**

```lua
bootstrap/
├── babel.config.js
├── package.json
├── public/
│   └── index.html
├── server.js
├── src/
│   ├── App.vue
│   ├── assets/
│   │   ├── product/
│   │   ├── styles/
│   │   │   └── main.css
│   │   ├── upload/
│   │   ├── bords.json
│   │   ├── dataroom.json
│   │   ├── products.json
│   │   ├── qnas.json
│   │   └── users.json
│   ├── components/
│   │   ├── Breadcrumb.vue
│   │   ├── Footer.vue
│   │   ├── Header.vue
│   │   ├── NavBar.vue
│   │   └── Visual.vue
│   ├── main.ts
│   ├── model/
│   │   └── index.ts
│   ├── router/
│   │   └── index.ts
│   ├── shims-vue.d.ts
│   ├── store/
│   │   └── index.ts
│   ├── views/
│   │   ├── AnswerCreate.vue
│   │   ├── BoardCreate.vue
│   │   ├── BoardDetail.vue
│   │   ├── BoardEdit.vue
│   │   ├── BoardList.vue
│   │   ├── Chat.vue
│   │   ├── DataCreate.vue
│   │   ├── DataDetail.vue
│   │   ├── DataEdit.vue
│   │   ├── DataList.vue
│   │   ├── DeliveryService.vue
│   │   ├── Faq.vue
│   │   ├── Greetings.vue
│   │   ├── History.vue
│   │   ├── Home.vue
│   │   ├── Intro.vue
│   │   ├── Login.vue
│   │   ├── OnlineService.vue
│   │   ├── Organization.vue
│   │   ├── ProductDetail.vue
│   │   ├── ProductList.vue
│   │   ├── QnaDetail.vue
│   │   ├── QnaEdit.vue
│   │   ├── QnaList.vue
│   │   ├── QuestionCreate.vue
│   │   ├── ReservationService.vue
│   │   ├── SendEmail.vue
│   │   ├── Signup.vue
│   │   ├── UserDetail.vue
│   │   └── VisitService.vue
├── tsconfig.json
├── vue.config.js
└── webpack.config.js
```

<br><br>

#### 6-1-3-2. 프로젝트 설정

**package.json**

```json
{
  "name": "bootstrap",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "axios": "^1.7.2",
    "core-js": "^3.8.3",
    "vue": "^3.2.13",
    "vue-router": "^4.0.3",
    "vuex": "^4.0.0"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~5.0.0",
    "@vue/cli-plugin-router": "~5.0.0",
    "@vue/cli-plugin-typescript": "~5.0.0",
    "@vue/cli-plugin-vuex": "~5.0.0",
    "@vue/cli-service": "~5.0.0",
    "bootstrap": "^5.0.2",
    "css-loader": "^7.1.2",
    "express": "^4.19.2",
    "file-loader": "^6.2.0",
    "fs": "^0.0.1-security",
    "multer": "^1.4.5-lts.1",
    "postcss-loader": "^8.1.1",
    "source-map-loader": "^5.0.0",
    "style-loader": "^4.0.0",
    "typescript": "~4.5.5",
    "url-loader": "^4.1.1",
    "vue-loader": "^17.4.2",
    "vue-template-compiler": "^2.7.16",
    "webpack": "^5.92.1",
    "webpack-cli": "^5.1.4"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead",
    "not ie 11"
  ]
}
```

<br><br>

**babel.config.js**

```javascript
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
```

<br><br>

**server.js**

```javascript
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/upload', upload.single('file'), (req, res) => {
  const tempPath = req.file.path;
  const targetPath = path.join(__dirname, 'public/assets/upload', req.file.originalname);

  fs.rename(tempPath, targetPath, err => {
    if (err) return res.status(500).json({ success: false });

    res.json({ success: true });
  });
});

app.post('/update-file/:filename', upload.single('file'), (req, res) => {
  const tempPath = req.file.path;
  const targetPath = path.join(__dirname, 'public/assets/upload', req.file.originalname);
  const oldFilePath = path.join(__dirname, 'public/assets/upload', req.params.filename);

  fs.rename(tempPath, targetPath, err => {
    if (err) return res.status(500).json({ success: false });

    fs.unlink(oldFilePath, unlinkErr => {
      if (unlinkErr) return res.status(500).json({ success: false });

      res.json({ success: true });
    });
  });
});

app.delete('/delete-file/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'public/assets/upload', req.params.filename);

  fs.unlink(filePath, err => {
    if (err) return res.status(500).json({ success: false });

    res.json({ success: true });
  });
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
```

<br><br>

**tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "useDefineForClassFields": true,
    "sourceMap": true,
    "baseUrl": ".",
    "types": [
      "webpack-env"
    ],
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

<br><br>

**vue.config.js**

```javascript
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
```

<br><br>

**webpack.config.js**

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      // Bootstrap의 JavaScript 파일을 처리하는 로더
      {
        test: /bootstrap\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // Bootstrap의 CSS 파일을 처리하는 로더
      {
        test: /bootstrap\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ]
};
```

<br><br>

**src/main.ts**

- 프로젝트의 진입점 파일입니다.

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Bootstrap의 JavaScript 파일 임포트
import 'bootstrap/dist/js/bootstrap.js';
// Bootstrap의 CSS 파일 임포트
import 'bootstrap/dist/css/bootstrap.css';

createApp(App).use(router).use(store).mount('#app');
```

<br><br>

**src/router/index.ts**

- 라우터 설정 파일입니다.

```typescript
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Intro from '../views/Intro.vue';
import History from '../views/History.vue';
import Greetings from '../views/Greetings.vue';
import Organization from '../views/Organization.vue';
import BoardList from '../views/BoardList.vue';
import BoardDetail from '../views/BoardDetail.vue';
import BoardCreate from '../views/BoardCreate.vue';
import BoardEdit from '../views/BoardEdit.vue';
import OnlineService from '../views/OnlineService.vue';
import VisitService from '../views/VisitService.vue';
import DelyveryService from '../views/DelyveryService.vue';
import ReservationService from '../views/ReservationService.vue';
import ProductList from '../views/ProductList.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import UserDetail from '../views/UserDetail.vue';
import QnaList from '@/views/QnaList.vue';
import QnaDetail from '@/views/QnaDetail.vue';
import QuestionCreate from '@/views/QuestionCreate.vue';
import AnswerCreate from '@/views/AnswerCreate.vue';
import QnaEdit from '@/views/QnaEdit.vue';
import Faq from '@/views/Faq.vue';
import SendEmail from '@/views/SendEmail.vue';
import Chat from '@/views/Chat.vue';
import DataList from '@/views/DataList.vue';
import DataDetail from '@/views/DataDetail.vue';
import DataCreate from '@/views/DataCreate.vue';
import DataEdit from '@/views/DataEdit.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/company/intro', component: Intro },
  { path: '/company/history', component: History },
  { path: '/company/greetings', component: Greetings },  
  { path: '/company/organization', component: Organization },
  { path: '/community/notice', component: BoardList },  
  { path: '/board/list', component: BoardList },
  { path: '/board/create', component: BoardCreate },
  { path: '/board/:id', name: 'BoardDetail', component: BoardDetail, props: true },
  { path: '/board/edit/:id', name: 'BoardEdit', component: BoardEdit, props: true },
  { path: '/service/online', component: OnlineService },
  { path: '/service/visit', component: VisitService },
  { path: '/service/delivery', component: DelyveryService },
  { path: '/service/reservation', component: ReservationService },
  { path: '/products', component: ProductList },
  { path: '/product/list', component: ProductList },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail, props: true},
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '/user/:id', component: UserDetail, props: true },
  { path: '/qna/list', component: QnaList },
  { path: '/qna/:id', component: QnaDetail, props: true },
  { path: '/qna/create', component: QuestionCreate },
  { path: '/qna/answer/:id', component: AnswerCreate, props: true },
  { path: '/qna/edit/:id', component: QnaEdit, props: true },
  { path: '/qnas', redirect: '/qna/list' },
  { path: '/data/list', name: 'DataList', component: DataList },
  { path: '/data/:id', name: 'DataDetail', component: DataDetail, props: true },
  { path: '/data/create', name: 'DataCreate', component: DataCreate },
  { path: '/data/edit/:id', name: 'DataEdit', component: DataEdit, props: true },
  { path: '/community/faq', component: Faq },
  { path: '/send-email', component: SendEmail },
  { path: '/chat', component: Chat }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

<br><br>

**store/index.ts**

- Vuex 스토어 설정 파일입니다.

```typescript
import { createStore } from 'vuex';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
```

<br><br>

#### 6-1-3-3. 컴포넌트 작성

**src/App.vue**

- 최상위 Vue 컴포넌트입니다.

```vue
<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar
  }
});
</script>

<style>
@import './assets/styles/main.css';
</style>
```

<br><br>

**src/components/NavBar.vue**

- 네비게이션 바 컴포넌트입니다.

```vue
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid" style="width: 900px; margin: 0 auto;">
      <router-link class="navbar-brand" to="/">Morning</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="justify-content: flex-end;">
          <li class="nav-item">
            <router-link v-if="isLoggedIn" :to="getUserDetailPath()" class="nav-link">My Page</router-link>
            <router-link v-else to="/signup" class="nav-link">SignUp</router-link>
          </li>
          <li class="nav-item">
            <a v-if="isLoggedIn" @click.prevent="logout" href="#" class="nav-link">Logout</a>
            <router-link v-else to="/login" class="nav-link">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'NavBar',
  setup() {
    const router = useRouter();
    const isLoggedIn = ref(false); // 반응성 변수로 로그인 상태 관리

    const getUserDetailPath = () => {
      const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
      return `/user/${currentUser.id}`;
    };

    const logout = () => {
      // 세션 스토리지에서 사용자 정보 삭제
      sessionStorage.removeItem('currentUser');
      isLoggedIn.value = false; // 로그아웃 상태로 변경

      // 로그아웃 후 메인 페이지로 이동
      router.push('/');
    };

    const checkSession = () => {
      const currentUser = sessionStorage.getItem('currentUser');
      isLoggedIn.value = currentUser !== null;
    };

    // 페이지 로드 시 세션 체크
    onMounted(checkSession);

    // 세션 변경 감지
    watch(() => sessionStorage.getItem('currentUser'), (newValue, oldValue) => {
      if (newValue !== oldValue) {
        isLoggedIn.value = newValue !== null;
        window.location.reload();
      }
      router.push('/');
    });

    return {
      isLoggedIn,
      getUserDetailPath,
      logout
    };
  }
});
</script>
```

<br><br>

**src/components/Breadcrumb.vue**

```vue
<template>
    <div class="full-screen">
        <nav aria-label="breadcrumb" class="container" >
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a :href="href" id="group">{{ group }}</a></li>
                <li class="breadcrumb-item active" aria-current="page" id="current">{{ current }}</li>
            </ol>
        </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Breadcrumb',
  props: {
    group: {
      type: String,
      required: true
    },
    current: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  }
});
</script>

<style>
.full-screen {
    margin: 0;
    padding: 0;
    width: 100%;
    padding-top: 0.8em;
    background-color: #ececec;
}

.breadcrumb {
    height: 40px;
    line-height: 40px;
}

.breadcrumb a {
    text-decoration: none;
}
</style>
```

<br><br>

**src/components/footer.vue**

```vue
<template>
    <footer class="bg-light">
      <div class="container">
        <!-- Add your footer content here -->
        <p>&copy; 2024 MyApp. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  };
  </script>
  
  <style scoped>
  /* Your footer styles here */
  </style>
```

<br><br>

**src/components/header.vue**

```vue
<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid" style="width:900px; margin:0 auto;">
        <!-- Logo -->
        <a href="/" class="navbar-brand logo">
          <img src="@/assets/logo.png" alt="MyApp Logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Main Menu -->
        <nav class="collapse navbar-collapse" id="navbarSupportedContent" style="margin-left:60px;">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a href="/company" class="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">Company</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><a href="/company/intro" class="dropdown-item" >회사소개</a></li>
                <li><a href="/company/history" class="dropdown-item" >회사연혁</a></li>
                <li><a href="/company/greetings" class="dropdown-item" >인사말</a></li>
                <li><a href="/company/organization" class="dropdown-item" >조직</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a href="/product" class="nav-link dropdown-toggle" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">Product</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li><a href="/products" class="dropdown-item" >비스켓</a></li>
                <li><a href="/products" class="dropdown-item" >스낵</a></li>
                <li><a href="/products" class="dropdown-item" >기타</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a href="/service" class="nav-link dropdown-toggle" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">Service</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
                <li><a href="/service/online" class="dropdown-item" >온라인 서비스</a></li>
                <li><a href="/service/visit" class="dropdown-item" >방문 서비스</a></li>
                <li><a href="/service/delivery" class="dropdown-item" >택배 서비스</a></li>
                <li><a href="/service/reservation" class="dropdown-item" >시설 이용 예약 서비스</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a href="/community" class="nav-link dropdown-toggle" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">Community</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                <li><a href="/community/notice" class="dropdown-item" >공지사항</a></li>
                <li><a href="/qna/list" class="dropdown-item" >질문 및 답변</a></li>
                <li><a href="/data/list" class="dropdown-item" >자료실</a></li>
                <li><a href="/community/faq" class="dropdown-item" >자주하는 질문</a></li>
                <li><a href="/send-email" class="dropdown-item" >온라인 상담</a></li>
                <li><a href="/chat" class="dropdown-item" >챗봇 상담</a></li>
              </ul>
            </li>
          </ul>
        </nav>
 
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  data() {
    return {
      isAuthenticated: false // 이 값은 실제 로그인 여부에 따라 변경되어야 합니다.
    };
  }
});
</script>

<style scoped>
/* Add custom CSS for hover dropdown */
.nav-item.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  margin-top: 0; /* Adjust margin if needed */
}
.logo {
  display: block;
  width: 90px;
}

.logo img {
  display: block;
  width: 100%;
  height: auto;
}

.dropdown-toggle::after {
  border: none;
}

.nav-link {
  min-width: 180px; 
  font-size: 1.4em;
}
</style>
```

<br><br>

**src/components/Visual.vue**

```vue
<template>
    <figure class="full-screen">
      <img :src="src" class="img" :alt="alt">
    </figure>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Visual',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
});
</script>

<style>
.full-screen {
  margin: 0;
  padding: 0;
  width: 100%;
  max-height: 400px;
  overflow: hidden;
}

.full-screen .img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
```

<br><br>

#### 6-1-3-4. View 작성

**views/Home.vue**

- 메인 페이지입니다.

```vue
<template>
  <div>
    <div class="container-fluid mt-5">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item item1 active">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item item2">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item item3">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <!-- 제품 목록 카드 -->
    <div class="container my-5">
      <h2 class="mb-4">Hot Item</h2>
      <div class="row">
        <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
          <div class="card h-100">
            <img :src="product.image" :alt="product.name" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <!-- 수정된 부분: v-html을 이용하여 제품 설명 HTML을 출력 -->
              <div v-html="product.description"></div>
              <p class="card-text"><strong>Price:</strong> {{ product.price }}원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import products from '@/assets/products.json';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string; // HTML 형식의 제품 설명
  image: string;
}

export default defineComponent({
  name: 'Home',
  data() {
    return {
      products: [] as Product[],
      loading: false,
      error: null,
    };
  },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  },
  created() {
    this.products = products.slice(0, 3).map(product => ({
      ...product,
      image: require(`@/assets/product/${product.image.split('/').pop()}`),
    })); 
  },
});
</script>

<style>
body {  -ms-overflow-style: none;  }
::-webkit-scrollbar {   display: none;  }
.container-fluid { margin: 0; padding: 0; width: 100vw; box-sizing: border-box; }
#carouselExampleCaptions { width: 100%; margin: 0; padding: 0; }
.carousel-item { 
  height: 400px;
  background-repeat: no-repeat; 
  background-size:100% auto; 
  background-position:center center; 
}
.carousel-item.item1 { 
  background-image: url("../assets/vs001.jpg");
}
.carousel-item.item2 { 
  background-image: url("../assets/vs005.jpg");
}
.carousel-item.item3 { 
  background-image: url("../assets/vs004.jpg");
}
</style>
```

<br><br>

**BoardList.vue**

```vue
<template>
  <div>
    <Visual :src="src" alt="Board" />
    <Breadcrumb group="Board" current="List" :href="href" />
    <div class="container mt-5">
      <h1>Board List</h1>
      <hr />
      <!-- 검색 입력 폼 -->
      <div class="mb-3">
        <label for="searchText" class="form-label">검색</label>
        <input type="text" class="form-control" id="searchText" v-model="searchText" @input="filterPosts" />
      </div>
      <!-- 글 목록 테이블 -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in paginatedPosts" :key="post.id">
            <td>{{ index + 1 + (currentPage - 1) * postsPerPage }}</td>
            <td><router-link :to="`/board/${post.id}`">{{ post.title }}</router-link></td>
            <td>{{ post.author }}</td>
            <td>{{ post.date }}</td>
          </tr>
        </tbody>
      </table>
      <!-- 페이지네이션 -->
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
            <button class="page-link" @click="prevPage">&laquo;</button>
          </li>
          <li class="page-item" v-for="pageNumber in totalPages" :key="pageNumber" :class="{ 'active': pageNumber === currentPage }">
            <button class="page-link" @click="goToPage(pageNumber)">{{ pageNumber }}</button>
          </li>
          <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
            <button class="page-link" @click="nextPage">&raquo;</button>
          </li>
        </ul>
      </nav>
      <!-- 글쓰기 버튼 -->
      <div class="btn-group">
        <router-link to="/board/create" class="btn btn-primary">글쓰기</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
import boards from '@/assets/boards.json'; // boards.json 파일 import

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
}

export default defineComponent({
  name: 'BoardList',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      posts: [] as Post[], // 타입 정의 추가
      filteredPosts: [] as Post[], // 타입 정의 추가
      searchText: '',
      src: new URL('@/assets/vs029.jpg', import.meta.url).href,
      href: "/board/list",
      currentPage: 1,
      postsPerPage: 5 // 페이지당 글 개수
    };
  },
  computed: {
    // 필터된 포스트를 현재 페이지에 맞게 슬라이스하여 보여줍니다.
    paginatedPosts(): Post[] {
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      return this.filteredPosts.slice(startIndex, startIndex + this.postsPerPage);
    },
    // 전체 페이지 수 계산
    totalPages(): number {
      return Math.ceil(this.filteredPosts.length / this.postsPerPage);
    }
  },
  mounted() {
    this.posts = boards as Post[]; // boards.json에서 데이터 가져오기
    this.filterPosts(); // 초기 필터링 적용
  },
  methods: {
    // 검색어에 따라 글 목록 필터링
    filterPosts(): void {
      if (this.searchText.trim() === '') {
        this.filteredPosts = this.posts;
      } else {
        this.filteredPosts = this.posts.filter(post =>
          post.title.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
      this.currentPage = 1; // 필터링 후 첫 페이지로 이동
    },
    // 페이지 이동
    goToPage(pageNumber: number): void {
      this.currentPage = pageNumber;
    },
    // 이전 페이지로 이동
    prevPage(): void {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    // 다음 페이지로 이동
    nextPage(): void {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  }
});
</script>

<style scoped>
/* 추가적인 스타일링 필요 시 여기에 작성 */
</style>
```

<br><br>

**views/BoardDetail.vue**

- 게시판 글 상세보기 페이지입니다.

```vue
<template>
    <div>
      <Visual :src="src" alt="Board" />
      <Breadcrumb group="Board" current="Detail" :href="href" />
      <div class="container mt-5">
        <h1>Board Detail</h1>
        <table v-if="post" class="table table-bordered">
        <tr>
          <th>Title</th>
          <td>{{ post.title }}</td>
        </tr>
        <tr>
          <th>Author</th>
          <td>{{ post.author }}</td>
        </tr>
        <tr>
          <th>Date</th>
          <td>{{ post.date }}</td>
        </tr>
        <tr>
          <th>Content</th>
          <td>{{ post.content }}</td>
        </tr>
      </table>
      <div v-else>
        <p>Post not found.</p>
      </div>      
      <div class="btn-group">
        <a :href="`/board/edit/${id}`" class="btn btn-warning">글 수정</a>
        <a @click="deletePost(post.id)" class="btn btn-danger">글 삭제</a>
        <a href="/board/create" class="btn btn-info">글 쓰기</a>
        <a href="/board/list" class="btn btn-primary" aria-current="page">글 목록</a>
      </div>
    </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  import Visual from '@/components/Visual.vue';
  import boards from '@/assets/boards.json'; // Import boards.json file

  interface Post {
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
  }

export default defineComponent({
  name: 'BoardDetail',
  components: {
    Visual,
    Breadcrumb
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      src: new URL('@/assets/vs028.jpg', import.meta.url).href,
      post: {} as Post,
      href: "/board/list"
    };
  },
  mounted() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      const route = this.$route;
      const postId = Number(route.params.id);
      this.post = boards.find(post => post.id === postId) || {} as Post;
    },
    deletePost(id: number) {
      // Filter out the post with the given id and update boards.json
      const updatedPosts = boards.filter(post => post.id !== id);
      // Replace the original boards.json (simulated action, replace with actual logic)
      console.log(updatedPosts);
      alert('게시글이 삭제되었습니다.');
      // Redirect to the list page
      this.$router.push('/board/list');
    }
  }
});
  </script>
```

<br><br>

**views/BoardCreate.vue**

- 게시판 글 등록 페이지입니다.

```vue
<template>
  <div>
    <Visual :src="src" alt="Board" />
    <Breadcrumb group="Board" current="Create" :href="href"/>
    <div class="container mt-5">
      <h1>Create New Post</h1>
      <hr>
      <form @submit.prevent="createPost">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" id="title" v-model="title" required>
        </div>
        <div class="mb-3">
          <label for="author" class="form-label">Author</label>
          <input type="text" class="form-control" id="author" v-model="author" required>
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">Content</label>
          <textarea class="form-control" id="content" v-model="content" rows="3" required></textarea>
        </div>
        <div class="btn-group">
          <button type="submit" class="btn btn-danger">글 쓰기</button>
          <router-link to="/board/list" class="btn btn-primary" aria-current="page">글 목록</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
import boards from '@/assets/boards.json'; // Import boards.json file

interface Post {
  id: number;
  title: string;
  author: string;
  date: string; // Optional if you want to track creation date
  content: string;
}

export default defineComponent({
  name: 'BoardCreate',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      title: '',
      author: 'Admin', // Default author is 'Admin'
      content: '',
      src: new URL('@/assets/vs029.jpg', import.meta.url).href,
      href: "/board/list"
    };
  },
  methods: {
    createPost() {
      const newPost: Post = {
        id: boards.length > 0 ? boards[boards.length - 1].id + 1 : 1, // Generate new ID
        title: this.title,
        author: this.author,
        content: this.content,
        date: new Date().toISOString() // Optional: Set current date/time
      };

      boards.push(newPost); // Add new post to the boards array

      // Optional: Save to localStorage or perform backend API call to persist data

      alert('Post created!'); // Inform user about successful creation

      // Redirect to board list view
      this.$router.push('/board/list');
    }
  }
});
</script>

<style scoped>
/* Your scoped styles here */
</style>
```

<br><br>

**views/BoardEdit.vue**

```vue
<template>
    <div>
      <Visual :src="src" alt="Board" />
      <Breadcrumb group="Board" current="Edit" :href="href"/>
      <div class="container mt-5">
        <h1>Edit Post</h1>
        <hr>
        <form @submit.prevent="editPost">
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" v-model="post.title" required>
          </div>
          <div class="mb-3">
            <label for="author" class="form-label">Author</label>
            <input type="text" class="form-control" id="author" v-model="post.author" required>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">Content</label>
            <textarea class="form-control" id="content" v-model="post.content" rows="3" required></textarea>
          </div>
          <div class="btn-group">
            <button type="submit" class="btn btn-success">Save Changes</button>
            <router-link to="/board/list" class="btn btn-primary" aria-current="page">Cancel</router-link>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  import Visual from '@/components/Visual.vue';
  import boards from '@/assets/boards.json';
  
  interface Post {
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
  }
  
  export default defineComponent({
    name: 'BoardEdit',
    components: {
      Breadcrumb,
      Visual
    },
    data() {
      return {
        src: new URL('@/assets/vs029.jpg', import.meta.url).href,
        post: {} as Post,
        href: "/board/list"
      };
    },
    mounted() {
      this.fetchPost();
    },
    methods: {
      fetchPost() {
        const route = useRoute();
        const postId = Number(route.params.id);
        this.post = boards.find(post => post.id === postId) || {} as Post;
      },
      editPost() {
        // Find index of the post in the array
        const index = boards.findIndex(post => post.id === this.post.id);
        if (index !== -1) {
          // Update post in the array
          boards[index] = { ...this.post };
          // Optional: Save to localStorage or perform backend API call to persist data
          alert('Post updated successfully!');
          // Redirect to board list view
          this.$router.push('/board/list');
        } else {
          alert('Post not found!');
        }
      }
    }
  });
  </script>
  
  <style scoped>
  /* Your scoped styles here */
  </style>
```

<br><br>

**views/ProductList.vue**

- 제품 목록 페이지입니다.

```vue
<template>
  <div>
    <Visual :src="src" alt="Product" />
    <Breadcrumb group="Product" current="List" :href="href" />
    <div class="container my-5">
      <h1>Product List</h1>
      <hr>
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <div v-if="products.length" class="row">
        <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
          <router-link :to="`/product/${product.id}`">
            <div class="card h-100">
              <img :src="product.imageUrl" :alt="product.name" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title" style="font-weight:800;">{{ product.name }}</h5>
                <p class="card-text" v-html="product.description"></p>
                <p class="card-text"><strong>Price:</strong> {{ product.price }}원</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
import products from '@/assets/products.json';

export default {
  name: 'ProductList',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      products: [],
      loading: false,
      error: null,
      src: new URL('@/assets/vs013.jpg', import.meta.url).href,
      href: "/products"
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.loading = true;
      try {
        this.products = products.map(product => ({
          ...product,
          imageUrl: require(`../assets/product/${product.image.split('/').pop()}`),
          image2: require(`../assets/product/${product.image2.split('/').pop()}`)
        }));
      } catch (error) {
        this.error = 'Failed to load products.';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.card {
  text-align: center;
}
.card-img-top {
  width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}
</style>
```

<br><br>

**views/ProductDetail.vue**

```vue
<template>
    <div>
        <Visual :src="src" alt="Product" />
        <Breadcrumb group="Product" current="Detail" :href="href" />
        <div class="container mt-5">
        <h1>제품 상세 정보</h1>
        <hr />
        <table class="table" style="width:900px; margin:0 auto;">
            <tbody v-if="product">
                <tr>
                    <td style="background-color: #fff;">
                        <div class="product-images">
                            <img :src="productImage" alt="제품 이미지" class="img-fluid" />
                        </div>
                    </td>
                    <td style="background-color: #fff;">
                        <br><br>
                        <h2>{{ product.name }}</h2>
                        <p><strong>가격:</strong> {{ product.price }} 원</p>
                        <div v-html="product.description"></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <br><br><br>        
                        <div class="product-images" style="text-align: center;">   
                            <img :src="productImage2" alt="제품 추가 이미지" class="img-fluid" />
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="2"><p>제품 정보를 불러오는 중 오류가 발생했습니다.</p></td>
                </tr>
            </tbody>
        </table>
        <div class="btn-group mt-3">
            <router-link to="/product/list" class="btn btn-primary">제품 목록</router-link>
        </div>
    </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { RouteLocationNormalizedLoaded } from 'vue-router';
  import products from '@/assets/products.json';
  
  interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    image2: string;
  }
  
  export default defineComponent({
    name: 'ProductDetail',
    data() {
      return {
        product: null as Product | null,
        productImage: '',
        productImage2: '',
        src: new URL('@/assets/vs013.jpg', import.meta.url).href,
        href: "/products"
      };
    },
    mounted() {
      this.fetchProduct();
    },
    methods: {
      fetchProduct() {
        const route = this.$route as RouteLocationNormalizedLoaded;
        const productId = Number(route.params.id);
        const product = products.find(product => product.id === productId) || null;
        if(product) {
            this.product = product;
            this.productImage = require(`../assets/product/${product.image.split('/').pop()}`);
            this.productImage2 = require(`../assets/product/${product.image2.split('/').pop()}`);
        }
      }
    }
  });
  </script>
  
  <style scoped>
  .product-images img {
    max-width: 100%;
    margin-bottom: 10px;
  }
  </style>
```

<br><br>

**views/QnaList.vue**

```vue
<template>
  <div>
    <Visual :src="src" alt="QnA" />
    <Breadcrumb group="QnA" current="List" :href="href" />
    <div class="container mt-5">
      <h1>QnA 목록</h1>
      <!-- 검색 입력 폼 -->
      <div class="mb-3">
        <label for="searchText" class="form-label">검색</label>
        <input type="text" class="form-control" id="searchText" v-model="searchText" @input="filterPosts" />
      </div>
      <ul class="list-group">
        <li class="list-group-item" v-for="post in paginatedPosts" :key="post.id">
          <router-link :to="`/qna/${post.id}`">
            <strong>{{ post.title }}</strong> - {{ post.author }} ({{ post.date }})
          </router-link>
        </li>
      </ul>
      <!-- 페이지네이션 -->
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
            <button class="page-link" @click="prevPage">&laquo;</button>
          </li>
          <li class="page-item" v-for="pageNumber in totalPages" :key="pageNumber" :class="{ 'active': pageNumber === currentPage }">
            <button class="page-link" @click="goToPage(pageNumber)">{{ pageNumber }}</button>
          </li>
          <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
            <button class="page-link" @click="nextPage">&raquo;</button>
          </li>
        </ul>
      </nav>
      <!-- 글쓰기 버튼 -->
      <div class="btn-group">
        <router-link to="/qna/create" class="btn btn-secondary">글쓰기</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
import qnas from '@/assets/qnas.json';

interface Post {
  id: number;
  lev: number;
  parno: number;
  title: string;
  author: string;
  date: string;
  content: string;
}

export default defineComponent({
  name: 'QnaList',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      posts: [] as Post[], // 타입 정의 추가
      filteredPosts: [] as Post[], // 타입 정의 추가
      searchText: '',
      src: new URL('@/assets/vs025.jpg', import.meta.url).href,
      href: "/qna/list",
      currentPage: 1,
      postsPerPage: 5 // 페이지당 글 개수
    };
  },
  computed: {
    // 필터된 포스트를 현재 페이지에 맞게 슬라이스하여 보여줍니다.
    paginatedPosts(): Post[] {
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      return this.filteredPosts.slice(startIndex, startIndex + this.postsPerPage);
    },
    // 전체 페이지 수 계산
    totalPages(): number {
      return Math.ceil(this.filteredPosts.length / this.postsPerPage);
    }
  },
  mounted() {
    this.posts = qnas as Post[]; // qnas.json에서 데이터 가져오기
    this.filterPosts(); // 초기 필터링 적용
  },
  methods: {
    // 검색어에 따라 글 목록 필터링
    filterPosts(): void {
      if (this.searchText.trim() === '') {
        this.filteredPosts = this.posts;
      } else {
        this.filteredPosts = this.posts.filter(post =>
          post.title.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
      this.currentPage = 1; // 필터링 후 첫 페이지로 이동
    },
    // 페이지 이동
    goToPage(pageNumber: number): void {
      this.currentPage = pageNumber;
    },
    // 이전 페이지로 이동
    prevPage(): void {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    // 다음 페이지로 이동
    nextPage(): void {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  }
});
</script>

<style scoped>
/* 추가적인 스타일링 필요 시 여기에 작성 */
</style>
```

<br><br>

**views/QnaDetail.vue**

```vue
<template>
  <div>
    <Visual :src="src" alt="QnA" />
    <Breadcrumb group="QnA" current="Detail" :href="href" />
    <div class="container mt-5">
      <h1>QnA 상세 정보</h1>
      <hr />
      <div v-if="post">
        <table class="table table-bordered">
          <tr>
            <th>제목</th>
            <td>{{ post.title }}</td>
          </tr>
          <tr>
            <th>작성자</th>
            <td>{{ post.author }}</td>
          </tr>
          <tr>
            <th>작성일</th>
            <td>{{ post.date }}</td>
          </tr>
          <tr>
            <th>내용</th>
            <td>{{ post.content }}</td>
          </tr>
        </table>
        <div class="btn-group" v-if="post.lev === 0">
          <router-link :to="`/qna/answer/${post.id}`" class="btn btn-info">답변하기</router-link>
          <router-link :to="`/qna/edit/${post.id}`" class="btn btn-warning">글 수정</router-link>
          <button @click="deletePost(post.id)" class="btn btn-danger">글 삭제</button>
          <router-link to="/qna/list" class="btn btn-primary" aria-current="page">글 목록</router-link>
        </div>
        <div class="btn-group" v-else>
          <router-link :to="`/qna/edit/${post.id}`" class="btn btn-warning">글 수정</router-link>
          <button @click="deletePost(post.id)" class="btn btn-danger">글 삭제</button>
          <router-link to="/qna/list" class="btn btn-primary" aria-current="page">글 목록</router-link>
        </div>
      </div>
      <div v-else>
        <p>해당 글을 찾을 수 없습니다.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
import qnas from '@/assets/qnas.json';

interface Post {
  id: number;
  lev: number;
  parno: number;
  title: string;
  author: string;
  date: string;
  content: string;
}

export default defineComponent({
  name: 'QnaDetail',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      post: null as Post | null,
      src: new URL('@/assets/vs025.jpg', import.meta.url).href,
      href: "/qna/list"
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      const route = useRoute();
      const id = parseInt(route.params.id as string, 10);
      const posts: Post[] = qnas;
      this.post = posts.find(post => post.id === id) || null;
    },
    deletePost(id: number) {
      const posts: Post[] = qnas;
      const updatedPosts = posts.filter(post => post.id !== id);
      console.log('Updated posts:', updatedPosts);
      alert('글이 삭제되었습니다.');
      this.$router.push('/qna/list');
    }
  }
});
</script>
```

<br><br>

**views/QuestionCreate.vue**

```vue
<template>
  <div>
    <Visual :src="src" alt="QnA" />
    <Breadcrumb group="QnA" current="Question Create" :href="href" />
    <div class="container mt-5">
      <h1>질문 작성</h1>
      <form @submit.prevent="createPost">
        <div class="mb-3">
          <label for="title" class="form-label">제목</label>
          <input type="text" class="form-control" id="title" v-model="title" required />
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">내용</label>
          <textarea class="form-control" id="content" v-model="content" rows="3" required></textarea>
        </div>
        <div class="btn-group">
          <button type="submit" class="btn btn-primary">제출하기</button>
          <router-link to="/qna/list" class="btn btn-secondary">취소</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';

export default defineComponent({
  name: 'QuestionCreate',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      title: '',
      content: '',
      src: require('@/assets/vs025.jpg'),
      href: "/qna/list"
    };
  },
  methods: {
    createPost() {
      // 새 질문을 추가하는 로직
      alert('질문이 작성되었습니다.');
      this.$router.push('/qna/list');
    }
  }
});
</script>
```

<br><br>

**views/AnswerCreate.vue**

```vue
<template>
  <div>
    <Visual :src="src" alt="QnA" />
    <Breadcrumb group="QnA" current="Answer Create" :href="href" />
    <div class="container mt-5">
      <h1>답변 작성</h1>
      <form @submit.prevent="createAnswer">
        <div class="mb-3">
          <label for="content" class="form-label">답변 내용</label>
          <textarea class="form-control" id="content" v-model="content" rows="3" required></textarea>
        </div>
        <div class="btn-group">
          <button type="submit" class="btn btn-primary">제출하기</button>
          <router-link to="/qna/list" class="btn btn-secondary">취소</router-link>
      </div>  
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';

export default defineComponent({
  name: 'AnswerCreate',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      content: '',
      src: require('@/assets/vs025.jpg'),
      href: "/qna/list"
    };
  },
  methods: {
    createAnswer() {
      // 새 답변을 추가하는 로직
      alert('답변이 작성되었습니다.');
      this.$router.push('/qna/list');
    }
  }
});
</script>
```

<br><br>

**views/DataList.vue**

```vue
<template>
    <div>
      <Visual :src="src" alt="Data List" />
      <Breadcrumb group="Data Room" current="List" :href="href" />
      <div class="container mt-5">
        <h1>Data List</h1>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in datarooms" :key="data.id">
              <td>{{ data.id }}</td>
              <td>{{ data.title }}</td>
              <td>{{ data.author }}</td>
              <td>{{ data.resdate }}</td>
              <td>
                <router-link :to="{ name: 'DataDetail', params: { id: data.id } }" class="btn btn-primary btn-sm">View</router-link>
                <router-link :to="{ name: 'DataEdit', params: { id: data.id } }" class="btn btn-warning btn-sm">Edit</router-link>
                <button @click="deleteData(data.id)" class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  import Visual from '@/components/Visual.vue';
  import axios from 'axios';
  import datarooms from '@/assets/dataroom.json';
  
  export default defineComponent({
    name: 'DataList',
    components: {
      Breadcrumb,
      Visual
    },
    data() {
      return {
        datarooms,
        src: new URL('@/assets/vs018.jpg', import.meta.url).href,
        href: "/data/list"
      };
    },
    methods: {
      async deleteData(id: number) {
        if (confirm('Are you sure you want to delete this data?')) {
          try {
            await axios.delete(`http://localhost:3000/data/${id}`);
            this.datarooms = this.datarooms.filter(data => data.id !== id);
          } catch (error) {
            console.error(error);
            alert('Error deleting data!');
          }
        }
      }
    }
  });
  </script>
```

<br><br>

**views/DataDetail.vue**

```vue
<template>
    <div v-if="data">
      <Visual :src="src" alt="Data Detail" />
      <Breadcrumb group="Data Room" current="Detail" :href="href" />
      <div class="container mt-5">
        <h1>Data Detail</h1>
        <table class="table table-bordered">
          <tr>
            <th>ID</th>
            <td>{{ data.id }}</td>
          </tr>
          <tr>
            <th>Title</th>
            <td>{{ data.title }}</td>
          </tr>
          <tr>
            <th>Author</th>
            <td>{{ data.author }}</td>
          </tr>
          <tr>
            <th>Date</th>
            <td>{{ data.resdate }}</td>
          </tr>
          <tr>
            <th>Content</th>
            <td>{{ data.content }}</td>
          </tr>
          <tr>
            <th>File</th>
            <td><a :href="fileUrl" download>Download</a></td>
          </tr>
        </table>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  import Visual from '@/components/Visual.vue';
  import datarooms from '@/assets/dataroom.json';
  
  export default defineComponent({
    name: 'DataDetail',
    components: {
      Breadcrumb,
      Visual
    },
    data() {
      return {
        data: null as any,
        fileUrl: '',
        src: new URL('@/assets/vs018.jpg', import.meta.url).href,
        href: "/data/list"
      };
    },
    created() {
      const route = useRoute();
      const id = parseInt(route.params.id as string, 10);
      this.data = datarooms.find(d => d.id === id);
      if (this.data && this.data.dataurl) {
        this.fileUrl = `${process.env.BASE_URL}assets/upload/${this.data.dataurl.split('/').pop()}`;
      }
    }
  });
  </script>
```

<br><br>

**views/DataCreate.vue**

```vue
<template>
    <div>
      <Visual :src="src" alt="Create Data Room" />
      <Breadcrumb group="Data Room" current="Create" :href="href" />
      <div class="container mt-5">
        <h2>Create New Data</h2>
        <form @submit.prevent="createData">
          <div class="mb-3">
            <label for="title" class="form-label">Title:</label>
            <input type="text" id="title" v-model="title" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">Content:</label>
            <textarea id="content" v-model="content" class="form-control" required></textarea>
          </div>
          <div class="mb-3">
            <label for="author" class="form-label">Author:</label>
            <input type="text" id="author" v-model="author" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="file" class="form-label">Upload File:</label>
            <input type="file" id="file" @change="handleFileUpload" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  import Visual from '@/components/Visual.vue';
  import axios from 'axios';
  
  export default defineComponent({
    name: 'DataCreate',
    components: {
      Breadcrumb,
      Visual
    },
    data() {
      return {
        title: '',
        content: '',
        author: '',
        file: null as File | null,
        src: new URL('@/assets/vs018.jpg', import.meta.url).href,
        href: "/data/list"
      };
    },
    methods: {
      handleFileUpload(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
          this.file = target.files[0];
        }
      },
      async createData() {
        if (!this.file) {
          alert('File is required!');
          return;
        }
  
        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('content', this.content);
        formData.append('author', this.author);
        formData.append('file', this.file);
  
        try {
          const response = await axios.post('http://localhost:3000/data', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
  
          if (response.data.success) {
            alert('Data created successfully!');
            this.$router.push({ name: 'DataList' });
          } else {
            alert('Failed to create data!');
          }
        } catch (error) {
          console.error(error);
          alert('Error creating data!');
        }
      }
    }
  });
  </script>
```

<br><br>

**views/DataEdit.vue**

```vue
<template>
    <div v-if="data">
      <Visual :src="src" alt="Edit Data Room" />
      <Breadcrumb group="Data Room" current="Edit" :href="href" />
      <div class="container mt-5">
        <h2>Edit Data</h2>
        <form @submit.prevent="updateData">
          <div class="mb-3">
            <label for="title" class="form-label">Title:</label>
            <input type="text" id="title" v-model="data.title" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">Content:</label>
            <textarea id="content" v-model="data.content" class="form-control" required></textarea>
          </div>
          <div class="mb-3">
            <label for="author" class="form-label">Author:</label>
            <input type="text" id="author" v-model="data.author" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="file" class="form-label">Upload New File:</label>
            <input type="file" id="file" @change="handleFileUpload" class="form-control">
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  import Visual from '@/components/Visual.vue';
  import axios from 'axios';
  import datarooms from '@/assets/dataroom.json';
  
  export default defineComponent({
    name: 'DataEdit',
    components: {
      Breadcrumb,
      Visual
    },
    data() {
      return {
        data: null as any,
        file: null as File | null,
        src: new URL('@/assets/vs018.jpg', import.meta.url).href,
        href: "/data/list"
      };
    },
    created() {
      const route = useRoute();
      const id = parseInt(route.params.id as string, 10);
      this.data = datarooms.find(d => d.id === id);
    },
    methods: {
      handleFileUpload(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
          this.file = target.files[0];
        }
      },
      async updateData() {
        if (!this.data) {
          alert('No data to update!');
          return;
        }
  
        const formData = new FormData();
        formData.append('title', this.data.title);
        formData.append('content', this.data.content);
        formData.append('author', this.data.author);
        if (this.file) {
          formData.append('file', this.file);
        }
  
        try {
          const response = await axios.post(`http://localhost:3000/data/${this.data.id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
  
          if (response.data.success) {
            alert('Data updated successfully!');
            this.$router.push({ name: 'DataDetail', params: { id: this.data.id } });
          } else {
            alert('Failed to update data!');
          }
        } catch (error) {
          console.error(error);
          alert('Error updating data!');
        }
      }
    }
  });
  </script>
```

<br><br>

**views/Faq.vue**

```vue
<template>
    <div>
      <Visual :src="src" alt="FAQ" />
      <Breadcrumb group="FAQ" current="Frequently Asked Questions" :href="href" />
      <div class="container mt-5">
        <h1>자주하는 질문</h1>
        <hr />
        <div class="accordion" id="faqAccordion" style="margin-bottom: 32px; padding-bottom: 32px;">
          <!-- 자주하는 질문 반복 -->
          <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
            <h2 class="accordion-header" :id="'faqHeading' + index">
              <button
                class="accordion-button"
                type="button"
                :data-bs-toggle="'collapse'"
                :data-bs-target="'#faqCollapse' + index"
                :aria-expanded="index === 0 ? 'true' : 'false'"
                :aria-controls="'faqCollapse' + index">
                {{ faq.question }}
              </button>
            </h2>
            <div
              :id="'faqCollapse' + index"
              class="accordion-collapse collapse"
              :class="{ 'show': index === 0 }"
              :aria-labelledby="'faqHeading' + index"
              data-bs-parent="#faqAccordion">
              <div class="accordion-body" v-html="faq.answer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Visual from '@/components/Visual.vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  
  interface Faq {
    question: string;
    answer: string;
  }
  
  export default defineComponent({
    name: 'Faq',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs024.jpg', import.meta.url).href,
        href: "/community/faq",
        faqs: [
          {
            question: '질문 1',
            answer: '답변 1'
          },
          {
            question: '질문 2',
            answer: '답변 2'
          },
          {
            question: '질문 3',
            answer: '답변 3'
          },
          {
            question: '질문 4',
            answer: '답변 4'
          },
          {
            question: '질문 5',
            answer: '답변 5'
          },
          {
            question: '질문 6',
            answer: '답변 6'
          },
          {
            question: '질문 7',
            answer: '답변 7'
          },
          {
            question: '질문 8',
            answer: '답변 8'
          },
          {
            question: '질문 9',
            answer: '답변 9'
          },
          {
            question: '질문 10',
            answer: '답변 10'
          },
          {
            question: '질문 11',
            answer: '답변 11'
          },
          {
            question: '질문 12',
            answer: '답변 12'
          },
          {
            question: '질문 13',
            answer: '답변 13'
          },
          {
            question: '질문 14',
            answer: '답변 14'
          },
          {
            question: '질문 15',
            answer: '답변 15'
          },
          {
            question: '질문 16',
            answer: '답변 16'
          },
          {
            question: '질문 17',
            answer: '답변 17'
          },
        ] as Faq[]
      };
    }
  });
  </script>

<style>
figure.full-screen img { margin-top: -120px; }
</style>
```

<br><br>

**views/SendEmail.vue**

```vue
<template>
    <div>
      <Visual :src="src" alt="상담" />
      <Breadcrumb group="상담" current="온라인 상담" :href="href" />
      <div class="container mt-5">
        <h1>온라인 상담</h1>
        <hr />
        <form @submit.prevent="sendEmail">
          <div class="mb-3">
            <label for="email" class="form-label">보내는 사람 이메일 주소</label>
            <input type="email" class="form-control" id="email" v-model="email" required>
          </div>
          <div class="mb-3">
            <label for="title" class="form-label">상담 제목</label>
            <input type="text" class="form-control" id="title" v-model="title" required>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">상담 내용</label>
            <textarea class="form-control" id="content" v-model="content" rows="5" required></textarea>
          </div>
          <div class="btn-group">
            <button type="submit" class="btn btn-primary">메일 보내기</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Visual from '@/components/Visual.vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  
  export default defineComponent({
    name: 'SendEmail',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs022.jpg', import.meta.url).href,
        href: "/send-email",
        email: '',
        title: '',
        content: ''
      };
    },
    methods: {
      sendEmail() {
        // 실제로는 이 부분에 이메일 전송 로직을 구현해야 합니다.
        // 여기서는 간단히 콘솔에 출력하는 예시를 보여드립니다.
        console.log('보내는 사람 이메일:', this.email);
        console.log('상담 제목:', this.title);
        console.log('상담 내용:', this.content);
  
        alert('이메일이 전송되었습니다.');
        // 메일이 성공적으로 전송된 후 홈페이지로 이동하도록 설정
        this.$router.push('/');
      }
    }
  });
  </script>
```

<br><br>

**views/Chat.vue**

```vue
<template>
    <div>
      <Visual :src="src" alt="채팅" />
      <Breadcrumb :group="breadcrumbGroup" :current="currentRoom" :href="href" />
      <div class="container mt-5">
        <h1>채팅</h1>
        <hr />
        <div class="mb-3">
          <label for="roomSelect" class="form-label">채팅방 선택</label>
          <select v-model="selectedRoom" class="form-select" id="roomSelect">
            <option value="room1">상품에 대한 대화방</option>
            <option value="room2">서비스에 대한 대화방</option>
            <option value="room3">회사에 대한 대화방</option>
            <option value="room4">기타 대화방</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="username" class="form-label">대화명</label>
          <input type="text" class="form-control" id="username" v-model="username" required>
        </div>
        <div class="btn-group">
            <button @click="connectWebSocket" class="btn btn-primary">채팅 시작하기</button>
        </div>
        <div v-if="isConnected">
          <h2>{{ currentRoom }}</h2>
          <div class="chat-messages">
            <div v-for="message in messages" :key="message.id" class="chat-message">
              <strong>{{ message.sender }}:</strong> {{ message.content }}
            </div>
          </div>
          <form @submit.prevent="sendMessage">
            <div class="input-group mt-3">
              <input type="text" class="form-control" v-model="newMessage" placeholder="메시지 입력..." required>
              <button type="submit" class="btn btn-primary">전송</button>
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
```

<br><br>

**views/OnlineService.vue**

```vue
<template>
    <div>
      <Visual :src="src" alt="온라인 서비스" />
      <Breadcrumb group="서비스" current="온라인 서비스" :href="href" />
      <div class="container mt-5">
        <h1>온라인 서비스</h1>
        <hr />
        <div class="content mt-4">
          <h2>편리한 온라인 서비스 제공</h2>
          <p>
            저희 온라인 서비스는 고객님께 편리하고 신속한 서비스를 제공하기 위해 최선을 다하고 있습니다. 
            다양한 서비스를 온라인으로 제공하여 언제 어디서나 쉽게 이용하실 수 있습니다.
          </p>
          <div class="row mt-4">
            <div class="col-md-6">
              <img :src="serviceImage1" class="img-fluid" alt="Online Service 1">
              <p class="mt-2">24/7 온라인 지원</p>
            </div>
            <div class="col-md-6">
              <img :src="serviceImage2" class="img-fluid" alt="Online Service 2">
              <p class="mt-2">다양한 서비스와 기능</p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6">
              <img :src="serviceImage3" class="img-fluid" alt="Online Service 3">
              <p class="mt-2">쉽고 빠른 접근</p>
            </div>
            <div class="col-md-6">
              <img :src="serviceImage4" class="img-fluid" alt="Online Service 4">
              <p class="mt-2">안전한 거래 보장</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Visual from '@/components/Visual.vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  
  export default defineComponent({
    name: 'OnlineService',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs029.jpg', import.meta.url).href,
        href: "/service/online",
        serviceImage1:  new URL('@/assets/online_service01.jpg', import.meta.url).href,
        serviceImage2:  new URL('@/assets/online_service02.jpg', import.meta.url).href,
        serviceImage3:  new URL('@/assets/online_service03.jpg', import.meta.url).href,
        serviceImage4:  new URL('@/assets/online_service04.jpg', import.meta.url).href,
      };
    }
  });
  </script>
  
  <style scoped>
  .container {
    margin-top: 30px;
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .content {
    margin-top: 20px;
  }
  .content h2 {
    margin-bottom: 20px;
  }
  </style>
```

<br><br>

**views/VisitService.vue**

```vue
<template>
    <div>
      <Visual :src="src" alt="방문 서비스" />
      <Breadcrumb group="서비스" current="방문 서비스" :href="href" />
      <div class="container mt-5">
        <h1>방문 서비스</h1>
        <hr />
        <div class="content mt-4">
          <h2>고객 맞춤형 방문 서비스 제공</h2>
          <p>
            저희 방문 서비스는 고객님께서 편리하게 서비스를 받을 수 있도록 직접 방문하여 서비스를 제공합니다. 
            언제 어디서나 고객님의 요구에 맞춰 최상의 서비스를 제공하기 위해 노력하고 있습니다.
          </p>
          <div class="row mt-4">
            <div class="col-md-6">
              <img :src="visitImage1" class="img-fluid" alt="Visit Service 1">
              <p class="mt-2">전문적인 방문 서비스</p>
            </div>
            <div class="col-md-6">
              <img :src="visitImage2" class="img-fluid" alt="Visit Service 2">
              <p class="mt-2">고객 맞춤형 솔루션</p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6">
              <img :src="visitImage3" class="img-fluid" alt="Visit Service 3">
              <p class="mt-2">시간과 장소에 구애받지 않는 서비스</p>
            </div>
            <div class="col-md-6">
              <img :src="visitImage4" class="img-fluid" alt="Visit Service 4">
              <p class="mt-2">신뢰할 수 있는 전문가 팀</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Visual from '@/components/Visual.vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  
  export default defineComponent({
    name: 'VisitService',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs029.jpg', import.meta.url).href,
        href: "/service/online",
        visitImage1: new URL('@/assets/visit_service01.jpg', import.meta.url).href,
        visitImage2: new URL('@/assets/visit_service02.jpg', import.meta.url).href,
        visitImage3: new URL('@/assets/visit_service03.jpg', import.meta.url).href,
        visitImage4: new URL('@/assets/visit_service04.jpg', import.meta.url).href,
      };
    }
  });
  </script>
  
  <style scoped>
  .container {
    margin-top: 30px;
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .content {
    margin-top: 20px;
  }
  .content h2 {
    margin-bottom: 20px;
  }
  </style>
```

<br><br>

**views/DelyveryService.vue**

```vue
<template>
    <div>
      <Visual :src="src" alt="배송 서비스" />
      <Breadcrumb group="서비스" current="배송 서비스" :href="href" />
      <div class="container mt-5">
        <h1>배송 서비스</h1>
        <hr />
        <div class="content mt-4">
          <h2>빠르고 안전한 배송 서비스</h2>
          <p>
            저희 배송 서비스는 고객님의 소중한 상품을 빠르고 안전하게 전달합니다.
            전국 어디든지 빠르게 배송해 드리며, 실시간 배송 추적 시스템을 통해
            배송 현황을 쉽게 확인하실 수 있습니다.
          </p>
          <div class="row mt-4">
            <div class="col-md-6">
              <img :src="deliveryImage1" class="img-fluid" alt="Delivery Service 1">
              <p class="mt-2">신속한 배송</p>
            </div>
            <div class="col-md-6">
              <img :src="deliveryImage2" class="img-fluid" alt="Delivery Service 2">
              <p class="mt-2">안전한 포장</p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6">
              <img :src="deliveryImage3" class="img-fluid" alt="Delivery Service 3">
              <p class="mt-2">전국 어디든지</p>
            </div>
            <div class="col-md-6">
              <img :src="deliveryImage4" class="img-fluid" alt="Delivery Service 4">
              <p class="mt-2">실시간 배송 추적</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Visual from '@/components/Visual.vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  
  export default defineComponent({
    name: 'DeliveryService',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs029.jpg', import.meta.url).href,
        href: "/service/online",
        deliveryImage1: new URL('@/assets/delivery_service01.jpg', import.meta.url).href,
        deliveryImage2: new URL('@/assets/delivery_service02.jpg', import.meta.url).href,
        deliveryImage3: new URL('@/assets/delivery_service03.jpg', import.meta.url).href,
        deliveryImage4: new URL('@/assets/delivery_service04.jpg', import.meta.url).href,
      };
    }
  });
  </script>
  
  <style scoped>
  .container {
    margin-top: 30px;
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .content {
    margin-top: 20px;
  }
  .content h2 {
    margin-bottom: 20px;
  }
  </style>
```

<br><br>

**views/ReservationService.vue**

```vue
<template>
    <div>
      <Visual :src="src" alt="예약 서비스" />
      <Breadcrumb group="서비스" current="예약 서비스" :href="href" />
      <div class="container mt-5">
        <h1>예약 서비스</h1>
        <hr />
        <div class="content mt-4">
          <h2>간편하고 빠른 예약 서비스</h2>
          <p>
            저희 예약 서비스는 고객님이 원하는 시간을 편리하게 예약할 수 있도록 도와드립니다.
            온라인으로 간편하게 예약을 진행하실 수 있으며, 예약 확인 및 취소도 손쉽게 할 수 있습니다.
          </p>
          <div class="row mt-4">
            <div class="col-md-6">
              <img :src="reservationImage1" class="img-fluid" alt="Reservation Service 1">
              <p class="mt-2">쉽고 빠른 예약</p>
            </div>
            <div class="col-md-6">
              <img :src="reservationImage2" class="img-fluid" alt="Reservation Service 2">
              <p class="mt-2">원하는 시간 선택</p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6">
              <img :src="reservationImage3" class="img-fluid" alt="Reservation Service 3">
              <p class="mt-2">간편한 온라인 예약</p>
            </div>
            <div class="col-md-6">
              <img :src="reservationImage4" class="img-fluid" alt="Reservation Service 4">
              <p class="mt-2">예약 확인 및 취소</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Visual from '@/components/Visual.vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';

  export default defineComponent({
    name: 'ReservationService',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs029.jpg', import.meta.url).href,
        href: "/service/online",
        reservationImage1: new URL('@/assets/reservation_service01.jpg', import.meta.url).href,
        reservationImage2: new URL('@/assets/reservation_service02.jpg', import.meta.url).href,
        reservationImage3: new URL('@/assets/reservation_service03.jpg', import.meta.url).href,
        reservationImage4: new URL('@/assets/reservation_service04.jpg', import.meta.url).href,
      };
    }
  });
  </script>
  
  <style scoped>
  .container {
    margin-top: 30px;
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .content {
    margin-top: 20px;
  }
  .content h2 {
    margin-bottom: 20px;
  }
  </style>
```

<br><br>

**views/Intro.vue**

```vue
<template>
    <div>
      <Visual :src="src" alt="회사 소개" />
      <Breadcrumb group="회사" current="소개" :href="href" />
      <div class="container mt-5">
        <h1>회사 소개</h1>
        <hr />
        <div class="intro">
          <div class="img-container">
            <img :src="introImages[0]" class="img-fluid" alt="Intro Image 1">
          </div>
          <div class="img-container">
            <img :src="introImages[1]" class="img-fluid" alt="Intro Image 2">
          </div>
          <div class="img-container">
            <img :src="introImages[2]" class="img-fluid" alt="Intro Image 3">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Visual from '@/components/Visual.vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  
  export default defineComponent({
    name: 'Intro',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs005.jpg', import.meta.url).href,
        href: '/company/intro',
        introImages: [
          new URL('@/assets/intro01.png', import.meta.url).href,
          new URL('@/assets/intro02.png', import.meta.url).href,
          new URL('@/assets/intro03.png', import.meta.url).href
        ]
      };
    }
  });
  </script>
  
  <style>
  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .img-container {
    width: 900px;
    height: auto;
    margin: 0 auto;
  }
  </style>
```

<br><br>

**views/Organization.vue**

```vue
<template>
    <div>
      <Visual :src="src" alt="조직" />
      <Breadcrumb group="회사" current="조직" :href="href" />
      <div class="container mt-5">
        <h1>조직</h1>
        <hr />
        <div class="container">
          <div class="img-container">
            <img :src="organizationImage1" class="img-fluid" alt="Organization Image 1">
          </div>
          <div class="img-container">
            <img :src="organizationImage2" class="img-fluid" alt="Organization Image 2">
          </div>
          <div class="img-container">
            <img :src="organizationImage3" class="img-fluid" alt="Organization Image 3">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Visual from '@/components/Visual.vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  
  export default defineComponent({
    name: 'Organization',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs023.jpg', import.meta.url).href,
        href: "/company/intro",
        organizationImage1: new URL('@/assets/organization01.png', import.meta.url).href,
        organizationImage2: new URL('@/assets/organization02.png', import.meta.url).href,
        organizationImage3: new URL('@/assets/organization03.png', import.meta.url).href,
      };
    }
  });
  </script>
  
  <style scoped>
  .container {
    margin-top: 30px;
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .img-container {
    width: 1000px;
    height: auto;
    margin: 0 auto;
  }

  .img-container img {
    display:block;
    max-width: 100%;
  }
  </style>
```

<br><br>

**views/Greetings.vue**

```vue
<template>
    <div>
      <Visual :src="src" alt="인사말" />
      <Breadcrumb group="회사" current="인사말" :href="href" />
      <div class="container mt-5">
        <h1>인사말</h1>
        <hr />
        <div class="img-container">
          <div>
            <img :src="greetingsImage" class="img-fluid" alt="Greetings Image">
          </div>
        </div>
        <br>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Visual from '@/components/Visual.vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  
  export default defineComponent({
    name: 'Greetings',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs005.jpg', import.meta.url).href,
        href: '/company/intro',
        greetingsImage: new URL('@/assets/greetings01.png', import.meta.url).href
      };
    }
  });
  </script>
  
  <style>
  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .img-container {
    width: 1000px;
    height: auto;
    margin: 0 auto;
  }

  .img-container img {
    display:block;
    max-width: 100%;
  }
  </style>
```

<br><br>

**views/History.vue**

```vue
<template>
    <div>
      <Visual :src="src" alt="회사 연혁" />
      <Breadcrumb group="회사" current="연혁" :href="href" />
      <div class="container mt-5">
        <h1>회사 연혁</h1>
        <hr />

          <div class="img-container">
            <img :src="historyImage" class="img-fluid" alt="History Image">
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Visual from '@/components/Visual.vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  
  export default defineComponent({
    name: 'History',
    components: {
      Visual,
      Breadcrumb
    },
    data() {
      return {
        src: new URL('@/assets/vs023.jpg', import.meta.url).href,
        href: '/company/intro',
        historyImage: new URL('@/assets/history01.png', import.meta.url).href
      };
    }
  });
  </script>
  
  <style>
  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .img-container {
    width: 900px;
    height: auto;
    margin: 0 auto;
  }

  .img-container img {
    display:block;
    max-width: 100%;
  }
  </style>
```

<br><br>

**views/Signup.vue**

- 회원가입 페이지입니다.

```vue
<template>
    <div>
      <Visual :src="src" alt="User" />
      <Breadcrumb group="User" current="Signup" :href="href" />
      <div class="container mt-5">
        <h1>Sign Up</h1>
        <form @submit.prevent="signup">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" v-model="username" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model="email" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" required>
          </div>
          <div class="btn-group">
            <button type="submit" class="btn btn-primary">회원가입</button>
          </div>
        </form>
      </div>

    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  import Visual from '@/components/Visual.vue';
  
  export default defineComponent({
    name: 'Signup',
    components: {
      Breadcrumb,
      Visual
    },
    data() {
      return {
        username: '',
        email: '',
        password: '',
        src: new URL('@/assets/vs018.jpg', import.meta.url).href,
        href: "/user/login"
      };
    },
    methods: {
      signup() {
        // Logic to sign up
        alert('Signed up successfully!');
      }
    }
  });
  </script>
```

<br><br>

**views/Login.vue**

- 로그인 페이지입니다.

```vue
<template>
  <div>
    <Visual :src="src" alt="User" />
    <Breadcrumb group="User" current="Login" :href="href" />
    <div class="container mt-5">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="id" class="form-label">ID</label>
          <input type="text" class="form-control" id="id" v-model="id" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <div class="btn-group">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visual from '@/components/Visual.vue';
import users from '@/assets/users.json';

interface User {
  id: string;
  pw: string;
}

export default defineComponent({
  name: 'Login',
  components: {
    Breadcrumb,
    Visual
  },
  data() {
    return {
      id: '',
      password: '',
      src: new URL('@/assets/vs018.jpg', import.meta.url).href,
      href: "/user/login"
    };
  },
  methods: {
    login() {
      const user: User | undefined = users.find((u: User) => u.id === this.id && u.pw === this.password);

      if (user) {
        // 로그인 성공 처리: 세션 또는 쿠키 설정
        sessionStorage.setItem('currentUser', JSON.stringify(user)); // 세션에 사용자 정보 저장

        alert('Logged in successfully!');  

        // 로그인 후 리다이렉션 또는 다음 동작을 수행할 수 있습니다.
        // 현재 페이지를 새로고침
        window.location.reload();

        // 메인 페이지로 이동
        window.location.href = '/';
        //this.$router.push('/');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    }
  }
});
</script>
```

<br><br>

**UserDetail.vue**

```vue
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
```

<br><br>

#### 6-1-3-5. 임의(더미) 데이터

**assets/boards.json**

```json
[
    { "id": 1, "title": "First Post", "author": "Admin", "date": "2023-06-01", "content": "First Content" },
    { "id": 2, "title": "Second Post", "author": "Admin", "date": "2023-06-02", "content": "Second Content" },
    { "id": 3, "title": "Third Post", "author": "Kim", "date": "2023-06-03", "content": "Third Content" },
    { "id": 4, "title": "Fourth Post", "author": "Admin", "date": "2023-06-04", "content": "Fourth Content" },
    { "id": 5, "title": "Fifth Post", "author": "Manager", "date": "2023-06-05", "content": "Fifth Content" },
    { "id": 6, "title": "Sixth Post", "author": "Mento", "date": "2023-06-06", "content": "Sixth Content" }
]
```

<br><br>

**assets/dataroom.json**

```json
[
    {
      "id": 1,
      "title": "샘플 데이터 1",
      "content": "이것은 샘플 데이터 룸 내용입니다.",
      "author": "작성자 1",
      "resdate": "2024-01-01",
      "dataurl": "@/assets/upload/sample1.pdf"
    },
    {
      "id": 2,
      "title": "샘플 데이터 2",
      "content": "이것은 또 다른 샘플 데이터 룸 내용입니다.",
      "author": "작성자 2",
      "resdate": "2024-01-02",
      "dataurl": "@/assets/upload/sample2.pdf"
    }
  ]
```

<br><br>

**assets/products.json**

```json
[
    {
      "id": 1,
      "name": "홈런볼 소금우유",
      "price": 1800,
      "description": "단짠고소한 우유풍미가 한입가득,<br>소금우유크림 홈런볼!<br>분 류 : 비스켓<br>용 량 : 49g<br>열 량 : 270Kcal<br>보 관 : 실온보관<br>다른 맛 : 제품초코",
      "image": "@/assets/product/product01.png",
      "image2": "@/assets/product/product01_1.png"
    },
    {
      "id": 2,
      "name": "에이스 씬 에스프레소맛",
      "price": 1800,
      "description": "겹겹이 바삭한 크래서 속 크래커!<br>얇은 오리지널 에이스 크래커 사이에 깊고 진한 에스프레소 커피 크래커가 쏘옥<br>분 류 : 비스켓<br>용 량 : 291g<br>열 량 : 1552Kcal<br>보 관 : 실온보관<br>다른 맛 : 제품오리지널",
      "image": "@/assets/product/product02.png",
      "image2": "@/assets/product/product02_1.png"
    },
    {
      "id": 3,
      "name": "후렌치파이 감귤마멀레이드",
      "price": 2400,
      "description": "64겹의 바삭한 페스츄리 위!<br>감귤 마멀레이드잼이 듬뿍~ 올라간<br>새콤달콤한 후렌치파이<br>분 류 : 비스켓<br>용 량 : 192g<br>열 량 : 855Kcal<br>보 관 : 실온보관<br>다른 맛 : 제품후렌치파이 사과, 후렌치파이 딸기",
      "image": "@/assets/product/product03.png",
      "image2": "@/assets/product/product03_1.png"
    },
    {
      "id": 4,
      "name": "샌드에이스 찐초코",
      "price": 2500,
      "description": "찐~한 초코맛과 바삭한 에이스 크래커의 조화!<br>찐 초코맛이 샌딩된 달콤바삭 샌드<br>분 류 : 비스켓<br>용 량 : 204g<br>열 량 : 1055Kcal<br>보 관 : 실온보관",
      "image": "@/assets/product/product04.png",
      "image2": "@/assets/product/product04_1.png"
    },
    {
      "id": 5,
      "name": "계란과자 코코아",
      "price": 2300,
      "description": "대체 불가능!<br>남녀노소 온세상 모든 아이들의 원픽 플레이버<br>초코맛을 계란과자에 달달하게 녹여냈어요!<br>계란과자 두번째 맛, 코코아 ♬<br>분 류 : 비스켓<br>용 량 : 70g<br>열 량 : 320Kcal<br>보 관 : 실온보관<br>다른 맛 : 제품계란과자 오리지널",
      "image": "@/assets/product/product05.png",
      "image2": "@/assets/product/product05_1.png"
    },
    {
      "id": 6,
      "name": "계란과자",
      "price": 2000,
      "description": "계란과자의 새로운 친구, 베베핀~과 함께하는<br>우리아이 영양간식!<br>분 류 : 비스켓<br>용 량 : 70g<br>열 량 : 320Kcal<br>보 관 : 실온보관<br>다른 맛 제품 : 코코아",
      "image": "@/assets/product/product06.png",
      "image2": "@/assets/product/product06_1.png"
    },
    {
      "id": 7,
      "name": "에이스 바스크치즈케이크맛",
      "price": 1800,
      "description": "아이스아메리카노와 함께하는 달콤한 즐거움<br>분 류 : 비스켓<br>용 량 : 364g<br>열 량 : 1940Kcal<br>보 관 : 실온보관<br>다른 맛 제품 : 오리지널",
      "image": "@/assets/product/product07.png",
      "image2": "@/assets/product/product07_1.png"
    },
    {
      "id": 8,
      "name": "아이비 모어딥치즈 크래커",
      "price": 1500,
      "description": "세 가지 치즈가 들어가 더욱 풍미 가득해진. 아이비 모어딥치즈 크래커!<br>분 류 : 비스켓<br>용 량 : 270g<br>열 량 : 1190Kcal<br>보 관 : 기타",
      "image": "@/assets/product/product08.png",
      "image2": "@/assets/product/product08_1.png"
    },
    {
      "id": 9,
      "name": "THE 빠새 청양마요맛",
      "price": 1900,
      "description": "알싸하게 터지는 매운맛!<br>부드럽고 가벼운 새우맛이 풍부한 빠삭한 새우칩,<br>2.4mm의 얇은 두께로 부드러움이 극대화<br>#한입가득 #가볍고바삭하게 #빠새<br>분 류 : 스낵<br>용 량 : 55g<br>열 량 : 310Kcal<br>보 관 : 실온보관",
      "image": "@/assets/product/product09.png",
      "image2": "@/assets/product/product09_1.png"
    },
    {
      "id": 10,
      "name": "구운양파",
      "price": 2000,
      "description": "열풍으로 구운 우리 스낵, 구운양파의 새로운 변신!<br>분 류 : 스낵<br>용 량 : 60g<br>열 량 : 330Kcal<br>보 관 : 실온보관",
      "image": "@/assets/product/product10.png",
      "image2": "@/assets/product/product10_1.png"
    },
    {
      "id": 11,
      "name": "허니버터칩 콰트로치즈맛",
      "price": 2500,
      "description": "4가지 치즈의 풍미와 오리지널 허니버터칩의 만남!<br>분 류 : 스낵<br>용 량 : 55g<br>열 량 : 305Kcal<br>보 관 : 실온보관<br>다른 맛 제품 : 허니버터칩",
      "image": "@/assets/product/product11.png",
      "image2": "@/assets/product/product11_1.png"
    },
    {
      "id": 12,
      "name": "넷플릭스 참기름 감자칩",
      "price": 2200,
      "description": "100% 생감자로 만든 참기름 감자칩<br>분 류 : 스낵<br>용 량 : 60g<br>열 량 : 180Kcal<br>보 관 : 실온보관<br>다른 맛 제품 : 넷플릭스 트러플 감자칩",
      "image": "@/assets/product/product12.png",
      "image2": "@/assets/product/product12_1.png"
    },
    {
      "id": 13,
      "name": "스내피크리스프 사워크림맛",
      "price": 2300,
      "description": "완두콩 모양 그대로~ 튀기지 않고 구운 스낵<br>분 류 : 스낵<br>용 량 : 53g<br>열 량 : 255Kcal<br>보 관 : 실온보관",
      "image": "@/assets/product/product13.png",
      "image2": "@/assets/product/product13_1.png"
    },
    {
      "id": 14,
      "name": "자가비",
      "price": 2000,
      "description": "겉은 바삭! 속은 부드러운~ 감자의 맛을 그대로 살린~<br>분 류 : 스낵<br>용 량 : 45g<br>열 량 : 270Kcal<br>보 관 : 실온보관<br>다른 맛 제품 : 자가비 케첩맛",
      "image": "@/assets/product/product14.png",
      "image2": "@/assets/product/product14_1.png"
    },
    {
      "id": 15,
      "name": "辛당동 떡볶이",
      "price": 2200,
      "description": "辛당동 헐머니의 비법 가득 담은 장독대 셰프의 떡볶이!<br>장독대 셰프(장또기)와 새로워진 신당동떡볶이!<br>분 류 : 스낵<br>용 량 : 110g<br>열 량 : 565Kcal<br>보 관 : 실온보관",
      "image": "@/assets/product/product15.png",
      "image2": "@/assets/product/product15_1.png"
    },
    {
      "id": 16,
      "name": "허니버터칩",
      "price": 2500,
      "description": "달콤~한 벌꿀이 들어갔어요!<br>분 류 : 스낵<br>용 량 : 60g<br>열 량 : 345Kcal<br>보 관 : 실온보관",
      "image": "@/assets/product/product16.png",
      "image2": "@/assets/product/product16_1.png"
    },
    {
      "id": 17,
      "name": "맛동산",
      "price": 2800,
      "description": "맛동산 먹고 즐거운 파티!<br>분 류 : 스낵<br>용 량 : 180g<br>열 량 : 870Kcal<br>보 관 : 실온보관<br>다른 맛 제품 : 플나망고",
      "image": "@/assets/product/product17.png",
      "image2": "@/assets/product/product17_1.png"
    },
    {
      "id": 18,
      "name": "오사쯔",
      "price": 2200,
      "description": "구름처름 부드럽고 고구마의 달콤한 오사쯔<br>분 류 : 스낵<br>용 량 : 65g<br>열 량 : 365Kcal<br>보 관 : 실온보관",
      "image": "@/assets/product/product18.png",
      "image2": "@/assets/product/product18_1.png"
    },
    {
      "id": 19,
      "name": "칸츄리콘",
      "price": 2500,
      "description": "반갑다 칸츄리콘 콘버터맛<br>분 류 : 스낵<br>용 량 : 90g<br>열 량 : 555Kcal<br>보 관 : 실온보관",
      "image": "@/assets/product/product19.png",
      "image2": "@/assets/product/product19_1.png"
    },
    {
      "id": 20,
      "name": "얼초 바람개비만들기",
      "price": 2000,
      "description": "얼초와 바람개비를 좋아하는 얼초 Lover!<br>바람개비 완구에 초코를 짜서 얼초 바람개비를 만들어 돌려 보자!!<br>분 류 : 초코<br>용 량 : 32g<br>열 량 : 180Kcal<br>보 관 : 실온보관",
      "image": "@/assets/product/product20.png",
      "image2": "@/assets/product/product20_1.png"
    }
  ]
```

<br><br>

**assets/qnas.json**

```json
[
    {
      "id": 1,
      "lev": 0,
      "parno": 1,
      "title": "첫 번째 질문",
      "author": "user1",
      "date": "2024-06-20",
      "content": "이것은 첫 번째 질문의 내용입니다."
    },
    {
      "id": 2,
      "lev": 1,
      "parno": 1,
      "title": "[Re] 첫 번째 질문",
      "author": "admin",
      "date": "2024-06-21",
      "content": "이것은 첫 번째 질문에 대한 답변입니다."
    },
    {
      "id": 3,
      "lev": 0,
      "parno": 3,
      "title": "두 번째 질문",
      "author": "user2",
      "date": "2024-06-22",
      "content": "이것은 두 번째 질문의 내용입니다."
    },
    {
      "id": 4,
      "lev": 1,
      "parno": 3,
      "title": "[Re] 두 번째 질문",
      "author": "admin",
      "date": "2024-06-23",
      "content": "이것은 두 번째 질문에 대한 답변입니다."
    },
    {
      "id": 5,
      "lev": 0,
      "parno": 5,
      "title": "세 번째 질문",
      "author": "user3",
      "date": "2024-06-24",
      "content": "이것은 세 번째 질문의 내용입니다."
    }
  ]
```

<br><br>

**assets/users.json**

```json
[
    {
      "id": "admin",
      "pw": "1234",
      "name": "관리자",
      "email": "admin@example.com",
      "regdate": "2024-06-21T08:00:00Z"
    },
    {
      "id": "kim",
      "pw": "1111",
      "name": "Jane Kim",
      "email": "kim@example.com",
      "regdate": "2024-06-20T10:30:00Z"
    },
    {
      "id": "lee",
      "pw": "2222",
      "name": "Michael Lee",
      "email": "lee@example.com",
      "regdate": "2024-06-19T15:45:00Z"
    },
    {
      "id": "park",
      "pw": "3333",
      "name": "Emily Park",
      "email": "park@example.com",
      "regdate": "2024-06-18T12:20:00Z"
    },
    {
      "id": "choi",
      "pw": "4444",
      "name": "William Choi",
      "email": "choi@example.com",
      "regdate": "2024-06-17T09:10:00Z"
    },
    {
      "id": "jeong",
      "pw": "5555",
      "name": "Sophia Jeong",
      "email": "jeong@example.com",
      "regdate": "2024-06-16T14:00:00Z"
    }
  ]
```

<br><br><br>

## 6-2. Tailwind 적용

- Tailwind CSS는 유틸리티-퍼스트(Utility-First) 접근 방식을 사용하는 CSS 프레임워크로, 미리 정의된 클래스를 사용하여 스타일링을 빠르고 효율적으로 할 수 있도록 설계되었습니다.
- Tailwind CSS는 유틸리티-퍼스트 접근 방식을 통해 빠르고 일관성 있는 스타일링을 가능하게 합니다. 설정 가능성과 유연성이 뛰어나며, 반응형 디자인을 쉽게 구현할 수 있습니다. 그러나 HTML 코드의 가독성이 떨어질 수 있고, 초기 학습 곡선이 있을 수 있습니다. 

<br>

### 6-2-1. Tailwind 특징

**특징**

1. 유틸리티-퍼스트: Tailwind CSS는 미리 정의된 유틸리티 클래스를 사용하여 스타일을 적용합니다. 이는 재사용성과 일관성을 높입니다.
2. 모듈화: 각 클래스는 하나의 스타일링 작업만 수행하며, 이를 조합하여 복잡한 스타일을 만들 수 있습니다.
3. 설정 가능성: Tailwind는 매우 설정 가능하여, 설정 파일을 통해 쉽게 커스터마이징할 수 있습니다.
4. 모던 CSS: 최신 CSS 기능을 적극적으로 활용하며, 개발자에게 익숙한 Flexbox 및 Grid 레이아웃을 기본으로 사용합니다.
5. 미리 처리된 CSS: Tailwind는 PostCSS와 같은 도구와 통합되어, 빌드 단계에서 불필요한 CSS를 제거하고 최적화할 수 있습니다.
6. 반응형 디자인: 반응형 디자인을 쉽게 구현할 수 있도록 다양한 반응형 유틸리티 클래스를 제공합니다.

<br>

**장점**

1. 빠른 개발 속도: 유틸리티 클래스를 사용하여 빠르게 스타일을 적용할 수 있어 개발 속도가 빨라집니다.
2. 일관된 디자인: 모든 스타일이 클래스 기반으로 적용되므로, 프로젝트 전체에서 일관된 디자인을 유지할 수 있습니다.
3. 높은 설정 가능성: Tailwind는 설정 파일을 통해 쉽게 테마, 색상, 폰트 등을 커스터마이징할 수 있어, 프로젝트 요구 사항에 맞출 수 있습니다.
4. 반응형 유틸리티: 반응형 디자인을 위한 유틸리티 클래스가 잘 갖춰져 있어, 다양한 화면 크기에 맞는 디자인을 쉽게 구현할 수 있습니다.
5. 작은 빌드 크기: PurgeCSS와 통합하여 사용하지 않는 CSS를 제거하면, 최종 빌드 크기를 최소화할 수 있습니다.
6. 유연성: 각 유틸리티 클래스가 하나의 스타일링 작업만 수행하기 때문에, 매우 유연하게 스타일을 적용하고 조합할 수 있습니다.

<br>

**단점**

1. 가독성 저하: HTML 파일에 많은 클래스가 포함되기 때문에, HTML 코드의 가독성이 떨어질 수 있습니다.
2. 초기 학습 곡선: 처음 사용하는 개발자에게는 유틸리티 클래스의 사용 방식이 다소 생소할 수 있습니다.
3. 복잡한 커스터마이징: Tailwind의 기본 스타일을 변경하는 것은 쉬우나, 매우 복잡한 커스터마이징이 필요할 경우 설정 파일을 많이 수정해야 할 수 있습니다.
4. HTML에 의존: 스타일이 HTML에 직접 정의되기 때문에, 디자인 변경 시 HTML 파일을 많이 수정해야 할 수 있습니다.
6. 설치 및 설정 필요: Tailwind를 효과적으로 사용하려면 빌드 도구와 통합해야 하며, 이를 위한 초기 설정이 필요합니다.

<br><br>

### 6-2-2. Tailwind 의 설치와 도입

#### 6-2-2-1. Tailwind 설치

```shell
# tailwindcss 설치
npm install -D tailwindcss

# tailwind.config.js 생성
npx tailwindcss init
```

<br>

**tailwind.config.js 설정**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

<br>

#### 6-2-2-2. Tailwind 연결

**src/input.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<br>

**input.css 파일 빌드하여 output.css 생성**

```shell
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

<br>

**index.html에 output.css 적용**

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

<br><br>

### 6-2-3. Tailwind 을 적용한 애플리케이션 제작 실습

#### 6-2-3-1. 애플리케이션 생성 및 구조

**프로젝트 구조**

```lua
src/
|-- assets/
|   |-- styles/
|       |-- main.css
|-- components/
|   |-- NavBar.vue
|-- views/
|   |-- Header.vue
|   |-- Footer.vue
|   |-- Home.vue
|   |-- BoardList.vue
|   |-- BoardDetail.vue
|   |-- BoardCreate.vue
|   |-- ProductList.vue
|   |-- Signup.vue
|   |-- Login.vue
|   |-- UserDetail.vue
|-- App.vue
|-- main.ts
|-- router/
|   |-- index.ts
|-- store/
|   |-- index.ts
``` 

<br>

#### 6-2-3-2. 프로젝트 설정

**프로젝트 생성 및 Tailwind 설치**

```bash
# Vue 3 프로젝트 생성
vue create tailwind

Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex
? Choose a version of Vue.js that you want to start the project with 3.x
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
? Save this as a preset for future projects? No


Vue CLI v5.0.8
✨  Creating project in D:\gitRepository\sunglee0517\vuejs\study06\tailwind.
⚙️  Installing CLI plugins. This might take a while...


added 879 packages, and audited 880 packages in 30s

100 packages are looking for funding
  run `npm fund` for details

4 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
🚀  Invoking generators...
📦  Installing additional dependencies...


added 10 packages, and audited 890 packages in 4s

101 packages are looking for funding
  run `npm fund` for details

4 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project tailwind.
👉  Get started with the following commands:

 $ cd tailwind
 $ npm run serve

cd tailwind

# Tailwind CSS 설치
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# Tailwind CSS 초기화
npx tailwindcss init -p

npm install axios --save-dev

npm install @types/axios --save-dev
```

<br>

**tailwind.config.js 설정**

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

<br>

**src/assets/styles/main.css 파일 설정**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<br>

**src/main.ts 파일에서 Tailwind CSS를 불러오기**

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'

createApp(App).mount('#app')
```

<br>

**router/index.ts**

```typescript
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BoardList from '../views/BoardList.vue'
import BoardDetail from '../views/BoardDetail.vue'
import BoardCreate from '../views/BoardCreate.vue'
import ProductList from '../views/ProductList.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import UserDetail from '../views/UserDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/board', component: BoardList },
  { path: '/board/:id', component: BoardDetail },
  { path: '/board/create', component: BoardCreate },
  { path: '/products', component: ProductList },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '/user', component: UserDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

<br>

**store/index.ts 기본적인 Vuex 스토어 설정**

```typescript
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user)
    },
    logout({ commit }) {
      commit('setUser', null)
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    getUser: state => state.user
  }
})
```

<br>

**App.vue 파일 설정**

```vue
<template>
  <div id="app" class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-grow">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
/* 전역 스타일을 설정할 수 있습니다. */
</style>
```

<br><br>

#### 6-2-3-3. 컴포넌트 작성

**NavBar.vue**

```vue
<template>
  <nav class="bg-blue-500 p-4 text-white">
    <ul class="flex space-x-4">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/board">Board</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link to="/signup">Signup</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
```

<br>

**Header.vue**

```vue
<template>
  <header class="bg-gray-800 text-white p-4 text-center">
    <h1 class="text-2xl">My Application</h1>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
```

<br>

**Footer.vue**

```vue
<template>
  <footer class="bg-gray-800 text-white p-4 text-center">
    <p>&copy; 2023 My Application</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
```

<br><br>

#### 6-2-3-4. View 작성

**Home.vue**

```vue
<template>
  <div class="p-4">
    <Header />
    <h2 class="text-xl mt-4">Welcome to the Home Page</h2>
    <p>This is a sample Vue 3 application using Tailwind CSS for styling.</p>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>
```

<br>

**BoardList.vue**

```vue
<template>
  <div class="p-4">
    <Header />
    <h2 class="text-xl mt-4">Board List</h2>
    <ul>
      <li v-for="board in boards" :key="board.id" class="mb-2">
        <router-link :to="'/board/' + board.id" class="text-blue-500 hover:underline">
          {{ board.title }}
        </router-link>
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'BoardList',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      boards: [
        { id: 1, title: 'Board 1' },
        { id: 2, title: 'Board 2' },
        // ... more boards
      ]
    }
  }
}
</script>
```

<br>

**BoardDetail.vue**

```vue
<template>
  <div class="p-4">
    <Header />
    <h2 class="text-xl mt-4">Board Detail</h2>
    <p>{{ board.title }}</p>
    <p>{{ board.content }}</p>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'BoardDetail',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      board: {
        id: 1,
        title: 'Board 1',
        content: 'This is the content of board 1.'
      }
    }
  }
}
</script>
```

<br>

**BoardCreate.vue**

```vue
<template>
  <div class="p-4">
    <Header />
    <h2 class="text-xl mt-4">Create Board</h2>
    <form @submit.prevent="createBoard">
      <input v-model="title" placeholder="Title" class="border p-2 mb-4 w-full" />
      <textarea v-model="content" placeholder="Content" class="border p-2 mb-4 w-full"></textarea>
      <button type="submit" class="bg-blue-500 text-white p-2">Create</button>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'BoardCreate',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    createBoard() {
      // Logic to create board
    }
  }
}
</script>
```

<br>

**ProductList.vue**

```vue
<template>
  <div class="p-4">
    <Header />
    <h2 class="text-xl mt-4">Product List</h2>
    <ul>
      <li v-for="product in products" :key="product.id" class="mb-2">
        <p>{{ product.name }} - {{ product.price }}</p>
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'ProductList',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', price: '$10' },
        { id: 2, name: 'Product 2', price: '$20' },
        // ... more products
      ]
    }
  }
}
</script>
```

<br>

**Signup.vue**

```vue
<template>
  <div class="p-4">
    <Header />
    <h2 class="text-xl mt-4">Signup</h2>
    <form @submit.prevent="signup">
      <input v-model="username" placeholder="Username" class="border p-2 mb-4 w-full" />
      <input v-model="email" type="email" placeholder="Email" class="border p-2 mb-4 w-full" />
      <input v-model="password" type="password" placeholder="Password" class="border p-2 mb-4 w-full" />
      <button type="submit" class="bg-blue-500 text-white p-2">Signup</button>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Signup',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup() {
      // Logic to sign up
    }
  }
}
</script>
```

<br>

**Login.vue**

```vue
<template>
  <div class="p-4">
    <Header />
    <h2 class="text-xl mt-4">Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" class="border p-2 mb-4 w-full" />
      <input v-model="password" type="password" placeholder="Password" class="border p-2 mb-4 w-full" />
      <button type="submit" class="bg-blue-500 text-white p-2">Login</button>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Login',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Logic to log in
    }
  }
}
</script>
```

<br>

**UserDetail.vue**

```vue
<template>
  <div class="p-4">
    <Header />
    <h2 class="text-xl mt-4">User Detail</h2>
    <p>{{ user.name }}</p>
    <p>{{ user.email }}</p>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'UserDetail',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      user: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    }
  }
}
</script>
```

<br><br>

#### 6-2-3-5. 임의(더미) 데이터



<br><br><br>

## 6-3. Bulma 적용

- Bulma는 모던한 CSS 프레임워크로, 간편하고 효율적으로 웹사이트의 스타일을 지정할 수 있도록 설계되었습니다. 
- Bulma는 간단하고 직관적인 CSS 프레임워크로, 빠르고 쉽게 반응형 웹사이트를 개발하는 데 유용합니다. 그러나 JavaScript 기반의 상호작용이나 고급 커스터마이징이 필요한 경우 다른 도구나 프레임워크와 함께 사용하는 것이 좋습니다.

<br>

**특징**

1. 순수 CSS: Bulma는 순수 CSS 프레임워크로, JavaScript를 사용하지 않습니다. 이는 단순성과 가벼움을 보장합니다.
2. 모듈화: Bulma는 매우 모듈화되어 있어 필요한 부분만 선택적으로 사용할 수 있습니다. 이를 통해 코드 크기를 줄일 수 있습니다.
3. Flexbox 기반: Bulma는 CSS Flexbox 레이아웃을 기반으로 하여 유연하고 직관적인 레이아웃 구성이 가능합니다.
4. 응답형 디자인: Bulma는 기본적으로 반응형 디자인을 지원하며, 다양한 장치에서 잘 동작하도록 설계되었습니다.
5. 다양한 컴포넌트: Bulma는 버튼, 카드, 네비게이션 바, 폼 요소 등 다양한 UI 컴포넌트를 제공합니다.
6. 가독성 높은 코드: Bulma의 클래스 이름은 읽기 쉽고 직관적이어서 코드를 이해하고 유지보수하기 쉽습니다.

<br>

**장점**

1. 쉽고 빠른 개발: Bulma의 간단한 문법과 직관적인 클래스 이름 덕분에 빠르게 스타일을 적용할 수 있습니다.
2. 유연한 레이아웃: Flexbox 기반의 레이아웃 시스템은 다양한 레이아웃을 손쉽게 구성할 수 있도록 도와줍니다.
3. 높은 가독성: 클래스 이름이 직관적이어서 코드 가독성이 높고, 유지보수가 용이합니다.
4. 경량성: 순수 CSS로 작성되어 있어 프레임워크 자체가 가볍고, 성능에 미치는 영향이 적습니다.
5. 응답형 지원: 모바일 친화적인 디자인을 기본으로 지원하여 다양한 장치에서 잘 동작합니다.
6. 모듈화: 필요한 부분만 선택적으로 사용할 수 있어 프로젝트에 맞게 최적화할 수 있습니다.

<br>

**단점**

1. 제한된 기능: 순수 CSS로만 구성되어 있어, JavaScript 기반의 동적 기능이나 상호작용을 추가하려면 별도의 JavaScript 라이브러리가 필요합니다.
2. 배우기 어려운 경우: Flexbox를 처음 접하는 사용자에게는 약간의 학습 곡선이 있을 수 있습니다.
3. 커스터마이징 한계: Bulma의 기본 스타일을 커스터마이징하는 데는 다소 제한이 있을 수 있으며, 대규모 프로젝트에서는 커스터마이징이 복잡해질 수 있습니다.
4. 글로벌 클래스 네임스페이스: Bulma는 전역 클래스 이름을 사용하므로, 다른 CSS 프레임워크나 라이브러리와 함께 사용할 때 네이밍 충돌이 발생할 수 있습니다.
5. 브라우저 지원: 최신 브라우저에서는 잘 동작하지만, 오래된 브라우저에서는 일부 Flexbox 기능이 제대로 지원되지 않을 수 있습니다.

<br>

**프로젝트 구조** 

```lua
src/
|-- assets/
|   |-- styles/
|       |-- main.css
|-- components/
|   |-- NavBar.vue
|-- views/
|   |-- Header.vue
|   |-- Footer.vue
|   |-- Home.vue
|   |-- BoardList.vue
|   |-- BoardDetail.vue
|   |-- BoardCreate.vue
|   |-- ProductList.vue
|   |-- Signup.vue
|   |-- Login.vue
|   |-- UserDetail.vue
|-- App.vue
|-- main.ts
|-- router/
|   |-- index.ts
|-- store/
|   |-- index.ts
``` 

<br><br>

### 6-3-1. Bulma 설치 및 설정

**프로젝트 생성 및 Bulma 설치**

```bash
# Vue 3 프로젝트 생성
vue create bulma

Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex
? Choose a version of Vue.js that you want to start the project with 3.x
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
? Save this as a preset for future projects? No

🎉  Successfully created project bulma.
👉  Get started with the following commands:

 $ cd bulma
 $ npm run serve


# Bulma 설치
npm install bulma --save-dev

# axios 설치
npm install axios --save-dev

npm install @types/axios --save-dev

# carousel 설치
npm install bulma-carousel --save-dev
```

<br>

#### 6-3-1-1. main.css 파일 설정

**src/assets/styles/main.css 파일 설정**

```css
/* Import Bulma CSS */
@import 'bulma/css/bulma.css';

/* Custom styles can be added here */
```

<br>

#### 6-3-1-2. Bulma CSS를 Vue 프로젝트에 통합

**src/main.ts 파일 수정**

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'
import router from './router'
import store from './store'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
```

<br><br>

### 6-3-2. 컴포넌트 및 뷰에 Bulma CSS 적용

#### 6-3-2-1. NavBar.vue

```vue
<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">MyApp</router-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/board">Board</router-link>
        <router-link class="navbar-item" to="/products">Products</router-link>
        <router-link class="navbar-item" to="/signup">Signup</router-link>
        <router-link class="navbar-item" to="/login">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
```

<br>

#### 6-3-2-2. Header.vue

```vue
<template>
  <header class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">My Application</h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
```

<br>

#### 6-3-2-3. Footer.vue

```vue
<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>&copy; 2023 My Application</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
```

<br>

#### 6-3-2-4. Home.vue

```vue
<template>
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <h2 class="title">Welcome to the Home Page</h2>
        <p>This is a sample Vue 3 application using Bulma for styling.</p>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>
```

<br>

#### 6-3-2-5. BoardList.vue

```vue
<template>
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <h2 class="title">Board List</h2>
        <ul>
          <li v-for="board in boards" :key="board.id" class="mb-2">
            <router-link :to="'/board/' + board.id" class="has-text-primary">
              {{ board.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'BoardList',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      boards: [
        { id: 1, title: 'Board 1' },
        { id: 2, title: 'Board 2' },
        // ... more boards
      ]
    }
  }
}
</script>
```

<br>

#### 6-3-2-6. BoardDetail.vue

```vue
<template>
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <h2 class="title">Board Detail</h2>
        <p>{{ board.title }}</p>
        <p>{{ board.content }}</p>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'BoardDetail',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      board: {
        id: 1,
        title: 'Board 1',
        content: 'This is the content of board 1.'
      }
    }
  }
}
</script>
```

<br>

#### 6-3-2-7. BoardCreate.vue

```vue
<template>
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <h2 class="title">Create Board</h2>
        <form @submit.prevent="createBoard">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input v-model="title" class="input" type="text" placeholder="Title" />
            </div>
          </div>
          <div class="field">
            <label class="label">Content</label>
            <div class="control">
              <textarea v-model="content" class="textarea" placeholder="Content"></textarea>
            </div>
          </div>
          <div class="control">
            <button class="button is-primary">Create</button>
          </div>
        </form>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'BoardCreate',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    createBoard() {
      // Logic to create board
    }
  }
}
</script>
```

<br>

#### 6-3-2-8. ProductList.vue

```vue
<template>
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <h2 class="title">Product List</h2>
        <ul>
          <li v-for="product in products" :key="product.id" class="mb-2">
            <p>{{ product.name }} - {{ product.price }}</p>
          </li>
        </ul>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'ProductList',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', price: '$10' },
        { id: 2, name: 'Product 2', price: '$20' },
        // ... more products
      ]
    }
  }
}
</script>
```

<br>

#### 6-3-2-9. Signup.vue

```vue
<template>
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <h2 class="title">Signup</h2>
        <form @submit.prevent="signup">
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input v-model="username" class="input" type="text" placeholder="Username" />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model="email" class="input" type="email" placeholder="Email" />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input v-model="password" class="input" type="password" placeholder="Password" />
            </div>
          </div>
          <div class="control">
            <button class="button is-primary">Signup</button>
          </div>
        </form>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Signup',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup() {
      // Logic to sign up
    }
  }
}
</script>
```

<br>

#### 6-3-2-10. Login.vue

```vue
<template>
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <h2 class="title">Login</h2>
        <form @submit.prevent="login">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model="email" class="input" type="email" placeholder="Email" />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input v-model="password" class="input" type="password" placeholder="Password" />
            </div>
          </div>
          <div class="control">
            <button class="button is-primary">Login</button>
          </div>
        </form>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Login',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Logic to log in
    }
  }
}
</script>
```

<br>

#### 6-3-2-11. UserDetail.vue

```vue
<template>
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <h2 class="title">User Detail</h2>
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'UserDetail',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      user: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    }
  }
}
</script>
```

<br><br>

### 6-3-3. Vue Router 설정

**src/router/index.ts 파일 설정**

```typescript
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BoardList from '../views/BoardList.vue'
import BoardDetail from '../views/BoardDetail.vue'
import BoardCreate from '../views/BoardCreate.vue'
import ProductList from '../views/ProductList.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import UserDetail from '../views/UserDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/board', component: BoardList },
  { path: '/board/:id', component: BoardDetail },
  { path: '/board/create', component: BoardCreate },
  { path: '/products', component: ProductList },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '/user', component: UserDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

<br><br>

### 6-3-4. Vuex 설정

**src/store/index.ts 파일 설정**

```typescript
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user)
    },
    logout({ commit }) {
      commit('setUser', null)
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    getUser: state => state.user
  }
})
```

<br><br>

### 6-3-5. App.vue 설정

**src/App.vue 파일 설정**

```vue
<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
/* 전역 스타일을 설정할 수 있습니다. */
</style>
```

<br><br><br>