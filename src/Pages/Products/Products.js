import React from "react";
import "./Products.css";
import useProducts from "../Hooks/useProducts";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useProducts();
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product product={product} key={product.id}></Product>
      ))}
    </div>

    // </div>
  );
};

export default Products;
