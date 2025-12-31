import { defineComponent, ref, onMounted, computed } from 'vue';
import { useStore } from '@nanostores/vue';
import { cartItemsStore } from '@/store/cartStore';

export default defineComponent({
  setup() {
    const cartItems = useStore(cartItemsStore);
    const isMounted = ref(false);

    onMounted(() => {
      isMounted.value = true;
    });

    return {
      cartItems: computed(() => Object.values(cartItems.value)),
      isMounted: computed(() => isMounted.value),
    };
  },
});
