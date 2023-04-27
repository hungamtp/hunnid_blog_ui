import { createContext, useState } from 'react';
export const LanguageData = createContext('');
function Context({ children }) {
  const [language, setLanguage] = useState('EN');

  return <LanguageData.Provider value={{ language, setLanguage }}>{children}</LanguageData.Provider>;
}

export default Context;
