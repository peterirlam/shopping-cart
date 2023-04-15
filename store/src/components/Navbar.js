import { Button, Container, Navbar, Modal, Nav } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";
import { NavLink } from "react-router-dom";
import Logo from '../logo.png';

function NavbarComponent() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    await fetch("https://gaming-mouse-app.herokuapp.com/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  return (
    <>
      <Navbar expand="sm" className="bg-white shadow-sm mb-3">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} width="40" height="40" alt=""></img>
          </Navbar.Brand>
    
          <NavLink className="nav-link mx-2" to="/home">
            <Nav.Item>Home</Nav.Item>
          </NavLink>

          <NavLink className="nav-link mx-2" to="/store">
            <Nav.Item>Store</Nav.Item>
          </NavLink>

          <NavLink className="nav-link mx-2" to="/about">
            <Nav.Item>About</Nav.Item>
          </NavLink>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        {" "}
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
              ))}

              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

              <Button variant="success" onClick={checkout}>
                Purchase items!
              </Button>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
