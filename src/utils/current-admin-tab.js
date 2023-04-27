import { createContext, useState } from 'react';
export const CurrentAdminTabData = createContext('');
function CurrentAdminTabContext({ children }) {
  const [currentAdminTab, setCurrentAdminTab] = useState('Create');

  return <CurrentAdminTabData.Provider value={{ currentAdminTab, setCurrentAdminTab }}>{children}</CurrentAdminTabData.Provider>;
}

export default CurrentAdminTabContext;
