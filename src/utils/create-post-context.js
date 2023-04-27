import { createContext, useState } from 'react';
export const CreatePostData = createContext({
  coverImage: '',
  tagIds: [],
  contents: [],
});
function CreatePostContext({ children }) {
  const [savedPost, setSavedPost] = useState({
    coverImage: '',
    tagIds: [],
    contents: [],
  });

  return <CreatePostData.Provider value={{ savedPost, setSavedPost }}>{children}</CreatePostData.Provider>;
}

export default CreatePostContext;
