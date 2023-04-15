import { Row, Col } from "react-bootstrap";
import { productsArray } from "../ProductsStore";
import ProductCard from "../components/ProductCard";

function Store() {
  return (
    <>
      <h1 align="center" className="p-3">
        Welcome to the Game On! store
      </h1>
      <Row xs={1} md={2} xl={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />{" "}
          </Col>
        ))}
      </Row>
    </>
  );
}
export default Store;
