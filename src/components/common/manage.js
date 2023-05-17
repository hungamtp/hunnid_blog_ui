import AdminLayout from 'components/layouts/admin';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CurrentAdminTabData } from '@/utils/current-admin-tab';
import { useContext } from 'react';
import { useGetPostsAdmin } from 'services/getPostAdmin';
import { AdminLanguageData } from '@/utils/admin-language-context';
import { useState } from 'react';
import { Button, Pagination } from '@mui/material';
import { showOrHidePost } from 'services/useHideOrShowPost';
const Manage = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);
  const { adminLanguage } = useContext(AdminLanguageData);
  const { data: posts } = useGetPostsAdmin({ page: page, size: size, language: adminLanguage });
  const { currentAdminTab, setCurrentAdminTab } = useContext(CurrentAdminTabData);
  const handleChangePage = (event, value) => {
    event.preventDefault();
    setPage(value - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const show = postId => {
    showOrHidePost({ postId: postId, hidden: true });
  };

  const hide = postId => {
    showOrHidePost({ postId: postId, hidden: false });
  };
  return (
    <div style={{ display: currentAdminTab == 'Manage' ? 'block' : 'none' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Title</TableCell>
              <TableCell align="center">Create At</TableCell>
              <TableCell align="center">View</TableCell>
              <TableCell align="center">Hidden</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts &&
              posts.data.map(post => (
                <TableRow key={post.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">{post.title}</TableCell>
                  <TableCell align="right">{post.createAt}</TableCell>
                  <TableCell align="right">{post.viewCount}</TableCell>
                  <TableCell align="right">
                    {post.hidden ? (
                      <Button onClick={() => hide(post.id)}>Hide</Button>
                    ) : (
                      <Button onClick={() => show(post.id)}>Show</Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="col-12" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination count={posts && posts.totalPages} size="small" hidePrevButton hideNextButton onChange={handleChangePage} />
      </div>
    </div>
  );
};

Manage.Layout = AdminLayout;
export default Manage;
