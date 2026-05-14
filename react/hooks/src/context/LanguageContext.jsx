import { createContext, useState } from "react";

//1. Crear el contexto
export const LanguageContext = createContext();

//2. crear el proveedor
export const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState('es'); // Idioma por defecto: Español

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'es' ? 'en' : 'es'));
  }

  return (
    <LanguageContext.Provider value={{
      language,
      toggleLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );

}