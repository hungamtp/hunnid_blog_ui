import MainLayout from 'components/layouts/main';
import Link from 'next/link';
import Post from 'components/common/post';
import { useState } from 'react';
import { useGetPosts } from 'services/getPost';
import { Pagination, Skeleton } from '@mui/material';
const Home = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);
  const [languageId, setLanguageId] = useState('26519154-b139-11ed-9976-588fc631a4a5');

  const { data, isLoading, isFetching } = useGetPosts({ page: page, size: size, languageId: languageId });
  const handleChangePage = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSkeleton = () => {
    var skeletons = [];
    for (var i = 0; i < 9; i++) {
      skeletons.push(
        <div className="col-lg-4 col-md-6 mb-4 pb-2">
          <Skeleton variant="rectangular" width={360} height={360} className="  rounded border-0 shadow " />
        </div>
      );
    }
    return skeletons;
  };
  return (
    <>
      <div>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
            </svg>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="row">
              {data
                ? data.data.map(post => {
                    return <Post post={post} key={post.id} />;
                  })
                : renderSkeleton()}

              {/* PAGINATION START */}
              <div className="col-12" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Pagination
                  count={data && data.totalPages}
                  isFetching={isFetching}
                  size="small"
                  hidePrevButton
                  hideNextButton
                  onChange={handleChangePage}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Home.Layout = MainLayout;
export default Home;
