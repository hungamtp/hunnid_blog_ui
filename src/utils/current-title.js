import { createContext, useState } from 'react';
export const CurrentPostTitleData = createContext('');
function CurrentTitleContext({ children }) {
  const [currentTitle, setCurrentTitle] = useState('');

  return <CurrentPostTitleData.Provider value={{ currentTitle, setCurrentTitle }}>{children}</CurrentPostTitleData.Provider>;
}

export default CurrentTitleContext;
