import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  function addToCart(selectedProduct) {

    setCartItems((items) => {

      const existingProduct = items.find(
        item => item.id === selectedProduct.id
      );

      if (existingProduct) {

        return items.map(item =>
          item.id === selectedProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

      }

      return [
        ...items,
        {
          ...selectedProduct,
          quantity: 1
        }
      ];

    });
  }

  function increaseQuantity(id) {

    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

  }

  function decreaseQuantity(id) {

    setCartItems(items =>
      items
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );

  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}