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