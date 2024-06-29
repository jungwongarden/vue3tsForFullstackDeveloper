**Project setup**

```
npm install
```

<br>

**Compiles and hot-reloads for development**

```
npm run serve
```

<br>

**Compiles and minifies for production**

```
npm run build
```

<br>

**Run your unit tests**

```
npm run test:unit
```

<br>

**Lints and fixes files**

```
npm run lint
```

<br>

**Customize configuration**

See [Configuration Reference](https://cli.vuejs.org/config/).

<br><br>

# 4. Vuex와 Vue 3의 프로그래밍 패턴

## 4-1. Flux 패턴

- Flux 패턴은 Facebook에서 개발한 애플리케이션 아키텍처 패턴으로, 단방향 데이터 흐름을 강조합니다. Flux는 다음과 같은 네 가지 주요 요소로 구성됩니다.

1. Action: 상태 변경을 설명하는 객체.
2. Dispatcher: 액션을 받아서 등록된 콜백으로 전달.
3. Store: 상태와 상태 변경 로직을 포함.
4. View: 상태를 표시하고 사용자 입력을 액션으로 변환.

<br>

### 4-1-1. Action

```javascript
// actions.js
export const updateMessage = (newMessage) => ({
  type: 'UPDATE_MESSAGE',
  payload: newMessage
});
```

<br>

### 4-1-2. Dispatcher

```javascript
// dispatcher.js
import { Dispatcher } from 'flux';

const dispatcher = new Dispatcher();
export default dispatcher;
```

<br>

### 4-1-3. Store

Store는 Vuex의 중심 개념으로, 애플리케이션의 전역 상태를 관리하는 객체입니다. Store는 다음과 같은 속성을 포함합니다.

1. State: 애플리케이션의 상태를 저장합니다.
2. Getters: 상태를 기반으로 계산된 값을 가져옵니다.
3. Mutations: 상태를 변경하는 동기적인 메서드입니다.
4. Actions: 비동기 작업을 포함할 수 있는 메서드입니다.
5. Modules: 상태를 모듈로 분리하여 관리할 수 있습니다.

```javascript
// store.js
import dispatcher from './dispatcher.js';
import { EventEmitter } from 'events';

class Store extends EventEmitter {
  constructor() {
    super();
    this.state = {
      message: 'Hello Vue!'
    };

    dispatcher.register(this.handleActions.bind(this));
  }

  handleActions(action) {
    switch(action.type) {
      case 'UPDATE_MESSAGE':
        this.state.message = action.payload;
        this.emit('change');
        break;
      default:
        break;
    }
  }

  getState() {
    return this.state;
  }
}

const store = new Store();
export default store;
```

<br>

### 4-1-4. View

```html
<!-- view.html -->
<template>
  <div>
    <h1>{{ message }}</h1>
    <input v-model="newMessage" @input="handleInput">
    <button @click="handleSubmit">Update Message</button>
  </div>
</template>
```

<br>

### 4-1-5. Controller

```javascript
// controller.js
import store from './store.js';
import { updateMessage } from './actions.js';
import dispatcher from './dispatcher.js';

export default {
  data() {
    return {
      newMessage: ''
    };
  },
  computed: {
    message() {
      return store.getState().message;
    }
  },
  methods: {
    handleInput(event) {
      this.newMessage = event.target.value;
    },
    handleSubmit() {
      const action = updateMessage(this.newMessage);
      dispatcher.dispatch(action);
    }
  },
  created() {
    store.on('change', () => {
      this.$
      forceUpdate();
    });
  }
};
```

<br>

### 4-1-6. App Initialization

```javascript
// main.js
import { createApp } from 'vue';
import View from './view.html';
import Controller from './controller.js';

const app = createApp({
  ...View,
  ...Controller
});
app.mount('#app');
```

<br><br>

## 4-2. State(상태)

- 상태(State)는 애플리케이션의 전역 상태를 저장합니다.
- 상태(State)는 Vue 컴포넌트에서 this.$store.state를 통해 접근할 수 있습니다.
- 상태(State)는 애플리케이션의 데이터로, 컴포넌트의 data 옵션을 통해 정의됩니다. Vue의 반응형 시스템은 상태 변경을 감지하여 DOM을 업데이트합니다.
- 상태(State)는 애플리케이션의 데이터를 관리하는 중심 역할을 합니다. Vue.js에서는 상태를 관리하기 위해 reactive 객체나 ref를 사용합니다.

<br>

### 4-2-1. reactive 객체

- reactive 객체는 객체 또는 배열을 반응형으로 만들어주는 Vue의 내장 함수입니다. 이 객체 내의 속성이 변경될 때 Vue는 자동으로 UI를 업데이트합니다.

```typescript
//components/HelloVue.ts
import { reactive } from 'vue';

const state = reactive({
  count: 0,
  message: 'Hello Vue!'
});
```

- reactive 함수를 사용하여 상태 객체를 생성합니다.
- 객체의 속성이 변경될 때마다 Vue가 자동으로 반응하여 UI를 업데이트합니다.

```vue
<!-- components/ReactiveComponent.vue -->
<template>
  <div>
    <p>Count: {{ state.count }}</p>
    <p>Message: {{ state.message }}</p>
    <button @click="increment">Increment</button>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      count: 0,
      message: 'Hello Vue!'
    });

    const increment = () => {
      state.count++;
    };

    const changeMessage = () => {
      state.message = 'Message changed!';
    };

    return {
      state,
      increment,
      changeMessage
    };
  }
});
</script>
```

<br>

### 4-2-2. ref

- ref는 기본 자료형의 값을 감싸는 래퍼(wrapper) 객체를 생성합니다. 이 객체를 통해 기본 자료형 값을 반응형으로 만들 수 있습니다.

```typescript
//components/RefVue.ts
import { ref } from 'vue';

const count = ref(0);
const message = ref('Hello Vue!');
```

- ref 함수를 사용하여 기본 자료형 값을 반응형으로 만듭니다.
- 이 객체를 직접 변경하거나 .value 속성을 통해 접근할 수 있습니다.

```vue
<!-- components/RefComponent.vue -->
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Message: {{ message }}</p>
    <button @click="increment">Increment</button>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const count = ref(0);
    const message = ref('Hello Vue!');

    const increment = () => {
      count.value++;
    };

    const changeMessage = () => {
      message.value = 'Message changed!';
    };

    return {
      count,
      message,
      increment,
      changeMessage
    };
  }
});
</script>
```

- 이 방식으로 reactive 객체와 ref를 사용하여 Vue.js 애플리케이션의 상태를 관리할 수 있습니다. 
- 각 상태의 변경은 Vue의 반응성 시스템에 의해 자동으로 감지되어 UI를 업데이트합니다.

<br><br>

### 4-2-3. Vuex를 이용한 상태(State) 관리

#### 4-2-3-1. Vuex Store 생성

- 먼저 Vuex Store를 생성합니다. Store는 애플리케이션의 상태를 중앙 집중식으로 관리하는 곳입니다.

**store/index.ts**

```typescript
import { createStore, Store as VuexStore, CommitOptions, DispatchOptions, Commit } from 'vuex';

// RootState 인터페이스 정의
export interface RootState {
  count: number;
  messages: { [id: number]: string }; // messages 필드 추가
  firstName: string;
  lastName: string;
}

// 기본 상태 값
const rootState: RootState = {
  count: 0,
  messages: {},
  firstName: "",
  lastName: ""
};

// State 인터페이스 정의
export interface State {
  count: number;
  messages: { [id: number]: string }; // messages 필드 추가
  firstName: string;
  lastName: string;
}

// 기본 상태 값
const state: State = {
  count: 0,
  messages: {},
  firstName: "",
  lastName: ""
};

// 뮤테이션 타입 정의
export type Mutations<S = State> = {
  increment(state: S): void;
  setData(state: S, data: any): void;
  setError(state: S, error: any): void;
};

// 뮤테이션 정의
const mutations: Mutations = {
  increment(state) {
    state.count++;
  },
  setData(state, data) {
    // 데이터 처리 로직을 여기에 추가하세요.
  },
  setError(state, error) {
    // 에러 처리 로직을 여기에 추가하세요.
  }
};

// 액션 타입 정의
export type Actions = {
  incrementAsync({ commit }: { commit: Commit }, payload?: any): void;
  fetchData({ commit }: { commit: Commit }): void;
};

// 액션 정의
const actions: Actions = {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('increment');
    }, 1000);
  },
  fetchData({ commit }) {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        commit('setData', data);
      })
      .catch(error => {
        commit('setError', error);
      });
  }
};

// 게터 정의
const getters = {
  doubleCount(state: State) {
    return state.count * 2;
  }
};

// 스토어 생성
const store = createStore<State>({
  state,
  mutations,
  actions,
  getters
});

// 타입 추론을 위한 Vuex 스토어 타입 정의
export type Store = Omit<
  VuexStore<State>,
  'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1],
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

export default store;
```

<br>

#### 4-2-3-2. Vue 인스턴스에 Store 주입

- Vue 인스턴스에 Vuex Store를 주입하여 컴포넌트에서 사용할 수 있도록 합니다.

**main.ts**

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

createApp(App).use(store).mount('#app');
```

<br>

#### 4-2-3-3. 컴포넌트에서 Store 상태에 접근하는 방법

- 컴포넌트에서 Store에 접근하고 상태를 변경하기 위해 mapState 헬퍼 함수나 객체 전개 연산자를 사용할 수 있습니다.

**App.vue**

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  computed: {
    ...mapState(['count', 'doubleCount'])
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    }
  }
});
</script>
```

- 위 코드의 mapState 헬퍼 함수는 Vuex Store의 상태를 컴포넌트의 계산된 속성(computed property)으로 매핑합니다. 
- this.$store를 통해 Store에 접근하여 commit 메소드를 사용하여 변경할 수 있습니다.
- Vuex를 사용하면 Vue.js 애플리케이션에서 상태를 효과적으로 관리할 수 있습으며, 상태를 중앙 집중식으로 관리하면 컴포넌트 간의 상태 공유와 상태 변경이 용이해지므로 애플리케이션의 복잡성을 줄일 수 있습니다.


<br><br>

## 4-3. Getters(게터)

- Getters(게터)는 Vuex를 통해 상태를 조작하고 반환하는 함수입니다. 
- Getters(게터)는 상태를 기반으로 계산된 값을 가져옵니다.
- Getters(게터)는 컴포넌트에서 this.$store.getters를 통해 접근할 수 있습니다.
- Vuex의 경우, 게터(Getter)는 상태에서 값을 도출하는 역할을 합니다. 컴포넌트에서 상태를 쉽게 접근하고 계산할 수 있도록 합니다.
- Getters를 사용하면 상태를 가공하거나 필터링하여 컴포넌트에서 사용하기 편리한 형태로 변환할 수 있습니다. 

### 4-3-1. 기본 Getters

- 기본적인 형태의 Getters는 Vuex Store에 정의되어 있는 상태(state)에 접근하여 가공된 값을 반환하는 함수입니다.

#### 4-3-1-1. 사용 문법:

```typescript
import { GetterTree } from 'vuex';

export const getters: GetterTree<State, RootState> = {
  doubleCount(state) {
    return state.count * 2;
  }
};
```

- GetterTree 타입을 사용하여 Getters를 정의합니다.
- 상태(state)에 접근하여 가공된 값을 반환하는 함수를 작성합니다.

**예시 코드**

```typescript
// store/getters.ts
import { GetterTree } from 'vuex';
import { RootState } from './index';

export const getters: GetterTree<RootState, RootState> = {
  doubleCount(state) {
    return state.count * 2;
  }
};
```

<br>

**예시 코드2**

```typescript
// store/getters2.ts
import { GetterTree } from 'vuex';
import { RootState } from './index';

export const getters: GetterTree<RootState, RootState> = {
  doubleCount(state) {
    return state.count * 2;
  },
  fullName(state) {
    return `${state.firstName} ${state.lastName}`;
  }
};
```

<br><br>

### 4-3-2. 컴퓨티드 Getters

- 컴퓨티드 Getters는 Vuex Store의 상태를 기반으로 다른 값들을 계산하는 함수입니다. 컴퓨티드 Getters는 Vuex Store의 상태를 변경하지 않고 새로운 값을 반환합니다.

#### 4-3-2-1. 사용 문법

```typescript
import { GetterTree } from 'vuex';

export const getters: GetterTree<State, RootState> = {
  fullName(state) {
    return `${state.firstName} ${state.lastName}`;
  }
};
```

- 상태(state)에 접근하여 필요한 계산을 수행하고 새로운 값을 반환하는 함수를 작성합니다.


**예시 코드**

```typescript
// store/getters3.ts
import { GetterTree } from 'vuex';
import { RootState } from './index';

export const getters: GetterTree<RootState, RootState> = {
  fullName(state) {
    return `${state.firstName} ${state.lastName}`;
  }
};
```

<br><br>

### 4-3-3. 메소드 사용

- Getters를 Vuex Store에서 사용하려면 getters 속성을 통해 등록해야 합니다. 이후 컴포넌트에서는 $store.getters를 통해 Getters에 접근할 수 있습니다.

```vue
<!-- components/MethodComponent.vue -->
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <p>Full Name: {{ fullName }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      count: store.state.count,
      doubleCount: store.getters.doubleCount,
      fullName: store.getters.fullName
    };
  }
});
</script>
```

- 위 코드는 store.getters.doubleCount 및 store.getters.fullName은 Vuex Store에서 정의된 Getters에 접근합니다.
- 컴포넌트의 계산된 속성(computed property)으로 이 값을 사용하여 화면에 표시할 수 있습니다.
- Vuex의 Getters를 사용하면 상태를 가공하거나 조작하여 컴포넌트에서 사용할 수 있는 편리한 형태로 변환할 수 있습니다. 
- Getters를 사용하면 상태에 대한 로직을 중앙 집중식으로 관리하여 코드의 유지보수성을 높일 수 있습니다.

<br>

#### 4-3-3-1. 게터 내에서 다른 게터의 사용

- 게터 내에서 다른 게터를 사용할 수 있습니다. 이렇게 하면 코드의 재사용성이 높아지고 유지 보수가 용이해집니다.

```typescript
// store/getters4.ts
import { GetterTree } from 'vuex';
import { RootState } from './index';

export const getters: GetterTree<RootState, RootState> = {
  doubleCount(state) {
    return state.count * 2;
  },
  fullName(state, getters) {
    return `${getters.firstName} ${getters.lastName}`;
  },
  firstName(state) {
    return state.firstName;
  },
  lastName(state) {
    return state.lastName;
  }
};
```

<br>

#### 4-3-3-2. 컴포넌트 내에서 게터의 사용

- 컴포넌트에서 게터에 접근하기 위해 useStore 훅을 사용하여 Vuex Store를 가져온 다음 $store.getters를 통해 해당 게터에 접근합니다.

```vue
<!-- components/GetterUseComponent.vue -->
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <p>Full Name: {{ fullName }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      count: store.state.count,
      doubleCount: store.getters.doubleCount,
      fullName: store.getters.fullName
    };
  }
});
</script>
```

<br>

#### 4-3-3-3. mapGetters 헬퍼 함수를 이용한 방법

- mapGetters 헬퍼 함수를 사용하면 컴포넌트 내에서 게터를 훨씬 더 간결하게 사용할 수 있습니다.

```vue
<!-- components/MapGettersComponent.vue -->
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <p>Full Name: {{ fullName }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  computed: {
    ...mapGetters(['doubleCount', 'fullName']),
    count() {
      return this.$store.state.count;
    }
  }
});
</script>
```

- 위 코드는 mapGetters 헬퍼 함수를 사용하여 Vuex Store에서 정의된 게터를 컴포넌트에 매핑하였습니다. 
- Vuex Store에서 정의된 게터를 컴포넌트 내에서 직접 사용할 수 있습니다.


<br><br>

## 4-4. Mutation(변이)

- Mutation은 상태를 변경하는 메서드로서 동기적으로 실행됩니다.
- Mutation은 this.$store.commit을 통해 호출할 수 있습니다.
- 변이(Mutation)는 Vuex 상태를 변경하는 메서드로 mutations 입니다. 변이는 동기적으로 상태를 변경합니다.
- Vuex Store의 Mutation(변이)는 상태(state)를 변경하는 함수입니다. 
- Mutation은 Store의 상태를 변경하는 유일한 방법으로, 컴포넌트에서는 Mutation을 호출하여 상태를 변경합니다. 

<br>

### 4-4-1. 기본 Mutation

- 기본적인 형태의 Mutation은 Vuex Store에 정의되어 있는 상태를 직접 변경하는 함수입니다.

#### 4-4-1-1. 사용 문법

```typescript
import { MutationTree } from 'vuex';

export const mutations: MutationTree<State> = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  }
};
```

- MutationTree 타입을 사용하여 Mutations를 정의합니다.
- 상태(state)를 변경하는 함수를 작성합니다.

**예시 코드**

```typescript
// store/mutations.ts
import { MutationTree } from 'vuex';
import { State } from './index';

export const mutations: MutationTree<State> = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  }
};
```

<br>

**예시 코드2**

```typescript
// store/mutations2.ts
import { MutationTree } from 'vuex';
import { State } from './index';

export const mutations: MutationTree<State> = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
  updateMessage(state, payload: string) {
    state.message = payload;
  }
};
```

<br><br>


### 4-4-2. Payload Mutation

- Payload Mutation은 추가적인 데이터(payload)를 전달받아 상태를 변경하는 함수입니다.

#### 4-4-2-1. 사용 문법

```typescript
import { MutationTree } from 'vuex';

export const mutations: MutationTree<State> = {
  updateMessage(state, payload: string) {
    state.message = payload;
  }
};
```

- Mutation 함수는 두 번째 매개변수로 payload를 받아 상태를 변경합니다.

**예시 코드**

```typescript
// store/mutations3.ts
import { MutationTree } from 'vuex';
import { State } from './index';

export const mutations: MutationTree<State> = {
  updateMessage(state, payload: string) {
    state.message = payload;
  }
};
```

<br><br>

### 4-4-3. 메소드 사용

- Mutation을 Vuex Store에 등록하고 컴포넌트에서 사용하기 위해 $store.commit 메소드를 사용합니다.

```vue
<!-- components/MethodUseComponent.vue -->
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Message: {{ message }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const increment = () => {
      store.commit('increment');
    };

    const decrement = () => {
      store.commit('decrement');
    };

    const updateMessage = () => {
      store.commit('updateMessage', 'New message');
    };

    return {
      count: store.state.count,
      message: store.state.message,
      increment,
      decrement,
      updateMessage
    };
  }
});
</script>
```

- 위 코드는 store.commit 메소드를 사용하여 Mutation을 호출하여 상태를 변경합니다. 
- Mutation은 Vuex Store에 등록되어 있어야 하며, 필요한 경우 Payload를 전달할 수 있습니다.
- Vuex의 Mutation을 사용하면 상태를 변경하는 로직을 중앙 집중식으로 관리하여 코드의 유지보수성을 높일 수 있습니다. 
- Mutation은 상태를 직접 변경하기 때문에 상태의 변화를 추적하기 쉽고 예측 가능한 방식으로 관리할 수 있습니다.

<br>

#### 4-4-3-1. Mutation 호출

- Mutation을 호출하기 위해서는 Vuex Store에 등록된 Mutation을 commit 메소드를 통해 호출합니다.

```vue
<!-- components/MutationCallComponent.vue -->
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Message: {{ message }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const increment = () => {
      store.commit('increment');
    };

    const decrement = () => {
      store.commit('decrement');
    };

    const updateMessage = () => {
      store.commit('updateMessage', 'New message');
    };

    return {
      count: store.state.count,
      message: store.state.message,
      increment,
      decrement,
      updateMessage
    };
  }
});
</script>
```

<br>

#### 4-4-3-2. mapMutations 헬퍼 함수를 사용하여 Mutation 호출

- mapMutations 헬퍼 함수를 사용하면 Vuex Store에 등록된 Mutation을 컴포넌트 내에서 더욱 간편하게 사용할 수 있습니다.

```vue
<!-- components/MapMutationsUseComponent.vue -->
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Message: {{ message }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { mapMutations } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const { increment, decrement, updateMessage } = mapMutations({
      increment: 'increment',
      decrement: 'decrement',
      updateMessage: 'updateMessage'
    });

    return {
      count: store.state.count,
      message: store.state.message,
      increment,
      decrement,
      updateMessage
    };
  }
});
</script>
```

<br>

#### 4-4-3-3. Object 형태의 payload를 인자로 받는 Mutation 함수 선언/호출

- Mutation 함수는 두 번째 매개변수로 payload를 받아 상태를 변경할 수 있습니다.

```typescript
// store/mutations4.ts
import { MutationTree } from 'vuex';
import { State } from './index';

export const mutations: MutationTree<State> = {
  updateMessage(state, payload: { id: number, message: string }) {
    const { id, message } = payload;
    state.messages[id] = message;
  }
};
```

- Mutation을 호출할 때에는 payload를 전달합니다.

```vue
<!-- components/ObjectMutaionCallComponent.vue -->
<template>
  <div>
    <input type="text" v-model="newMessage" />
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const newMessage = ref('');

    const updateMessage = () => {
      store.commit('updateMessage', { id: 1, message: newMessage.value });
      newMessage.value = ''; // Clear the input field after updating message
    };

    return {
      newMessage,
      updateMessage
    };
  }
});
</script>
```

<br>

### 4-4-4. 변이 내에서 비동기 처리

- 변이 내에서 비동기 작업을 수행할 수도 있지만, 일반적으로 비동기 작업은 액션(Action)을 통해 처리하는 것이 좋습니다.
- 변이(Mutation) 내에서 직접적으로 비동기 작업을 수행하는 것은 권장되지 않습니다. 
- Vuex의 변이는 동기적으로 동작해야 하며, 상태 변화를 추적하고 디버깅하기 위한 목적으로만 사용해야 합니다.
- 비동기 작업은 주로 액션(Action)을 사용하여 수행합니다. 
- 액션은 변이와는 달리 비동기 처리를 지원하며, 비즈니스 로직을 담당하고 변이를 호출하여 상태를 변경합니다.

```typescript
// store/actions.ts
import { ActionTree } from 'vuex';
import { State, RootState } from './index';

export const actions: ActionTree<State, RootState> = {
  fetchData({ commit }) {
    commit('setLoading', true);
    // 비동기 작업 수행 (예: API 호출)
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // 데이터 가져오기 성공 시 상태 변경
        commit('setData', data);
        commit('setLoading', false);
      })
      .catch(error => {
        // 오류 처리
        commit('setError', error);
        commit('setLoading', false);
      });
  }
};
```

- 컴포넌트에서 액션을 호출하여 비동기 작업을 시작합니다.

```vue
<!-- components/FetchDataComponent.vue -->
<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const fetchData = () => {
      store.dispatch('fetchData');
    };

    return {
      fetchData
    };
  }
});
</script>
```

위 코드는 변이 내에서 비동기 작업을 처리하는 대신 액션을 통해 비동기 작업을 수행할 수 있습니다. 또한, 코드가 더 깨끗해지고 유지보수가 용이해집니다.


<br><br>

## 4-5. Actions(액션)

- Actions(액션)은 비동기 작업을 포함할 수 있는 메서드입니다.
- Actions(액션)은 this.$store.dispatch를 통해 호출할 수 있습니다.
- Actions(액션)은 비동기 작업을 수행할 수 있는 Vuex 메서드로 actions입니다. 액션은 변이를 커밋하여 상태를 변경합니다.
- Vuex Store의 Actions(액션)은 비동기적인 작업을 수행하는 함수입니다. 
- Actions(액션)은 주로 비즈니스 로직이나 비동기 작업을 처리하고, 필요할 때 Mutation을 호출하여 상태를 변경합니다. 

<br>

### 4-5-1. 기본 액션

- 기본적인 형태의 액션은 Vuex Store에 정의되어 있는 상태를 변경하는 비동기 함수입니다.

#### 4-5-1-1. 사용 문법:

```typescript
import { ActionTree } from 'vuex';

export const actions: ActionTree<State, RootState> = {
  fetchData({ commit }) {
    // 비동기 작업 수행
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // 데이터 가져오기 성공 시 상태 변경
        commit('setData', data);
      })
      .catch(error => {
        // 오류 처리
        commit('setError', error);
      });
  }
};
```

- ActionTree 타입을 사용하여 Actions를 정의합니다.
- 비동기 작업을 수행하고 필요한 경우 Mutation을 호출하여 상태를 변경합니다.

**예시 코드**

```typescript
// store/actions1.ts
import { ActionTree } from 'vuex';
import { State, RootState } from './index';

export const actions: ActionTree<State, RootState> = {
  fetchData({ commit }) {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        commit('setData', data);
      })
      .catch(error => {
        commit('setError', error);
      });
  }
};
```

<br>

**예시 코드2**

```typescript
// store/actions2.ts
import { ActionTree } from 'vuex';
import { State, RootState } from './index';

export const actions: ActionTree<State, RootState> = {
  fetchData({ commit }) {
    // 비동기 작업 수행
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // 데이터 가져오기 성공 시 상태 변경
        commit('setData', data);
      })
      .catch(error => {
        // 오류 처리
        commit('setError', error);
      });
  }
};
```

<br><br>

### 4-5-2. Payload 액션

- Payload 액션은 추가적인 데이터(payload)를 전달받아 비동기 작업을 수행하는 함수입니다.

#### 4-5-2-1. 사용 문법

```typescript
import { ActionTree } from 'vuex';

export const actions: ActionTree<State, RootState> = {
  fetchData({ commit }, payload: string) {
    // payload를 사용하여 비동기 작업 수행
    fetch(`https://api.example.com/${payload}`)
      .then(response => response.json())
      .then(data => {
        commit('setData', data);
      })
      .catch(error => {
        commit('setError', error);
      });
  }
};
```

- 액션 함수는 두 번째 매개변수로 payload를 받아 비동기 작업을 수행합니다.

**예시 코드**

```typescript
// store/actions3.ts
import { ActionTree } from 'vuex';
import { State, RootState } from './index';

export const actions: ActionTree<State, RootState> = {
  fetchData({ commit }, payload: string) {
    fetch(`https://api.example.com/${payload}`)
      .then(response => response.json())
      .then(data => {
        commit('setData', data);
      })
      .catch(error => {
        commit('setError', error);
      });
  }
};
```

<br><br>

### 4-5-3. 메소드 사용

- 액션을 호출하기 위해 Vuex Store의 dispatch 메소드를 사용합니다.

**예시 코드**

```vue
<!-- components/UseStoreFetchDataComponent.vue -->
<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const fetchData = () => {
      store.dispatch('fetchData');
    };

    return {
      fetchData
    };
  }
});
</script>
```

- 위 코드는 store.dispatch 메소드를 사용하여 액션을 호출하여 비동기 작업을 시작합니다.
- 액션은 주로 비동기 작업을 처리하거나 비즈니스 로직을 담당합니다. 
- 비동기 작업이 필요한 경우 액션을 통해 비동기 작업을 수행하고, 필요할 때 Mutation을 호출하여 상태를 변경하면 코드가 더 깨끗해지고 유지보수가 용이해집니다.

<br>

#### 4-5-3-1. 기본적인 액션 호출

- 액션을 호출하기 위해 Vuex Store의 dispatch 메소드를 사용합니다.

```vue
<!-- components/UseStoreFetchDataComponent.vue -->
<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const fetchData = () => {
      store.dispatch('fetchData');
    };

    return {
      fetchData
    };
  }
});
</script>
```

<br>

#### 4-5-3-2. mapActions 헬퍼 함수를 통한 액션 호출

- mapActions 헬퍼 함수를 사용하면 Vuex Store에 등록된 액션을 컴포넌트 내에서 더욱 간편하게 사용할 수 있습니다.

```vue
<!-- components/MapActionsFetchDataComponent.vue -->
<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { mapActions } from 'vuex';

export default defineComponent({
  methods: {
    ...mapActions(['fetchData'])
  }
});
</script>
```

<br><br>

#### 4-5-3-3. 액션을 사용하여 비동기 처리 후 변이 사용

- 비동기 작업이 완료된 후에 변이를 호출하여 상태를 변경할 수 있습니다.

```typescript
// store/actions4.ts
import { ActionTree } from 'vuex';
import { State, RootState } from './index';

export const actions: ActionTree<State, RootState> = {
  fetchData({ commit }) {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        commit('setData', data); // 변이 호출
      })
      .catch(error => {
        commit('setError', error);
      });
  }
};
```

<br>

#### 4-5-3-4. 액션 내에서 연속적인 비동기 처리

- 액션 내에서 여러 개의 비동기 작업을 연달아 수행할 수 있습니다.

```typescript
// store/actions5.ts
import { ActionTree } from 'vuex';
import { State, RootState } from './index';

export const actions: ActionTree<State, RootState> = {
  fetchDataAndProcess({ commit }) {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // 첫 번째 비동기 작업 완료 후 다음 작업 수행
        return fetch('https://api.example.com/process', {
          method: 'POST',
          body: JSON.stringify(data)
        });
      })
      .then(response => response.json())
      .then(processedData => {
        commit('setProcessedData', processedData); // 변이 호출
      })
      .catch(error => {
        commit('setError', error);
      });
  }
};
```

<br>

#### 4-5-3-5. Promise 객체 반환 액션과 그 사용

- 액션은 Promise 객체를 반환할 수 있습니다.

```typescript
// store/actions6.ts
import { ActionTree } from 'vuex';
import { State, RootState } from './index';

export const actions: ActionTree<State, RootState> = {
  fetchDataWithPromise({ commit }) {
    return new Promise((resolve, reject) => {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
          commit('setData', data);
          resolve(data); // 성공 시 Promise를 이행
        })
        .catch(error => {
          commit('setError', error);
          reject(error); // 실패 시 Promise를 거부
        });
    });
  }
};
```

- 액션을 호출한 후에는 해당 Promise 객체를 사용하여 성공 또는 실패를 처리할 수 있습니다.

```vue
<!-- components/FetchDataWithPromise.vue -->
<template>
  <div>
    <button @click="fetchDataWithPromise">Fetch Data</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const fetchDataWithPromise = () => {
      store.dispatch('fetchDataWithPromise')
        .then(data => {
          console.log('Data fetched:', data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };

    return {
      fetchDataWithPromise
    };
  }
});
</script>
```

- 액션을 사용하여 비동기 작업을 처리하고, 필요한 경우 Promise를 반환하여 성공 또는 실패를 처리할 수 있습니다.

<br><br>

## 4-6. Module Management(모듈 관리)

- 모듈 관리는 Vuex를 사용하여 수행됩니다. 
- Vuex는 Vue.js 애플리케이션의 상태 관리를 위한 공식 상태 관리 패턴 라이브러리입니다. 
- 모듈 관리는 애플리케이션의 상태를 여러 모듈로 분할하여 각 모듈을 개별적으로 관리하는 것을 의미합니다. 
- 모듈 관리를 통해 코드의 구조화 및 유지 보수성을 향상시킬 수 있습니다. 

<br>

### 4-6-1. 모듈 정의

```typescript
// store/modules/cart.ts
import { Module } from 'vuex';
import { CartState, RootState } from '../index';

interface CartState {
  items: Array<string>;
}

const cartModule: Module<CartState, RootState> = {
  state: {
    items: []
  },
  mutations: {
    addItem(state, item: string) {
      state.items.push(item);
    }
  },
  actions: {
    addToCart({ commit }, item: string) {
      commit('addItem', item);
    }
  },
  getters: {
    cartItemsCount(state) {
      return state.items.length;
    }
  }
};

export default cartModule;
```

- cartModule은 Vuex 모듈을 나타내며 상태(state), 변이(mutations), 액션(actions), 게터(getters)를 포함합니다.

<br><br>

### 4-6-2. 모듈 등록

- 모듈을 Vuex Store에 등록하기 위해 modules 옵션을 사용합니다.

```typescript
// store/index2.ts
import { createStore, Store } from 'vuex';
import cartModule from './modules/cart';

export interface RootState {
  // 루트 상태 정의
}

const store: Store<RootState> = createStore({
  modules: {
    cart: cartModule
  }
});

export default store;
```

- cartModule을 Vuex Store에 등록하려면 modules 옵션을 사용하여 등록하고, 해당 모듈에 이름을 지정할 수 있습니다. 이 경우 모듈 이름은 cart입니다.

<br><br>

### 4-6-3. 모듈 상태 접근

- 다른 모듈의 상태에 접근하려면 $store.state를 사용하여 접근할 수 있습니다.

```typescript
// store/modules/user.ts
import { Module } from 'vuex';
import { UserState, RootState } from '../index';

interface UserState {
  name: string;
}

const userModule: Module<UserState, RootState> = {
  state: {
    name: 'John Doe'
  },
  mutations: {
    setName(state, newName: string) {
      state.name = newName;
    }
  }
};

export default userModule;
```

<br>

### 4-6-3-1. 다른 모듈의 상태에 접근하는 방법

```typescript
// store/modules/cart2.ts
import { GetterTree } from 'vuex';
import { CartState, RootState } from '../index';

const getters: GetterTree<CartState, RootState> = {
  totalItems(state, getters, rootState) {
    // 다른 모듈의 상태 접근
    return rootState.user.name + ' has ' + state.items.length + ' items in the cart';
  }
};

export default getters;
```

<br><br>

### 4-6-4. 모듈 상태 조작

- 모듈의 상태를 조작하기 위해서는 commit 및 dispatch 메소드를 사용합니다.

```typescript
// 컴포넌트 내부에서 액션 디스패치
setup() {
  const store = useStore();
  const addToCart = () => {
    store.dispatch('cart/addToCart', 'item1');
  };
  return { addToCart };
}
```

<br>

```typescript
// 컴포넌트 내부에서 변이 커밋
setup() {
  const store = useStore();
  const setName = () => {
    store.commit('user/setName', 'Jane Doe');
  };
  return { setName };
}
```

<br><br>

#### 4-6-4-1. mapState, mapGetters, mapActions 헬퍼 함수 사용

- Vue 컴포넌트에서 Vuex Store의 상태, 게터, 액션에 간편하게 접근하기 위해 mapState, mapGetters, mapActions 헬퍼 함수를 사용할 수 있습니다.

**mapState 사용**

```typescript
// 컴포넌트 내부에서 mapState 사용
import { computed } from 'vue';
import { mapState } from 'vuex';

setup() {
  const store = useStore();
  const { name } = mapState('user', ['name']);
  return { name };
}
```

<br>

**mapGetters 사용**

```typescript
// 컴포넌트 내부에서 mapGetters 사용
import { computed } from 'vue';
import { mapGetters } from 'vuex';

setup() {
  const store = useStore();
  const { cartItemsCount } = mapGetters('cart', ['cartItemsCount']);
  return { cartItemsCount };
}
```

<br>

**mapActions 사용**

```typescript
// 컴포넌트 내부에서 mapActions 사용
import { mapActions } from 'vuex';

setup() {
  const store = useStore();
  const { addToCart } = mapActions('cart', ['addToCart']);
  return { addToCart };
}
```

- Vuex 모듈을 관리하고 Vuex Store에 등록하며 모듈 간에 상태를 공유하고 조작할 수 있습니다. 모듈 관리는 코드의 구조화와 유지보수성을 향상시키는 데 중요한 역할을 합니다.

<br><br><br>