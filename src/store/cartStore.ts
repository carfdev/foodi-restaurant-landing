import { persistentAtom } from '@nanostores/persistent';

interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

export const cartItemsStore = persistentAtom<CartItem[]>('cartItems', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const addCartItem = ({ id, name }: Pick<CartItem, 'id' | 'name'>) => {
  const currentCart = cartItemsStore.get();
  const existingItemIndex = currentCart.findIndex((item) => item.id === id);

  if (existingItemIndex !== -1) {
    const updatedCart = currentCart.map((item, index) =>
      index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item,
    );
    cartItemsStore.set(updatedCart);
    return;
  }

  cartItemsStore.set([...currentCart, { id, name, quantity: 1 }]);
};
