const strategies = {
    strategyA() {
      console.log('Executing Strategy A');
    },
    strategyB() {
      console.log('Executing Strategy B');
    }
  };
  
  const app = createApp({
    data() {
      return {
        currentStrategy: 'strategyA'
      };
    },
    methods: {
      executeStrategy() {
        strategies[this.currentStrategy]();
      }
    },
    template: `<button @click="executeStrategy">Execute Strategy</button>`
  });
  
  app.mount('#app');