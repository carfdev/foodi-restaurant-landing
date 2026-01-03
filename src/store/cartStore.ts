import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

export type CartItem = {
  id: string;
  name: string;
  quantity: number;
};

type ItemDisplayInfo = Pick<CartItem, 'id' | 'name'>;

const CART_STORAGE_KEY = 'cartItems';
const isClient = typeof window !== 'undefined';

const createCartStore = () => {
  if (isClient) {
    return persistentAtom<Record<string, CartItem>>(
      CART_STORAGE_KEY,
      {},
      {
        encode: JSON.stringify,
        decode: JSON.parse,
      },
    );
  }
  return atom<Record<string, CartItem>>({});
};

export const cartItemsStore = createCartStore();

export const addCartItem = ({ id, name }: ItemDisplayInfo) => {
  const currentCart = cartItemsStore.get();
  const existingItem = currentCart[id];

  cartItemsStore.set({
    ...currentCart,
    [id]: {
      id,
      name,
      quantity: existingItem ? existingItem.quantity + 1 : 1,
    },
  });
};

export const removeCartItem = (id: string) => {
  const currentCart = cartItemsStore.get();
  const { [id]: removed, ...remainingItems } = currentCart;
  cartItemsStore.set(remainingItems);
};

export const updateCartItemQuantity = (id: string, quantity: number) => {
  if (quantity <= 0) {
    removeCartItem(id);
    return;
  }

  const currentCart = cartItemsStore.get();
  if (!currentCart[id]) return;

  cartItemsStore.set({
    ...currentCart,
    [id]: { ...currentCart[id], quantity },
  });
};

export const clearCart = () => {
  cartItemsStore.set({});
};

// Helpers
export const getCartItem = (id: string): CartItem | undefined => {
  return cartItemsStore.get()[id];
};

export const hasItemInCart = (id: string): boolean => {
  return id in cartItemsStore.get();
};
