import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Cartscreen from './screens/Cartscreen';
import PizzaShop from './components/PizzaShop'; // Correct import for PizzaShop
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/cart" element={<Cartscreen />} />
          <Route path="/pizza-shop" element={<PizzaShop />} /> {/* Corrected route path */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
