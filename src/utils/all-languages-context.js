import { createContext, useState } from 'react';
export const AllLanguageData = createContext([]);
function AllLanguageContext({ children }) {
  const [languages, setLanguages] = useState([]);

  return <AllLanguageData.Provider value={{ languages, setLanguages }}>{children}</AllLanguageData.Provider>;
}

export default AllLanguageContext;
