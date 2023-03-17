import CartProvider from "./CartContext";

function App() {
  return (
    <>
      <CartProvider>
        {" "}
        <NavbarComponent />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route index element={<Store />} />
              <Route path='success' element={<Success />} />
              <Route path='cancel' element={<Cancel />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </CartProvider>
    </>
  );
}

export default App;
