import { defineComponent, h } from 'vue';

const ButtonFactory = (type) => {
  return defineComponent({
    render() {
      return h('button', { class: type }, this.$slots.default());
    }
  });
};

const PrimaryButton = ButtonFactory('primary');
const SecondaryButton = ButtonFactory('secondary');