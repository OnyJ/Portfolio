import "../styles/globals.scss";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { fr, en } from "../lib/text";

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState("fr");
  const [text, setText] = useState(fr);

  const getLanguageFromLocalStorage = () => {
    return localStorage.getItem("lang");
  };
  const changeLanguage = async () => {
    language === "fr" ? setLanguage("en") : setLanguage("fr");
    language === "fr" ? await setText(en) : await setText(fr);
  };

  useEffect(async () => {
    const storageLanguage = getLanguageFromLocalStorage();
    if (storageLanguage === undefined || storageLanguage === null) {
      setLanguage("fr");
      await setText(fr);
    } else {
      setLanguage(storageLanguage);
      storageLanguage === "fr"
        ? await setText(fr)
        : await setText(en);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <>
      <Navbar changeLanguage={changeLanguage} language={language} />
      <Component {...pageProps} text={text} language={language} />
    </>
  );
}

export default MyApp;
