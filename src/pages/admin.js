import AdminLayout from 'components/layouts/admin';

const { default: SlateEditor } = require('@/components/SlateEditor/Editor.jsx');

const Admin = () => {
  return <SlateEditor />;
};

Admin.Layout = AdminLayout;
export default Admin;
