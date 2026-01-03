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
      cartItemCount: computed(() =>
        Object.values(cartItems.value).reduce((sum, item) => sum + item.quantity, 0),
      ),
      isMounted: computed(() => isMounted.value),
    };
  },
});
