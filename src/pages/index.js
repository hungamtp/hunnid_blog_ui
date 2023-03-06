import MainLayout from 'components/layouts/main';
import Link from 'next/link';
import Post from 'components/common/post';
import { useState } from 'react';
import { useGetPosts } from 'services/getPost';

const Home = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);
  const [languageId, setLanguageId] = useState('26519154-b139-11ed-9976-588fc631a4a5');
  const [totalPages, setTotalPages] = useState(0);
  const onChangePage = (e, i) => {
    e.preventDefault();
    if (i < totalPages - 1 && i >= 0) {
      setPage(i);
    }
  };

  const onNextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const onPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const { data, isLoading, isFetching } = useGetPosts({ page: page, size: size, languageId: languageId });
  console.log(data);
  const renderPagination = () => {
    if (!isLoading) {
      if (data.totalPages > 10) {
        var maxPage = data.totalPages - page > 5 ? page + 5 : page + (10 - (data.totalPages - page));
        for (var i = data.totalPages - page > 5 ? page - 5 : page - (10 - (data.totalPages - page)); i < maxPage; i++) {
          return (
            <>
              <li aria-current="page">
                <a
                  class="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  {i + 1}
                </a>
              </li>
            </>
          );
        }
      } else {
        for (var i = 0; i < data.totalPages; i++) {
          return (
            <>
              <li>
                <a
                  class="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  {i + 1}
                </a>
              </li>
            </>
          );
        }
      }
    }
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
                  <nav aria-label="Page navigation example">
                    <ul class="list-style-none flex">
                      <li>
                        <a class="pointer-events-none relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">
                          Previous
                        </a>
                      </li>
                      {renderPagination()}
                      <li>
                        <a
                          class="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                          href="#!"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-py-60">
                  <div className="row">
                    <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                      <a href="#" className="logo-footer">
                        <img src="asset/images/logo-light.png" height={24} alt="" />
                      </a>
                      <p className="mt-4">Go hard or go home</p>
                      <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                        <li className="list-inline-item">
                          <a href="" className="rounded">
                            <i data-feather="facebook" className="fea icon-sm fea-social" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="" className="rounded">
                            <i data-feather="instagram" className="fea icon-sm fea-social" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="" className="rounded">
                            <i data-feather="twitter" className="fea icon-sm fea-social" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="" className="rounded">
                            <i data-feather="linkedin" className="fea icon-sm fea-social" />
                          </a>
                        </li>
                      </ul>
                      {/*end icon*/}
                    </div>

                    <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <h5 className="footer-head">Company</h5>
                      <ul className="list-unstyled footer-list mt-4">
                        <li>
                          <a href="" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> About us
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Services
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Team
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Pricing
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Project
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Careers
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Blog
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Login
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <h5 className="footer-head">Usefull Links</h5>
                      <ul className="list-unstyled footer-list mt-4">
                        <li>
                          <a href="" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Terms of Services
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Documentation
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Changelog
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Components
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <h5 className="footer-head">Newsletter</h5>
                      <p className="mt-4">Sign up and receive the latest blogs via email.</p>
                      <form>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="foot-subscribe mb-3">
                              <label className="form-label">
                                Write your email <span className="text-danger">*</span>
                              </label>
                              <div className="form-icon position-relative">
                                <i data-feather="mail" className="fea icon-sm icons" />
                                <input
                                  type="email"
                                  name="email"
                                  id="emailsubscribe"
                                  className="form-control ps-5 rounded"
                                  placeholder="Your email : "
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="d-grid">
                              <input
                                type="submit"
                                id="submitsubscribe"
                                name="send"
                                className="btn btn-soft-primary"
                                defaultValue="Subscribe"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-py-30 footer-bar">
            <div className="container text-center">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="text-sm-start">
                    <p className="mb-0">This is a message;</p>
                  </div>
                </div>
                //payment
                {/* <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <ul className="list-unstyled text-sm-end mb-0">
                    <li className="list-inline-item">
                      <a href="">
                        <img src="asset/images/payments/american-ex.png" className="avatar avatar-ex-sm" title="American Express" alt="" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">
                        <img src="asset/images/payments/discover.png" className="avatar avatar-ex-sm" title="Discover" alt="" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">
                        <img src="asset/images/payments/master-card.png" className="avatar avatar-ex-sm" title="Master Card" alt="" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">
                        <img src="asset/images/payments/paypal.png" className="avatar avatar-ex-sm" title="Paypal" alt="" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">
                        <img src="asset/images/payments/visa.png" className="avatar avatar-ex-sm" title="Visa" alt="" />
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </footer>

        <div className="offcanvas offcanvas-end bg-white shadow" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header p-4 border-bottom">
            <h5 id="offcanvasRightLabel" className="mb-0">
              <img src="asset/images/logo-dark.png" height={24} className="light-version" alt="" />
              <img src="asset/images/logo-light.png" height={24} className="dark-version" alt="" />
            </h5>
            <button type="button" className="btn-close d-flex align-items-center text-dark" data-bs-dismiss="offcanvas" aria-label="Close">
              <i className="uil uil-times fs-4" />
            </button>
          </div>
          <div className="offcanvas-body p-4">
            <div className="row">
              <div className="col-12">
                <img src="asset/images/contact.svg" className="img-fluid d-block mx-auto" style={{ maxWidth: '256px' }} alt="" />
                <div className="card border-0 mt-5" style={{ zIndex: 1 }}>
                  <div className="card-body p-0">
                    {/* <form method="post" name="myForm" onsubmit="return validateForm()"> */}
                    <form method="post" name="myForm">
                      <p id="error-msg" className="mb-0" />
                      <div id="simple-msg" />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Your Name <span className="text-danger">*</span>
                            </label>
                            <div className="form-icon position-relative">
                              <i data-feather="user" className="fea icon-sm icons" />
                              <input name="name" id="name" type="text" className="form-control ps-5" placeholder="Name :" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Your Email <span className="text-danger">*</span>
                            </label>
                            <div className="form-icon position-relative">
                              <i data-feather="mail" className="fea icon-sm icons" />
                              <input name="email" id="email" type="email" className="form-control ps-5" placeholder="Email :" />
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="mb-3">
                            <label className="form-label">Subject</label>
                            <div className="form-icon position-relative">
                              <i data-feather="book" className="fea icon-sm icons" />
                              <input name="subject" id="subject" className="form-control ps-5" placeholder="subject :" />
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Comments <span className="text-danger">*</span>
                            </label>
                            <div className="form-icon position-relative">
                              <i data-feather="message-circle" className="fea icon-sm icons clearfix" />
                              <textarea
                                name="comments"
                                id="comments"
                                rows={4}
                                className="form-control ps-5"
                                placeholder="Message :"
                                defaultValue={''}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="d-grid">
                            <button type="submit" id="submit" name="send" className="btn btn-primary">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Home.Layout = MainLayout;
export default Home;
