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
        <section className="home-slider position-relative">
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={3000}>
                <div
                  className="bg-home-75vh d-flex align-items-center"
                  style={{ background: 'url("/asset/images/blog/01.jpg") center center' }}
                >
                  <div className="bg-overlay" />
                  <div className="container">
                    <div className="row mt-5 justify-content-center">
                      <div className="col-12">
                        <div className="title-heading text-center">
                          <h2 className="text-white title-dark mb-3">Weekend Travel</h2>
                          <ul className="list-unstyled">
                            <li className="list-inline-item small user text-light me-2">
                              <i className="uil uil-user text-white title-dark" /> Calvin Carlo
                            </li>
                            <li className="list-inline-item small date text-light">
                              <i className="uil uil-calendar-alt text-white title-dark" /> 25th June 2021
                            </li>
                          </ul>
                          <p className="para-desc mx-auto text-white-50 mb-0">
                            Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.
                          </p>
                          <div className="mt-4">
                            <a href="javascript:void(0)" className="btn btn-primary">
                              Read More{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                </div>
                {/*end slide*/}
              </div>
              <div className="carousel-item" data-bs-interval={3000}>
                <div
                  className="bg-home-75vh d-flex align-items-center"
                  style={{ background: 'url("/asset/images/blog/01.jpg") center center' }}
                >
                  <div className="bg-overlay" />
                  <div className="container">
                    <div className="row mt-5 justify-content-center">
                      <div className="col-12">
                        <div className="title-heading text-center">
                          <h2 className="text-white title-dark mb-3">Business Meeting</h2>
                          <ul className="list-unstyled">
                            <li className="list-inline-item small user text-light me-2">
                              <i className="uil uil-user text-white title-dark" /> Calvin Carlo
                            </li>
                            <li className="list-inline-item small date text-light">
                              <i className="uil uil-calendar-alt text-white title-dark" /> 25th June 2021
                            </li>
                          </ul>
                          <p className="para-desc mx-auto text-white-50 mb-0">
                            Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.
                          </p>
                          <div className="mt-4">
                            <a href="javascript:void(0)" className="btn btn-primary">
                              Read More{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                </div>
                {/*end slide*/}
              </div>
              <div className="carousel-item" data-bs-interval={3000}>
                <div
                  className="bg-home-75vh d-flex align-items-center"
                  style={{ background: 'url("/asset/images/blog/01.jpg") center center' }}
                >
                  <div className="bg-overlay" />
                  <div className="container">
                    <div className="row mt-5 justify-content-center">
                      <div className="col-12">
                        <div className="title-heading text-center">
                          <h2 className="text-white title-dark mb-3">Delicious &amp; Organic</h2>
                          <ul className="list-unstyled">
                            <li className="list-inline-item small user text-light me-2">
                              <i className="uil uil-user text-white title-dark" /> Calvin Carlo
                            </li>
                            <li className="list-inline-item small date text-light">
                              <i className="uil uil-calendar-alt text-white title-dark" /> 25th June 2021
                            </li>
                          </ul>
                          <p className="para-desc mx-auto text-white-50 mb-0">
                            Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.
                          </p>
                          <div className="mt-4">
                            <a href="javascript:void(0)" className="btn btn-primary">
                              Read More{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                </div>
                {/*end slide*/}
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </section>
        {/*end section*/}

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
