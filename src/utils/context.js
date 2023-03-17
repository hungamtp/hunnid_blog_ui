import { createContext, useState } from 'react';
export const LanguageData = createContext('VN');
function Context({ children }) {
  const [language, setLanguage] = useState();

  return <LanguageData.Provider value={{ language, setLanguage }}>{children}</LanguageData.Provider>;
}

export default Context;
