import AdminLayout from 'components/layouts/admin';
const { default: SlateEditor } = require('@/components/SlateEditor/Editor.jsx');
import { Button } from '@mui/material';
import LanguageSeletor from '@/components/common/language-seletor';
import PostEditor from '@/components/common/post-editor';
import { useContext } from 'react';
import { useGetContentType } from 'services/getContentType';
import { useGetLanguages } from 'services/getLanguage';
import { CreatePostData } from '@/utils/create-post-context';
import { PostContentTypeData } from '@/utils/post-content-type-context';
import { serializer } from '@/components/SlateEditor/utils/serializer';
const Admin = () => {
  useGetContentType();
  useGetLanguages();
  const { savedPost, setSavedPost } = useContext(CreatePostData);
  const { postContentType } = useContext(PostContentTypeData);
  const handleCreatePost = () => {
    const postContentId = postContentType.filter(type => type.type == 'POST_CONTENT')[0].id;
    const newContent = [...savedPost.contents];
    for (let content of newContent) {
      if (content.contentTypeId == postContentId) {
        content.translatedString = serializer(content.translatedString);
      }
    }
    setSavedPost({ ...savedPost, contents: newContent });
  };
  return (
    <>
      <div id="toolbar-admin">
        <div>
          <Button variant="contained" color="warning" size="small" style={{ marginRight: '10px' }} onClick={handleCreatePost}>
            Create
          </Button>
          <Button variant="contained" size="small">
            Preview
          </Button>
        </div>
        <LanguageSeletor />
      </div>
      <PostEditor />
    </>
  );
};

Admin.Layout = AdminLayout;
export default Admin;
