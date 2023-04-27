import AdminLayout from 'components/layouts/admin';
const { default: SlateEditor } = require('@/components/SlateEditor/Editor.jsx');
import { Button, FilledInput } from '@mui/material';
import LanguageSeletor from '@/components/common/language-seletor';
import PostEditor from '@/components/common/post-editor';
import { useEffect } from 'react';
import { useGetContentType } from 'services/getContentType';
import { useGetLanguages } from 'services/getLanguage';
const Admin = () => {
  useGetContentType();
  useGetLanguages();
  return (
    <>
      <div id="toolbar-admin">
        <div>
          <Button variant="contained" color="warning" size="small" style={{ marginRight: '10px' }}>
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
