import React, { useState } from 'react';
import PizzaCart from './PizzaCart';
import CartScreen from '../screens/Cartscreen'; // Ensure this path is correct

export default function PizzaShop() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (newItem) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === newItem.id && item.variant === newItem.variant);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === newItem.id && item.variant === newItem.variant
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        return [...prevItems, newItem];
      }
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      {/* Replace with real pizza data */}
      <PizzaCart
        pizza={{ id: 1, name: 'Margherita', description: 'Classic pizza', image: 'image_url', variants: ['Small', 'Medium', 'Large'], prices: { Small: 100, Medium: 150, Large: 200 } }}
        onAddToCart={handleAddToCart}
        onDelete={() => {}}
        onUpdate={() => {}}
      />
      <CartScreen
        cartItems={cartItems}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
