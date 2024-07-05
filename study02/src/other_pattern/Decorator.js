// 사용자 정의 디렉티브
const vFocus = {
    mounted(el) {
      el.focus();
    }
  };
  
  const app = createApp({
    template: `<input v-focus />`
  });
  
  app.directive('focus', vFocus);
  app.mount('#app');