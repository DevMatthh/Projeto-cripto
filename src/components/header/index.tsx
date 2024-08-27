import styles from "./header.module.css";
import logoimg from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    // toda vez que clicarmos na imagem seremos direcionado a pagina home
    <header className={styles.container}>
      <Link to="/">
        <img src={logoimg} alt="logo Cripto App" />
      </Link>
    </header>
  );
}
