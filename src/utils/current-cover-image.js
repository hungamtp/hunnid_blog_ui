import { createContext, useState } from 'react';
export const CurrentPostCoverImageData = createContext('');
function CurrentCoverImageContext({ children }) {
  const [currentCoverImage, setCurrentCoverImage] = useState('');

  return (
    <CurrentPostCoverImageData.Provider value={{ currentCoverImage, setCurrentCoverImage }}>{children}</CurrentPostCoverImageData.Provider>
  );
}

export default CurrentCoverImageContext;
