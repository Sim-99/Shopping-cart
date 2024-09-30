import React, { useState, useContext } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import '../index.css';
import ErrorMessage from './ErrorMessage'; // Import the ErrorMessage component
import CartContext from '../context/CartContext'; // Import the CartContext

export default function PizzaCarttt({ pizza, onDelete, onUpdate }) {
  const { addToCart, removeFromCart } = useContext(CartContext); // Use CartContext
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Small');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [editName, setEditName] = useState(pizza.name);
  const [editDescription, setEditDescription] = useState(pizza.description);
  const [editImage, setEditImage] = useState(pizza.image);
  const [editVariants, setEditVariants] = useState(pizza.variants);
  const [editPrices, setEditPrices] = useState(pizza.prices);

  const handleClose = () => {
    setShow(false);
    setEditMode(false);
    setSuccessMessage('');
  };

  const handleShow = () => setShow(true);

  const handleAddToCart = () => {
    if (quantity <= 0) {
      setError('Quantity must be at least 1.');
      return;
    }
    setError('');
    // Add item to cart context
    addToCart({
      ...pizza,
      quantity,
      variant
    });
    alert('Item added to cart!');
    handleClose();
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSaveChanges = () => {
    if (!editName || !editDescription || !editImage || editVariants.length === 0 || Object.keys(editPrices).length === 0) {
      setError('All fields are required.');
      return;
    }

    setError('');
    if (typeof onUpdate === 'function') {
      onUpdate({
        ...pizza,
        name: editName,
        description: editDescription,
        image: editImage,
        variants: editVariants,
        prices: editPrices
      });
      setEditMode(false);
      setSuccessMessage('Updated successfully!');
    } else {
      setError('Update function is not defined.');
    }
  };

  const handleDelete = () => {
    if (typeof onDelete === 'function') {
      onDelete(pizza.id);
      setSuccessMessage('Deleted successfully!');
    } else {
      setError('Delete function is not defined.');
    }
    handleClose();
  };

  return (
    <>
      <Card className="m-3 shadow-sm" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pizza.image} alt={pizza.name} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>{pizza.description}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            View Details
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editMode ? (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  value={editImage}
                  onChange={(e) => setEditImage(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Variants (comma separated)</Form.Label>
                <Form.Control
                  type="text"
                  value={editVariants.join(', ')}
                  onChange={(e) => setEditVariants(e.target.value.split(',').map(v => v.trim()))}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Prices (JSON)</Form.Label>
                <Form.Control
                  type="text"
                  value={JSON.stringify(editPrices)}
                  onChange={(e) => setEditPrices(JSON.parse(e.target.value))}
                />
              </Form.Group>
              <ErrorMessage message={error} />
              <Button variant="secondary" onClick={() => setEditMode(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSaveChanges} className="ms-2">
                Save Changes
              </Button>
            </>
          ) : (
            <>
              <img src={pizza.image} className="img-fluid mb-3" alt={pizza.name} />
              <p>{pizza.description}</p>
              <Form.Group className="mb-3">
                <Form.Label>Variants</Form.Label>
                <Form.Control
                  as="select"
                  value={variant}
                  onChange={(e) => setVariant(e.target.value)}
                >
                  {pizza.variants.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  as="select"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                >
                  {[...Array(10).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <h5>Price: ZAR {pizza.prices[variant] * quantity}</h5>
            </>
          )}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {!editMode && (
            <>
              <Button variant="primary" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button variant="secondary" onClick={handleEdit} className="ms-2">
                Edit
              </Button>
              <Button variant="danger" onClick={handleDelete} className="ms-2">
                Delete
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
