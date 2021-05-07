import {
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import { fr, en } from "../lib/text";

const TextContext = createContext({});

export function TextContextProvider({ children }) {
  const [language, setLanguage] = useState("fr");
  const [text, setText] = useState(fr);

  const changeLanguage = async () => {
    language === "fr" ? setLanguage("en") : setLanguage("fr");
    language === "fr" ? await setText(en) : await setText(fr);
  };

  const setTextPropsFromStorage = async () => {
    const storageLanguage = localStorage.getItem("lang");
    if (storageLanguage === undefined || storageLanguage === null) {
      setLanguage("fr");
      await setText(fr);
    } else {
      setLanguage(storageLanguage);
      storageLanguage === "fr"
        ? await setText(fr)
        : await setText(en);
    }
  };

  useEffect(() => {
    setTextPropsFromStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <TextContext.Provider
      value={{
        language: language,
        text: text,
        changeLanguage,
      }}
    >
      <div>{children}</div>
    </TextContext.Provider>
  );
}

export const useTextContext = () => useContext(TextContext);
