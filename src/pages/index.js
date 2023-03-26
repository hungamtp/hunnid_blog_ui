import MainLayout from 'components/layouts/main';
import Post from 'components/common/post';
import { useState, useEffect } from 'react';
import { useGetPosts } from 'services/getPost';
import { Pagination, Skeleton } from '@mui/material';
import { useContext } from 'react';
import Filter from 'components/common/filter';
import { LanguageData } from '@/utils/context';
import { useGetTags } from 'services/getTag';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
const Home = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(12);
  const { language } = useContext(LanguageData);
  const { data: tags } = useGetTags();
  const [isClickRestFilter, setIsClickRestFilter] = useState(false);
  const { data: posts } = useGetPosts({ page: page, size: size, language: language ? language : 'VN', tags });
  const handleChangePage = (event, value) => {
    event.preventDefault();
    setPage(value - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSkeleton = () => {
    var skeletons = [];
    for (var i = 0; i < 9; i++) {
      skeletons.push(
        <div className="col-lg-4 col-md-6 mb-4 pb-2" key={i}>
          <Skeleton variant="rectangular" width={360} height={360} className="  rounded border-0 shadow " />
        </div>
      );
    }
    return skeletons;
  };

  return (
    <>
      <div>
        <section className="section">
          <div className="container">
            <div className="filter-section" style={{ display: 'flex', height: '50px', position: 'relative' }}>
              <Filter tags={tags} />
              <div className="reset-button" style={{ position: 'absolute', right: '0', top: '0' }}>
                <RotateLeftIcon />
              </div>
            </div>
            <div className="row">
              {posts
                ? posts.data.map((post, index) => {
                    post.index = index;
                    return <Post post={post} key={post.id} />;
                  })
                : renderSkeleton()}

              <div className="col-12" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Pagination count={posts && posts.totalPages} size="small" hidePrevButton hideNextButton onChange={handleChangePage} />
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
