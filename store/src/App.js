import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartProvider from "./CartContext";
import NavbarComponent from "./components/Navbar";

import Home from "./Pages/Home";
import Store from "./Pages/Store";
import Success from "./Pages/Success";
import Cancel from "./Pages/Cancel";
import About from "./Pages/About";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavbarComponent />
          <Container>
            <Routes>
              <Route index element={<Home />} />
              <Route path="store" element={<Store />} />
              <Route path="about" element={<About />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
