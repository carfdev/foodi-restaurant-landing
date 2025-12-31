import { persistentAtom } from '@nanostores/persistent';

export type CartItem = {
  id: string;
  name: string;
  quantity: number;
};

type ItemDisplayInfo = Pick<CartItem, 'id' | 'name'>;

export const cartItemsStore = persistentAtom<Record<string, CartItem>>(
  'cartItems',
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
);

export const addCartItem = ({ id, name }: ItemDisplayInfo) => {
  const currentCart = cartItemsStore.get();
  const existingEntry = currentCart[id];

  if (existingEntry) {
    cartItemsStore.set({
      ...currentCart,
      [id]: {
        ...existingEntry,
        quantity: existingEntry.quantity + 1,
      },
    });
  } else {
    cartItemsStore.set({
      ...currentCart,
      [id]: { id, name, quantity: 1 },
    });
  }
};
