import MainLayout from 'components/layouts/main';
import Link from 'next/link';
import Post from 'components/common/post';
import { useState } from 'react';
import { useGetPosts } from 'services/getPost';
import { Pagination } from '@mui/material';
const Home = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);
  const [languageId, setLanguageId] = useState('26519154-b139-11ed-9976-588fc631a4a5');

  const { data, isLoading, isFetching } = useGetPosts({ page: page, size: size, languageId: languageId });
  const handleChangePage = (event, value) => {
    setPage(value);
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
              {data &&
                data.data.map(post => {
                  return <Post post={post} key={post.id} isLoading={isLoading} />;
                })}

              {/* PAGINATION START */}
              <div className="col-12">
                <div class="flex justify-center">
                  <Pagination count={data && data.totalPages} size="small" hidePrevButton hideNextButton onChange={handleChangePage} />
                </div>
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
