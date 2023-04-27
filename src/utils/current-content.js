import { createContext, useState } from 'react';
export const CurrentPostContentData = createContext([
  {
    type: 'paragaph',
    children: [{ text: '' }],
  },
]);
function CurrentContentContext({ children }) {
  const [currentContent, setCurrentContent] = useState([
    {
      type: 'paragaph',
      children: [{ text: '' }],
    },
  ]);

  return <CurrentPostContentData.Provider value={{ currentContent, setCurrentContent }}>{children}</CurrentPostContentData.Provider>;
}

export default CurrentContentContext;
