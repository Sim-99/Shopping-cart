import React, { useState } from 'react';
const App = () => {
  const [pizzas, setPizzas] = useState([
    { id: 1, name: 'Margherita', description: 'Classic cheese pizza', image: 'path/to/image', variants: ['Small', 'Medium'], prices: { Small: 5, Medium: 7 } },
    // Add more pizzas as needed
  ]);

  const handleUpdate = (updatedPizza) => {
    setPizzas(prevPizzas =>
      prevPizzas.map(pizza =>
        pizza.id === updatedPizza.id ? updatedPizza : pizza
      )
    );
  };

  const handleDelete = (pizzaId) => {
    setPizzas(prevPizzas =>
      prevPizzas.filter(pizza => pizza.id !== pizzaId)
    );
  };

  return (
    <div>
      {pizzas.map(pizza => (
        <PizzaCard
          key={pizza.id}
          pizza={pizza}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default App;
