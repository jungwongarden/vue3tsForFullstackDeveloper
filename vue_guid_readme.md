# 1. Application API

## 1-1. createApp()​

- 애플리케이션 인스턴스를 생성합니다.

<br>

### 1-1-1. 유형(Type)

```TS
function createApp(rootComponent: Component, rootProps?: object): App
```

<br>

### 1-1-2. 세부(Details)

- 첫 번째 인수는 루트 구성 요소입니다. 두 번째 선택적 인수는 루트 구성 요소에 전달될 소품입니다.

<br>

### 1-1-3. 예시 코드

**인라인 루트 구성요소 사용하는 경우**

```JS
import { createApp } from 'vue'

const app = createApp({
  /* root component options */
})
```

<br>

**가져온 구성요소 포함**

```JS
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
```

<br><br>

## 1-2. createSSRApp()

- SSR Hydration 모드 에서 애플리케이션 인스턴스를 생성합니다 . 사용법은 createApp()와 완전히 동일합니다.

<br><br><br>

## 1-3. app.mount()​

- 컨테이너 요소에 애플리케이션 인스턴스를 탑재합니다.

### 1-3-1. 유형(Type)

```TS
interface App {
  mount(rootContainer: Element | string): ComponentPublicInstance
}
```

<br><br>

### 1-3-2. 세부(Details)

- 인수는 실제 DOM 요소 또는 CSS 선택자이며, 첫 번째로 일치하는 요소가 사용됩니다. 루트 구성 요소 인스턴스를 반환합니다.

- 구성 요소에 템플릿이나 렌더링 기능이 정의되어 있으면 컨테이너 내부의 기존 DOM 노드를 대체합니다. 그렇지 않고 런타임 컴파일러를 사용할 수 있으면 innerHTML컨테이너의 가 템플릿으로 사용됩니다.

- SSR 하이드레이션 모드에서는 컨테이너 내부의 기존 DOM 노드를 하이드레이션합니다. 불일치 가 있는 경우 기존 DOM 노드는 예상 출력과 일치하도록 변형됩니다.

- 각 앱 인스턴스에 대해 mount()를 한 번만 호출할 수 있습니다.

<br>

### 1-3-3. 예시 코드

```JS
import { createApp } from 'vue'
const app = createApp(/* ... */)

app.mount('#app')
```

- 실제 DOM 요소에 마운트할 수도 있습니다.

```JS
app.mount(document.body.firstChild)
```

<br><br><br>

## 1-4. app.unmount()​

- 마운트된 애플리케이션 인스턴스를 마운트 해제하여 애플리케이션의 구성 요소 트리에 있는 모든 구성 요소에 대한 마운트 해제 수명 주기 후크를 트리거합니다.

<br>

### 1-4-1. 유형(Type)

```TS
interface App {
  unmount(): void
}
```

<br><br><br>

## 1-5. app.component()

- 이름 문자열과 구성 요소 정의를 모두 전달하는 경우 전역 구성 요소를 등록하고, 이름만 전달하는 경우 이미 등록된 구성 요소를 검색합니다.

<br>

### 1-5-1. 유형(Type)

```TS
interface App {
  component(name: string): Component | undefined
  component(name: string, component: Component): this
}
```

<br>

### 1-5-2. 예시 코드

```JS
import { createApp } from 'vue'

const app = createApp({})

// register an options object
app.component('my-component', {
  /* ... */
})

// retrieve a registered component
const MyComponent = app.component('my-component')
```

<br><br><br>

## 1-6. app.directive()​

- 이름 문자열과 지시어 정의를 모두 전달하는 경우 전역 사용자 지정 지시어를 등록하고, 이름만 전달하는 경우 이미 등록된 지시어를 검색합니다.

<br>

### 1-6-1. 유형(Type)

```TS
interface App {
  directive(name: string): Directive | undefined
  directive(name: string, directive: Directive): this
}
```

<br><br>

### 1-6-2. 예시 코드

```JS
import { createApp } from 'vue'

const app = createApp({
  /* ... */
})

// register (object directive)
app.directive('my-directive', {
  /* custom directive hooks */
})

// register (function directive shorthand)
app.directive('my-directive', () => {
  /* ... */
})

// retrieve a registered directive
const myDirective = app.directive('my-directive')
```

<br><br><br>

## 1-7. app.use()

- 플러그인을 설치합니다 .

<br>

### 1-7-1. 유형(Type)

```TS
interface App {
  use(plugin: Plugin, ...options: any[]): this
}
```

<br><br>

### 1-7-2. 세부(Details)

- 플러그인을 첫 번째 인수로 예상하고 선택적 플러그인 옵션을 두 번째 인수로 예상합니다.
- 플러그인은 메소드가 있는 객체일 수도 있고 메소드로 사용될 함수일 수도 있습니다 
- 동일한 플러그인에 대해 여러 번 호출 되면 `app.use()` 플러그인은 한 번만 설치됩니다.

<br><br>

### 1-7-3. 예시 코드

```JS
import { createApp } from 'vue'
import MyPlugin from './plugins/MyPlugin'

const app = createApp({
  /* ... */
})

app.use(MyPlugin)
```

<br><br>

## 1-8. app.mixin()​

- 전역 믹스인을 적용합니다(애플리케이션에 따라 범위가 지정됨). 전역 믹스인은 포함된 옵션을 애플리케이션의 모든 구성 요소 인스턴스에 적용합니다.

- 믹스인은 생태계 라이브러리에서 널리 사용되기 때문에 주로 이전 버전과의 호환성을 위해 Vue 3에서 지원됩니다. 애플리케이션 코드에서는 믹스인, 특히 글로벌 믹스인의 사용을 피해야 합니다.

- 로직 재사용을 위해서는 대신 컴포저블을 사용하시기 바랍니다.

<br>

### 1-8-1. 유형(Type)

```TS
interface App {
  mixin(mixin: ComponentOptions): this
}
```

<br><br><br>

## 1-9. app.provide()​

- 애플리케이션 내의 모든 하위 구성 요소에 주입할 수 있는 값을 제공합니다.

<br>

### 1-9-1. 유형(Type)

```TS
interface App {
  provide<T>(key: InjectionKey<T> | symbol | string, value: T): this
}
```

<br><br>

### 1-9-2. 세부(Details)

- 주입 키를 첫 번째 인수로 예상하고 제공된 값을 두 번째 인수로 예상합니다. 애플리케이션 인스턴스 자체를 반환합니다.

<br><br>

### 1-9-3. 예시 코드

```JS
import { createApp } from 'vue'

const app = createApp(/* ... */)

app.provide('message', 'hello')
```

<br>

**애플리케이션의 구성요소 내부**

```JS
import { inject } from 'vue'

export default {
  setup() {
    console.log(inject('message')) // 'hello'
  }
}
```

<br><br><br>

## 1-10. app.runWithContext()

- 현재 앱을 주입 컨텍스트로 사용하여 콜백을 실행합니다.

<br>

### 1-10-1. 유형(Type)

```TS
interface App {
  runWithContext<T>(fn: () => T): T
}
```

<br><br>

### 1-10-2. 세부(Details)

- 콜백 함수를 기대하고 즉시 콜백을 실행합니다. 콜백의 동기 호출 중에 inject()호출은 현재 활성 구성 요소 인스턴스가 없는 경우에도 현재 앱에서 제공하는 값에서 주입을 조회할 수 있습니다. 콜백의 반환 값도 반환됩니다.

<br><br>

### 1-10-3. 예시 코드

```JS
import { inject } from 'vue'

app.provide('id', 1)

const injected = app.runWithContext(() => {
  return inject('id')
})

console.log(injected) // 1
```

<br><br><br>

### 1-11. app.version

- 애플리케이션이 생성된 Vue 버전을 제공합니다. 이는 다양한 Vue 버전을 기반으로 하는 조건부 논리가 필요할 수 있는 플러그인 내부에서 유용합니다 .

<br>

### 1-11-1. 유형

```TS
interface App {
  version: string
}
```

<br><br>

### 1-11-2. 예시 코드

**플러그인 내에서 버전 확인 수행**

```JS
export default {
  install(app) {
    const version = Number(app.version.split('.')[0])
    if (version < 3) {
      console.warn('This plugin requires Vue 3')
    }
  }
}
```

<br><br><br>

## 1-12. app.config​

- 모든 애플리케이션 인스턴스는 config해당 애플리케이션에 대한 구성 설정이 포함된 개체를 노출합니다. 애플리케이션을 탑재하기 전에 해당 속성(아래 설명)을 수정할 수 있습니다.

<br>

```JS
import { createApp } from 'vue'

const app = createApp(/* ... */)

console.log(app.config)
```

<br><br><br>

## 1-13. app.config.errorHandler​

- 애플리케이션 내에서 전파되는 포착되지 않은 오류에 대한 전역 처리기를 할당합니다.

<br>

### 1-13-1. 유형(Type)

```TS
interface AppConfig {
  errorHandler?: (
    err: unknown,
    instance: ComponentPublicInstance | null,
    // `info` is a Vue-specific error info,
    // e.g. which lifecycle hook the error was thrown in
    info: string
  ) => void
}
```

<br><br>

### 1-13-2. 세부(Details)

- 오류 처리기는 오류, 오류를 발생시킨 구성 요소 인스턴스, 오류 소스 유형을 지정하는 정보 문자열이라는 세 가지 인수를 받습니다.

- 프로덕션에서는 세 번째 인수( info)가 전체 정보 문자열 대신 단축 코드가 됩니다. 생산 오류 코드 참조 에서 코드-문자열 매핑을 찾을 수 있습니다 .

<br><br>

### 1-13-3. 예시 코드

```JS
app.config.errorHandler = (err, instance, info) => {
  // handle error, e.g. report to a service
}
```

<br><br><br>

## 1-14. app.config.warnHandler​

- Vue의 런타임 경고에 대한 사용자 정의 핸들러를 할당하십시오.

<br>

### 1-14-1. 유형(Type)

```TS
interface AppConfig {
  warnHandler?: (
    msg: string,
    instance: ComponentPublicInstance | null,
    trace: string
  ) => void
}
```

<br><br>

### 1-14-2. 세부(Details)

- 경고 핸들러는 경고 메시지를 첫 번째 인수로, 소스 구성 요소 인스턴스를 두 번째 인수로, 구성 요소 추적 문자열을 세 번째로 받습니다.

- 콘솔의 자세한 내용을 줄이기 위해 특정 경고를 필터링하는 데 사용할 수 있습니다. 모든 Vue 경고는 개발 중에 해결되어야 하므로 이는 여러 경고 중 특정 경고에 초점을 맞추기 위해 디버그 세션 중에만 권장되며 디버깅이 완료되면 제거해야 합니다.

- 경고는 개발 중에만 작동하므로 이 구성은 프로덕션 모드에서 무시됩니다.

<br><br>

### 1-14-3. 예시 코드

```JS
app.config.warnHandler = (msg, instance, trace) => {
  // `trace` is the component hierarchy trace
}
```

<br><br><br>

## 1-15. app.config.performance

- 브라우저 개발 도구 성능/타임라인 패널에서 구성 요소 초기화, 컴파일, 렌더링 및 패치 성능 추적을 활성화하려면 이를 로 설정합니다 . 개발 모드와 Performance.mark API를 지원하는 브라우저에서만 작동합니다 .

유형(Type) : boolean

<br><br><br>

## 1-16. app.config.compilerOptions​

- 런타임 컴파일러 옵션을 구성합니다. 이 개체에 설정된 값은 브라우저 내 템플릿 컴파일러로 전달되고 구성된 앱의 모든 구성 요소에 영향을 줍니다. compilerOptions옵션을 사용하여 구성 요소별로 이러한 옵션을 재정의할 수도 있습니다.

- 이 구성 옵션은 전체 빌드(예: vue.js브라우저에서 템플릿을 컴파일할 수 있는 독립 실행형)를 사용할 때만 적용됩니다. 빌드 설정과 함께 런타임 전용 빌드를 사용하는 경우 @vue/compiler-dom대신 빌드 도구 구성을 통해 컴파일러 옵션을 전달해야 합니다.

- For vue-loader: 로더 옵션을 통해 전달합니다

- For vite: 옵션을 통해 전달합니다

<br><br><br>

## 1-17. app.config.compilerOptions.isCustomElement​

- 기본 사용자 정의 요소를 인식하는 확인 방법을 지정합니다.

유형(Type) : (tag: string) => boolean

<br>

### 1-17-1. 세부(Details)

- 태그를 기본 맞춤 요소로 처리해야 하는지 여부를 반환해야 합니다 . 일치하는 태그의 경우 Vue는 이를 Vue 구성 요소로 해결하려고 시도하는 대신 기본 요소로 렌더링합니다.

- 이 함수에서는 기본 HTML 및 SVG 태그를 일치시킬 필요가 없습니다. Vue의 파서가 자동으로 인식합니다.

<br><br>

### 1-17-2. 예시 코드

```JS
// treat all tags starting with 'ion-' as custom elements
app.config.compilerOptions.isCustomElement = (tag) => {
  return tag.startsWith('ion-')
}
```

<br><br><br>

## 1-18. app.config.compilerOptions.whitespace​

- 템플릿 공백 처리 동작을 조정합니다.

유형(Type) : 'condense' | 'preserve'

기본(Base): 'condense'

<br>

### 1-18-1. 세부(Details)

- Vue는 템플릿에서 공백 문자를 제거/압축하여 보다 효율적으로 컴파일된 출력을 생성합니다. 기본 전략은 "축소"이며 다음 동작을 사용합니다.

- 요소 내부의 선행/끝 공백 문자는 단일 공백으로 압축됩니다.
- 개행을 포함하는 요소 사이의 공백 문자는 제거됩니다.
- 텍스트 노드의 연속 공백 문자는 단일 공백으로 압축됩니다.

<br><br>

### 1-18-2. 예시 코드

```JS
app.config.compilerOptions.whitespace = 'preserve'
```

<br><br><br>

## 1-19. app.config.compilerOptions.delimiters​

- 템플릿 내에서 텍스트 보간에 사용되는 구분 기호를 조정합니다.

유형(Type) : [string, string]

기본(Base) : ['{{', '}}']

<br>

### 1-19-1. 세부(Details)

- 일반적으로 Mustache 구문을 사용하는 서버측 프레임워크와의 충돌을 방지하는 데 사용됩니다.

<br><br>

### 1-19-2. 예시 코드

```JS
// Delimiters changed to ES6 template string style
app.config.compilerOptions.delimiters = ['${', '}']
```

<br><br><br>

## 1-20. app.config.compilerOptions.comments​

- 템플릿의 HTML 주석 처리를 조정합니다.

유형(Type) : boolean

기본(Base) : false

<br>

### 1-20-1. 세부(Details)

- 기본적으로 Vue는 프로덕션에서 주석을 제거합니다. 이 옵션을 로 설정하면 trueVue는 프로덕션 중에도 주석을 유지하게 됩니다. 댓글은 개발 중에 항상 보존됩니다. 이 옵션은 일반적으로 Vue가 HTML 주석에 의존하는 다른 라이브러리와 함께 사용될 때 사용됩니다.

<br><br>

### 1-20-2. 예시 코드

```JS
app.config.compilerOptions.comments = true
```

<br><br><br>

## 1-21. app.config.globalProperties​

- 애플리케이션 내부의 모든 구성 요소 인스턴스에서 액세스할 수 있는 전역 속성을 등록하는 데 사용할 수 있는 개체입니다.

<br>

### 1-21-1. 유형(Type)

```TS
interface AppConfig {
  globalProperties: Record<string, any>
}
```

<br><br>

### 1-21-2. 세부(Details)

- Vue 3에 더 이상 존재하지 않는 Vue 2를 대체합니다 
- 전역적인 모든 것과 마찬가지로 이 항목은 자제해서 사용해야 합니다.
- 전역 속성이 구성 요소 자체 속성과 충돌하는 경우 구성 요소 자체 속성의 우선 순위가 더 높습니다.

<br>

### 1-21-3. 예시 코드

```JS
app.config.globalProperties.msg = 'hello'
```

- 애플리케이션의 모든 구성 요소 템플릿 내부와 this모든 구성 요소 인스턴스에서 사용할 수 있습니다.

```JS
export default {
  mounted() {
    console.log(this.msg) // 'hello'
  }
}
```

<br><br><br>

## 1-22. app.config.optionMergeStrategies​

- 사용자 정의 구성 요소 옵션에 대한 병합 전략을 정의하기 위한 개체입니다.

<br>

### 1-22-1. 유형(Type)

```TS
interface AppConfig {
  optionMergeStrategies: Record<string, OptionMergeFunction>
}

type OptionMergeFunction = (to: unknown, from: unknown) => any
```

<br><br>

### 1-22-2. 세부(Details)

- 일부 플러그인/라이브러리는 (글로벌 믹스인을 주입하여) 사용자 정의 구성 요소 옵션에 대한 지원을 추가합니다. 여러 소스(예: 믹스인 또는 구성 요소 상속)에서 동일한 옵션을 "병합"해야 하는 경우 이러한 옵션에는 특별한 병합 논리가 필요할 수 있습니다.

- app.config.optionMergeStrategies 옵션 이름을 키로 사용하여 개체 에 할당하면 사용자 지정 옵션에 병합 전략 기능을 등록할 수 있습니다 .

- 병합 전략 함수는 상위 및 하위 인스턴스에 정의된 해당 옵션의 값을 각각 첫 번째 및 두 번째 인수로 받습니다.

<br><br>

### 1-22-3. 예시 코드

```JS
const app = createApp({
  // option from self
  msg: 'Vue',
  // option from a mixin
  mixins: [
    {
      msg: 'Hello '
    }
  ],
  mounted() {
    // merged options exposed on this.$options
    console.log(this.$options.msg)
  }
})

// define a custom merge strategy for `msg`
app.config.optionMergeStrategies.msg = (parent, child) => {
  return (parent || '') + (child || '')
}

app.mount('#app')
// logs 'Hello Vue'
```