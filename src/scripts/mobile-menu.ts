import {
  defineComponent,
  ref,
  onMounted,
  watch,
  nextTick,
  type ComponentPublicInstance,
} from 'vue';

interface NavItem {
  text: string;
  href: string;
}

export default defineComponent({
  props: {
    items: {
      type: Array as () => NavItem[],
      required: true,
    },
  },
  setup() {
    const open = ref(false);
    const mounted = ref(false);
    const firstLink = ref<HTMLElement | null>(null);

    onMounted(() => {
      mounted.value = true;
    });

    watch(open, async () => {
      document.body.style.overflowY = open.value ? 'hidden' : 'auto';
      if (open.value) {
        await nextTick();
        firstLink.value?.focus();
      }
    });

    const setFirstLink = (el: Element | ComponentPublicInstance | null) => {
      firstLink.value = el as HTMLElement;
    };

    return {
      open,
      mounted,
      setFirstLink,
    };
  },
});
