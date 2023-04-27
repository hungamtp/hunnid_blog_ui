import { createContext, useState } from 'react';
export const PostContentTypeData = createContext([]);
function PostContentTypeContext({ children }) {
  const [postContentType, setPostContentType] = useState(PostContentTypeData);

  return <PostContentTypeData.Provider value={{ postContentType, setPostContentType }}>{children}</PostContentTypeData.Provider>;
}

export default PostContentTypeContext;
