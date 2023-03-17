import { createContext, useState } from 'react';
export const TagsData = createContext([]);
function TagContext({ children }) {
  const [tags, setTags] = useState();

  return <TagsData.Provider value={{ tags, setTags }}>{children}</TagsData.Provider>;
}

export default TagContext;
