import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import useProducts from "../Hooks/useProducts";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useProducts();
  return (
    <div>
      <h1>{products.length}</h1>
      <div>
        <CardGroup>
          <Card>
            {products.map((product) => (
              <Product product={product} key={product.id}></Product>
            ))}
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Products;
