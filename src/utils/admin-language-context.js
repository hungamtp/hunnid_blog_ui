import { createContext, useState } from 'react';
export const AdminLanguageData = createContext('VN');
function AdminLanguageContext({ children }) {
  const [adminLanguage, setAdminLanguage] = useState('VN');

  return <AdminLanguageData.Provider value={{ adminLanguage, setAdminLanguage }}>{children}</AdminLanguageData.Provider>;
}

export default AdminLanguageContext;
