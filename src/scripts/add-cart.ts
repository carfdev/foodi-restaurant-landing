import { defineComponent } from 'vue';
import { addCartItem as addCartItemStore } from '@/store/cartStore';

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const addCartItem = () => {
      addCartItemStore({ id: props.id, name: props.name });
    };
    return {
      addCartItem,
    };
  },
});
