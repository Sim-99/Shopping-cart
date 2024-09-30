import React, { useEffect, useState } from 'react';
import pizzadata from '../pizzadata'; 
import Pizza from '../components/PizzaCart';

export default function Homescreen() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    // Replace this with a real API call if necessary
    setPizzas(pizzadata);
  }, []);

  return (
    <div>
      <div className="row">
        {pizzas.map((pizza, index) => (
          <div className="col-md-4" key={index}>
            <Pizza pizza={pizza} /> 
          </div>
        ))}
      </div>
    </div>
  );
}
