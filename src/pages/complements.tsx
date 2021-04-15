import CheckBox from "../components/checkbox";
import Header from "../components/header";
import coffee_1 from "../assets/images/coffee.svg";
import coffee_2 from "../assets/images/cafe-americano.svg";
import sugar from "../assets/images/acucar.svg";
import milk from "../assets/images/leite.svg";
import chantilly from "../assets/images/chantilly.svg";
import cupcake from "../assets/images/cupcake.svg";
import cookie from "../assets/images/cookie.svg";
import complements_style from "../styles/pages/complements.module.scss";
import { Link } from "react-router-dom";

function Complements() {
  return (
    <div className={complements_style.wrap}>
      <Header />
      <p>Adicione complementos ao seu pedido.</p>
      <div className={complements_style.container}>
        {/* Product */}
        <div className={complements_style.product}>
          <div className={complements_style.productContent}>
            <img src={coffee_1} alt="coffee" />
            <div>
              <p>Café expresso</p>
              <span>0:45 min</span>
            </div>
          </div>
          <ul>
            <li>
              <div className={complements_style.subProduct}>
                <div className={complements_style.subProductContent}>
                  <img src={sugar} alt="Açucar Refinado" />
                  <div>
                    <p>Açucar refinado</p>
                    <span>0:30 min</span>
                  </div>
                </div>
                <CheckBox name="sugar" />
              </div>
            </li>
            <li>
              <div className={complements_style.subProduct}>
                <div className={complements_style.subProductContent}>
                  <img src={milk} alt="Leite Desnatado" />
                  <div>
                    <p>Leite desnatado</p>
                    <span>0:20 min</span>
                  </div>
                </div>
                <CheckBox name="milk" />
              </div>
            </li>
            <li>
              <div className={complements_style.subProduct}>
                <div className={complements_style.subProductContent}>
                  <img src={chantilly} alt="Chantilly" />
                  <div>
                    <p>Chantilly</p>
                    <span>0:55 min</span>
                  </div>
                </div>
                <CheckBox name="chantilly" />
              </div>
            </li>
          </ul>
        </div>
        {/* End Product */}

        {/* Product */}
        <div className={complements_style.product}>
          <div className={complements_style.productContent}>
            <img src={coffee_2} alt="coffee" />
            <div>
              <p>Americano</p>
              <span>2:30 min</span>
            </div>
          </div>
          <ul>
            <li>
              <div className={complements_style.subProduct}>
                <div className={complements_style.subProductContent}>
                  <img src={sugar} alt="Açucar Refinado" />
                  <div>
                    <p>Açucar refinado</p>
                    <span>0:30 min</span>
                  </div>
                </div>
                <CheckBox name="america_sugar" />
              </div>
            </li>
            <li>
              <div className={complements_style.subProduct}>
                <div className={complements_style.subProductContent}>
                  <img src={cupcake} alt="Cupcake" />
                  <div>
                    <p>Cupcake</p>
                    <span>0:20 min</span>
                  </div>
                </div>
                <CheckBox name="america_cupcake" />
              </div>
            </li>
            <li>
              <div className={complements_style.subProduct}>
                <div className={complements_style.subProductContent}>
                  <img src={cookie} alt="Cookie" />
                  <div>
                    <p>Cookie</p>
                    <span>1:30 min</span>
                  </div>
                </div>
                <CheckBox name="america_cookie" />
              </div>
            </li>
          </ul>
        </div>

        {/* End Product */}
      </div>
      <div className={complements_style.buttonGrid}>
        <Link to="/products">
          <button
            className={`${complements_style.button} ${complements_style.buttonBack}`}
          >
            Voltar
          </button>
        </Link>
        <Link to="/finalized">
          <button
            className={`${complements_style.button} ${complements_style.buttonProceed}`}
          >
            Finalizar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Complements;
