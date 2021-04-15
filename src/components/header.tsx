import coffee from "./../assets/images/coffee.svg";
import header_style from "./../styles/components/header.module.scss";

function Header() {
  return (
    <header className={header_style.nav}>
      <img src={coffee} alt="coffee" />
      <div className={header_style.logo}>
        <p>Smart Coffe</p>
      </div>
      <p className={header_style.by}>by Alboom</p>
    </header>
  );
}

export default Header;
