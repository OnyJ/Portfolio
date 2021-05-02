import "../styles/globals.scss";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState("fr");
  const changeLanguage = () => {
    language === "fr" ? setLanguage("en") : setLanguage("fr");
  };

  useEffect(() => {
    const storageLanguage = localStorage.getItem("lang");
    setLanguage(storageLanguage);
  }, []);
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <>
      <Navbar changeLanguage={changeLanguage} language={language} />
      <Component {...pageProps} language={language} />
    </>
  );
}

export default MyApp;
