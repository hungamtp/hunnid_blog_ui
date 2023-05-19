import MainLayout from 'components/layouts/main';
import Post from 'components/common/post';
import { useState, useEffect } from 'react';
import { useGetPosts } from 'services/getPost';
import { Pagination, Skeleton } from '@mui/material';
import { useContext } from 'react';
import Filter from 'components/common/filter';
import { LanguageData } from '@/utils/languageContext';
import { useGetTags } from 'services/getTag';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
const Home = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);
  const { language } = useContext(LanguageData);
  const { data: tags } = useGetTags();
  const { data: posts } = useGetPosts({ page: page, size: size, language: language, tags });
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
            <div className="filter-section" style={{ marginBottom: '20px' }}>
              <div className="text-center subcribe-form">
                <form style={{ maxWidth: '800px' }} autocomplete="off">
                  <div className="mb-0">
                    <input
                      type="text"
                      id="help"
                      autocomplete="off"
                      name="name"
                      class="border bg-white rounded-pill"
                      required=""
                      placeholder="Search"
                    />
                    <button type="submit" className="btn btn-pills btn-primary">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              {posts
                ? posts.data.map(post => {
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
