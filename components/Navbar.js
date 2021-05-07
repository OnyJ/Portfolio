import styles from "../styles/Navbar.module.scss";
import { useTextContext } from "../components/TextContext";

export default function Navbar() {
  const textProps = useTextContext();

  return (
    <div className={styles.navbar}>
      <span>Développeur depuis 2017</span>
      <button onClick={() => textProps.changeLanguage()}>
        {textProps.language}
      </button>
    </div>
  );
}
