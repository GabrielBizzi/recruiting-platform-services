import singup_style from "./../styles/pages/singup.module.scss";
import coffee from "./../assets/images/coffee.svg";
import { Link } from "react-router-dom";
import Input from "./../components/input";

export default function SingUp() {
  return (
    <div className={singup_style.wrap}>
      <div className={singup_style.container}>
        <img src={coffee} alt="coffee" />
        <fieldset>
          <form>
            <Input name="name" label="Nome completo" id="name" />
            <Input name="email" label="E-mail" id="email" />
            <Link to="/products">
              <button className={singup_style.button}>Cadastrar</button>
            </Link>
          </form>
        </fieldset>
      </div>
    </div>
  );
}
