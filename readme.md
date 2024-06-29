<nav id="gnb">
  <ul>
    <li><a href="study01">1. Vuejs 설치 및 환경설정</a></li>
    <ul class="sub">
      <li>1-1. node 설치</li>
      <li>1-2. Visual Studio Code 설치</li>
      <li>1-3. Vuejs 설치</li>
      <li>1-4. MariaDB 설치</li>
    </ul>
    <li><a href="study02">2. 프로젝트 생성 및 환경 설정</a></li>
    <ul class="sub">
      <li>2-1. 프로젝트 생성</li>
      <li>2-2. 프로젝트 구성</li>
      <li>2-3. 프로젝트 환경설정</li>
      <li>2-4. 프로젝트 실행</li>
      <li>2-5. 프로그래밍 디자인 패턴</li>
    </ul>
    <li><a href="study03">3. Vuejs의 요소</a></li>
    <ul class="sub">
      <li>3-1. Typescript</li>
      <li>3-2. Vuejs의 인스턴스</li>
      <li>3-3. Vuejs의 템플릿과 디렉티브</li>
      <li>3-4. Vuejs의 컴포넌트</li>
    </ul>
    <li><a href="study04">4. Vuex와 Vue 3의 프로그래밍 패턴</a></li>
    <ul class="sub">
      <li>4-1. Flux 패턴</li>
      <li>4-2. State(상태)</li>
      <li>4-3. Getters(게터)</li>
      <li>4-4. Mutation(변이)</li>
      <li>4-5. Actions(액션)</li>
      <li>4-6. Module Management(모듈 관리)</li>
    </ul>
    <li><a href="study05">5. Vue Router와 Axios</a></li>
    <ul class="sub">
      <li>5-1. Vue Router의 필요성과 라우팅 종류</li>
      <li>5-2. Vue Router의 기본 사용</li>
      <li>5-3. Vue Router의 속성과 메소드</li>
      <li>5-4. Dynamic Route Matching(동적 라우트 매칭)</li>
      <li>5-5. Nested Route(중첩 라우트)</li>
      <li>5-6. Navigation of Programming Method(프로그래밍 방식의 메뉴 구성)</li>
      <li>5-7. Redirect & Alias(리다이렉트와 별칭)</li>
      <li>5-8. Forward To Route Component(라우트 컴포넌트에 데이터 전달)</li>
      <li>5-9. Route Mode(라우트 모드)</li>
      <li>5-10. Navigation Gard(네비게이션 가드)</li>
      <li>5-11. Route 를 활용한 메뉴 구성</li>
      <li>5-12. Axios</li>
    </ul>
    <li><a href="study06">6. Vuejs에 CSS Framework 적용</a></li>
    <ul class="sub">
      <li>6-1. Bootstrap 적용</li>
      <li>6-2. Tailwind 적용</li>
      <li>6-3. Bulma 적용</li>
    </ul>
    <li><a href="study07">7. Vuejs와 Back-end 연동</a></li>
    <ul class="sub">
      <li>7-1. Vuejs와 Back-end 연동 방법</li>
      <li>7-2. Vuejs와 Node Back-end 연동 방법</li>
      <li>7-3. Vuejs와 Java/Servlet Back-end 연동 방법</li>
      <li>7-4. Vuejs와 Springframework Legacy Back-end 연동 방법</li>
      <li>7-5. Vuejs와 Spring Boot Back-end 연동 방법</li>
      <li>7-6. Vuejs와 Python Flask Back-end 연동 방법</li>
      <li>7-7. Vuejs와 Python FastAPI Back-end 연동 방법</li>
      <li>7-8. Vuejs와 Node Javascript Framework Next Back-end 연동 방법</li>
    </ul>
  </ul>  
</nav>

<br><br><hr><br><br>

# 0. Vue.js

```
Vue.js는 AngularJS를 사용하여 구글을 위해 작업하던 Evan You에 의해서 2014년 2월에 발표된 웹 애플리케이션의 사용자 인터페이스를 만들기 위해 사용하는 오픈 소스 프로그레시브 자바스크립트 기반(Open-Source Progressive Javascript Base)의 프론트앤드 프레임워크(Front-End Framework)로서 다른 자바스크립트 라이브러리를 사용하는 웹 애플리케이션 프로젝트에 적용하기 쉽게 설계되어 있으며, 고성능의 싱글 페이지 애플리케이션(SPA)을 구축하는데 이용하는데 훨씬 편리합니다.
Vue(view와 마찬가지로 /vjuː/로 발음)는 사용자 인터페이스를 구축하기 위한 JavaScript 프레임워크입니다. 이는 표준 HTML, CSS 및 JavaScript를 기반으로 구축되며 복잡한 사용자 인터페이스를 효율적으로 개발하는 데 도움이 되는 선언적 구성 요소 기반 프로그래밍 모델을 제공합니다.
```

<br>

**App.js**

```js
import { createApp, ref } from 'vue'

createApp({
  setup() {
    return {
      count: ref(0)
    }
  }
}).mount('#app')
```

<br>

**Sample.vue**

```vue
<div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>
```

<br>

## 0-1. Vue.js의 특징

- 웹 UI 개발(컴포넌트, 선언형 UI, 핫 리로딩, 타임 트래블 디버깅 등)의 아이디어를 더 접근 가능하도록 만드는데 초점을 둔다. 덜 독선적이도록 시도하고 있기 때문에 개발자들이 익히기에 더 쉽습니다.
- 점진적으로 채택 가능하도록 설계된 구조를 갖추고 있으며, 코어 라이브러리는 선언형 렌더링과 컴포넌트 구성에 초점을 두며 기존 페이지에 임베드가 가능합니다.
- 라우팅, 상태 관리, 빌드 도구화와 같이 복잡한 애플리케이션에 필요한 고급 기능들은 공식적으로 유지 보수되는 지원 라이브러리와 패키지를 통해 제공됩니다.

<br><br>

### 0-1-1. The Progressive Framework 방식의 Vue.js

- 사용 사례에 따라 Vue를 다양한 방식으로 사용할 수 있습니다.

1. 빌드 단계 없이 정적 HTML 향상
2. 모든 페이지에 웹 구성 요소로 포함
3. 단일 페이지 애플리케이션(SPA)
4. 풀스택/서버측 렌더링(SSR)
5. Jamstack / 정적 사이트 생성(SSG)
6. 데스크톱, 모바일, WebGL, 심지어 터미널까지 타겟팅

- 유연성에도 불구하고 Vue 작동 방식에 대한 핵심 지식은 이러한 모든 사용 사례에서 공유됩니다. 지금은 초보자일지라도 그 과정에서 얻은 지식은 앞으로 더 야심찬 목표를 달성하기 위해 성장하면서 유용하게 남을 것입니다. 베테랑이라면 동일한 생산성을 유지하면서 해결하려는 문제를 기반으로 Vue를 활용하는 최적의 방법을 선택할 수 있습니다. 이것이 우리가 Vue를 "프로그레시브 프레임워크"라고 부르는 이유입니다. 이는 귀하와 함께 성장하고 귀하의 요구에 적응할 수 있는 프레임워크입니다.

<br><br>

### 0-1-2. Vue.js의 장점

**뛰어난 내장 응용 프로그램**

Vue.js는 빠릅니다. Vue.js는 내부에서 가장 빠른 JavaScript 프레임워크는 아니지만 SPA 및 UI에서 완벽한 UX를 생성하기에 충분한 기능 이상을 가지고 있습니다. 또한 Vue는 스마트폰 앱 분야에서 Angular 및 React보다 빠르게 프로젝트를 빌드합니다.

Vue의 성능은 53%의 소비자가 3초 이상 열리는 사이트를 종료하기 때문에 JavaScript 프레임워크를 선택할 때 염두에 두어야 할 중요합니다.

<br>

**유연하고 다양한 개발 환경**

Vue.js는 유연하고 다양한 웹 개발 환경을 제공합니다. Vue에서 웹 프로그램은 모듈 또는 구성 요소를 사용하여 개발됩니다. 또한 Vue의 단일 파일 모듈/구성 요소는 느슨하게 연결되어 있어 이미 프로젝트 요구 사항에 따라 개발자에게 상당한 다용성을 제공하고 있지만 재사용성을 높이고 생산 시간을 단축합니다.

컴포넌트 기반 구조는 향후 앱을 성장시킬 앱을 개발할 때 최고의 선택입니다. Vue를 사용한 대규모 앱 개발에는 모듈식 설계-빌드 메커니즘을 사용해야 합니다. Vue가 권장하는 캠페인 기여자(Webpack 또는 Browserify)는 사용자가 선택한 전처리기를 사용하여 소스 코드를 이후에 변경할 수 있도록 하여 개발자에게 상당한 자유를 제공합니다.

<br>

**퇴폐적인 생태계와 다양성**

Vue.js 유니버스에는 많은 플러그인을 포함하여 개발자가 필요로 하는 모든 도구가 포함되어 있습니다. 개발 벤처를 개선하는 유명한 도구는 단일 페이지 앱 값을 탐색하고 적절한 URL에 연결하기 위한 Vue 라우터와 공공 관리를 위한 뛰어난 Vuex입니다.

또한 Vue는 브라우저 플러그인 형태로 제공되는 DevTools를 제공합니다. DevTools를 사용하면 응용 프로그램 문제를 해결하고 구성 요소의 아키텍처와 상태를 쉽게 검사할 수 있습니다. 이를 통해 시간 여행을 하고, 소프트웨어를 검사하여 이전 버전과 조정된 내용을 확인하고, 고유한 활동을 모니터링하고, 응용 프로그램을 실시간으로 편집할 수 있습니다.

<br>

**작은 크기**

프레임워크의 다운로드 가능한 zip 파일 크기는 18KB입니다. 가볍기 때문에 빠르게 설치되고 검색 엔진 순위와 성능이 향상됩니다.

<br>

**반응**

Vue에는 사용자 인터페이스를 업데이트하는 반응 도구가 내장되어 있습니다. 결과적으로 프로그래머는 이 접근 방식이 유지하는 시간과 추가 코드 블록을 사용하여 효율성을 높이는 동시에 다른 기능을 추가하는 데 집중할 수 있습니다.

<br>

**양방향 데이터 바인딩**

데이터베이스 스키마와 시각적 DOM 또는 HTML 템플릿 간에 데이터 바인딩 관계가 존재합니다. 한 채널의 데이터 바인딩을 통해 독자는 프로토타입에서 인터페이스로 이동할 수 있습니다. 원본을 수정하면 DOM이 자동으로 변경되지만 DOM에는 프로토타입에 대한 읽기 전용 자격 증명이 있기 때문에 이 기능은 반대로 작동하지 않습니다. 양방향 데이터 바인딩을 사용하면 두 가지 측면에서 프로토타입과 인터페이스 간에 정보를 교환할 수 있습니다.

<br><br>

### 0-1-3. Vue.js의 단점

**부적절한 확장성**

Vue.js에는 소수의 프로그래머가 있는 지역 생태계가 있습니다. 결과적으로 확장이 불가능하여 대규모 프로젝트에 적합하지 않습니다. 프레임워크는 복잡한 프로젝트에서 사용되는 경우 솔루션에 대한 적시 지원을 위해 광범위한 네트워크를 보유해야 합니다.

<br>

**광범위한 전문 지식을 갖춘 전문가가 부족합니다.**

새롭고 진보적인 프레임워크이기 때문에 상당한 Vue 전문 지식을 갖춘 전문가가 적습니다. 또한, 이 시스템은 자주 변경되기 때문에 불편합니다. 숙련된 빌더라도 Vue의 이점을 최대한 활용하려면 처음부터 새로운 기능을 배우거나 조사해야 합니다.

<br>

**극도의 유연성**

코드 유연성은 개발자에게 많은 이점을 제공하지만 극단적인 유연성은 불일치 및 코딩 실수를 증가시킬 수 있습니다. 코딩 지연의 대부분은 한 번에 여러 프로그래밍 패러다임을 사용할 수 있는 너무 유연한 팀에 의해 발생합니다.

<br><br>

### 0-1-4. Vue.js 에서의 Single-File Components

대부분의 빌드 도구 지원 Vue 프로젝트에서 우리는 단일 파일 구성 요소(*.vue 파일이라고도 함, 약어로 SFC)라는 HTML과 유사한 파일 형식을 사용하여 Vue 구성 요소를 작성합니다. Vue SFC는 이름에서 알 수 있듯이 구성 요소의 논리(JavaScript), 템플릿(HTML) 및 스타일(CSS)을 단일 파일에 캡슐화합니다.

```html
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

<br><br>

### 0-1-5. Vue.js 의 API Styles

- Vue 구성 요소는 Options API와 Composition API라는 두 가지 API 스타일로 작성할 수 있습니다.

<br>

#### 0-1-5-1. Options API​

- Options API를 사용하면 데이터, 메소드, 마운트 등의 옵션 개체를 사용하여 구성 요소의 논리를 정의합니다. 옵션으로 정의된 속성은 구성 요소 인스턴스를 가리키는 이 내부 함수에 노출됩니다.

```vue
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

<br>

##### 0-1-5-2. Composition API

Composition API를 사용하면 가져온 API 함수를 사용하여 구성 요소의 논리를 정의합니다. SFC에서는 Composition API가 일반적으로 `<script setup>`과 함께 사용됩니다. setup 속성은 Vue가 더 적은 상용구로 Composition API를 사용할 수 있도록 컴파일 타임 변환을 수행하도록 하는 힌트입니다. 예를 들어 `<script setup>`에 선언된 가져오기 및 최상위 변수/함수를 템플릿에서 직접 사용할 수 있습니다.

```vue
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

<br><br><br>

## 0-2. Vue.js의 연혁
 
| 버전  | 출시일              | 제목                           |
|-------|----------------------|--------------------------------|
| 3.4   | 2023년 12월 28일    | Slam Dunk                      |
| 3.3   | 2023년 5월 11일     | Rurouni Kenshin                |
| 3.2   | 2021년 8월 5일      | Quintessential Quintuplets     |
| 3.1   | 2021년 6월 7일      | Pluto                          |
| 3.0   | 2020년 9월 18일     | One Piece                      |
| 2.7   | 2022년 7월 1일      | Naruto                         |
| 2.6   | 2019년 2월 4일      | Macross                        |
| 2.5   | 2017년 10월 13일    | Level E                        |
| 2.4   | 2017년 7월 13일     | Kill la Kill                   |
| 2.3   | 2017년 4월 27일     | JoJo's Bizarre Adventure       |
| 2.2   | 2017년 2월 26일     | Initial D                      |
| 2.1   | 2016년 11월 22일    | Hunter X Hunter                |
| 2.0   | 2016년 9월 30일     | Ghost in the Shell             |
| 1.0   | 2015년 10월 27일    | Evangelion                     |
| 0.12  | 2015년 6월 12일     | Dragon Ball                    |
| 0.11  | 2014년 11월 7일     | Cowboy Bebop                   |
| 0.10  | 2014년 3월 23일     | Blade Runner                   |
| 0.9   | 2014년 2월 25일     | Animatrix                      |
| 0.8   | 2014년 1월 27일     | 최초 버전 정식 발표           |
| 0.7   | 2013년 12월 24일    | VueJS 수정                     |
| 0.6   | 2013년 12월 8일     | VueJS 개발                    |

<br><br>

## 0-3. 지원 라이브러리

| 라이브러리     | 설치 명령                                | 설명                                                                                           |
|----------------|------------------------------------------|------------------------------------------------------------------------------------------------|
| vue-router     | `npm install vue-router`                 | Vue.js 애플리케이션에서 라우팅을 관리하는 라이브러리입니다. 싱글 페이지 애플리케이션(SPA)을 쉽게 구성할 수 있습니다. |
| vuex           | `npm install vuex`                       | Vue.js 애플리케이션에서 상태 관리를 담당하는 라이브러리입니다. 상태를 중앙에서 관리하고 예측 가능한 상태 변이를 지원합니다.  |
| vue-loader     | `npm install vue-loader`                 | Vue 컴포넌트를 Webpack을 통해 처리하기 위한 로더입니다. Vue 컴포넌트를 모듈 단위로 작성할 수 있게 해줍니다.      |
| vueify         | `npm install vueify`                     | Vue 컴포넌트를 Browserify 번들링 도구와 함께 사용할 수 있게 해주는 트랜스폼 라이브러리입니다.                          |
| vue-cli        | `npm install @vue/cli`                   | Vue.js 프로젝트를 빠르게 생성하고 관리할 수 있는 명령줄 인터페이스(CLI) 도구입니다.                                   |
| vue-jstree     | `npm install vue-jstree`                 | jstree를 Vue.js와 함께 사용할 수 있게 해주는 플러그인입니다. 트리 구조 데이터를 쉽게 표현할 수 있습니다.                |
| vue-sys        | `npm install vue-sys`                    | Vue.js 애플리케이션에서 시스템 관련 기능을 쉽게 다룰 수 있도록 도와주는 라이브러리입니다.                                 |

<br><br>

## 0-4. Appliation API

| 메서드 / 속성                        | 설명                                                                                  | 사용 문법 및 예시 코드                                                                                                                                                                    |
|------------------------------------|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `createApp()`                      | 새 Vue 애플리케이션 인스턴스를 생성합니다.                                               | ```javascript<br>import { createApp } from 'vue';<br>const app = createApp(App);<br>```                                                                                                    |
| `createSSRApp()`                   | 서버 사이드 렌더링을 위한 애플리케이션 인스턴스를 생성합니다.                                  | ```javascript<br>import { createSSRApp } from 'vue';<br>const app = createSSRApp(App);<br>```                                                                                              |
| `app.mount()`                      | 지정된 DOM 요소에 Vue 애플리케이션을 마운트합니다.                                         | ```javascript<br>app.mount('#app');<br>```                                                                                                                                                |
| `app.unmount()`                    | Vue 애플리케이션을 언마운트하고 모든 컴포넌트 인스턴스를 파괴합니다.                            | ```javascript<br>app.unmount();<br>```                                                                                                                                                    |
| `app.component()`                  | 전역 컴포넌트를 등록하거나 가져옵니다.                                                      | ```javascript<br>app.component('my-component', MyComponent);<br>```                                                                                                                        |
| `app.directive()`                  | 전역 디렉티브를 등록하거나 가져옵니다.                                                      | ```javascript<br>app.directive('focus', {<br>  mounted(el) {<br>    el.focus();<br>  }<br>});<br>```                                                                                       |
| `app.use()`                        | 플러그인을 설치합니다.                                                                    | ```javascript<br>app.use(MyPlugin);<br>```                                                                                                                                                |
| `app.mixin()`                      | 전역 믹스를 등록합니다.                                                                   | ```javascript<br>app.mixin({<br>  created() {<br>    console.log('Mixin created');<br>  }<br>});<br>```                                                                                   |
| `app.provide()`                    | 자식 컴포넌트에서 inject 할 수 있는 값을 제공합니다.                                         | ```javascript<br>app.provide('key', 'value');<br>```                                                                                                                                      |
| `app.runWithContext()`             | 주어진 함수를 현재 앱의 컨텍스트에서 실행합니다.                                              | ```javascript<br>app.runWithContext(() => {<br>  // 함수 로직<br>});<br>```                                                                                                                |
| `app.version`                      | 현재 Vue의 버전을 반환합니다.                                                               | ```javascript<br>console.log(app.version);<br>```                                                                                                                                         |
| `app.config`                       | 애플리케이션의 전역 설정을 포함합니다.                                                         | ```javascript<br>app.config.errorHandler = (err) => {<br>  console.error(err);<br>};<br>```                                                                                                |
| `app.config.errorHandler`          | 전역 에러 핸들러를 설정합니다.                                                               | ```javascript<br>app.config.errorHandler = (err, vm, info) => {<br>  console.error(err, info);<br>};<br>```                                                                                |
| `app.config.warnHandler`           | 전역 경고 핸들러를 설정합니다.                                                               | ```javascript<br>app.config.warnHandler = (msg, vm, trace) => {<br>  console.warn(msg, trace);<br>};<br>```                                                                                |
| `app.config.performance`           | 성능 측정을 활성화합니다.                                                                  | ```javascript<br>app.config.performance = true;<br>```                                                                                                                                     |
| `app.config.compilerOptions`       | 컴파일러 옵션을 설정합니다.                                                                  | ```javascript<br>app.config.compilerOptions = {<br>  isCustomElement: tag => tag.startsWith('my-')<br>};<br>```                                                                            |
| `app.config.globalProperties`      | 애플리케이션의 전역 프로퍼티를 설정합니다.                                                      | ```javascript<br>app.config.globalProperties.$myProperty = 'value';<br>```                                                                                                                 |
| `app.config.optionMergeStrategies` | 사용자 정의 옵션 병합 전략을 정의합니다.                                                       | ```javascript<br>app.config.optionMergeStrategies.myOption = (toVal, fromVal) => {<br>  return toVal || fromVal;<br>};<br>```                                                              |

<br><br>

## 0-5. General API

| 메서드 / 속성               | 설명                                                                                                     | 사용 문법 및 예시 코드                                                                                                                                  |
|---------------------------|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `version`                 | 현재 Vue의 버전을 반환합니다.                                                                                  | ```javascript<br>import { version } from 'vue';<br>console.log(version);<br>```                                                                          |
| `nextTick()`              | DOM 업데이트 후 다음 이벤트 루프 사이클에서 콜백을 실행합니다.                                                               | ```javascript<br>import { nextTick } from 'vue';<br>nextTick(() => {<br>  // DOM 업데이트 후 실행<br>});<br>```                                          |
| `defineComponent()`       | 명시적으로 컴포넌트를 정의하는 데 사용되며, TypeScript 지원을 개선합니다.                                                    | ```javascript<br>import { defineComponent } from 'vue';<br>export default defineComponent({<br>  name: 'MyComponent',<br>  // 컴포넌트 옵션<br>});<br>``` |
| `defineAsyncComponent()`  | 비동기 컴포넌트를 정의하는 데 사용되며, 코드 스플리팅을 지원합니다.                                                          | ```javascript<br>import { defineAsyncComponent } from 'vue';<br>const AsyncComp = defineAsyncComponent(() => import('./MyComponent.vue'));<br>```        |
| `defineCustomElement()`   | Vue 컴포넌트를 커스텀 요소로 정의합니다.                                                                                 | ```javascript<br>import { defineCustomElement } from 'vue';<br>import MyComponent from './MyComponent.vue';<br>customElements.define('my-component', defineCustomElement(MyComponent));<br>``` |

<br><br>

## 0-6. Composition API

### 0-6-1. setup()

 - setup() 함수는 컴포넌트의 로직을 정의하는 데 사용됩니다. setup() 함수는 컴포넌트가 생성될 때 한 번 호출되며, 리액티브 상태, 라이프사이클 훅, 그리고 기타 로직을 정의할 수 있는 공간을 제공합니다. 아래는 setup() 함수의 기본 사용법, props 접근, setup 컨텍스트, 그리고 렌더 함수와 함께 사용합니다.

<br>

#### 0-6-1-1. Basic Usage

- setup() 함수는 컴포넌트가 생성될 때 호출되며, 리액티브 상태와 로직을 정의할 수 있습니다.

**기본 문법**

```javascript
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    return {
      count,
      increment
    };
  }
};
```

<br>

**예시 코드**

```vue
<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    return {
      count,
      increment
    };
  }
};
</script>
```

<br>

#### 0-6-1-2. Accessing Props

- setup() 함수에서 props를 접근하려면 첫 번째 매개변수로 받을 수 있습니다.

**기본 문법**

```javascript
export default {
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title);

    return {
      title: props.title
    };
  }
};
```

<br>

**예시 코드**

```vue
<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title);

    return {
      title: props.title
    };
  }
};
</script>
```

<br>

#### 0-6-1-3. Setup Context

- setup() 함수의 두 번째 매개변수는 setup 컨텍스트로, attrs, slots, emit을 포함합니다.

**기본 문법**

```javascript
export default {
  setup(props, context) {
    console.log(context.attrs);
    console.log(context.slots);
    context.emit('customEvent');

    return {};
  }
};
```

**예시 코드**

```vue
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  setup(props, { attrs, slots, emit }) {
    console.log(attrs);
    console.log(slots);
    emit('customEvent');

    return {};
  }
};
</script>
```

<br>

#### 0-6-1-4. Usage with Render Functions

- setup() 함수는 JSX 또는 h 함수를 사용한 렌더 함수와 함께 사용할 수 있습니다.

**기본 문법**

```javascript
import { h } from 'vue';

export default {
  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    return () => h('div', [
      h('p', count.value),
      h('button', { onClick: increment }, 'Increment')
    ]);
  }
};
```

<br>

**예시 코드**

```javascript
import { ref, h } from 'vue';

export default {
  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    return () => h('div', [
      h('p', count.value),
      h('button', { onClick: increment }, 'Increment')
    ]);
  }
};
```


- setup() 함수는 컴포넌트의 다양한 측면을 다루는 강력한 도구로서 기본 사용법, props 접근, setup 컨텍스트, 그리고 렌더 함수와 함께 사용합니다.

<br><br><br>

### 0-6-2. Reactivity Core

| 함수                         | 설명                                                                                               | 사용 문법 및 예시 코드                                                                                                                                                                            |
|----------------------------|--------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ref()`                    | 기본 타입의 리액티브 참조를 생성합니다.                                                                 | ```javascript<br>import { ref } from 'vue';<br>const count = ref(0);<br>console.log(count.value);<br>```                                                                                           |
| `computed()`               | 종속된 리액티브 데이터를 기반으로 계산된 값을 생성합니다.                                                     | ```javascript<br>import { computed, ref } from 'vue';<br>const count = ref(0);<br>const doubleCount = computed(() => count.value * 2);<br>console.log(doubleCount.value);<br>```                    |
| `reactive()`               | 객체를 리액티브하게 만듭니다.                                                                                 | ```javascript<br>import { reactive } from 'vue';<br>const state = reactive({ count: 0 });<br>console.log(state.count);<br>```                                                                       |
| `readonly()`               | 읽기 전용 리액티브 객체를 생성합니다.                                                                          | ```javascript<br>import { reactive, readonly } from 'vue';<br>const state = reactive({ count: 0 });<br>const readonlyState = readonly(state);<br>console.log(readonlyState.count);<br>```          |
| `watchEffect()`            | 리액티브 데이터가 변경될 때마다 실행되는 반응형 효과를 등록합니다.                                                   | ```javascript<br>import { ref, watchEffect } from 'vue';<br>const count = ref(0);<br>watchEffect(() => {<br>  console.log(count.value);<br>});<br>```                                              |
| `watchPostEffect()`        | DOM 업데이트 후에 실행되는 반응형 효과를 등록합니다.                                                             | ```javascript<br>import { ref, watchPostEffect } from 'vue';<br>const count = ref(0);<br>watchPostEffect(() => {<br>  console.log(count.value);<br>});<br>```                                       |
| `watchSyncEffect()`        | DOM 업데이트 전에 동기적으로 실행되는 반응형 효과를 등록합니다.                                                      | ```javascript<br>import { ref, watchSyncEffect } from 'vue';<br>const count = ref(0);<br>watchSyncEffect(() => {<br>  console.log(count.value);<br>});<br>```                                       |
| `watch()`                  | 특정 리액티브 데이터 또는 계산된 값의 변경을 감시하고, 변화가 있을 때 콜백을 실행합니다.                                            | ```javascript<br>import { ref, watch } from 'vue';<br>const count = ref(0);<br>watch(count, (newValue, oldValue) => {<br>  console.log(newValue, oldValue);<br>});<br>```                           |

<br>

#### 0-6-2-1. ref()

- 기본 타입의 리액티브 참조를 생성합니다.

**사용 문법 및 예시 코드**

```javascript
import { ref } from 'vue';

const count = ref(0);
console.log(count.value);  // 0

count.value++;
console.log(count.value);  // 1
```

<br>

#### 0-6-2-2. computed()

- 종속된 리액티브 데이터를 기반으로 계산된 값을 생성합니다.

**사용 문법 및 예시 코드**

```javascript
import { computed, ref } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);

console.log(doubleCount.value);  // 0

count.value++;
console.log(doubleCount.value);  // 2
```

<br>

#### 0-6-2-3. reactive()

- 객체를 리액티브하게 만듭니다.

**사용 문법 및 예시 코드**

```javascript
import { reactive } from 'vue';

const state = reactive({ count: 0 });
console.log(state.count);  // 0

state.count++;
console.log(state.count);  // 1
```

<br>

#### 0-6-2-4. readonly()

- 읽기 전용 리액티브 객체를 생성합니다.

**사용 문법 및 예시 코드**

```javascript
import { reactive, readonly } from 'vue';

const state = reactive({ count: 0 });
const readonlyState = readonly(state);

console.log(readonlyState.count);  // 0

// readonlyState.count++;  // 오류 발생: 읽기 전용 속성은 수정할 수 없습니다.
```

<br>

#### 0-6-2-5. watchEffect()

- 리액티브 데이터가 변경될 때마다 실행되는 반응형 효과를 등록합니다.

**사용 문법 및 예시 코드**

```javascript
import { ref, watchEffect } from 'vue';

const count = ref(0);

watchEffect(() => {
    console.log(count.value);
});

count.value++;  // 콘솔 출력: 1
count.value++;  // 콘솔 출력: 2
```

<br>

#### 0-6-2-6. watchPostEffect()

- DOM 업데이트 후에 실행되는 반응형 효과를 등록합니다.

**사용 문법 및 예시 코드**

```javascript
import { ref, watchPostEffect } from 'vue';

const count = ref(0);

watchPostEffect(() => {
    console.log(count.value);
});

count.value++;  // 콘솔 출력: 1
count.value++;  // 콘솔 출력: 2
```

<br>

#### 0-6-2-7. watchSyncEffect()

- DOM 업데이트 전에 동기적으로 실행되는 반응형 효과를 등록합니다.

**사용 문법 및 예시 코드**

```javascript
import { ref, watchSyncEffect } from 'vue';

const count = ref(0);

watchSyncEffect(() => {
    console.log(count.value);
});

count.value++;  // 콘솔 출력: 1
count.value++;  // 콘솔 출력: 2
```

<br>

#### 0-6-2-8. watch()

- 특정 리액티브 데이터 또는 계산된 값의 변경을 감시하고, 변화가 있을 때 콜백을 실행합니다.

**사용 문법 및 예시 코드**

```javascript
import { ref, watch } from 'vue';

const count = ref(0);

watch(count, (newValue, oldValue) => {
    console.log(`Count changed from ${oldValue} to ${newValue}`);
});

count.value++;  // 콘솔 출력: Count changed from 0 to 1
count.value++;  // 콘솔 출력: Count changed from 1 to 2
```

<br><br>

### 0-6-3. Reactivity: Utilities

| 함수             | 설명                                                                 | 사용 문법 및 예시 코드                                                                                                        |
|----------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| `isRef()`      | 주어진 값이 ref인지 확인합니다.                                                 | ```javascript<br>import { ref, isRef } from 'vue';<br>const count = ref(0);<br>console.log(isRef(count)); // true<br>```       |
| `unref()`      | ref 값을 추출하거나 ref가 아닌 경우 값을 그대로 반환합니다.                                 | ```javascript<br>import { ref, unref } from 'vue';<br>const count = ref(0);<br>console.log(unref(count)); // 0<br>```          |
| `toRef()`      | reactive 객체의 특정 속성을 ref로 만듭니다.                                          | ```javascript<br>import { reactive, toRef } from 'vue';<br>const state = reactive({ count: 0 });<br>const countRef = toRef(state, 'count');<br>``` |
| `toValue()`    | ref 값을 추출하거나 ref가 아닌 경우 값을 그대로 반환합니다. (`unref`의 별칭)                         | ```javascript<br>import { ref, toValue } from 'vue';<br>const count = ref(0);<br>console.log(toValue(count)); // 0<br>```      |
| `toRefs()`     | reactive 객체의 모든 속성을 각각 ref로 만듭니다.                                     | ```javascript<br>import { reactive, toRefs } from 'vue';<br>const state = reactive({ count: 0, name: 'Vue' });<br>const { count, name } = toRefs(state);<br>``` |
| `isProxy()`    | 주어진 값이 프록시 객체인지 확인합니다.                                               | ```javascript<br>import { reactive, isProxy } from 'vue';<br>const state = reactive({ count: 0 });<br>console.log(isProxy(state)); // true<br>``` |
| `isReactive()` | 주어진 값이 reactive 객체인지 확인합니다.                                            | ```javascript<br>import { reactive, isReactive } from 'vue';<br>const state = reactive({ count: 0 });<br>console.log(isReactive(state)); // true<br>``` |
| `isReadonly()` | 주어진 값이 readonly 객체인지 확인합니다.                                            | ```javascript<br>import { readonly, isReadonly } from 'vue';<br>const state = readonly({ count: 0 });<br>console.log(isReadonly(state)); // true<br>``` |

<br>

#### 0-6-3-1. isRef()

- 주어진 값이 ref인지 확인합니다.

**사용 문법 및 예시 코드**

```javascript
import { ref, isRef } from 'vue';

const count = ref(0);
console.log(isRef(count)); // true

const nonRef = 0;
console.log(isRef(nonRef)); // false
```

<br>

#### 0-6-3-2. unref()

- ref 값을 추출하거나 ref가 아닌 경우 값을 그대로 반환합니다.

**사용 문법 및 예시 코드**

```javascript
import { ref, unref } from 'vue';

const count = ref(0);
console.log(unref(count)); // 0

const nonRef = 1;
console.log(unref(nonRef)); // 1
```

<br>

#### 0-6-3-3. toRef()

- reactive 객체의 특정 속성을 ref로 만듭니다.

**사용 문법 및 예시 코드**

```javascript
import { reactive, toRef } from 'vue';

const state = reactive({ count: 0 });
const countRef = toRef(state, 'count');

console.log(countRef.value); // 0

countRef.value++;
console.log(state.count); // 1
```

<br>

#### 0-6-3-4. toValue()

- ref 값을 추출하거나 ref가 아닌 경우 값을 그대로 반환합니다. (unref의 별칭)

**사용 문법 및 예시 코드**

```javascript
import { ref, toValue } from 'vue';

const count = ref(0);
console.log(toValue(count)); // 0

const nonRef = 1;
console.log(toValue(nonRef)); // 1
```

<br>

#### 0-6-3-5. toRefs()

- reactive 객체의 모든 속성을 각각 ref로 만듭니다.

**사용 문법 및 예시 코드**

```javascript
import { reactive, toRefs } from 'vue';

const state = reactive({ count: 0, name: 'Vue' });
const { count, name } = toRefs(state);

console.log(count.value); // 0
console.log(name.value); // Vue

count.value++;
console.log(state.count); // 1
```

<br>

#### 0-6-3-6. isProxy()

- 주어진 값이 프록시 객체인지 확인합니다.

**사용 문법 및 예시 코드**

```javascript
import { reactive, isProxy } from 'vue';

const state = reactive({ count: 0 });
console.log(isProxy(state)); // true

const plainObject = { count: 0 };
console.log(isProxy(plainObject)); // false
```

<br>

#### 0-6-3-7. isReactive()

- 주어진 값이 reactive 객체인지 확인합니다.

**사용 문법 및 예시 코드**

```javascript
import { reactive, isReactive } from 'vue';

const state = reactive({ count: 0 });
console.log(isReactive(state)); // true

const plainObject = { count: 0 };
console.log(isReactive(plainObject)); // false
```

<br>

#### 0-6-3-8. isReadonly()

- 주어진 값이 readonly 객체인지 확인합니다.

**사용 문법 및 예시 코드**

```javascript
import { readonly, isReadonly } from 'vue';

const state = readonly({ count: 0 });
console.log(isReadonly(state)); // true

const plainObject = { count: 0 };
console.log(isReadonly(plainObject)); // false
```

<br><br>

### 0-6-4. Reactivity: Advanced

| 함수                   | 설명                                                                                          | 사용 문법 및 예시 코드                                                                                                                                                                           |
|----------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `shallowRef()`       | 객체의 첫 번째 깊이만 반응형으로 만드는 ref를 생성합니다.                                                     | ```javascript<br>import { shallowRef } from 'vue';<br>const state = shallowRef({ count: 0 });<br>state.value.count++;<br>```                                                                      |
| `triggerRef()`       | ref의 종속성을 수동으로 트리거합니다.                                                                  | ```javascript<br>import { ref, triggerRef } from 'vue';<br>const state = ref({ count: 0 });<br>triggerRef(state);<br>```                                                                           |
| `customRef()`        | 사용자 정의 ref를 생성하여 ref의 추적 및 업데이트 동작을 사용자 정의합니다.                                          | ```javascript<br>import { customRef } from 'vue';<br>function useDebouncedRef(value, delay) {<br>  let timeout;<br>  return customRef((track, trigger) => ({<br>    get() {<br>      track();<br>      return value;<br>    },<br>    set(newValue) {<br>      clearTimeout(timeout);<br>      timeout = setTimeout(() => {<br>        value = newValue;<br>        trigger();<br>      }, delay);<br>    }<br>  }));<br>}<br>const debouncedRef = useDebouncedRef(0, 200);<br>``` |
| `shallowReactive()`  | 객체의 첫 번째 깊이만 반응형으로 만드는 reactive 객체를 생성합니다.                                             | ```javascript<br>import { shallowReactive } from 'vue';<br>const state = shallowReactive({ nested: { count: 0 } });<br>state.nested.count++;<br>```                                                |
| `shallowReadonly()`  | 첫 번째 깊이만 읽기 전용으로 만드는 readonly 객체를 생성합니다.                                                | ```javascript<br>import { shallowReadonly } from 'vue';<br>const state = shallowReadonly({ nested: { count: 0 } });<br>console.log(state.nested.count);<br>```                                     |
| `toRaw()`            | 반응형 프록시 객체에서 원래 객체를 반환합니다.                                                                 | ```javascript<br>import { reactive, toRaw } from 'vue';<br>const state = reactive({ count: 0 });<br>const raw = toRaw(state);<br>```                                                              |
| `markRaw()`          | 객체를 반응형으로 만들지 않도록 표시합니다.                                                                    | ```javascript<br>import { reactive, markRaw } from 'vue';<br>const raw = markRaw({ count: 0 });<br>const state = reactive({ raw });<br>```                                                         |
| `effectScope()`      | 반응형 효과를 독립적으로 관리할 수 있는 범위를 생성합니다.                                                      | ```javascript<br>import { effectScope, ref } from 'vue';<br>const scope = effectScope();<br>scope.run(() => {<br>  const count = ref(0);<br>});<br>scope.stop();<br>```                            |
| `getCurrentScope()`  | 현재 활성화된 effect scope를 반환합니다.                                                             | ```javascript<br>import { effectScope, getCurrentScope } from 'vue';<br>let scope;<br>effectScope(() => {<br>  scope = getCurrentScope();<br>});<br>```                                            |
| `onScopeDispose()`   | 현재 활성화된 effect scope가 중지될 때 실행될 콜백을 등록합니다.                                                | ```javascript<br>import { effectScope, onScopeDispose } from 'vue';<br>effectScope(() => {<br>  onScopeDispose(() => {<br>    console.log('Scope disposed');<br>  });<br>});<br>```                |

<br>

#### 0-6-4-1. shallowRef()

- 객체의 첫 번째 깊이만 반응형으로 만드는 ref를 생성합니다.

**사용 문법 및 예시 코드**

```javascript
import { shallowRef } from 'vue';

const state = shallowRef({ count: 0 });
console.log(state.value.count); // 0

state.value.count++;
console.log(state.value.count); // 1

// 첫 번째 깊이까지만 반응형이므로 중첩된 객체는 반응형이 아닙니다.
state.value.nested = { value: 1 };
state.value.nested.value++;  // 반응형으로 추적되지 않습니다.
```

<br>

#### 0-6-4-2. triggerRef()

- ref의 종속성을 수동으로 트리거합니다.

**사용 문법 및 예시 코드**

```javascript
import { ref, triggerRef } from 'vue';

const state = ref({ count: 0 });

// 반응형 효과 설정
watchEffect(() => {
    console.log(state.value.count);
});

// 수동으로 트리거
state.value.count++;
triggerRef(state);
```

<br>

#### 0-6-4-3. customRef()

- 사용자 정의 ref를 생성하여 ref의 추적 및 업데이트 동작을 사용자 정의합니다.

**사용 문법 및 예시 코드**

```javascript
import { customRef } from 'vue';

function useDebouncedRef(value, delay) {
    let timeout;
    return customRef((track, trigger) => ({
        get() {
            track();
            return value;
        },
        set(newValue) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                value = newValue;
                trigger();
            }, delay);
        }
    }));
}

const debouncedRef = useDebouncedRef(0, 200);
debouncedRef.value = 5;  // 200ms 후에 값이 변경됩니다.
```

<br>

#### 0-6-4-4. shallowReactive()

- 객체의 첫 번째 깊이만 반응형으로 만드는 reactive 객체를 생성합니다.

**사용 문법 및 예시 코드**

```javascript
import { shallowReactive } from 'vue';

const state = shallowReactive({ nested: { count: 0 } });

state.nested.count++;
console.log(state.nested.count); // 1

// 첫 번째 깊이까지만 반응형이므로 중첩된 객체는 반응형이 아닙니다.
state.nested = { value: 1 };
state.nested.value++;  // 반응형으로 추적되지 않습니다.
```

<br>

#### 0-6-4-5. shallowReadonly()

- 첫 번째 깊이만 읽기 전용으로 만드는 readonly 객체를 생성합니다.

**사용 문법 및 예시 코드**

```javascript
import { shallowReadonly } from 'vue';

const state = shallowReadonly({ nested: { count: 0 } });

console.log(state.nested.count); // 0

// 첫 번째 깊이까지만 읽기 전용이므로 중첩된 객체는 읽기 전용이 아닙니다.
state.nested.count++;  // 반응형으로 추적되지 않습니다.
```

<br>

#### 0-6-4-6. toRaw()

- 반응형 프록시 객체에서 원래 객체를 반환합니다.

**사용 문법 및 예시 코드**

```javascript
import { reactive, toRaw } from 'vue';

const state = reactive({ count: 0 });
const raw = toRaw(state);

console.log(raw.count); // 0
console.log(raw === state); // false
```

<br>

#### 0-6-4-7. markRaw()

- 객체를 반응형으로 만들지 않도록 표시합니다.

**사용 문법 및 예시 코드**

```javascript
import { reactive, markRaw } from 'vue';

const raw = markRaw({ count: 0 });
const state = reactive({ raw });

console.log(state.raw.count); // 0
state.raw.count++;  // 반응형으로 추적되지 않습니다.
```

<br>

#### 0-6-4-8. effectScope()

- 반응형 효과를 독립적으로 관리할 수 있는 범위를 생성합니다.

**사용 문법 및 예시 코드**

```javascript
import { effectScope, ref } from 'vue';

const scope = effectScope();
scope.run(() => {
    const count = ref(0);
    watchEffect(() => {
        console.log(count.value);
    });
    count.value++;
});

// scope 중지
scope.stop();
```

<br>

#### 0-6-4-9. getCurrentScope()

- 현재 활성화된 effect scope를 반환합니다.

**사용 문법 및 예시 코드**

```javascript
import { effectScope, getCurrentScope } from 'vue';

let scope;
effectScope(() => {
    scope = getCurrentScope();
    console.log(scope !== null);  // true
});

console.log(scope !== null);  // false
```

<br>

#### 0-6-4-10. onScopeDispose()

- 현재 활성화된 effect scope가 중지될 때 실행될 콜백을 등록합니다.

**사용 문법 및 예시 코드**

```javascript
import { effectScope, onScopeDispose } from 'vue';

effectScope(() => {
    onScopeDispose(() => {
        console.log('Scope disposed');
    });
});

// scope 중지
scope.stop();  // 'Scope disposed' 출력
```

<br><br>

### 0-6-5. Lifecycle Hooks

| 함수                     | 설명                                                                                          | 사용 문법 및 예시 코드                                                                                                                                                                                                                                         |
|------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onMounted()`          | 컴포넌트가 마운트된 후 실행될 콜백을 등록합니다.                                                        | ```javascript<br>import { onMounted } from 'vue';<br>onMounted(() => {<br>  console.log('Component is mounted');<br>});<br>```                                                                                                                                |
| `onUpdated()`          | 컴포넌트가 갱신될 때 실행될 콜백을 등록합니다.                                                          | ```javascript<br>import { onUpdated } from 'vue';<br>onUpdated(() => {<br>  console.log('Component is updated');<br>});<br>```                                                                                                                                |
| `onUnmounted()`        | 컴포넌트가 언마운트될 때 실행될 콜백을 등록합니다.                                                       | ```javascript<br>import { onUnmounted } from 'vue';<br>onUnmounted(() => {<br>  console.log('Component is unmounted');<br>});<br>```                                                                                                                          |
| `onBeforeMount()`      | 컴포넌트가 마운트되기 전에 실행될 콜백을 등록합니다.                                                       | ```javascript<br>import { onBeforeMount } from 'vue';<br>onBeforeMount(() => {<br>  console.log('Before mounting');<br>});<br>```                                                                                                                            |
| `onBeforeUpdate()`     | 컴포넌트가 갱신되기 전에 실행될 콜백을 등록합니다.                                                       | ```javascript<br>import { onBeforeUpdate } from 'vue';<br>onBeforeUpdate(() => {<br>  console.log('Before updating');<br>});<br>```                                                                                                                          |
| `onBeforeUnmount()`    | 컴포넌트가 언마운트되기 전에 실행될 콜백을 등록합니다.                                                    | ```javascript<br>import { onBeforeUnmount } from 'vue';<br>onBeforeUnmount(() => {<br>  console.log('Before unmounting');<br>});<br>```                                                                                                                      |
| `onErrorCaptured()`    | 자식 컴포넌트에서 발생한 에러를 캡처하고 처리할 수 있는 콜백을 등록합니다.                                    | ```javascript<br>import { onErrorCaptured } from 'vue';<br>onErrorCaptured((error, vm, info) => {<br>  console.error('Error captured:', error);<br>});<br>```                                                                                                 |
| `onRenderTracked()`    | 렌더링이 추적될 때 실행될 콜백을 등록합니다.                                                           | ```javascript<br>import { onRenderTracked } from 'vue';<br>onRenderTracked((event) => {<br>  console.log('Render tracked:', event);<br>});<br>```                                                                                                               |
| `onRenderTriggered()`  | 렌더링이 트리거될 때 실행될 콜백을 등록합니다.                                                          | ```javascript<br>import { onRenderTriggered } from 'vue';<br>onRenderTriggered((event) => {<br>  console.log('Render triggered:', event);<br>});<br>```                                                                                                         |
| `onActivated()`        | 비활성화된 컴포넌트가 활성화될 때 실행될 콜백을 등록합니다.                                                  | ```javascript<br>import { onActivated } from 'vue';<br>onActivated(() => {<br>  console.log('Component activated');<br>});<br>```                                                                                                                            |
| `onDeactivated()`      | 활성화된 컴포넌트가 비활성화될 때 실행될 콜백을 등록합니다.                                                  | ```javascript<br>import { onDeactivated } from 'vue';<br>onDeactivated(() => {<br>  console.log('Component deactivated');<br>});<br>```                                                                                                                        |
| `onServerPrefetch()`   | 서버 사이드 렌더링(SSR)에서 데이터를 미리 가져오기 위해 사용됩니다.                                        | ```javascript<br>import { onServerPrefetch } from 'vue';<br>onServerPrefetch(() => {<br>  console.log('Server prefetching');<br>});<br>```                                                                                                                      |

<br>

#### 0-6-5-1. onMounted()

- 컴포넌트가 마운트된 후 실행될 콜백을 등록합니다.

**사용 문법 및 예시 코드**

```javascript
import { onMounted } from 'vue';

onMounted(() => {
    console.log('Component is mounted');
    // 추가적인 초기화 로직을 실행할 수 있습니다.
});
```

<br>

#### 0-6-5-2. onUpdated()

- 컴포넌트가 갱신될 때 실행될 콜백을 등록합니다.

**사용 문법 및 예시 코드**

```javascript
import { onUpdated } from 'vue';

onUpdated(() => {
    console.log('Component is updated');
    // 갱신 이후에 추가적인 로직을 실행할 수 있습니다.
});
```

<br>

#### 0-6-5-3. onUnmounted()

- 컴포넌트가 언마운트될 때 실행될 콜백을 등록합니다.

**사용 문법 및 예시 코드**

```javascript
import { onUnmounted } from 'vue';

onUnmounted(() => {
    console.log('Component is unmounted');
    // 정리(clean-up) 로직을 실행할 수 있습니다.
});
```

<br>

#### 0-6-5-4. onBeforeMount()

- 컴포넌트가 마운트되기 전에 실행될 콜백을 등록합니다.

**사용 문법 및 예시 코드**

```javascript
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
    console.log('Before mounting');
    // 마운트 전에 추가적인 준비 로직을 실행할 수 있습니다.
});
```

<br>

#### 0-6-5-5. onBeforeUpdate()

- 컴포넌트가 갱신되기 전에 실행될 콜백을 등록합니다.

**사용 문법 및 예시 코드**

```javascript
import { onBeforeUpdate } from 'vue';

onBeforeUpdate(() => {
    console.log('Before updating');
    // 갱신 전에 추가적인 준비 로직을 실행할 수 있습니다.
});
```

<br>

#### 0-6-5-6. onBeforeUnmount()

- 컴포넌트가 언마운트되기 전에 실행될 콜백을 등록합니다.

**사용 문법 및 예시 코드**

```javascript
import { onBeforeUnmount } from 'vue';

onBeforeUnmount(() => {
    console.log('Before unmounting');
    // 언마운트 전에 정리(clean-up) 로직을 실행할 수 있습니다.
});
```

<br>

#### 0-6-5-7. onErrorCaptured()

- 자식 컴포넌트에서 발생한 에러를 캡처하고 처리할 수 있는 콜백을 등록합니다.

**사용 문법 및 예시 코드**

```javascript
import { onErrorCaptured } from 'vue';

onErrorCaptured((error, vm, info) => {
    console.error('Error captured:', error);
    // 에러 처리 로직을 추가할 수 있습니다.
});
```

<br><br>

### 0-6-6. Dependency Injection

| 함수                       | 설명                                                                                          | 사용 문법 및 예시 코드                                                                                                                                                                               |
|--------------------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `provide()`              | 하위 컴포넌트에서 사용할 데이터를 제공합니다.                                                             | ```javascript<br>import { provide } from 'vue';<br>provide('message', 'Hello from parent');<br>```                                                                                                   |
| `inject()`               | 상위 컴포넌트에서 제공한 데이터를 주입받습니다.                                                          | ```javascript<br>import { inject } from 'vue';<br>const message = inject('message', 'Default message');<br>console.log(message); // 'Hello from parent' (상위 컴포넌트에서 제공한 값)<br>```                  |
| `hasInjectionContext()`  | 주어진 키에 대한 인젝션 컨텍스트가 있는지 확인합니다.                                                       | ```javascript<br>import { hasInjectionContext } from 'vue';<br>const hasContext = hasInjectionContext('message');<br>console.log(hasContext); // true (인젝션 컨텍스트가 존재할 경우)<br>```                |

<br>

#### 0-6-6-1. provide()

- 하위 컴포넌트에서 사용할 데이터를 제공합니다.

**사용 문법 및 예시 코드**

```javascript
import { provide } from 'vue';

provide('message', 'Hello from parent');
// 'message'라는 키로 'Hello from parent'라는 데이터를 하위 컴포넌트에 제공합니다.
```

<br>

#### 0-6-6-2. inject()

- 상위 컴포넌트에서 제공한 데이터를 주입받습니다.

**사용 문법 및 예시 코드**

```javascript
import { inject } from 'vue';

const message = inject('message', 'Default message');
console.log(message);
// 상위 컴포넌트에서 'message'라는 키로 제공한 값을 가져옵니다. 없을 경우 기본 값('Default message')이 반환됩니다.
```

<br>

#### 0-6-6-3. hasInjectionContext()

- 주어진 키에 대한 인젝션 컨텍스트가 있는지 확인합니다.

**사용 문법 및 예시 코드**

```javascript
import { hasInjectionContext } from 'vue';

const hasContext = hasInjectionContext('message');
console.log(hasContext);
// 'message'라는 키에 대한 인젝션 컨텍스트가 존재할 경우 true를 반환합니다.
```

<br><br><br>

## 0-7. Options API

### 0-7-1. Options: State

| 옵션            | 설명                                                                                     | 사용 문법 및 예시 코드                                                                                                                                                                   |
|---------------|----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `data`        | 컴포넌트의 로컬 상태 데이터를 정의합니다.                                                     | ```javascript<br>export default {<br>  data() {<br>    return {<br>      message: 'Hello Vue!',<br>      count: 0<br>    };<br>  },<br>};<br>```                                            |
| `props`       | 컴포넌트에 전달되는 프로퍼티(props)를 정의합니다.                                                | ```javascript<br>export default {<br>  props: {<br>    propMessage: String,<br>    initialCount: {<br>      type: Number,<br>      default: 0<br>    }<br>  },<br>};<br>```    |
| `computed`    | 계산된 속성(computed properties)을 정의합니다.                                                 | ```javascript<br>export default {<br>  computed: {<br>    fullName() {<br>      return `${this.firstName} ${this.lastName}`;<br>    }<br>  },<br>};<br>```                                  |
| `methods`     | 컴포넌트의 메서드(methods)를 정의합니다.                                                      | ```javascript<br>export default {<br>  methods: {<br>    increment() {<br>      this.count++;<br>    }<br>  },<br>};<br>```                                                             |
| `watch`       | 데이터의 변경을 감시(watch)하고, 변경 시 특정 동작을 수행하는 감시자(watcher)를 정의합니다.             | ```javascript<br>export default {<br>  data() {<br>    return {<br>      message: 'Hello Vue!',<br>    };<br>  },<br>  watch: {<br>    message(newVal, oldVal) {<br>      console.log('Message changed');<br>    }<br>  },<br>};<br>``` |
| `emits`       | 컴포넌트에서 발생시키는 이벤트를 선언합니다.                                                    | ```javascript<br>export default {<br>  emits: ['increment'],<br>  methods: {<br>    increment() {<br>      this.$emit('increment');<br>    }<br>  },<br>};<br>```                       |
| `expose`      | 컴포넌트의 내부 상태나 메서드를 외부로 노출할 때 사용합니다.                                      | ```javascript<br>export default {<br>  data() {<br>    return {<br>      count: 0,<br>    };<br>  },<br>  methods: {<br>    increment() {<br>      this.count++;<br>    }<br>  },<br>  expose: ['count'],<br>};<br>``` |

<br>

#### 0-7-1-1. data

- 컴포넌트의 로컬 상태 데이터를 정의합니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  data() {
    return {
      message: 'Hello Vue!',
      count: 0
    };
  },
};
```

<br>

#### 0-7-1-2. props

- 컴포넌트에 전달되는 프로퍼티(props)를 정의합니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  props: {
    propMessage: String,
    initialCount: {
      type: Number,
      default: 0
    }
  },
};
```

<br>

#### 0-7-1-3. computed

- 계산된 속성(computed properties)을 정의합니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
};
```

<br>

#### 0-7-1-4. methods

- 컴포넌트의 메서드(methods)를 정의합니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  methods: {
    increment() {
      this.count++;
    }
  },
};
```

<br>

#### 0-7-1-5. watch

- 데이터의 변경을 감시(watch)하고, 변경 시 특정 동작을 수행하는 감시자(watcher)를 정의합니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
  watch: {
    message(newVal, oldVal) {
      console.log('Message changed');
    }
  },
};
```

<br>

#### 0-7-1-6. emits

- 컴포넌트에서 발생시키는 이벤트를 선언합니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  emits: ['increment'],
  methods: {
    increment() {
      this.$emit('increment');
    }
  },
};
```

<br>

#### 0-7-1-7. expose

- 컴포넌트의 내부 상태나 메서드를 외부로 노출할 때 사용합니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  expose: ['count'],
};
```

<br><br>

### 0-7-2. Options: Rendering

| 옵션               | 설명                                                                                      | 사용 문법 및 예시 코드                                                                                                                                                          |
|------------------|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `template`       | HTML 기반의 템플릿을 정의하여 렌더링을 처리합니다.                                                | ```html<br><template><br>  <div>{{ message }}</div><br></template>```<br>```javascript<br>export default {<br>  data() {<br>    return {<br>      message: 'Hello Vue!',<br>    };<br>  },<br>};<br>```  |
| `render`         | 렌더링 함수를 직접 정의하여 컴포넌트를 렌더링합니다.                                           | ```javascript<br>export default {<br>  data() {<br>    return {<br>      message: 'Hello Vue!',<br>    };<br>  },<br>  render() {<br>    return h('div', this.message);<br>  },<br>};<br>```                  |
| `compilerOptions`| Vue 컴파일러의 옵션을 설정합니다.                                                         | ```javascript<br>export default {<br>  compilerOptions: {<br>    isCustomElement(tag) {<br>      return tag.startsWith('app-');<br>    }<br>  },<br>};<br>```                             |
| `slots`          | 부모 컴포넌트에서 전달받은 슬롯(slot)을 처리합니다.                                           | ```html<br><slot name="header"></slot>```<br>```javascript<br>export default {<br>  slots: ['header'],<br>};<br>```                                                                 |

<br>

#### 0-7-2-1. template

- HTML 기반의 템플릿을 정의하여 렌더링을 처리합니다.

**사용 문법 및 예시 코드**

```html
<template>
  <div>{{ message }}</div>
</template>
javascript
코드 복사
export default {
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
};
```

<br>

#### 0-7-2-2. render

- 렌더링 함수를 직접 정의하여 컴포넌트를 렌더링합니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
  render() {
    return h('div', this.message);
  },
};
```

<br>

#### 0-7-2-3. compilerOptions

- Vue 컴파일러의 옵션을 설정합니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  compilerOptions: {
    isCustomElement(tag) {
      return tag.startsWith('app-');
    }
  },
};
```

<br>

#### 0-7-2-4. slots

- 부모 컴포넌트에서 전달받은 슬롯(slot)을 처리합니다.

**사용 문법 및 예시 코드**

```html
<slot name="header"></slot>
```

<br>

```javascript
export default {
  slots: ['header'],
};
```

<br><br>

### 0-7-3. Options: Lifecycle

| 라이프사이클 훅          | 설명                                                                                       | 사용 문법 및 예시 코드                                                                                                                                                                                        |
|-----------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `beforeCreate`        | 인스턴스가 초기화되기 직전에 호출됩니다.                                                        | ```javascript<br>export default {<br>  beforeCreate() {<br>    console.log('Before create');<br>  },<br>};<br>```                                                                                            |
| `created`             | 인스턴스가 생성된 직후에 호출됩니다. 데이터와 이벤트가 초기화됩니다.                             | ```javascript<br>export default {<br>  created() {<br>    console.log('Created');<br>  },<br>};<br>```                                                                                                      |
| `beforeMount`         | 인스턴스가 마운트되기 직전에 호출됩니다. DOM 요소에 접근할 수 있습니다.                          | ```javascript<br>export default {<br>  beforeMount() {<br>    console.log('Before mount');<br>  },<br>};<br>```                                                                                             |
| `mounted`             | 인스턴스가 마운트된 직후에 호출됩니다. DOM에 접근 가능하며 초기 데이터 로딩 등에 적합합니다.           | ```javascript<br>export default {<br>  mounted() {<br>    console.log('Mounted');<br>  },<br>};<br>```                                                                                                        |
| `beforeUpdate`        | 데이터가 변경되어 DOM을 업데이트하기 전에 호출됩니다.                                           | ```javascript<br>export default {<br>  beforeUpdate() {<br>    console.log('Before update');<br>  },<br>};<br>```                                                                                             |
| `updated`             | 데이터가 변경되어 DOM 업데이트가 완료된 직후에 호출됩니다.                                      | ```javascript<br>export default {<br>  updated() {<br>    console.log('Updated');<br>  },<br>};<br>```                                                                                                          |
| `beforeUnmount`       | 인스턴스가 언마운트되기 직전에 호출됩니다.                                                       | ```javascript<br>export default {<br>  beforeUnmount() {<br>    console.log('Before unmount');<br>  },<br>};<br>```                                                                                           |
| `unmounted`           | 인스턴스가 언마운트된 직후에 호출됩니다.                                                        | ```javascript<br>export default {<br>  unmounted() {<br>    console.log('Unmounted');<br>  },<br>};<br>```                                                                                                      |
| `errorCaptured`       | 하위 컴포넌트에서 발생한 에러를 캡처합니다.                                                      | ```javascript<br>export default {<br>  errorCaptured(err, vm, info) {<br>    console.error('Error captured:', err, vm, info);<br>  },<br>};<br>```                                                              |
| `renderTracked`       | 렌더링 함수나 Watcher가 추적(track)될 때 호출됩니다.                                           | ```javascript<br>export default {<br>  renderTracked(target) {<br>    console.log('Render tracked:', target);<br>  },<br>};<br>```                                                                             |
| `renderTriggered`     | 렌더링 함수나 Watcher가 트리거(trigger)될 때 호출됩니다.                                         | ```javascript<br>export default {<br>  renderTriggered(target) {<br>    console.log('Render triggered:', target);<br>  },<br>};<br>```                                                                           |
| `activated`           | 인스턴스가 재활성화될 때(예: keep-alive 컴포넌트에서) 호출됩니다.                                 | ```javascript<br>export default {<br>  activated() {<br>    console.log('Activated');<br>  },<br>};<br>```                                                                                                      |
| `deactivated`         | 인스턴스가 비활성화될 때(예: keep-alive 컴포넌트에서) 호출됩니다.                                 | ```javascript<br>export default {<br>  deactivated() {<br>    console.log('Deactivated');<br>  },<br>};<br>```                                                                                                    |
| `serverPrefetch`      | 서버 사이드 렌더링(SSR)에서 데이터를 사전 가져오는 데 사용됩니다.                                 | ```javascript<br>export default {<br>  serverPrefetch() {<br>    return fetchData();<br>  },<br>};<br>```                                                                                                         |

<br>

#### 0-7-3-1. beforeCreate

- 인스턴스가 초기화되기 직전에 호출됩니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  beforeCreate() {
    console.log('Before create');
  },
};
```

<br>

#### 0-7-3-2. created

- 인스턴스가 생성된 직후에 호출됩니다. 데이터와 이벤트가 초기화됩니다.

***사용 문법 및 예시 코드***

```javascript
export default {
  created() {
    console.log('Created');
  },
};
```

<br>

#### 0-7-3-3. beforeMount

- 인스턴스가 마운트되기 직전에 호출됩니다. DOM 요소에 접근할 수 있습니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  beforeMount() {
    console.log('Before mount');
  },
};
```

<br>

#### 0-7-3-4. mounted

- 인스턴스가 마운트된 직후에 호출됩니다. DOM에 접근 가능하며 초기 데이터 로딩 등에 적합합니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  mounted() {
    console.log('Mounted');
  },
};
```

<br>

#### 0-7-3-5. beforeUpdate

- 데이터가 변경되어 DOM을 업데이트하기 직전에 호출됩니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  beforeUpdate() {
    console.log('Before update');
  },
};
```

<br>

#### 0-7-3-6. updated

- 데이터가 변경되어 DOM 업데이트가 완료된 직후에 호출됩니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  updated() {
    console.log('Updated');
  },
};
```

<br>

#### 0-7-3-7. beforeUnmount

- 인스턴스가 언마운트되기 직전에 호출됩니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  beforeUnmount() {
    console.log('Before unmount');
  },
};
```

<br>

#### 0-7-3-8. unmounted

- 인스턴스가 언마운트된 직후에 호출됩니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  unmounted() {
    console.log('Unmounted');
  },
};
```

<br>

#### 0-7-3-9. errorCaptured

- 하위 컴포넌트에서 발생한 에러를 캡처합니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  errorCaptured(err, vm, info) {
    console.error('Error captured:', err, vm, info);
  },
};
```

<br>

#### 0-7-3-10. renderTracked

- renderTracked 라이프사이클 훅은 렌더링 함수나 Watcher가 추적(track)될 때 호출됩니다. Vue의 reactivity 시스템에서 데이터의 종속성을 추적할 때 사용됩니다.

```javascript
export default {
  renderTracked(target) {
    console.log('Render tracked:', target);
  },
};
```

<br><br>

### 0-7-4. Options: Composition

| 옵션         | 설명                                                         | 사용 문법 및 예시 코드                                                                                   |
|------------|------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `provide`  | 상위 컴포넌트에서 하위 컴포넌트로 데이터를 제공합니다.              | ```javascript<br>export default {<br>  provide() {<br>    return {<br>      theme: 'dark',<br>    };<br>  },<br>};<br>```                                  |
| `inject`   | 상위 컴포넌트에서 제공한 데이터를 하위 컴포넌트에서 주입받습니다.       | ```javascript<br>export default {<br>  inject: ['theme'],<br>  created() {<br>    console.log('Injected theme:', this.theme);<br>  },<br>};<br>```          |
| `mixins`   | 여러 컴포넌트 간에 공통된 옵션들을 재사용하기 위해 믹스인 객체를 사용합니다. | ```javascript<br>const myMixin = {<br>  data() {<br>    return {<br>      message: 'Hello!',<br>    };<br>  },<br>};<br>export default {<br>  mixins: [myMixin],<br>};<br>``` |
| `extends`  | 다른 컴포넌트의 기능을 확장하고 상속받습니다.                         | ```javascript<br>import BaseComponent from './BaseComponent';<br>export default {<br>  extends: BaseComponent,<br>  mounted() {<br>    console.log('Extended component');<br>  },<br>};<br>``` |

<br>

#### 0-7-4-1. provide

- 상위 컴포넌트에서 하위 컴포넌트로 데이터를 제공합니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  provide() {
    return {
      theme: 'dark',
    };
  },
};
```

<br>

#### 0-7-4-2. inject

- 상위 컴포넌트에서 제공한 데이터를 하위 컴포넌트에서 주입받습니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  inject: ['theme'],
  created() {
    console.log('Injected theme:', this.theme);
  },
};
```

<br>

#### 0-7-4-3. mixins

- 여러 컴포넌트 간에 공통된 옵션들을 재사용하기 위해 믹스인 객체를 사용합니다.

**사용 문법 및 예시 코드**

```javascript
const myMixin = {
  data() {
    return {
      message: 'Hello!',
    };
  },
};

export default {
  mixins: [myMixin],
};
```

<br>

#### 0-7-4-4. extends

- 다른 컴포넌트의 기능을 확장하고 상속받습니다.

**사용 문법 및 예시 코드**

```javascript
import BaseComponent from './BaseComponent';

export default {
  extends: BaseComponent,
  mounted() {
    console.log('Extended component');
  },
};
```

<br><br>

### 0-7-5. Options: Misc

| 옵션             | 설명                                                      | 사용 문법 및 예시 코드                                                                                   |
|----------------|---------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `name`         | 컴포넌트의 이름을 지정합니다.                                   | ```javascript<br>export default {<br>  name: 'MyComponent',<br>};<br>```                                |
| `inheritAttrs` | 부모 컴포넌트로부터 받은 속성을 자동으로 자식 엘리먼트에게 전달할지 여부를 설정합니다. | ```javascript<br>export default {<br>  inheritAttrs: false,<br>};<br>```                               |
| `components`   | 지역 컴포넌트를 정의하고 등록합니다.                              | ```javascript<br>import ChildComponent from './ChildComponent';<br>export default {<br>  components: {<br>    ChildComponent,<br>  },<br>};<br>``` |
| `directives`   | 지역 디렉티브를 정의하고 등록합니다.                               | ```javascript<br>import myDirective from './myDirective';<br>export default {<br>  directives: {<br>    myDirective,<br>  },<br>};<br>```   |

<br>

#### 0-7-5-1. name

- 컴포넌트의 이름을 지정합니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  name: 'MyComponent',
};
```

<br>

#### 0-7-5-2. inheritAttrs

- 부모 컴포넌트로부터 받은 속성을 자동으로 자식 엘리먼트에게 전달할지 여부를 설정합니다.

**사용 문법 및 예시 코드**

```javascript
export default {
  inheritAttrs: false,
};
```

<br>

#### 0-7-5-3. components

- 지역 컴포넌트를 정의하고 등록합니다.

**사용 문법 및 예시 코드**

```javascript
import ChildComponent from './ChildComponent';

export default {
  components: {
    ChildComponent,
  },
};
```

<br>

#### 0-7-5-4. directives

- 지역 디렉티브를 정의하고 등록합니다.

**사용 문법 및 예시 코드**

```javascript
import myDirective from './myDirective';

export default {
  directives: {
    myDirective,
  },
};
```

<br><br>

### 0-7-6. Component Instance

| 속성/메서드        | 설명                                                   | 사용 문법 및 예시 코드                                                                                   |
|-------------------|------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `$data`           | 컴포넌트 인스턴스의 데이터 객체입니다.                      | ```javascript<br>this.$data.<property>```                                                                |
| `$props`          | 컴포넌트 인스턴스에 전달된 프로퍼티(props) 객체입니다.         | ```javascript<br>this.$props.<propName>```                                                               |
| `$el`             | 컴포넌트 인스턴스의 렌더링된 DOM 엘리먼트입니다.                | ```javascript<br>this.$el```                                                                            |
| `$options`        | 컴포넌트의 옵션 객체입니다.                               | ```javascript<br>this.$options```                                                                       |
| `$parent`         | 부모 컴포넌트 인스턴스입니다.                              | ```javascript<br>this.$parent```                                                                        |
| `$root`           | 루트 Vue 인스턴스입니다.                                 | ```javascript<br>this.$root```                                                                          |
| `$slots`          | 컴포넌트의 슬롯(slot)들을 포함하는 객체입니다.                | ```javascript<br>this.$slots.<slotName>```                                                              |
| `$refs`           | 컴포넌트 내에서 `ref`로 지정된 엘리먼트나 컴포넌트에 접근하는 객체입니다. | ```javascript<br>this.$refs.<refName>```                                                                |
| `$attrs`          | 상위 컴포넌트로부터 전달받은 모든 속성(props)을 포함하는 객체입니다.   | ```javascript<br>this.$attrs.<attrName>```                                                              |
| `$watch()`        | 데이터의 변경을 감시하고 반응하는 메서드입니다.                 | ```javascript<br>this.$watch('expression', callback(newValue, oldValue))```                            |
| `$emit()`         | 이벤트를 발생시키는 메서드입니다.                            | ```javascript<br>this.$emit('event-name', eventData)```                                                 |
| `$forceUpdate()`  | 컴포넌트를 강제로 업데이트합니다.                            | ```javascript<br>this.$forceUpdate()```                                                                 |
| `$nextTick()`     | DOM 업데이트 후 콜백 함수를 실행합니다.                        | ```javascript<br>this.$nextTick(() => {<br>  // DOM 업데이트 후 실행할 로직<br>})```                     |

<br>

#### 0-7-6-1. $data

- 컴포넌트 인스턴스의 데이터 객체입니다.

```javascript
this.$data.<property>;
```

<br>

#### 0-7-6-2. $props

- 컴포넌트 인스턴스에 전달된 프로퍼티(props) 객체입니다.

```javascript
this.$props.<propName>;
```

<br>

#### 0-7-6-3. $el

- 컴포넌트 인스턴스의 렌더링된 DOM 엘리먼트입니다.

```javascript
this.$el;
```

<br>

#### 0-7-6-4. $options

- 컴포넌트의 옵션 객체입니다.

```javascript
this.$options;
```

<br>

#### 0-7-6-5. $parent

- 부모 컴포넌트 인스턴스입니다.

```javascript
this.$parent;
```

<br>

#### 0-7-6-6. $root

- 루트 Vue 인스턴스입니다.

```javascript
this.$root;
```

<br>

#### 0-7-6-7. $slots

- 컴포넌트의 슬롯(slot)들을 포함하는 객체입니다.

```javascript
this.$slots.<slotName>;
```

<br>

#### 0-7-6-8. $refs

- 컴포넌트 내에서 ref로 지정된 엘리먼트나 컴포넌트에 접근하는 객체입니다.

```javascript
this.$refs.<refName>;
```

<br>

#### 0-7-6-9. $attrs

- 상위 컴포넌트로부터 전달받은 모든 속성(props)을 포함하는 객체입니다.

```javascript
this.$attrs.<attrName>;
```

<br>

#### 0-7-6-10. $watch()

- 데이터의 변경을 감시하고 반응하는 메서드입니다.

```javascript
this.$watch('expression', callback(newValue, oldValue));
```

<br>

#### 0-7-6-11. $emit()

- 이벤트를 발생시키는 메서드입니다.

```javascript
this.$emit('event-name', eventData);
```

<br>

#### 0-7-6-12. $forceUpdate()

- 컴포넌트를 강제로 업데이트합니다.

```javascript
this.$forceUpdate();
```

<br>

#### 0-7-6-13. $nextTick()

- DOM 업데이트 후 콜백 함수를 실행합니다.

```javascript
this.$nextTick(() => {
  // DOM 업데이트 후 실행할 로직
});
```

<br><br><br>

## 0-8. Built-ins

### 0-8-1. Directives

| 디렉티브       | 설명                                                                   | 사용 문법 및 예시 코드                                                                                         |
|--------------|----------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| `v-text`     | 엘리먼트의 텍스트 콘텐츠를 설정합니다.                                           | ```html<br><span v-text="message"></span>```                                                                |
| `v-html`     | 엘리먼트의 HTML 콘텐츠를 설정합니다.                                            | ```html<br><div v-html="htmlContent"></div>```                                                              |
| `v-show`     | 조건에 따라 엘리먼트의 표시 여부를 결정합니다(조건이 `true`일 때 보임).                 | ```html<br><div v-show="isVisible"></div>```                                                                |
| `v-if`       | 조건에 따라 엘리먼트를 렌더링합니다(조건이 `true`일 때 렌더링).                       | ```html<br><div v-if="isVisible"></div>```                                                                  |
| `v-else`     | `v-if`와 함께 사용되어 이전 조건이 `false`일 때 렌더링합니다.                         | ```html<br><div v-if="isVisible">Visible</div><br><div v-else>Not Visible</div>```                          |
| `v-else-if`  | `v-if`와 함께 사용되어 이전 조건이 `false`일 때 새로운 조건을 검사합니다.                | ```html<br><div v-if="status === 'active'">Active</div><br><div v-else-if="status === 'pending'">Pending</div>``` |
| `v-for`      | 배열이나 객체를 기반으로 엘리먼트를 반복 렌더링합니다.                                 | ```html<br><div v-for="item in items" :key="item.id">{{ item.name }}</div>```                                |
| `v-on`       | 이벤트 리스너를 등록하여 DOM 이벤트를 처리합니다.                                   | ```html<br><button v-on:click="handleClick">Click Me</button>```                                            |
| `v-bind`     | 엘리먼트의 속성(attribute)에 데이터를 바인딩합니다.                                  | ```html<br><img v-bind:src="imageUrl" alt="Image">```                                                       |
| `v-model`    | 양방향 데이터 바인딩을 설정하여 폼 입력과 Vue 인스턴스 데이터를 동기화합니다.              | ```html<br><input v-model="message" type="text">```                                                         |
| `v-slot`     | 슬롯(slot)을 사용하여 컴포넌트의 콘텐츠를 삽입합니다.                                 | ```html<br><template v-slot:header><h1>Title</h1></template>```                                            |
| `v-pre`      | 엘리먼트와 그 하위 엘리먼트들의 텍스트를 렌더링하기 전에 그대로 표시합니다.                   | ```html<br><div v-pre>{{ rawHtml }}</div>```                                                                |
| `v-once`     | 엘리먼트를 한 번만 렌더링합니다.                                                | ```html<br><div v-once>{{ staticContent }}</div>```                                                          |
| `v-memo`     | 메모이제이션을 사용하여 컴포넌트의 연산 결과를 캐시합니다.                            | ```html<br><div v-memo="memoizedValue">{{ memoizedValue }}</div>```                                         |
| `v-cloak`    | Vue 인스턴스 초기화 전에 컴포넌트가 화면에 나타나지 않도록 합니다.                       | ```html<br><div v-cloak>{{ message }}</div>```                                                              |

<br>

#### 0-8-1-1. v-text

- 엘리먼트의 텍스트 콘텐츠를 설정합니다.

```html
<span v-text="message"></span>
```
<br>

#### 0-8-1-2. v-html

- 엘리먼트의 HTML 콘텐츠를 설정합니다.

```html
<div v-html="htmlContent"></div>
```
<br>

#### 0-8-1-3. v-show

- 조건에 따라 엘리먼트의 표시 여부를 결정합니다.

```html
<div v-show="isVisible"></div>
```
<br>

#### 0-8-1-4. v-if

- 조건에 따라 엘리먼트를 렌더링합니다.

```html
<div v-if="isVisible"></div>
```
<br>

#### 0-8-1-5. v-else

- v-if와 함께 사용되어 이전 조건이 false일 때 렌더링합니다.

```html
<div v-if="isVisible">Visible</div>
<div v-else>Not Visible</div>
```
<br>

#### 0-8-1-6. v-else-if

- v-if와 함께 사용되어 이전 조건이 false일 때 새로운 조건을 검사합니다.

```html
<div v-if="status === 'active'">Active</div>
<div v-else-if="status === 'pending'">Pending</div>
```
<br>

#### 0-8-1-7. v-for

- 배열이나 객체를 기반으로 엘리먼트를 반복 렌더링합니다.

```html
<div v-for="item in items" :key="item.id">{{ item.name }}</div>
```
<br>

#### 0-8-1-8. v-on

- 이벤트 리스너를 등록하여 DOM 이벤트를 처리합니다.

```html
<button v-on:click="handleClick">Click Me</button>
```
<br>

#### 0-8-1-9. v-bind

- 엘리먼트의 속성(attribute)에 데이터를 바인딩합니다.

```html
<img v-bind:src="imageUrl" alt="Image">
```
<br>

#### 0-8-1-10. v-model

- 양방향 데이터 바인딩을 설정하여 폼 입력과 Vue 인스턴스 데이터를 동기화합니다.

```html
<input v-model="message" type="text">
```
<br>

#### 0-8-1-11. v-slot

- 슬롯(slot)을 사용하여 컴포넌트의 콘텐츠를 삽입합니다.

```html
<template v-slot:header><h1>Title</h1></template>
```
<br>

#### 0-8-1-12. v-pre

- 엘리먼트와 그 하위 엘리먼트들의 텍스트를 렌더링하기 전에 그대로 표시합니다.

```html
<div v-pre>{{ rawHtml }}</div>
```
<br>

#### 0-8-1-13. v-once

- 엘리먼트를 한 번만 렌더링합니다.

```html
<div v-once>{{ trsData }}</div>
```

<br><br>

### 0-8-2. Components

| 요소            | 설명                                                               | 사용 문법 및 예시 코드                                                                                       |
|----------------|------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `<Transition>`  | 엘리먼트의 등장 및 사라짐을 부드럽게 처리하는 트랜지션 효과를 지원합니다.    | ```html<br><transition name="fade"><br>  <div v-if="isVisible" key="uniqueKey">Content</div><br></transition>``` |
| `<TransitionGroup>` | 리스트 기반의 엘리먼트들에 대해 트랜지션 효과를 적용합니다.             | ```html<br><transition-group name="list"><br>  <div v-for="item in items" :key="item.id">{{ item.name }}</div><br></transition-group>``` |
| `<KeepAlive>`   | 동적으로 렌더링되는 컴포넌트를 캐싱하여 상태를 유지합니다.                | ```html<br><keep-alive><br>  <component :is="currentComponent"></component><br></keep-alive>```        |
| `<Teleport>`    | 엘리먼트를 DOM 트리의 다른 위치로 이동시킵니다.                          | ```html<br><teleport to="destination"><br>  <div>Content</div><br></teleport>```                        |
| `<Suspense>`    | 비동기적으로 데이터를 불러오는 동안 로딩 상태를 처리하는 컴포넌트입니다.     | ```html<br><suspense><br>  <template #default><br>    <div>{{ asyncData }}</div><br>  </template><br>  <template #fallback><br>    <div>Loading...</div><br>  </template><br></suspense>``` |

<br>

#### 0-8-2-1. `<Transition>`

- 엘리먼트의 등장 및 사라짐을 부드럽게 처리하는 트랜지션 효과를 지원합니다.

```html
<transition name="fade">
  <div v-if="isVisible" key="uniqueKey">Content</div>
</transition>
```

<br>

#### 0-8-2-2. `<TransitionGroup>`

- 리스트 기반의 엘리먼트들에 대해 트랜지션 효과를 적용합니다.

```html
<transition-group name="list">
  <div v-for="item in items" :key="item.id">{{ item.name }}</div>
</transition-group>
```

<br>

#### 0-8-2-3. `<KeepAlive>`

- 동적으로 렌더링되는 컴포넌트를 캐싱하여 상태를 유지합니다.

```html
<keep-alive>
  <component :is="currentComponent"></component>
</keep-alive>
```

<br>

#### 0-8-2-4. `<Teleport>`

- 엘리먼트를 DOM 트리의 다른 위치로 이동시킵니다.

```html
<teleport to="destination">
  <div>Content</div>
</teleport>
```

<br>

#### 0-8-2-5. `<Suspense>`

- 비동기적으로 데이터를 불러오는 동안 로딩 상태를 처리하는 컴포넌트입니다.

```html
<suspense>
  <template #default>
    <div>{{ asyncData }}</div>
  </template>
  <template #fallback>
    <div>Loading...</div>
  </template>
</suspense>
```

<br><br>

### 0-8-3. Special Elements

| 요소          | 설명                                                                 | 사용 문법 및 예시 코드                                                                                     |
|--------------|--------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| `<component>` | 동적으로 컴포넌트를 선택하여 렌더링하는 데 사용됩니다.                      | ```html<br><component :is="currentComponent"></component>```                                           |
| `<slot>`      | 부모 컴포넌트에서 자식 컴포넌트로 컨텐츠를 전달하는 데 사용됩니다.                | ```html<br><child-component><br>  <template v-slot:default><br>    <div>Slot Content</div><br>  </template><br></child-component>``` |
| `<template>`  | 렌더링되지 않고 그 자체로 사용될 수 있는 가상의 컨테이너 역할을 합니다.              | ```html<br><template><br>  <div>Content</div><br></template>```                                       |

<br>

#### 0-8-3-1. `<component>`

- 동적으로 컴포넌트를 선택하여 렌더링하는 데 사용됩니다.

```html
<component :is="currentComponent"></component>
```

- currentComponent 변수에 따라 다른 컴포넌트가 렌더링됩니다.

<br>

#### 0-8-3-2. `<slot>`

- 부모 컴포넌트에서 자식 컴포넌트로 컨텐츠를 전달하는 데 사용됩니다.

```html
<!-- ParentComponent.vue -->
<template>
  <child-component>
    <template v-slot:default>
      <div>Slot Content</div>
    </template>
  </child-component>
</template>

<!-- ChildComponent.vue -->
<template>
  <div>
    <slot></slot>
  </div>
</template>
```

- 자식 컴포넌트에서 `<slot></slot>` 으로 슬롯 내용을 렌더링합니다.

<br>

#### 0-8-3-3. `<template>`

- 렌더링되지 않고 그 자체로 사용될 수 있는 가상의 컨테이너 역할을 합니다.

```html
<template>
  <div>Content</div>
</template>
```

- 주로 렌더링을 위한 용도가 아니라 로직 구성이나 여러 엘리먼트의 묶음으로 사용됩니다.

<br><br>

### 0-8-4. Special Attributes

| 속성    | 설명                                                                 | 사용 문법 및 예시 코드                                                   |
|---------|--------------------------------------------------------------------|----------------------------------------------------------------------|
| `key`   | Vue가 엘리먼트를 업데이트할 때 각 노드를 식별하는 데 사용됩니다.            | ```html<br><div v-for="item in items" :key="item.id">{{ item.name }}</div>``` |
| `ref`   | 특정 엘리먼트나 컴포넌트 인스턴스에 대한 참조를 만들 때 사용됩니다.           | ```html<br><div ref="myElement"></div>```                             |
| `is`    | 동적 컴포넌트와 함께 사용되어 동적으로 컴포넌트의 타입을 결정할 때 사용됩니다. | ```html<br><component :is="currentComponent"></component>```           |

<br>

#### 0-8-4-1. key

- Vue가 엘리먼트를 업데이트할 때 각 노드를 식별하는 데 사용됩니다.

```html
<div v-for="item in items" :key="item.id">{{ item.name }}</div>
```

- v-for 디렉티브와 함께 사용하여 반복되는 엘리먼트들을 고유하게 식별합니다.

<br>

#### 0-8-4-2. ref

- 특정 엘리먼트나 컴포넌트 인스턴스에 대한 참조를 만들 때 사용됩니다.

```html
<div ref="myElement"></div>
```

- ref 속성을 통해 Vue 인스턴스에서 엘리먼트에 직접 접근할 수 있습니다.

<br>

#### 0-8-4-3. is

- 동적 컴포넌트와 함께 사용되어 동적으로 컴포넌트의 타입을 결정할 때 사용됩니다.

```html
<component :is="currentComponent"></component>
```

- is 속성을 통해 currentComponent 변수에 따라 다른 컴포넌트를 렌더링할 수 있습니다.


<br><br><br>

## 0-9. Single-File Component

### 0-9-1. Syntax Specification

| 요소                       | 설명                                                            | 사용 문법 및 예시 코드                                                                                   |
|----------------------------|-----------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| Overview                   | 단일 파일 컴포넌트의 전체적인 구조와 장점을 설명합니다.                | - Vue 파일은 `<template>`, `<script>`, `<style>` 블록을 가질 수 있습니다.                                 |
| Language Blocks            | 각 블록의 역할과 문법을 설명합니다.                                 | - `<template>`: HTML 템플릿을 작성합니다.<br>- `<script>`: JavaScript 로직을 작성합니다.<br>- `<style>`: CSS 스타일을 작성합니다.                    |
| Automatic Name Inference   | 파일 이름에서 기본적으로 추론되는 컴포넌트 이름을 설명합니다.          | - 파일 이름이 `MyComponent.vue`라면 `<template>`, `<script>`, `<style>`의 기본 이름은 `MyComponent`입니다.                                     |
| Pre-Processors             | 전처리기(Pre-processor)를 사용하여 `<style>` 블록을 처리하는 방법을 설명합니다. | - `<style lang="scss">`: SCSS 문법을 사용하여 스타일을 작성할 수 있습니다.<br>- `<style scoped>`: 컴포넌트 스코프 내에서 스타일이 적용됩니다.            |
| src Imports                | 외부 파일에서 `<template>`, `<script>`, `<style>`을 가져오는 방법을 설명합니다.  | - `<template src="./MyTemplate.html">`: 외부 HTML 파일에서 템플릿을 가져올 수 있습니다.<br>- `<script setup src="./MyLogic.js">`: 외부 JavaScript 파일에서 로직을 가져올 수 있습니다. |
| Comments                   | 주석을 추가하고 템플릿, 스크립트, 스타일 블록 내에서 사용하는 방법을 설명합니다.   | - `<!-- 주석 -->`: HTML 주석을 사용할 수 있습니다.<br>- `// 주석`: JavaScript 주석을 사용할 수 있습니다.<br>- `/* 주석 */`: CSS 주석을 사용할 수 있습니다.      |

<br>

#### 0-9-1-1. Overview

- 단일 파일 컴포넌트의 전체적인 구조와 장점을 설명합니다.

**Vue 파일의 기본 구조**

```html
<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    };
  }
}
</script>

<style scoped>
div {
  color: blue;
}
</style>
```

<br>

#### 0-9-1-2. Language Blocks

- 각 블록의 역할과 문법을 설명합니다.
- Vue 파일에서 `<template>`, `<script>`, `<style>` 블록을 사용하여 각각 HTML, JavaScript, CSS를 작성합니다.

<br>

#### 0-9-1-3. Automatic Name Inference

- 파일 이름에서 기본적으로 추론되는 컴포넌트 이름을 설명합니다.
- 파일 이름이 MyComponent.vue라면 기본적으로 컴포넌트의 이름은 MyComponent가 됩니다.

<br>

#### 0-9-1-4. Pre-Processors

- 전처리기(Pre-processor)를 사용하여 `<style>` 블록을 처리하는 방법을 설명합니다.
- `<style lang="scss">`와 같이 SCSS 문법을 사용하여 스타일을 작성하거나, `<style scoped>`로 컴포넌트 스코프 내에서 스타일을 적용할 수 있습니다.

<br>

#### 0-9-1-5. src Imports

- 외부 파일에서 `<template>`, `<script>`, `<style>`을 가져오는 방법을 설명합니다.
- `<template src="./MyTemplate.html">`과 같이 외부 HTML 파일에서 템플릿을 가져오거나, `<script setup src="./MyLogic.js">`와 같이 외부 JavaScript 파일에서 로직을 가져올 수 있습니다.

<br>

#### 0-9-1-6. Comments

- 주석을 추가하고 템플릿, 스크립트, 스타일 블록 내에서 사용하는 방법을 설명합니다.
- `<!-- 주석 -->`으로 HTML 주석을 작성하거나, `// 주석` 으로 JavaScript 주석을 작성하며, `/* 주석 */` 으로 CSS 주석을 작성할 수 있습니다.

<br><br>

### 0-9-2. `<script setup>`

| 요소                             | 설명                                                                    | 사용 문법 및 예시 코드                                                                                         |
|----------------------------------|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Basic Syntax                     | `<script setup>`의 기본적인 문법과 역할을 설명합니다.                        | ```html<br><script setup><br>  // JavaScript logic<br></script>```                                             |
| Reactivity                       | 반응성(Reactivity)을 설정하고 사용하는 방법을 설명합니다.                      | ```html<br><script setup><br>  import { ref } from 'vue';<br>  const count = ref(0);<br></script>```          |
| Using Components                 | 다른 컴포넌트를 사용하는 방법을 설명합니다.                                  | ```html<br><script setup><br>  import ChildComponent from './ChildComponent.vue';<br></script>```              |
| Using Custom Directives          | 사용자 정의 디렉티브를 사용하는 방법을 설명합니다.                            | ```html<br><script setup><br>  // 사용자 정의 디렉티브 등록<br>  import { defineDirective } from 'vue';<br></script>``` |
| defineProps() & defineEmits()    | 프롭스와 이벤트를 정의하고 사용하는 방법을 설명합니다.                        | ```html<br><script setup><br>  import { defineProps, defineEmits } from 'vue';<br></script>```                |
| defineModel()                    | v-model 디렉티브를 사용할 때 모델을 정의하는 방법을 설명합니다.                  | ```html<br><script setup><br>  import { defineModel } from 'vue';<br></script>```                             |
| defineExpose()                   | 컴포넌트의 외부로 노출할 메소드나 데이터를 정의하는 방법을 설명합니다.             | ```html<br><script setup><br>  import { defineExpose } from 'vue';<br></script>```                            |
| defineOptions()                  | 컴포넌트 옵션을 정의하는 방법을 설명합니다.                                  | ```html<br><script setup><br>  import { defineOptions } from 'vue';<br></script>```                           |
| defineSlots()                    | 슬롯을 정의하고 사용하는 방법을 설명합니다.                                  | ```html<br><script setup><br>  import { defineSlots } from 'vue';<br></script>```                             |
| useSlots() & useAttrs()          | 슬롯과 속성을 사용하는 방법을 설명합니다.                                    | ```html<br><script setup><br>  import { useSlots, useAttrs } from 'vue';<br></script>```                       |
| Usage alongside normal `<script>`| `<script setup>`을 일반 `<script>`와 함께 사용하는 방법을 설명합니다.          | ```html<br><script setup><br>  // `<script setup>`에서 사용할 변수와 함수 정의<br></script><br><script><br>  // 일반 `<script>`에서 사용할 로직<br></script>``` |
| Top-level await                  | 최상위 await을 사용하는 방법을 설명합니다.                                   | ```html<br><script setup><br>  async function fetchData() {<br>    const response = await fetch('/data');<br>    return await response.json();<br>  }<br></script>``` |
| Generics                         | 제네릭을 사용하는 방법을 설명합니다.                                        | ```html<br><script setup><br>  // TypeScript와 같이 제네릭 사용<br></script>```                                 |
| Restrictions                     | `<script setup>`에서의 제약사항을 설명합니다.                                 | - 모듈 수준의 코드만을 포함해야 하며, 블록 수준의 코드는 사용할 수 없습니다.<br>- `data()`, `computed`, `methods` 등의 옵션을 사용할 수 없습니다.<br>- 기타 제약사항에 대한 자세한 정보는 Vue 공식 문서를 참고하세요. |

<br>

#### 0-9-2-1. Basic Syntax

- `<script setup>`의 기본적인 문법과 역할을 설명합니다.

```html
<script setup>
  // JavaScript logic
</script>
```

<br>

#### 0-9-2-2. Reactivity

- 반응성(Reactivity)을 설정하고 사용하는 방법을 설명합니다.

```html
<script setup>
  import { ref } from 'vue';
  const count = ref(0);
</script>
```

<br>

#### 0-9-2-3. Using Components

- 다른 컴포넌트를 사용하는 방법을 설명합니다.

```html
<script setup>
  import ChildComponent from './ChildComponent.vue';
</script>
```

<br>

#### 0-9-2-4. Using Custom Directives

- 사용자 정의 디렉티브를 사용하는 방법을 설명합니다.

```html
<script setup>
  // 사용자 정의 디렉티브 등록
  import { defineDirective } from 'vue';
</script>
```

<br>

#### 0-9-2-5. defineProps() & defineEmits()

- 프롭스와 이벤트를 정의하고 사용하는 방법을 설명합니다.

```html
<script setup>
  import { defineProps, defineEmits } from 'vue';
</script>
```

<br>

#### 0-9-2-6. defineModel()

- v-model 디렉티브를 사용할 때 모델을 정의하는 방법을 설명합니다.

```html
<script setup>
  import { defineModel } from 'vue';
</script>
```

<br>

#### 0-9-2-7. defineExpose()

- 컴포넌트의 외부로 노출할 메소드나 데이터를 정의하는 방법을 설명합니다.

```html
<script setup>
  import { defineExpose } from 'vue';
</script>
```

<br>

#### 0-9-2-8. defineOptions()

- 컴포넌트 옵션을 정의하는 방법을 설명합니다.

```html
<script setup>
  import { defineOptions } from 'vue';
</script>
```

<br>

#### 0-9-2-9. defineSlots()

- 슬롯을 정의하고 사용하는 방법을 설명합니다.

```html
<script setup>
  import { defineSlots } from 'vue';
</script>
```

<br>

#### 0-9-2-10. useSlots() & useAttrs()

- 슬롯과 속성을 사용하는 방법을 설명합니다.

```html
<script setup>
  import { useSlots, useAttrs } from 'vue';
</script>
```

<br>

#### 0-9-2-11. Usage alongside normal `<script>`

- `<script setup>`을 일반 `<script>`와 함께 사용하는 방법을 설명합니다.

```html
<script setup>
  // `<script setup>`에서 사용할 변수와 함수 정의
</script>
<script>
  // 일반 `<script>`에서 사용할 로직
</script>
```

<br>

#### 0-9-2-12. Top-level await

- 최상위 await을 사용하는 방법을 설명합니다.

```html
<script setup>
  async function fetchData() {
    const response = await fetch('/data');
    return await response.json();
  }
```

<br><br>

### 0-9-3. CSS Features

| 요소            | 설명                                          | 사용 문법 및 예시 코드                                                                                   |
|-----------------|-----------------------------------------------|--------------------------------------------------------------------------------------------------------|
| Scoped CSS      | 컴포넌트 스코프 내에서만 스타일이 적용되도록 합니다. | ```html<br><style scoped><br>  .example {<br>    color: red;<br>  }<br></style>```                       |
| CSS Modules     | CSS 파일에서 지역적인 스코프를 사용하여 스타일을 관리합니다. | ```html<br><style module><br>  .example {<br>    color: red;<br>  }<br></style>```                       |
| v-bind() in CSS | 동적으로 클래스나 스타일을 바인딩하는 방법을 제공합니다. | ```html<br><template><br>  <div :class="{ active: isActive }"></div><br></template><br><style><br>  .active {<br>    color: blue;<br>  }<br></style>``` |

<br>

#### 0-9-3-1. Scoped CSS

- 컴포넌트 스코프 내에서만 스타일이 적용되도록 합니다.

```html
<style scoped>
  .example {
    color: red;
  }
</style>
```

- .example 클래스는 컴포넌트 외부에서는 사용할 수 없습니다.

<br>

#### 0-9-3-2. CSS Modules

- CSS 파일에서 지역적인 스코프를 사용하여 스타일을 관리합니다.

```html
<style module>
  .example {
    color: red;
  }
</style>
```

- .example 클래스는 Vue 컴포넌트 내에서만 유효하며, 클래스 이름은 자동으로 고유화됩니다.

<br>

#### 0-9-3-3. v-bind() in CSS

- 동적으로 클래스나 스타일을 바인딩하는 방법을 제공합니다.

```html
<template>
  <div :class="{ active: isActive }"></div>
</template>
<style>
  .active {
    color: blue;
  }
</style>
```

- isActive 값에 따라 .active 클래스가 동적으로 추가될 수 있습니다.

<br><br><br>

## 0-10. Advanced APIs

### 0-10-1. Render Function

| 요소                   | 설명                                                                        | 사용 문법 및 예시 코드                                                                                   |
|------------------------|-----------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| h()                    | 가상 DOM 요소(VNode)를 생성하는 함수입니다.                                     | ```javascript<br>import { h } from 'vue';<br>const vnode = h('div', { class: 'example' }, 'Hello, Vue!');<br>``` |
| mergeProps()           | 속성(props)을 병합하는 함수입니다.                                              | ```javascript<br>import { mergeProps } from 'vue';<br>const mergedProps = mergeProps({ propA: 'valueA' }, { propB: 'valueB' });<br>``` |
| cloneVNode()           | VNode를 복제하는 함수입니다.                                                  | ```javascript<br>import { cloneVNode } from 'vue';<br>const clonedVNode = cloneVNode(vnode);<br>```      |
| isVNode()              | 객체가 VNode인지 여부를 확인하는 함수입니다.                                    | ```javascript<br>import { isVNode } from 'vue';<br>const isNode = isVNode(vnode);<br>```                  |
| resolveComponent()     | 컴포넌트를 해결(resolve)하여 실제 Vue 컴포넌트 객체를 반환합니다.                  | ```javascript<br>import { resolveComponent } from 'vue';<br>const Component = resolveComponent('MyComponent');<br>``` |
| resolveDirective()     | 디렉티브를 해결하여 실제 Vue 디렉티브 객체를 반환합니다.                         | ```javascript<br>import { resolveDirective } from 'vue';<br>const Directive = resolveDirective('v-model');<br>``` |
| withDirectives()       | 디렉티브와 함께 VNode를 래핑하여 처리하는 함수입니다.                             | ```javascript<br>import { withDirectives } from 'vue';<br>const vNodeWithDirective = withDirectives(vnode, [{ name: 'focus', value: true }]);<br>``` |
| withModifiers()        | 이벤트 수식어(modifier)와 함께 이벤트 핸들러를 처리하는 함수입니다.                 | ```javascript<br>import { withModifiers } from 'vue';<br>const eventHandler = withModifiers((event) => { /* handler logic */ }, ['prevent']);<br>``` |

<br>

#### 0-10-1-1. h()

- 가상 DOM 요소(VNode)를 생성하는 함수입니다.

```javascript
import { h } from 'vue';
const vnode = h('div', { class: 'example' }, 'Hello, Vue!');
```

<br>

#### 0-10-1-2. mergeProps()

- 속성(props)을 병합하는 함수입니다.

```javascript
import { mergeProps } from 'vue';
const mergedProps = mergeProps({ propA: 'valueA' }, { propB: 'valueB' });
```

<br>

#### 0-10-1-3. cloneVNode()

- VNode를 복제하는 함수입니다.

```javascript
import { cloneVNode } from 'vue';
const clonedVNode = cloneVNode(vnode);
```

<br>

#### 0-10-1-4. isVNode()

- 객체가 VNode인지 여부를 확인하는 함수입니다.

```javascript
import { isVNode } from 'vue';
const isNode = isVNode(vnode);
```

<br>

#### 0-10-1-5. resolveComponent()

- 컴포넌트를 해결(resolve)하여 실제 Vue 컴포넌트 객체를 반환합니다.

```javascript
import { resolveComponent } from 'vue';
const Component = resolveComponent('MyComponent');
```

<br>

#### 0-10-1-6. resolveDirective()

- 디렉티브를 해결하여 실제 Vue 디렉티브 객체를 반환합니다.

```javascript
import { resolveDirective } from 'vue';
const Directive = resolveDirective('v-model');
```

<br>

#### 0-10-1-7. withDirectives()

- 디렉티브와 함께 VNode를 래핑하여 처리하는 함수입니다.

```javascript
import { withDirectives } from 'vue';
const vNodeWithDirective = withDirectives(vnode, [{ name: 'focus', value: true }]);
```

<br>

#### 0-10-1-8. withModifiers()

- 이벤트 수식어(modifier)와 함께 이벤트 핸들러를 처리하는 함수입니다.

```javascript
import { withModifiers } from 'vue';
const eventHandler = withModifiers((event) => { /* handler logic */ }, ['prevent']);
```

<br><br>

### 0-10-2. Server-Side Rendering

| 요소                     | 설명                                                                           | 사용 문법 및 예시 코드                                                                                      |
|--------------------------|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| renderToString()         | Vue 앱을 문자열로 렌더링하여 HTML을 생성합니다.                                      | ```javascript<br>import { createSSRApp } from 'vue';<br>const { renderToString } = require('@vue/server-renderer');<br>```<br>```javascript<br>const app = createSSRApp({...});<br>const html = await renderToString(app);<br>``` |
| renderToNodeStream()     | Node.js 스트림에 Vue 앱을 렌더링하여 데이터를 스트림으로 출력합니다.                     | ```javascript<br>import { createSSRApp } from 'vue';<br>const { renderToNodeStream } = require('@vue/server-renderer');<br>```<br>```javascript<br>const app = createSSRApp({...});<br>const stream = renderToNodeStream(app);<br>``` |
| pipeToNodeWritable()     | Vue 앱을 Node.js writable 스트림으로 파이프하여 데이터를 스트림으로 출력합니다.          | ```javascript<br>import { createSSRApp } from 'vue';<br>const { pipeToNodeWritable } = require('@vue/server-renderer');<br>```<br>```javascript<br>const app = createSSRApp({...});<br>pipeToNodeWritable(app, writableStream);<br>``` |
| renderToWebStream()      | 브라우저의 ReadableStream에 Vue 앱을 렌더링하여 데이터를 스트림으로 출력합니다.         | ```javascript<br>import { createSSRApp } from 'vue';<br>const { renderToWebStream } = require('@vue/server-renderer');<br>```<br>```javascript<br>const app = createSSRApp({...});<br>const stream = renderToWebStream(app);<br>``` |
| pipeToWebWritable()      | Vue 앱을 브라우저의 writable 스트림으로 파이프하여 데이터를 스트림으로 출력합니다.        | ```javascript<br>import { createSSRApp } from 'vue';<br>const { pipeToWebWritable } = require('@vue/server-renderer');<br>```<br>```javascript<br>const app = createSSRApp({...});<br>pipeToWebWritable(app, writableStream);<br>``` |
| renderToSimpleStream()   | 간단한 스트림(Plain Stream)에 Vue 앱을 렌더링하여 데이터를 스트림으로 출력합니다.         | ```javascript<br>import { createSSRApp } from 'vue';<br>const { renderToSimpleStream } = require('@vue/server-renderer');<br>```<br>```javascript<br>const app = createSSRApp({...});<br>const stream = renderToSimpleStream(app);<br>``` |
| useSSRContext()          | Server-Side Rendering(SSR) 컨텍스트를 사용할 수 있도록 합니다.                        | ```javascript<br>import { useSSRContext } from '@vue/server-renderer';<br>const { ssrContext } = useSSRContext();<br>``` |

<br>

#### 0-10-2-1. renderToString()

- Vue 앱을 문자열로 렌더링하여 HTML을 생성합니다.

```javascript
import { createSSRApp } from 'vue';
const { renderToString } = require('@vue/server-renderer');

const app = createSSRApp({...});
const html = await renderToString(app);
```

<br>

#### 0-10-2-2. renderToNodeStream()

- Node.js 스트림에 Vue 앱을 렌더링하여 데이터를 스트림으로 출력합니다.

```javascript
import { createSSRApp } from 'vue';
const { renderToNodeStream } = require('@vue/server-renderer');

const app = createSSRApp({...});
const stream = renderToNodeStream(app);
```

<br>

#### 0-10-2-3. pipeToNodeWritable()

- Vue 앱을 Node.js writable 스트림으로 파이프하여 데이터를 스트림으로 출력합니다.

```javascript
import { createSSRApp } from 'vue';
const { pipeToNodeWritable } = require('@vue/server-renderer');

const app = createSSRApp({...});
pipeToNodeWritable(app, writableStream);
```

<br>

#### 0-10-2-4. renderToWebStream()

- 브라우저의 ReadableStream에 Vue 앱을 렌더링하여 데이터를 스트림으로 출력합니다.

```javascript
import { createSSRApp } from 'vue';
const { renderToWebStream } = require('@vue/server-renderer');

const app = createSSRApp({...});
const stream = renderToWebStream(app);
```

<br>

#### 0-10-2-5. pipeToWebWritable()

- Vue 앱을 브라우저의 writable 스트림으로 파이프하여 데이터를 스트림으로 출력합니다.

```javascript
import { createSSRApp } from 'vue';
const { pipeToWebWritable } = require('@vue/server-renderer');

const app = createSSRApp({...});
pipeToWebWritable(app, writableStream);
```

<br>

#### 0-10-2-6. renderToSimpleStream()

- 간단한 스트림(Plain Stream)에 Vue 앱을 렌더링하여 데이터를 스트림으로 출력합니다.

```javascript
import { createSSRApp } from 'vue';
const { renderToSimpleStream } = require('@vue/server-renderer');

const app = createSSRApp({...});
const stream = renderToSimpleStream(app);
```

<br>

#### 0-10-2-7. useSSRContext()

- Server-Side Rendering(SSR) 컨텍스트를 사용할 수 있도록 합니다.

```javascript
import { useSSRContext } from '@vue/server-renderer';

const { ssrContext } = useSSRContext();
// ssrContext를 사용하여 SSR 관련 작업을 수행합니다.
```

<br><br>

### 0-10-3. TypeScript Utility Types

| 요소                         | 설명                                                  | 사용 문법 및 예시 코드                                                                                       |
|------------------------------|-------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| PropType<T>                  | 프로퍼티(props)의 타입을 지정하는 TypeScript 유틸리티 타입입니다. | ```typescript<br>import { PropType } from 'vue';<br>const prop: PropType<string> = String;<br>```               |
| MaybeRef<T>                  | 값이 Ref인지 여부에 따라 타입을 선택하는 TypeScript 유틸리티 타입입니다. | ```typescript<br>import { MaybeRef } from 'vue';<br>const value: MaybeRef<string> = ref('initial');<br>```     |
| MaybeRefOrGetter<T>          | 값이 Ref 또는 Getter인지 여부에 따라 타입을 선택하는 TypeScript 유틸리티 타입입니다. | ```typescript<br>import { MaybeRefOrGetter } from 'vue';<br>const value: MaybeRefOrGetter<string> = ref('initial');<br>``` |
| ExtractPropTypes<T>         | 컴포넌트에서 추출한 PropTypes를 TypeScript 타입으로 변환하는 유틸리티 타입입니다. | ```typescript<br>import { ExtractPropTypes } from 'vue';<br>interface Props { name: string; age: number; }<br>const props: ExtractPropTypes<typeof Props> = { name: 'John', age: 30 };<br>``` |
| ExtractPublicPropTypes<T>   | 공개된(propTypes에서 정의된) PropTypes를 TypeScript 타입으로 변환하는 유틸리티 타입입니다. | ```typescript<br>import { ExtractPublicPropTypes } from 'vue';<br>interface Props { name: string; }<br>const props: ExtractPublicPropTypes<typeof Props> = { name: 'Jane' };<br>``` |
| ComponentCustomProperties   | 커스텀 컴포넌트 속성을 정의할 때 사용하는 타입입니다.        | ```typescript<br>import { ComponentCustomProperties } from 'vue';<br>interface CustomProps { count: number; }<br>declare module '@vue/runtime-core' {<br>  interface ComponentCustomProperties {<br>    $custom: CustomProps;<br>  }<br>}<br>``` |
| ComponentCustomOptions      | 커스텀 옵션을 포함하는 컴포넌트 옵션 객체의 타입입니다.        | ```typescript<br>import { ComponentCustomOptions } from 'vue';<br>const customOptions: ComponentCustomOptions = {<br>  props: {<br>    message: String,<br>  },<br>  setup() {<br>    // setup logic<br>  }<br>}<br>``` |
| ComponentCustomProps        | 커스텀 컴포넌트 프로퍼티를 정의할 때 사용하는 타입입니다.        | ```typescript<br>import { ComponentCustomProps } from 'vue';<br>interface CustomProps {<br>  title: string;<br>}<br>export default defineComponent({<br>  props: {<br>    ...<br>  } as ComponentCustomProps,<br>  setup(props) {<br>    // setup logic<br>  }<br>})<br>``` |
| CSSProperties               | CSS 속성을 TypeScript로 타입 정의할 때 사용하는 타입입니다.     | ```typescript<br>import { CSSProperties } from 'vue';<br>const styles: CSSProperties = {<br>  color: 'red',<br>  fontSize: '16px',<br>};<br>``` |

<br>

#### 0-10-3-1. PropType<T>

- 프로퍼티(props)의 타입을 지정하는 TypeScript 유틸리티 타입입니다.

```typescript
import { PropType } from 'vue';
const prop: PropType<string> = String;
```

#### 0-10-3-2. MaybeRef<T>

- 값이 Ref인지 여부에 따라 타입을 선택하는 TypeScript 유틸리티 타입입니다.

```typescript
import { MaybeRef } from 'vue';
const value: MaybeRef<string> = ref('initial');
```

<br>

#### 0-10-3-3. MaybeRefOrGetter<T>

- 값이 Ref 또는 Getter인지 여부에 따라 타입을 선택하는 TypeScript 유틸리티 타입입니다.

```typescript
import { MaybeRefOrGetter } from 'vue';
const value: MaybeRefOrGetter<string> = ref('initial');
```

<br>

#### 0-10-3-4. ExtractPropTypes<T>

- 컴포넌트에서 추출한 PropTypes를 TypeScript 타입으로 변환하는 유틸리티 타입입니다.

```typescript
import { ExtractPropTypes } from 'vue';
interface Props {
  name: string;
  age: number;
}
const props: ExtractPropTypes<typeof Props> = { name: 'John', age: 30 };
```

<br>

#### 0-10-3-5. ExtractPublicPropTypes<T>

- 공개된(propTypes에서 정의된) PropTypes를 TypeScript 타입으로 변환하는 유틸리티 타입입니다.

```typescript
import { ExtractPublicPropTypes } from 'vue';
interface Props {
  name: string;
}
const props: ExtractPublicPropTypes<typeof Props> = { name: 'Jane' };
```

<br>

#### 0-10-3-6. ComponentCustomProperties

- 커스텀 컴포넌트 속성을 정의할 때 사용하는 타입입니다.

```typescript
import { ComponentCustomProperties } from 'vue';
interface CustomProps {
  count: number;
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $custom: CustomProps;
  }
}
```

<br>

#### 0-10-3-7. ComponentCustomOptions

- 커스텀 옵션을 포함하는 컴포넌트 옵션 객체의 타입입니다.

```typescript
import { ComponentCustomOptions } from 'vue';
const customOptions: ComponentCustomOptions = {
  props: {
    message: String,
  },
  setup() {
    // setup logic
  }
};
```

<br>

#### 0-10-3-8. ComponentCustomProps

- 커스텀 컴포넌트 프로퍼티를 정의할 때 사용하는 타입입니다.

```
typescript
import { ComponentCustomProps } from 'vue';
interface CustomProps {
  title: string;
}
export default defineComponent({
  props: {
    ...,
  } as ComponentCustomProps,
  setup(props) {
    // setup logic
  }
});
```

<br>

#### 0-10-3-9. CSSProperties

- CSS 속성을 TypeScript로 타입 정의할 때 사용하는 타입입니다.

```typescript
import { CSSProperties } from 'vue';
const styles: CSSProperties = {
  color: 'red',
  fontSize: '16px',
};
```

<br><br>

### 0-10-4. Custom Renderer

#### 0-10-4-1. createRenderer()

- createRenderer()는 사용자 정의 렌더러를 생성하는 메서드로, Vue의 가상 DOM을 실제 DOM이 아닌 다른 형식으로 렌더링하거나, 특정 플랫폼에 맞게 커스터마이징된 렌더링 엔진을 구축할 때 사용됩니다.


```typescript
import { createRenderer } from 'vue';

// 사용자 정의 렌더러 생성
const customRenderer = createRenderer({
  // render 메서드 재정의
  render(element, ctx) {
    // 사용자 정의 렌더링 로직 작성
    // element: 렌더링할 요소(VNode)
    // ctx: 렌더링 컨텍스트
    console.log('Custom render logic:', element);
    
    // 실제 렌더링 로직
    // 예시로 실제 DOM 대신 콘솔에 출력하는 렌더링
    console.log(`Rendering element: ${element.tag}`);
    
    // 실제 DOM 대신 콘솔에 VNode의 정보를 출력하는 예시
    console.log(`Props:`, element.props);
    console.log(`Children:`, element.children);
    
    // 실제 DOM 렌더링을 반환하거나 다른 작업 수행
    // 이 예시에서는 콘솔에 출력하고 실제 렌더링을 수행하지 않음
  },

  // 다른 사용자 정의 메서드들도 추가할 수 있음
  patchProp(el, key, prevValue, nextValue) {
    // 프로퍼티 패치 로직
    console.log(`Patch prop ${key} on element`, el);
    // 실제 DOM에 속성을 설정하는 로직 등을 작성할 수 있음
  },

  // 더 많은 사용자 정의 메서드들을 추가할 수 있음
});

// 사용자 정의 렌더러를 사용하여 앱 생성
const app = customRenderer.createApp({
  data() {
    return {
      message: 'Hello, Vue.js!',
    };
  },
  template: '<div>{{ message }}</div>',
});

// 앱을 실제 DOM에 마운트
app.mount('#app');
```


- createRenderer(): Vue에서 사용자 정의 렌더러를 만들 때 사용하는 메서드입니다. 이 메서드는 render, patchProp, 그리고 기타 사용자 정의 메서드들을 포함하는 객체를 인자로 받습니다.
- render: Vue의 render 메서드를 사용자 정의하여 요소(element)가 실제로 렌더링되기 전에 추가적인 작업을 할 수 있습니다. 
- patchProp: 요소의 속성이 변경될 때 호출되는 메서드로, Vue의 기본 동작을 사용자 정의할 수 있습니다.

<br><br>

### 0-10-5. Compile-Time Flags

| 요소                                     | 설명                                                           | 사용 문법 및 예시 코드                               |
|------------------------------------------|----------------------------------------------------------------|----------------------------------------------------|
| `__VUE_OPTIONS_API__`                    | Vue 3 옵션 API를 사용할지 여부를 설정하는 플래그입니다. 기본값은 `false`로 Composition API를 사용합니다. | ```javascript<br>// Vue 3에서 옵션 API 사용<br>__VUE_OPTIONS_API__ = true;<br>``` |
| `__VUE_PROD_DEVTOOLS__`                  | Vue 개발자 도구를 사용할 때의 설정입니다. `true`로 설정하면 개발자 도구의 기능이 활성화됩니다. | ```javascript<br>// 개발자 도구 사용 설정<br>__VUE_PROD_DEVTOOLS__ = true;<br>``` |
| `__VUE_PROD_HYDRATION_MISMATCH_DETAILS__` | 프로덕션 환경에서 하이드레이션 불일치 세부 정보를 포함할지 여부를 설정하는 플래그입니다. | ```javascript<br>// 하이드레이션 불일치 세부 정보 포함 설정<br>__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;<br>``` |
| Configuration Guides                     | Vue 컴파일 타임 설정을 구성하는 가이드 및 문서입니다.             | [Vue 공식 문서 - Configuration Reference](https://v3.vuejs.org/guide/migration/global-api.html#configuring-the-compiler) |

<br>

#### 0-10-5-1 `__VUE_OPTIONS_API__`

- Vue 3에서 옵션 API를 사용할지 여부를 결정하는 플래그입니다. Composition API를 사용하려면 false로 설정됩니다.

```javascript
// Vue 3에서 옵션 API 사용
__VUE_OPTIONS_API__ = true;
```

<br>

#### 0-10-5-2. `__VUE_PROD_DEVTOOLS__`

- 개발자 도구를 사용할 때의 설정을 결정하는 플래그입니다. true로 설정하면 Vue 개발자 도구가 활성화됩니다.

```javascript
// 개발자 도구 사용 설정
__VUE_PROD_DEVTOOLS__ = true;
```

<br>

#### 0-10-5-3. `__VUE_PROD_HYDRATION_MISMATCH_DETAILS__`

- 프로덕션 환경에서 하이드레이션 불일치 세부 정보를 포함할지 여부를 결정하는 플래그입니다.

```javascript
// 하이드레이션 불일치 세부 정보 포함 설정
__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;
```

<br>

#### 0-10-5-4. Configuration Guides

- Vue 컴파일 타임 설정을 구성하는 가이드 및 문서로, Vue 애플리케이션을 설정하고 컴파일하는 방법에 대한 전반적인 지침을 제공합니다.

<br><br><br>

## 0-11. Vue 애플리케이션 만들기​

**전제 조건**

```
- 명령줄에 대한 친숙함이 있어야 함
- Node.js 버전 18.3 이상 설치되어 있어야 함
- npm 외의 패키지 관리자는 별도로 설치해야 함
```

- 이 섹션에서는 로컬 컴퓨터에서 Vue 싱글 페이지 애플리케이션을 스캐폴드하는 방법을 소개합니다. 생성된 프로젝트는 Vite를 기반으로 빌드 설정을 사용하고 Vue 싱글 파일 컴포넌트(SFC)를 사용할 수 있도록 합니다.

- 최신 버전의 Node.js가 설치되어 있고 현재 작업 디렉터리가 프로젝트를 만들려는 디렉터리인지 확인하세요. 명령줄에서 다음 명령을 실행합니다.

<br><br>

### 0-11-1. Vue 애플리케이션 생성 

**npm의 경우**

```sh
$ npm create vue@latest
```

<br>

**pnpm의 경우**

```sh
$ pnpm create vue@latest
```

<br>

**yarn의 경우**

```sh
$ yarn create vue@latest
```

<br>

**bun의 경우**

```sh
$ bun create vue@latest
```

위 명령은 공식 Vue 프로젝트 스캐폴딩 도구인 create-vue를 설치 및 실행합니다. TypeScript 및 테스트 지원과 같은 몇 가지 선택적 기능에 대한 프롬프트가 아래와 같이 표시됩니다. 표시된 선택적 기능을 각 프로젝트의 성격에 맞게 선택하시면 됩니다.

```sh
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

각 옵션에 대해 확신이 서지 않는다면 일단 엔터키를 눌러 No를 선택하면 됩니다. 프로젝트가 생성되면 지침에 따라 종속 요소를 설치하고 개발 서버를 시작합니다.

<br><br>

### 0-11-2. Vue 애플리케이션 실행

**npm의 경우**

```sh
$ cd <your-project-name>
$ npm install
$ npm run dev
```

<br>

**pnpm의 경우**

```sh
$ cd <your-project-name>
$ pnpm install
$ pnpm run dev
```

<br>

**yarn의 경우**

```sh
$ cd <your-project-name>
$ yarn
$ yarn dev
```

<br>

**bun의 경우**

```sh
$ cd <your-project-name>
$ bun install
$ bun run dev
```

<br>

위와 같이 입력하면, 첫 번째 Vue 프로젝트가 실행 중일 것입니다! 생성된 프로젝트의 예제 컴포넌트는 Options API 대신 `<script setup>`과 Composition API를 사용하여 작성되었음을 유의하시기 바라며, 다음은 몇 가지 추가 팁입니다:

권장 IDE 설정은 Visual Studio Code + Volar extension입니다. 다른 편집기를 사용하는 경우 IDE 지원 섹션을 확인하세요.
백엔드 프레임워크와의 통합을 포함한 자세한 툴링 내용은 툴링 가이드에서 확인할 수 있습니다.
기본 빌드 도구인 Vite에 대해 자세히 알아보려면 Vite 문서를 확인하세요.
타입스크립트를 사용하기로 선택한 경우 타입스크립트 사용 가이드를 확인하세요.
앱을 프로덕션으로 출시할 준비가 되면 다음을 실행하세요

<br><br>

### 0-11-3. Vue 애플리케이션 빌드

```sh
$ npm run build
```

<br>


**pnpm의 경우**

```sh
$ pnpm run build
```

<br>

**yarn의 경우**

```sh
$ yarn build
```

<br>

**bun의 경우**

```sh
$ bun run build
```


이렇게 하면 프로젝트의 ./dist 디렉터리에 프로덕션에 사용할 수 있는 앱 빌드가 생성됩니다. 프로덕션 배포 가이드(/guide/best-practices/production-deployment)를 확인하여 앱을 프로덕션에 배포하는 방법에 대해 자세히 알아보세요.

<br><br><br>

### 0-11-2. CDN에서 Vue 사용​

스크립트 태그를 통해 CDN에서 직접 Vue를 사용할 수 있습니다:

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

여기서는 unpkg를 사용하고 있지만, jsdelivr 또는 cdnjs와 같이 npm 패키지를 제공하는 모든 CDN을 사용할 수도 있습니다. 물론 이 파일을 다운로드하여 직접 제공할 수도 있습니다.

CDN에서 Vue를 사용하는 경우 "빌드 단계"가 필요하지 않습니다. 따라서 설정이 훨씬 간단해지며 정적 HTML을 향상시키거나 백엔드 프레임워크와 통합하는 데 적합합니다. 하지만 싱글 파일 컴포넌트(SFC) 구문은 사용할 수 없습니다.

<br><br>

#### 0-11-2-1. 글로벌 빌드 사용​

위의 링크는 Vue의 _전역 빌드(global build)_를 불러옵니다. 이 빌드에서는 모든 최상위 API가 전역 Vue 객체의 속성으로 노출됩니다. 전역 빌드를 사용한 전체 예제는 다음과 같습니다:

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('Hello vue!')
      return {
        message
      }
    }
  }).mount('#app')
</script>
```


```TIP
가이드 전체에서 Composition API에 대한 많은 예제는 빌드 도구가 필요한 <script setup> 구문을 사용할 것입니다. 빌드 단계 없이 Composition API를 사용하려는 경우 setup() 옵션의 사용법을 참조하십시오.
```

<br><br>

### 0-11-2-2. ES 모듈 빌드 사용​

이 문서의 나머지 부분에서는 주로 ES 모듈 구문을 사용할 것입니다. 현재 대부분의 최신 브라우저는 ES 모듈을 기본적으로 지원하므로 이와 같은 기본 ES 모듈을 통해 CDN에서 Vue를 사용할 수 있습니다:

```html
<div id="app">{{ message }}</div>

<script type="module">
  import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

  createApp({
    setup() {
      const message = ref('Hello Vue!')
      return {
        message
      }
    }
  }).mount('#app')
</script>
<script type="module">을 사용하고 있으며, 가져온 CDN URL이 대신 Vue의 ES 모듈 빌드를 가리키고 있음을 알 수 있습니다.
```

<br><br>

### 0-11-2-3. 임포트맵 활성화​

위의 예에서는 전체 CDN URL에서 임포트하고 있지만 나머지 문서에서는 다음과 같은 코드를 볼 수 있습니다:

```js
import { createApp } from 'vue'
```

임포트 맵를 사용하여 브라우저에 vue를 어디에서 가져와야 할지 알려줄 수 있습니다:

```html
<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
</script>

<div id="app">{{ message }}</div>

<script type="module">
  import { createApp, ref } from 'vue'

  createApp({
    setup() {
      const message = ref('Hello Vue!')
      return {
        message
      }
    }
  }).mount('#app')
</script>
```

임포트 맵에 다른 종속성에 대한 항목을 추가할 수도 있지만 사용하려는 라이브러리의 ES 모듈 버전을 가리키는지 확인해야 합니다.

```TIP
임포트 맵 브라우저 지원 임포트 맵은 비교적 최신의 브라우저 기능입니다. 지원 범위 내에서 브라우저를 사용하는 것을 확인하십시오. 특히, Safari 16.4 이상에서만 지원됩니다.
```

<br><br>

### 0-11-2-4. 운영 환경에서 사용

지금까지의 예제는 Vue의 개발 빌드를 사용한 것으로, 프로덕션 환경에서 CDN의 Vue를 사용하려면 프로덕션 배포 가이드를 확인하시기 바랍니다.

빌드 시스템 없이 Vue를 사용할 수는 있지만, 고려할 수 있는 대안적 접근 방법은 과거에 jquery/jquery가 사용되었거나 현재 alpinejs/alpine이 사용될 수 있는 컨텍스트에 더 적합할 수 있는 vuejs/petite-vue를 사용하는 것입니다.

<br><br>

### 0-11-2-5. 모듈 분할​

가이드를 자세히 살펴볼수록 코드를 관리하기 쉽도록 별도의 JavaScript 파일로 분할해야 할 수도 있습니다. 예를 들어

```html
<!-- index.html -->
<div id="app"></div>

<script type="module">
  import { createApp } from 'vue'
  import MyComponent from './my-component.js'

  createApp(MyComponent).mount('#app')
</script>
```

<br>

```js
// my-component.js
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `<div>Count is: {{ count }}</div>`
}
```

위의 index.html 파일을 직접 브라우저에서 열면 ES 모듈이 file:// 프로토콜 위에서 작동하지 않아 오류가 발생합니다. 로컬 파일을 열 때 브라우저가 사용하는 프로토콜이기 때문입니다.

보안상의 이유로 ES 모듈은 웹 페이지를 열 때 브라우저가 사용하는 http:// 프로토콜에서만 작동할 수 있습니다. 로컬 컴퓨터에서 ES 모듈이 작동하려면 로컬 HTTP 서버를 사용하여 index.html을 http:// 프로토콜로 서비스해야 합니다.

로컬 HTTP 서버를 시작하려면 먼저 Node.js가 설치되어 있는지 확인한 다음 명령줄에서 HTML 파일이 있는 동일한 디렉토리에서 npx serve를 실행하십시오. 또는 올바른 MIME 유형으로 정적 파일을 서비스할 수 있는 다른 HTTP 서버를 사용할 수도 있습니다.

가져온 컴포넌트의 템플릿이 JavaScript 문자열로 인라인으로 포함되어 있는 것을 알아챘을 것입니다. VS Code를 사용하는 경우 es6-string-html 확장을 설치하고 문자열을 /*html*/ 주석으로 접두사를 붙여 문법 강조 효과를 얻을 수 있습니다.

<br><br><br>






