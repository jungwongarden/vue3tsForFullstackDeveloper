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

# 3. Vuejs의 요소

**프로젝트 생성**

```shell
vue create study03

Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection, and
<enter> to proceed)
 (*) Babel
 (*) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
 (*) Vuex
 (*) CSS Pre-processors
 (*) Linter / Formatter
>(*) Unit Testing
 ( ) E2E Testing

Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter, Unit
? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
> 3.x
  2.x

Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter, Unit
? Choose a version of Vue.js that you want to start the project with 3.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Standard
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
? Save this as a preset for future projects? Yes
? Save preset as: project03
```

<br>

## 3-1. Typescript

**Vue.js 3에서 TypeScript를 사용하는 이유**

| 항목 | 설명 |
|--------------|-----------------------------------------------------------------------------|
| 타입 안전성 | 코드 작성 시 타입 오류를 사전에 잡을 수 있어 런타임 오류를 줄일 수 있습니다. |
| 자동 완성 | 타입 정보가 IDE에 제공되어 더 나은 코드 완성 기능을 제공합니다. |
| 리팩토링 지원 | 타입 정보를 통해 리팩토링 시 발생할 수 있는 오류를 최소화합니다. |

<br>

### 3-1-1. TypeScript의 기본 사용

1. `<script lang="ts">`를 사용하여 TypeScript로 스크립트를 작성합니다.
2. ref를 사용하여 반응형 데이터를 정의하고, as 키워드를 사용하여 타입 캐스팅을 수행합니다.

<br>

### 3-1-2. Typescript의 기본 문법

- TypeScript의 강점은 데이터 타입을 정의할 수 있으며, Event 타입과 HTMLInputElement 타입을 사용하여 이벤트 핸들러를 구현할 수 있습니다.

<br>

#### 3-1-2-1. 기본 타입 선언

- 프로그램이 유용하려면 숫자, 문자열, 구조체, 불리언 값과 같은 간단한 데이터 단위가 필요합니다. 
- TypeScript는 JavaScript와 거의 동일한 데이터 타입을 지원하며, 열거 타입을 사용하여 더 편리하게 사용할 수 있습니다.

<br>

**typescript/exam01.ts**

<br>

**1-1. 문자열**

```typescript
let hello: string = "helloWorld!";
```

<br>

**1-2. 숫자**

```typescript
let tripleSeven: number = 1004;
```

<br>

**1-3. 배열**

```typescript
let arr1: number[] = [100, 200, 300];
let arr2: Array<number> = [100 , 200, 300];
let arr3: Array<string> = ["hello", "world"];
let arr4: [string, number] = ["gitae", 42];
```

<br>

**1-4. 객체**

```typescript
let man: object = { name: "gitae", age: 42 };
let person: { name: string; age: number } = {
  name: "gitae",
  age: 42
};
```

<br>

**1-5. 불리언 (Boolean)**

```typescript
let isAngel: boolean = true;
```

<br><br>

#### 3-1-2-2. 함수 선언

- TypeScript 함수는 JavaScript와 마찬가지로 기명 함수(named function)과 익명 함수(anonymous function)로 만들 수 있습니다. 이를 통해 API에서 함수 목록을 작성하든 일회성 함수를 써서 다른 함수로 전달하든 애플리케이션에 가장 적합한 방법을 선택할 수 있습니다.

<br>

**typescript/exam02.ts**

<br>

**2-1. 함수 타입 선언**

- TypeScript에선 parameter와 return 값의 타입 선언을 할 수 있습니다.

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

<br>

**2-2. 선택적 매개변수 (optional parameter)**

- optional parameter는 있어도 되고 없어도 되는 parameter로 `?`를 앞에 추가해주면 됩니다.

```typescript
function parseName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = parseName("Kim"); // 문제 없음
let result2 = parseName("Kim", "Cortez", "Pg"); // 에러
let result3 = parseName("Kim", "Cortez"); // 문제 없음
```

<br><br>

#### 3-1-2-3. 인터페이스 (Interface)

- TypeScript의 핵심 원칙 중 하나는 타입 검사가 값의 형태에 초점을 맞추고 있다는 것입니다. 
- 인터페이스를 "덕 타이핑(duck typing)" 혹은 "구조적 서브타이핑 (structural subtyping)"이라고도 합니다. 
- TypeScript에서는 인터페이스는 이런 타입들의 이름을 짓는 역할을 하고 코드 안의 계약을 정의하는 것뿐만 아니라 프로젝트 외부에서 사용하는 코드의 계약을 정의하는 강력한 방법입니다.
- interface는 자주 사용하는 타입들을 object 형태의 묶음으로 정의해 새로운 타입을 만드는 기능입니다.

<br>

**typescript/exam03.ts**

<br>

**3-1. interface 선언**

```typescript
interface User {
  age: number;
  name: string;
}
```

<br>

**3-2. 변수 활용**

```typescript
const gitae: User = { name: "gitae", age: 42 }
```

<br>

**3-3. 함수 인자로의 활용**

```typescript
function getUser(user: User) {
  console.log(user);
}

getUser({ name: "gitae", age: 42 });
```

<br>

**3-4. 함수 구조 활용**

```typescript
interface Add {
  (x: number, y: number): number;
}

let addFunc: Add = (a, b) => a + b;

console.log(addFunc(48, 6));
```

<br>

**3-5. 배열 활용**

```typescript
interface StringArr {
  [index: number]: string;
}

let arr: StringArr = ["a", "b", "c"];
```

<br>

**3-6. 객체 활용**

```typescript
interface Obj {
  [key: string]: string;
}

const obj: Obj = {
  person1: "Gitae",
  person2: "Eric"
}
```

<br>

**3-7. Interface 확장**

```typescript
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  position: string;
}

const dev: Developer = {
  name: "gitae",
  age: 42,
  position: "Fullstack"
};
```

<br><br>

#### 3-1-2-4. 타입 (type)

- type 키워드는 interface와는 다르게 새로운 타입을 생성하는 것이 아닌 별칭을 부여하는 것으로서 extends 키워드는 사용할 수 없습니다.

<br>

**typescript/exam04.ts**

<br>

**4-1. 타입 별칭 선언**

```typescript
type StrOrNum = string | number;

const str1: StrOrNum = "hello world";
const str2: StrOrNum = 1004;
```

<br>

**4-2. type과 interface 차이점**

- 타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능 / 불가능 여부입니다.
- 인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가능므로 가능하면, type 보다는 interface로 선언해서 사용하는 것이 좋습니다.

<br><br>

#### 3-1-2-5. 연산자 (Operator)

<br>

**typescript/exam05.ts**

<br>

**5-1. 유니언 타입 (Union Type)**

- 한 개 이상의 type을 선언할 때 사용할 수 있으며, `|` 키워드를 사용합니다.

<br>

```typescript
function strOrNum (value: string | number) {
  if(typeof value === 'string') {
    value.toString();
  } else if(typeof value === 'number') {
    value.toLocaleString();
  } else {
    throw new TypeError('문자열 또는 숫자를 입력해주세요!');
  }
}

strOrNum('hello world');
strOrNum(1004);
```

<br>

**5-2. 교차 타입 (Intersection Type)**

- 합집합과 같은 개념으로 함수 호출의 경우, 함수 인자에 명시한 type을 모두 제공해야 하고, `&` 키워드를 사용합니다.

```typescript
interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  skill: string;
}

type Capt = Person & Developer;

let devPerson: Capt = {
  name: "kim",
  age: 777,
  skill: "FE"
};
```

#### 3-1-2-6. Class

**6-1. 접근 제한자**

- 클래스 기반 객체 지향 언어가 지원하는 접근 제한자(Access modifier) public, private, protected를 지원하며 의미 또한 동일합니다.

<br>

**접근 제한자를 명시하지 않았을 때**

- 다른 클래스 기반 언어 : protected로 지정
- TypeScript : public으로 지정

| 접근 가능성 | public | protected | private |
|------------------|------------|------------|------------|
| 클래스 내부	| O	| O	| O |
| 자식 클래스 내부 | O | O | X |
| 클래스 인스턴스 | O	 | X | X |

<br>

**6-2. Class에서의 타입 선언**

```typescript
class Person {
    private nick: string;
    public age: number;
    readonly log: string;

    constructor(nick: string, age: number) {
        this.nick = nick;
        this.age = age;
        this.log = `Created person: ${nick}, age: ${age}`;
    }

    // getter method for nick
    public getNick(): string {
        return this.nick;
    }

    // setter method for nick
    public setNick(nick: string): void {
        this.nick = nick;
    }
}
```

<br><br>

#### 3-1-2-7. Enum

- 열거형(Enums)으로 이름이 있는 상수들의 집합을 정의할 수 있습니다. 
- 열거형을 사용하면 의도를 문서화 하거나 구분되는 사례 집합을 더 쉽게 만들수 있습니다. 
- TypeScript는 숫자와 문자열-기반 열거형을 제공합니다.
- enum 키워드를 사용하면 default 값을 선언할 수 있습니다.

<br>

**typescript/exam07.ts**

<br>

**7-1. 숫자형 enum**

- 자동으로 0에서 1씩 증가하는 값을 부여한다.

```typescript
enum Brands {
  Nike,		    // 0
  Adidas,		// 1
  NewBalance	// 2
}

const myShoes = Brands.Nike;	// 0
```

<br>

**7-2. 문자형 enum**

```typescript
enum Player {
  kim = '김',
  park = '박'
}

const player = Player.kim;	// 김
```

<br><br>

#### 3-1-2-8. 제네릭(generics)

- C#과 Java 같은 언어에서, 재사용 가능한 컴포넌트를 생성하는 도구상자의 주요 도구 중 하나는 제네릭입니다.
- 즉, 단일 타입이 아닌 다양한 타입에서 작동하는 컴포넌트를 작성할 수 있습니다. 
- 사용자는 제네릭을 통해 여러 타입의 컴포넌트나 자신만의 타입을 사용할 수 있습니다.
- 제네릭을 활용하면 같은 기능의 함수를 또 만들 필요가 없고, 타입 추론에 있어서 강점을 가진다는 장점이 있습니다.

<br>

**8-1. 제네릭 선언**

`<T>`와 같이 타입을 선언한다. 알파벳은 대부분 T를 사용한다.

```typescript
function logText<T>(text: T): T {
  consol.log(text);
  return text;
}

logText<string>('Hello World!');
```

<br>

**8-2. interface에 제네릭 선언**

```typescript
interface Menu<T> {
  value: T;
  price: number;
}

const donut: Menu<string> = { value: 'donut', price : 3000 };
const potato: Menu<string> = { value: 'potato', price : 2000 };
const hamburger: Menu<string> = { value: 'hamburger', price : 5000 };
```

<br>

**8-3. 제네릭 타입 제한**

**8-3-1. 배열 힌트**

```typescript
function textLength<T>(text: T[]): T[] {
    console.log(text.length);
    return text;
}

textLength<string>(['hello', 'world']);
```

<br>

**8-3-2. 정의된 타입 이용 (extends)**

```typescript
interface LengthType {
    length: number;
}

function logTextLen<T extends LengthType>(text: T): T {
    console.log(text.length);
    return text;
}

logTextLen('hello world'); // 11
logTextLen(100); // 에러!
logTextLen({ length: 100 }); // 100
```

<br>

**8-3-3. keyof**

- interface에 정의된 key 값만을 허용

```typescript
interface Item {
    name: string;
    price: number;
    stock: number;
}

function getItemOption<T extends keyof Item>(itemOption: T): T {
    return itemOption;
}

// 'name', 'price', 'stock'만 인자로 사용 가능
getShoppingItemOption('price');
```

<br>

### 3-1-3. 컴포지션 API

- Vue 3의 setup 함수를 사용하여 컴포넌트 로직을 작성합니다.
- 함수 기반의 코드 구성과 클래스 기반의 코드 구성 방식으로 작성합니다.

<br>

### 3-1-4. Vuex와 TypeScript 사용

**store/index.ts**

```typescript
import { createStore } from 'vuex';

interface State {
  count: number;
}

export default createStore<State>({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    }
  },
  getters: {
    doubleCount(state): number {
      return state.count * 2;
    }
  }
});
```

<br>

**main.ts**

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

createApp(App)
  .use(store)
  .mount('#app');
```

<br><br>

## 3-2. Vuejs의 인스턴스

- Vue 애플리케이션의 모든 것은 새로운 Vue 인스턴스를 생성하는 것으로 시작됩니다. Vue 인스턴스는 애플리케이션의 데이터와 메서드를 포함하며, HTML 요소와 연결되어 DOM을 조작합니다.

### 3-2-1. 인스턴스의 정의

- Vue 애플리케이션의 인스턴스는 createApp 함수를 사용하여 정의됩니다. 
- TypeScript를 사용하면 인스턴스에 타입을 명시하여 코드의 안전성을 높일 수 있습니다.

**instance/main1.ts**

```typescript
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');
```

- createApp 함수는 App.vue 컴포넌트를 루트 컴포넌트로 사용하는 새로운 Vue 애플리케이션 인스턴스를 생성합니다. 
이 인스턴스는 #app 요소에 마운트됩니다.

<br>

### 3-2-2. 인스턴스의 옵션

- Vue 인스턴스는 여러 옵션을 통해 설정할 수 있습니다. 
- 주요 옵션에는 data, methods, computed, watch, components 등이 있습니다. 
- TypeScript를 사용하면 각 옵션의 타입을 명시하여 안전성을 확보할 수 있습니다.

**instance/main2.ts**

```typescript
import { createApp, defineComponent, reactive, computed } from 'vue';

const app = createApp(defineComponent({
  name: 'MyComponent',
  data() {
    return {
      message: 'Hello, Vue with TypeScript!'
    };
  },
  methods: {
    updateMessage(newMessage: string) {
      this.message = newMessage;
    }
  },
  computed: {
    reversedMessage(): string {
      return this.message.split('').reverse().join('');
    }
  },
  watch: {
    message(newValue: string, oldValue: string) {
      console.log(`Message changed from ${oldValue} to ${newValue}`);
    }
  },
  components: {
    // 다른 컴포넌트들을 등록할 수 있습니다.
  }
}));

app.mount('#app');
```

<br>

### 3-2-3. 인스턴스의 생명주기

- Vue 인스턴스에는 여러 생명주기 hook(훅)이 있습니다. 
- 이 hook(훅)들은 인스턴스의 생성, 마운트, 업데이트, 소멸 등의 단계에서 호출됩니다. 
- 주요 생명주기 훅으로는 beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeUnmount, unmounted 등이 있습니다.

**instance/main3.ts**

```typescript
import { createApp, defineComponent } from 'vue';

const app = createApp(defineComponent({
  name: 'LifecycleComponent',
  data() {
    return {
      message: 'Hello, Vue!'
    };
  },
  methods: {
    updateMessage(newMessage: string) {
      this.message = newMessage;
    }
  },
  // 생명주기 훅들
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  }
}));

app.mount('#app');
```

<br>

**인스턴스 종합 예시코드**

```typescript
//instance/main4.ts
import { createApp, defineComponent, ref, computed, watch } from 'vue';

// 루트 컴포넌트 정의
const RootComponent = defineComponent({
  name: 'RootComponent',
  setup() {
    const message = ref<string>('Hello, Vue with TypeScript!');
    const newMessage = ref<string>('');

    const reversedMessage = computed<string>(() => {
      return message.value.split('').reverse().join('');
    });

    watch(message, (newValue, oldValue) => {
      console.log(`Message changed from ${oldValue} to ${newValue}`);
    });

    const updateMessage = () => {
      message.value = newMessage.value;
    };

    return {
      message,
      newMessage,
      reversedMessage,
      updateMessage
    };
  },
  // 생명주기 훅들
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
  template: `
    <div>
      <h1>{{ message }}</h1>
      <input v-model="newMessage" placeholder="Enter new message">
      <button @click="updateMessage">Update Message</button>
      <p>Reversed Message: {{ reversedMessage }}</p>
    </div>
  `
});

// 애플리케이션 생성 및 마운트
const app = createApp(RootComponent);
app.mount('#app');
```

<br>

### 3-2-4. Vue 인스턴스의 속성과 메소드

**속성**

| 속성명             | 문법                                           | 설명                                                          | 예시 코드                                                    |
|--------------------|------------------------------------------------|---------------------------------------------------------------|--------------------------------------------------------------|
| `data`             | `data: () => ({ /* ... */ })`                  | 컴포넌트의 반응형 상태를 정의합니다.                           | ```typescript<br>data() { return { message: 'Hello Vue!' }; }<br>```|
| `props`            | `props: { /* ... */ }`                         | 컴포넌트가 받을 수 있는 속성을 정의합니다.                     | ```typescript<br>props: { title: String }<br>```             |
| `computed`         | `computed: { /* ... */ }`                      | 계산된 속성을 정의합니다.                                      | ```typescript<br>computed: { reversedMessage() { return this.message.split('').reverse().join(''); } }<br>```|
| `watch`            | `watch: { /* ... */ }`                         | 반응형 데이터의 변화를 감지하여 특정 함수를 실행합니다.        | ```typescript<br>watch: { message(newValue, oldValue) { console.log('Message changed:', oldValue, '->', newValue); } }<br>```|
| `mounted`          | `mounted() { /* ... */ }`                      | 컴포넌트가 마운트된 후 호출됩니다.                              | ```typescript<br>mounted() { console.log('Component mounted'); }<br>```|
| `beforeCreate`     | `beforeCreate() { /* ... */ }`                 | 컴포넌트 인스턴스가 초기화되기 전에 호출됩니다.                | ```typescript<br>beforeCreate() { console.log('Before create'); }<br>```|
| `created`          | `created() { /* ... */ }`                      | 컴포넌트가 생성된 후 호출됩니다.                                | ```typescript<br>created() { console.log('Created'); }<br>```|
| `beforeMount`      | `beforeMount() { /* ... */ }`                  | 컴포넌트가 마운트되기 전에 호출됩니다.                          | ```typescript<br>beforeMount() { console.log('Before mount'); }<br>```|
| `beforeUpdate`     | `beforeUpdate() { /* ... */ }`                 | 데이터가 변경되어 DOM이 다시 렌더링되기 전에 호출됩니다.        | ```typescript<br>beforeUpdate() { console.log('Before update'); }<br>```|
| `updated`          | `updated() { /* ... */ }`                      | 데이터가 변경되어 DOM이 다시 렌더링된 후 호출됩니다.            | ```typescript<br>updated() { console.log('Updated'); }<br>```|
| `beforeUnmount`    | `beforeUnmount() { /* ... */ }`                | 컴포넌트가 파괴되기 전에 호출됩니다.                            | ```typescript<br>beforeUnmount() { console.log('Before unmount'); }<br>```|
| `unmounted`        | `unmounted() { /* ... */ }`                    | 컴포넌트가 파괴된 후 호출됩니다.                                | ```typescript<br>unmounted() { console.log('Unmounted'); }<br>```|
| `$refs`            | `this.$refs`                                   | `ref` 속성을 통해 DOM 요소나 컴포넌트를 참조합니다.            | ```typescript<br>this.$refs.myElement<br>```                  |
| `$el`              | `this.$el`                                     | 컴포넌트 인스턴스가 마운트된 루트 DOM 요소를 참조합니다.        | ```typescript<br>console.log(this.$el);<br>```               |
| `provide`          | `provide: { /* ... */ }`                       | 하위 컴포넌트에 데이터를 제공합니다.                           | ```typescript<br>provide() { return { dataKey: 'dataValue' }; }<br>```|
| `inject`           | `inject: ['dataKey']`                          | 상위 컴포넌트로부터 데이터를 주입받습니다.                      | ```typescript<br>inject: ['dataKey']<br>```                  |

<br>

**메소드**

| 메소드명           | 문법                                           | 설명                                                           | 예시 코드                                                    |
|--------------------|------------------------------------------------|----------------------------------------------------------------|--------------------------------------------------------------|
| `$emit`            | `this.$emit(eventName, payload)`               | 사용자 정의 이벤트를 트리거합니다.                               | ```typescript<br>this.$emit('my-event', data);<br>```        |
| `$nextTick`        | `this.$nextTick(callback)`                     | 다음 DOM 업데이트 후에 콜백을 실행합니다.                       | ```typescript<br>this.$nextTick(() => { console.log('DOM updated'); });<br>```|주입받습니다.                       | ```typescript<br>inject: ['dataKey']<br>```                  |


<br>

**Vue 인스턴스의 속성과 메소드 종합 실습**

```typescript
//instance/main5.ts
import { createApp, defineComponent, ref, computed, watch, nextTick } from 'vue';

const MyComponent = defineComponent({
  name: 'MyComponent',
  data() {
    return {
      message: 'Hello, Vue!',
      newMessage: ''
    };
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    reversedMessage(): string {
      return this.message.split('').reverse().join('');
    }
  },
  methods: {
    updateMessage(newMessage: string) {
      this.message = newMessage;
      this.$nextTick(() => {
        console.log('Message updated and DOM updated');
      });
    },
    emitEvent() {
      this.$emit('custom-event', this.message);
    }
  },
  watch: {
    message(newValue: string, oldValue: string) {
      console.log('Message changed from', oldValue, 'to', newValue);
    }
  },
  mounted() {
    console.log('Component mounted');
  },
  beforeCreate() {
    console.log('Before create');
  },
  created() {
    console.log('Created');
  },
  beforeMount() {
    console.log('Before mount');
  },
  beforeUpdate() {
    console.log('Before update');
  },
  updated() {
    console.log('Updated');
  },
  beforeUnmount() {
    console.log('Before unmount');
  },
  unmounted() {
    console.log('Unmounted');
  },
  template: `
    <div>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
      <p>Reversed: {{ reversedMessage }}</p>
      <input v-model="newMessage" placeholder="Enter new message">
      <button @click="updateMessage(newMessage)">Update Message</button>
      <button @click="emitEvent">Emit Event</button>
    </div>
  `
});

const app = createApp(MyComponent, {
  title: 'My Vue Component'
});
app.mount('#app');
```

<br><br>

## 3-3. Vuejs의 템플릿과 디렉티브

### 3-3-1. Vue Template(템플릿)

- 템플릿은 Vue 컴포넌트의 UI 구조를 정의하는 HTML 기반의 구문입니다. 
- Vue는 템플릿을 DOM에 렌더링할 수 있는 Virtual DOM으로 컴파일합니다.
- Vue 템플릿은 HTML을 기본으로 하여 데이터 바인딩, 디렉티브, 조건부 렌더링, 반복 렌더링 등 다양한 기능을 지원합니다.

<br>

**템플릿의 주요 기능**

1. 데이터 바인딩: `{{ }}` 구문을 사용하여 Vue 인스턴스의 데이터 속성을 HTML에 바인딩합니다.
2. 디렉티브: v-if, v-for, v-bind, v-on 등 특별한 기능을 수행하는 속성입니다.
3. 컴포넌트 사용: 다른 Vue 컴포넌트를 템플릿 내에서 사용할 수 있습니다.
4. 메서드 호출: 이벤트 핸들러에서 Vue 인스턴스의 메서드를 호출할 수 있습니다.

<br>

**템플릿 바인딩 예시코드**

```html
<!-- template/template01.vue -->
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const message = ref('Hello, Vue!');
    return {
      message
    };
  }
});
</script>
```

<br>

### 3-3-2. Vue Directive(디렉티브)

- 디렉티브는 HTML 태그에 특별한 반응형 동작을 적용하는 데 사용되는 특수한 속성입니다. Vue에는 v-bind, v-model, v-if, v-for 등의 내장 디렉티브가 있습니다.

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

**주요 디렉티브**

v-model: 양방향 데이터 바인딩
v-if: 조건부 렌더링
v-for: 리스트 렌더링
v-bind : 데이터 바인딩

<br>

#### 3-3-2-1. v-if와 v-else-if/v-else

```html
<!-- template/template02.vue -->
<template>
  <div>
    <p v-if="status === 'switch'">Switch</p>
    <p v-else-if="status === 'pending'">Pending</p>
    <p v-else>This is not visible</p>
    <button @click="toggleVisibility">Toggle Visibility</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'StatusComponent',
  setup() {
    const status = ref<string>('switch');

    const toggleVisibility = () => {
      status.value = status.value === 'switch' ? 'pending' : 'switch';
    };

    return {
      status,
      toggleVisibility
    };
  }
});
</script>

<style scoped>
/* 스타일은 필요에 따라 추가하세요 */
</style>
```

<br>

#### 3-3-2-2. v-for

```html
<!-- template/template03.vue -->
<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const items = ref([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ]);

    return {
      items
    };
  }
});
</script>
```

<br>

#### 3-3-2-3. v-bind

```html
<!-- template/template04.vue -->
<template>
  <div>
    <img :src="imageUrl" alt="Vue logo">
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const imageUrl = ref('https://vuejs.org/images/logo.png');
    return {
      imageUrl
    };
  }
});
</script>
```

<br>

#### 3-3-2-4. v-on

```html
<!-- template/template05.vue -->
<template>
  <div>
    <button @click="showAlert">Click me</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const showAlert = () => {
      alert('Button clicked!');
    };

    return {
      showAlert
    };
  }
});
</script>
```

<br>

#### 3-3-2-5. v-text/v-html/v-show

```html
<span v-text="message"></span> <!-- 엘리먼트의 텍스트 콘텐츠를 설정합니다. -->
<div v-html="htmlContent"></div> <!-- 엘리먼트의 HTML 콘텐츠를 설정합니다. -->
<div v-show="isVisible"></div>  <!-- 조건에 따라 엘리먼트의 표시 여부를 결정합니다. -->
```

<br>

#### 3-3-2-6. v-model

```html
<input v-model="message" type="text"> <!-- 양방향 데이터 바인딩을 설정하여 폼 입력과 Vue 인스턴스 데이터를 동기화합니다. -->
```
<br>

#### 3-3-2-7. v-slot

```html
<template v-slot:header><h1>Title</h1></template> <!-- 슬롯(slot)을 사용하여 컴포넌트의 콘텐츠를 삽입합니다. -->
```
<br>

#### 3-3-2-8. v-pre

```html
<div v-pre>{{ rawHtml }}</div>  <!-- 엘리먼트와 그 하위 엘리먼트들의 텍스트를 렌더링하기 전에 그대로 표시합니다. -->
```
<br>

#### 3-3-2-9. v-once

```html
<div v-once>{{ trsData }}</div>  <!-- 엘리먼트를 한 번만 렌더링합니다. -->
```

<br><br>

### 3-3-3. 컴포넌트 사용

```html
<!-- components/ParentComponent.vue -->
<template>
  <div>
    <ChildComponent :message="parentMessage" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

export default defineComponent({
  components: {
    ChildComponent
  },
  setup() {
    const parentMessage = ref('Message from parent');
    return {
      parentMessage
    };
  }
});
</script>
```

<br>

```html
<!-- components/ChildComponent.vue -->
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true
    }
  }
});
</script>
```

<br>

### 3-3-4. 메서드 호출

```vue
<!-- components/MethodComponent.vue -->
<template>
  <div>
    <button @click="increment">Increment</button>
    <p>{{ count }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value++;
    };

    return {
      count,
      increment
    };
  }
});
</script>
```

<br><br>

## 3-4. Vuejs의 컴포넌트

- Vue.js 3에서 컴포넌트는 재사용 가능한 UI 구성 요소입니다. 
- 각 컴포넌트는 템플릿, 스크립트, 스타일을 포함하고 있으며, 이러한 요소들을 하나로 묶어 캡슐화된 형태로 구성됩니다. 
- 컴포넌트를 통해 코드의 재사용성, 유지보수성, 확장성이 향상되며, 대규모 어플리케이션 개발을 용이하게 합니다.

<br>

### 3-4-1. Vue.js 3의 컴포넌트 종류

1. 단일 파일 컴포넌트(Single File Component, SFC): 템플릿, 스크립트, 스타일을 한 파일에 작성하는 방식입니다. .vue 확장자를 가지며, Vue CLI를 통해 프로젝트 구성 시 주로 사용됩니다.
2. 함수형 컴포넌트(Functional Component): 함수형 컴포넌트는 상태를 가지지 않고 입력된 속성(props)만을 통해 UI를 렌더링하는 간단한 형태의 컴포넌트입니다. 주로 성능 최적화를 위해 사용됩니다.
3. 클래스형 컴포넌트(Class-based Component): Vue 3에서는 클래스 기반의 컴포넌트 대신 Composition API를 권장하지만, 이전 버전과의 호환성을 위해 여전히 사용할 수 있습니다. 클래스형 컴포넌트는 ES6 클래스를 사용하여 정의됩니다.
4. 동적 컴포넌트(Dynamic Component): Vue.js에서는 컴포넌트를 동적으로 교체하고 렌더링할 수 있는 동적 컴포넌트 기능을 제공합니다. component 태그를 사용하여 동적으로 컴포넌트를 변경할 수 있습니다.
5. 재귀적 컴포넌트(Recursive Component): 자기 자신을 호출하여 재귀적으로 사용되는 컴포넌트입니다. 트리 구조와 같은 구조를 표현할 때 유용합니다.

<br>

### 3-4-2. 단일 파일 컴포넌트(Single File Component, SFC)

- 단일 파일 컴포넌트는 .vue 확장자를 가지며, 템플릿, 스크립트, 스타일을 하나의 파일에 작성하는 방식이며, Vue.js의 대표적인 코드 구조로 사용됩니다.

```vue
<!-- components/SingleFileComponent.vue -->
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MyComponent',
  setup() {
    const title = ref('Hello Vue 3');
    const message = ref('This is a single file component');
    return {
      title,
      message
    };
  }
});
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
```

<br>

### 3-4-3. 함수형 컴포넌트(Functional Component)

- Vue.js 3에서 함수형 컴포넌트는 상태를 가지지 않고 입력된 속성(props)만을 통해 UI를 렌더링하는 간단한 형태의 컴포넌트입니다. 
- 함수형 컴포넌트는 단순하고 성능적으로 유리한 경우에 사용됩니다. 

```vue
<!-- components/FuntionalComponent.vue -->
<template functional>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Default Title' // title의 기본값 설정
    },
    message: {
      type: String,
      default: 'Default Message' // message의 기본값 설정
    }
  },
  computed: {
    title() {
      return this.$props.title;
    },
    message() {
      return this.$props.message;
    }
  }
});
</script>
```

- 위 코드는 functional 속성을 템플릿에 추가하여 함수형 컴포넌트임을 명시하였습니다. 함수형 컴포넌트는 props를 통해 데이터를 전달받고, 이를 템플릿 내에서 사용하여 UI를 렌더링합니다. 함수형 컴포넌트 내부에는 상태나 메서드를 정의하지 않으며, 단순한 데이터의 표현에 주로 사용됩니다.

<br>


### 3-4-4. 클래스형 컴포넌트(Class-based Component)

- 주로 Composition API를 사용하여 컴포넌트를 정의하고 관리합니다. 그러나 이전 버전과의 호환성을 유지하기 위해 클래스형 컴포넌트를 사용할 수도 있습니다.

```vue
<!-- components/ClassicalComponent.vue -->
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue';

export default defineComponent({
  name: 'MyComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { title, message } = toRefs(props);
    const updatedMessage = ref(message.value);

    const updateMessage = () => {
      updatedMessage.value = 'Message updated!';
    };

    return {
      title,
      message: updatedMessage,
      updateMessage,
    };
  },
});
</script>
```

위 코드는 @Component 데코레이터를 사용하여 클래스형 컴포넌트임을 명시하고, @Prop 데코레이터를 사용하여 props를 정의합니다. 클래스 내부에는 Vue 인스턴스의 속성과 메서드를 정의할 수 있습니다. 클래스형 컴포넌트는 Vue 인스턴스의 라이프사이클 훅과 같은 기능을 사용할 수 있습니다.

<br>

### 3-4-5. 동적 컴포넌트(Dynamic Component)

- 동적 컴포넌트는 템플릿에서 컴포넌트를 동적으로 교체하고 렌더링할 수 있는 기능입니다. Vue.js에서는 <component> 태그를 사용하여 동적으로 컴포넌트를 변경할 수 있습니다.

```vue
<!-- components/DynamicComponent.vue -->
<template>
  <div>
    <button @click="toggleComponent">Toggle Component</button>
    <component :is="currentComponent"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FirstComponent from './FirstComponent.vue';
import SecondComponent from './SecondComponent.vue';

export default defineComponent({
  setup() {
    const currentComponent = ref('FirstComponent');

    const toggleComponent = () => {
      currentComponent.value = currentComponent.value === 'FirstComponent'
        ? 'SecondComponent'
        : 'FirstComponent';
    };

    return {
      currentComponent,
      toggleComponent
    };
  }
});
</script>
```

- 위 코드는 `<component :is="currentComponent"></component>` 부분은 currentComponent에 따라 동적으로 컴포넌트를 변경합니다. currentComponent 값에 따라 렌더링되는 컴포넌트가 변경됩니다. toggleComponent 메서드는 버튼 클릭 시 currentComponent 값을 토글하여 다른 컴포넌트를 렌더링하도록 합니다.
- 동적 컴포넌트를 사용하면 조건부로 컴포넌트를 교체하거나, 다양한 상황에 따라 동적으로 컴포넌트를 선택할 수 있습니다.

<br>

### 3-4-6. 재귀적 컴포넌트(Recursive Component)

- 재귀적 컴포넌트는 자기 자신을 호출하여 재귀적으로 사용되는 컴포넌트입니다. 이를 통해 트리 구조와 같은 구조를 표현할 수 있습니다. 

```vue
<!-- components/RecursiveComponent.vue -->
<template>
  <div>
    <p>{{ node.name }}</p>
    <ul v-if="node.children && node.children.length">
      <recursive-component v-for="child in node.children" :key="child.id" :node="child" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RecursiveComponent',
  props: {
    node: {
      type: Object,
      required: true
    }
  }
});
</script>
```

- 위 코드는 RecursiveComponent는 node라는 props를 받아 해당 노드의 이름을 출력하고, 그 자식 노드에 대해 재귀적으로 자신을 호출하여 트리 구조를 생성합니다. 부모 노드에는 자식 노드가 있다면 <ul> 태그로 감싸진 재귀적인 구조가 만들어집니다.
- 재귀적 컴포넌트를 사용하면 트리 구조를 포함한 복잡한 데이터 구조를 표현할 수 있으며, 코드의 재사용성과 가독성을 높일 수 있습니다

<br>

### 3-4-7. 멀티 파일 컴포넌트(Multi File Component)

- 멀티 파일 컴포넌트는 템플릿, 스크립트, 스타일을 별도의 파일로 분리하여 작성하는 방식입니다. 
- 이 방식은 코드의 재사용성과 모듈화를 향상시킬 수 있습니다.

**템플릿 파일: MyComponent.template.html**

```html
<!-- components/MyComponent.template.html -->
<div>
  <h1>{{ title }}</h1>
  <p>{{ message }}</p>
</div>
```

<br>

**스크립트 파일: MultiFileComponent.ts**

```typescript
import { defineComponent, ref, onMounted } from 'vue';
import template from './MultiFileComponent.template.html';

export default defineComponent({
  name: 'MyComponent',
  template,
  setup() {
    const title = ref('Hello Vue 3');
    const message = ref('This is a multi file component');
    
    // 스타일을 동적으로 로드하는 함수
    const loadStyles = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    };

    onMounted(() => {
      // 컴포넌트가 마운트될 때 스타일을 로드합니다.
      loadStyles('./MultiFileComponent.style.css');
    });

    return {
      title,
      message
    };
  }
});
```

<br>

**스타일 파일: MultiFileComponent.style.css**

```css
h1 {
  color: blue;
}
```

<br>

### 3-4-8. FIRST 원칙

- FIRST 원칙은 Vue.js의 구성 요소 설계에서 고려할 중요한 특성들을 의미합니다. 

1. Flexible (유연성)
2. Isolated (격리성)
3. Reusable (재사용성)
4. Simple (단순성)
5. Testable (테스트 가능성)

- 이 원칙들은 컴포넌트가 독립적이고 유지보수 가능하며, 쉽게 테스트할 수 있도록 설계해야 함을 강조합니다.

<br>

### 3-4-9. 가상 DOM의 원리

- Vue.js는 가상 DOM(Virtual DOM)을 사용하여 성능을 최적화합니다. 가상 DOM은 실제 DOM의 가벼운 복사본으로, 상태 변화가 일어나면 새 가상 DOM을 생성하고 이전 가상 DOM과 비교(diffing)하여 최소한의 실제 DOM 변경을 수행합니다. 이 과정은 효율적인 업데이트를 가능하게 하며, 성능을 크게 향상시킵니다.

**예시 코드**

```javascript
//components/VirtualDOM.js
// 초기 렌더링
const oldVNode = createElement('div', { id: 'container' }, [
  createElement('p', {}, 'Hello, Vue!')
]);

// 상태 변경 후 새로운 가상 DOM 생성
const newVNode = createElement('div', { id: 'container' }, [
  createElement('p', {}, 'Hello, Vue 3!')
]);

// 두 가상 DOM을 비교하여 차이점만 실제 DOM에 적용
patch(oldVNode, newVNode);
```

<br>

### 3-4-10. 범위 컴파일(Scoped CSS)

- Vue SFC에서 `<style scoped>`를 사용하면 해당 스타일은 컴포넌트의 범위 내에서만 적용됩니다. 이는 컴포넌트 간 스타일 충돌을 방지합니다.

**예시 코드**

```vue
<!-- componets/ScopedCSSComponent.vue -->
<template>
  <div class="container">
    <p class="text">Scoped CSS Example</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScopedComponent'
});
</script>

<style scoped>
.container {
  background-color: lightgrey;
}
.text {
  color: blue;
}
</style>
```

<br>

### 3-4-11. 다양한 개념의 종합한 예시

#### 3-4-11-1. 단일 파일 컴포넌트

**단일 파일 컴포넌트: MyComponent.vue**

```vue
<!-- components/MyComponent.vue -->
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <button @click="toggleMessage">Toggle Message</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MyComponent',
  setup() {
    const title = ref('Hello Vue 3');
    const message = ref('This is a single file component');
    
    const toggleMessage = () => {
      message.value = message.value === 'This is a single file component'
        ? 'Message toggled!'
        : 'This is a single file component';
    };

    return {
      title,
      message,
      toggleMessage
    };
  }
});
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
```

<br><br>

#### 3-4-11-2. 멀티 파일 컴포넌트

**템플릿 파일: MyComponent.template.html**

```html
<!-- components/MyComponent.template.html -->
<div>
  <h1>{{ title }}</h1>
  <p>{{ message }}</p>
</div>
```

<br>

**스크립트 파일: MyComponent.ts**

```typescript
//components/MyComponent.ts
import { defineComponent, ref } from 'vue';
import template from './MyComponent.template.html';

export default defineComponent({
  name: 'MyComponent',
  template,
  setup() {
    const title = ref('Hello Vue 3');
    const message = ref('This is a multi file component');
    return {
      title,
      message
    };
  }
});
```

<br>

**스타일 파일: MyComponent.style.css**

```css
/* components/MyComponent.style.css  */
h1 {
  color: blue;
}
```

<br><br><br>