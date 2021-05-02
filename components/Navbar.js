import styles from "../styles/Navbar.module.scss";

export default function Navbar({ changeLanguage, language }) {
  return (
    <div className={styles.navbar}>
      <span>Développeur depuis 2017</span>
      <button onClick={() => changeLanguage()}>{language}</button>
    </div>
  );
}
