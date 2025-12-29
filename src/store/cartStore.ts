import { persistentAtom } from '@nanostores/persistent';

export type CartItem = {
  id: string;
  name: string;
  quantity: number;
};

type ItemDisplayInfo = Pick<CartItem, 'id' | 'name'>;

export const cartItems = persistentAtom<Record<string, CartItem>>(
  'cartItems',
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
);

export const addCartItem = ({ id, name }: ItemDisplayInfo) => {
  const currentCart = cartItems.get();
  const existingEntry = currentCart[id];

  if (existingEntry) {
    cartItems.set({
      ...currentCart,
      [id]: {
        ...existingEntry,
        quantity: existingEntry.quantity + 1,
      },
    });
  } else {
    cartItems.set({
      ...currentCart,
      [id]: { id, name, quantity: 1 },
    });
  }
};
