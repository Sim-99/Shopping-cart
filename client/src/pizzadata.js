import pepperBarbecueChicken from './Img/Barbecue.jpg';
import margherita from './Img/margherita-pizza.jpg';
import spicyPeriPeriChicken from './Img/peripe.jpg';
import vegSupreme from './Img/veg.jpg';
import meatFeast from './Img/meat-feast.jpg';
import fourCheese from './Img/FourCheese.jpg';


const pizzadata = [
  {
    "name": "Pepper, Barbecue & Chicken",
    "variants": ["Small", "Medium", "Large"],
    "prices": { "Small": 200, "Medium": 305, "Large": 400 },
    "category": "Non-veg",
    "image": pepperBarbecueChicken, 
    "description": "A delightful combination of pepper, barbecue sauce, and juicy chicken pieces."
  },
  {
    "name": "Margherita",
    "variants": ["Small", "Medium", "Large"],
    "prices": { "Small": 150, "Medium": 250, "Large": 350 },
    "category": "Veg",
    "image": margherita, 
    "description": "A classic vegetarian pizza topped with fresh tomatoes, mozzarella, and basil."
  },
  {
    "name": "Spicy Peri-Peri Chicken",
    "variants": ["Small", "Medium", "Large"],
    "prices": { "Small": 220, "Medium": 330, "Large": 420 },
    "category": "Non-veg",
    "image": spicyPeriPeriChicken, 
    "description": "A fiery pizza with peri-peri sauce, spicy chicken, and a blend of hot peppers."
  },
  {
    "name": "Veg Supreme",
    "variants": ["Small", "Medium", "Large"],
    "prices": { "Small": 180, "Medium": 275, "Large": 370 },
    "category": "Veg",
    "image": vegSupreme, 
    "description": "Loaded with a variety of fresh vegetables including bell peppers, onions, and olives."
  },
  {
    "name": "Meat Feast",
    "variants": ["Small", "Medium", "Large"],
    "prices": { "Small": 250, "Medium": 355, "Large": 470 },
    "category": "Non-veg",
    "image": meatFeast, 
    "description": "A hearty pizza topped with a mix of meats including pepperoni, sausage, and ham."
  },
  {
    "name": "Four Cheese",
    "variants": ["Small", "Medium", "Large"],
    "prices": { "Small": 200, "Medium": 290, "Large": 380 },
    "category": "Veg",
    "image": fourCheese, 
    "description": "A rich and creamy pizza topped with a blend of four different cheeses."
  }
];

export default pizzadata;