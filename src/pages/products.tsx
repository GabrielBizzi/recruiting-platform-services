import products_style from "../styles/pages/list.module.scss";
import coffee from "./../assets/images/coffee.svg";
import cafeDuplo from "./../assets/images/cafe-duplo.svg";
import mocha from "./../assets/images/mocha.svg";
import cafeAmericano from "./../assets/images/cafe-americano.svg";
import cappuccino from "./../assets/images/cappuccino.svg";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Product from "../components/product";

function Products() {
  return (
    <div className={products_style.wrap}>
      <Header />
      <div className={products_style.container}>
        {/* Product */}
        <Product
          product={[
            {
              name: "Café Duplo",
              time: "0:45",
              alt: "Café Duplo",
              photo: cafeDuplo
            },
            {
              name: "Café Expresso",
              time: "0:45",
              alt: "Café Duplo",
              photo: coffee
            },
            { name: "Mocha", time: "2:30", alt: "Mocha", photo: mocha },
            {
              name: "Americano",
              time: "2:30",
              alt: "Americano",
              photo: cafeAmericano
            },
            {
              name: "Cappuccino",
              time: "2:30",
              alt: "Cappuccino",
              photo: cappuccino
            }
          ]}
        />
        {/* End Product */}
      </div>
      <div className={products_style.buttonGrid}>
        <Link to="/complements">
          <button className={products_style.button}>Continuar</button>
        </Link>
      </div>
    </div>
  );
}

export default Products;
