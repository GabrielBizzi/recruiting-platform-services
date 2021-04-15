import React from "react";
import product_styles from "../styles/components/product.module.scss";
import CheckBox from "./checkbox";

interface ProductProps {
  product: Array<{
    name: string;
    photo: string;
    time: string;
    alt?: string;
  }>;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <>
      {product.map((product) => {
        return (
          <div key={product.name} className={product_styles.product}>
            <div className={product_styles.productContent}>
              <img src={product.photo} alt={product.alt} />
              <div>
                <p>{product.name}</p>
                <span>{product.time} min</span>
              </div>
            </div>
            <CheckBox name={product.name} />
          </div>
        );
      })}
    </>
  );
};

export default Product;
