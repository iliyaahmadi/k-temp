import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState("fa");
  const [direction, setDirection] = useState("rtl");

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
    document
      .querySelector("html")
      .setAttribute("dir", `${language === "en" ? "ltr" : "rtl"}`);
    language === "en" ? setDirection("ltr") : setDirection("rtl");
  }, [language]);

  return (
    <GlobalContext.Provider value={{ language, changeLanguage, direction }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
export const useGlobalContext = () => useContext(GlobalContext);
