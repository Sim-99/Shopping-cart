import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { Button, ListGroup, Container, Row, Col } from 'react-bootstrap';

export default function CartScreen() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (id, variant) => {
    removeFromCart(id, variant);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.prices[item.variant] * item.quantity), 0);
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Your Cart</h1>
        </Col>
        <Col className="text-end">
          <Link to="/PizzaCart">
            <Button variant="primary">Back to Pizzas</Button>
          </Link>
        </Col>
      </Row>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ListGroup>
            {cartItems.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col md={3}>
                    <img src={item.image} alt={item.name} className="img-fluid" style={{ maxWidth: '100px' }} />
                  </Col>
                  <Col md={6}>
                    <h5>{item.name}</h5>
                    <p>Price: ZAR {item.prices[item.variant]}</p>
                    <p>Quantity: {item.quantity}</p>
                  </Col>
                  <Col md={3} className="text-end">
                    <Button 
                      variant="danger" 
                      onClick={() => handleRemoveFromCart(item.id, item.variant)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Row className="my-4">
            <Col className="text-end">
              <h4>Total: ZAR {getTotalPrice().toFixed(2)}</h4>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}
