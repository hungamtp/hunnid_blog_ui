import MainLayout from 'components/layouts/main';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { URL } from 'constraints/env';
import axios from 'axios';
import qs from 'qs';

async function fetchTodos(params) {
  const queryKey = qs.stringify(params['queryKey'][0]);
  const response = await axios.get(`${URL}posts?${queryKey}`);
  return response.data;
}
function Home() {
  const { data, isLoading, error } = useQuery([{ page: 0, size: 10, languageId: '26519154-b139-11ed-9976-588fc631a4a5' }], fetchTodos);

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
              <div className="col-lg-4 col-md-6 mb-4 pb-2">
                <div className="card blog rounded border-0 shadow overflow-hidden">
                  <div className="position-relative">
                    <img src="asset/images/blog/01.jpg" className="card-img-top" alt="..." />
                    <div className="overlay rounded-top" />
                  </div>
                  <div className="card-body content">
                    <h5>
                      <Link href="/post/acb" className="card-title title text-dark">
                        Design your apps in your own way
                      </Link>
                    </h5>
                    <div className="post-meta d-flex justify-content-between mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2 mb-0">
                          <a href="javascript:void(0)" className="text-muted like">
                            <i className="uil uil-heart me-1" />
                            33
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="text-muted comments">
                            <i className="uil uil-comment me-1" />
                            08
                          </a>
                        </li>
                      </ul>
                      <a href="blog-detail.html" className="text-muted readmore animate-waving-hand">
                        Read More <i className="uil uil-angle-right-b align-middle" />
                      </a>
                    </div>
                  </div>
                  <div className="author">
                    <small className="text-light user d-block">
                      <i className="uil uil-user" /> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="uil uil-calendar-alt" /> 25th June 2021
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 pb-2">
                <div className="card blog rounded border-0 shadow overflow-hidden">
                  <div className="position-relative">
                    <img src="asset/images/blog/02.jpg" className="card-img-top" alt="..." />
                    <div className="overlay rounded-top" />
                  </div>
                  <div className="card-body content">
                    <h5>
                      <a href="javascript:void(0)" className="card-title title text-dark">
                        How apps is changing the IT world
                      </a>
                    </h5>
                    <div className="post-meta d-flex justify-content-between mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2 mb-0">
                          <a href="javascript:void(0)" className="text-muted like">
                            <i className="uil uil-heart me-1" />
                            33
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="text-muted comments">
                            <i className="uil uil-comment me-1" />
                            08
                          </a>
                        </li>
                      </ul>
                      <a href="blog-detail.html" className="text-muted readmore">
                        Read More <i className="uil uil-angle-right-b align-middle" />
                      </a>
                    </div>
                  </div>
                  <div className="author">
                    <small className="text-light user d-block">
                      <i className="uil uil-user" /> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="uil uil-calendar-alt" /> 25th June 2021
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 pb-2">
                <div className="card blog rounded border-0 shadow overflow-hidden">
                  <div className="position-relative">
                    <img src="asset/images/blog/03.jpg" className="card-img-top" alt="..." />
                    <div className="overlay rounded-top" />
                  </div>
                  <div className="card-body content">
                    <h5>
                      <a href="javascript:void(0)" className="card-title title text-dark">
                        Smartest Applications for Business
                      </a>
                    </h5>
                    <div className="post-meta d-flex justify-content-between mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2 mb-0">
                          <a href="javascript:void(0)" className="text-muted like">
                            <i className="uil uil-heart me-1" />
                            33
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="text-muted comments">
                            <i className="uil uil-comment me-1" />
                            08
                          </a>
                        </li>
                      </ul>
                      <a href="blog-detail.html" className="text-muted readmore">
                        Read More <i className="uil uil-angle-right-b align-middle" />
                      </a>
                    </div>
                  </div>
                  <div className="author">
                    <small className="text-light user d-block">
                      <i className="uil uil-user" /> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="uil uil-calendar-alt" /> 25th June 2021
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 pb-2">
                <div className="card blog rounded border-0 shadow overflow-hidden">
                  <div className="position-relative">
                    <img src="asset/images/blog/04.jpg" className="card-img-top" alt="..." />
                    <div className="overlay rounded-top" />
                  </div>
                  <div className="card-body content">
                    <h5>
                      <a href="javascript:void(0)" className="card-title title text-dark">
                        How apps is changing the IT world
                      </a>
                    </h5>
                    <div className="post-meta d-flex justify-content-between mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2 mb-0">
                          <a href="javascript:void(0)" className="text-muted like">
                            <i className="uil uil-heart me-1" />
                            33
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="text-muted comments">
                            <i className="uil uil-comment me-1" />
                            08
                          </a>
                        </li>
                      </ul>
                      <a href="blog-detail.html" className="text-muted readmore">
                        Read More <i className="uil uil-angle-right-b align-middle" />
                      </a>
                    </div>
                  </div>
                  <div className="author">
                    <small className="text-light user d-block">
                      <i className="uil uil-user" /> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="uil uil-calendar-alt" /> 25th June 2021
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 pb-2">
                <div className="card blog rounded border-0 shadow overflow-hidden">
                  <div className="position-relative">
                    <img src="asset/images/blog/05.jpg" className="card-img-top" alt="..." />
                    <div className="overlay rounded-top" />
                  </div>
                  <div className="card-body content">
                    <h5>
                      <a href="javascript:void(0)" className="card-title title text-dark">
                        Design your apps in your own way
                      </a>
                    </h5>
                    <div className="post-meta d-flex justify-content-between mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2 mb-0">
                          <a href="javascript:void(0)" className="text-muted like">
                            <i className="uil uil-heart me-1" />
                            33
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="text-muted comments">
                            <i className="uil uil-comment me-1" />
                            08
                          </a>
                        </li>
                      </ul>
                      <a href="blog-detail.html" className="text-muted readmore">
                        Read More <i className="uil uil-angle-right-b align-middle" />
                      </a>
                    </div>
                  </div>
                  <div className="author">
                    <small className="text-light user d-block">
                      <i className="uil uil-user" /> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="uil uil-calendar-alt" /> 25th June 2021
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 pb-2">
                <div className="card blog rounded border-0 shadow overflow-hidden">
                  <div className="position-relative">
                    <img src="asset/images/blog/06.jpg" className="card-img-top" alt="..." />
                    <div className="overlay rounded-top" />
                  </div>
                  <div className="card-body content">
                    <h5>
                      <a href="javascript:void(0)" className="card-title title text-dark">
                        Smartest Applications for Business
                      </a>
                    </h5>
                    <div className="post-meta d-flex justify-content-between mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2 mb-0">
                          <a href="javascript:void(0)" className="text-muted like">
                            <i className="uil uil-heart me-1" />
                            33
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="text-muted comments">
                            <i className="uil uil-comment me-1" />
                            08
                          </a>
                        </li>
                      </ul>
                      <a href="blog-detail.html" className="text-muted readmore">
                        Read More <i className="uil uil-angle-right-b align-middle" />
                      </a>
                    </div>
                  </div>
                  <div className="author">
                    <small className="text-light user d-block">
                      <i className="uil uil-user" /> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="uil uil-calendar-alt" /> 25th June 2021
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 pb-2">
                <div className="card blog rounded border-0 shadow overflow-hidden">
                  <div className="position-relative">
                    <img src="asset/images/blog/07.jpg" className="card-img-top" alt="..." />
                    <div className="overlay rounded-top" />
                  </div>
                  <div className="card-body content">
                    <h5>
                      <a href="javascript:void(0)" className="card-title title text-dark">
                        Design your apps in your own way
                      </a>
                    </h5>
                    <div className="post-meta d-flex justify-content-between mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2 mb-0">
                          <a href="javascript:void(0)" className="text-muted like">
                            <i className="uil uil-heart me-1" />
                            33
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="text-muted comments">
                            <i className="uil uil-comment me-1" />
                            08
                          </a>
                        </li>
                      </ul>
                      <a href="blog-detail.html" className="text-muted readmore">
                        Read More <i className="uil uil-angle-right-b align-middle" />
                      </a>
                    </div>
                  </div>
                  <div className="author">
                    <small className="text-light user d-block">
                      <i className="uil uil-user" /> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="uil uil-calendar-alt" /> 25th June 2021
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 pb-2">
                <div className="card blog rounded border-0 shadow overflow-hidden">
                  <div className="position-relative">
                    <img src="asset/images/blog/08.jpg" className="card-img-top" alt="..." />
                    <div className="overlay rounded-top" />
                  </div>
                  <div className="card-body content">
                    <h5>
                      <a href="javascript:void(0)" className="card-title title text-dark">
                        Smartest Applications for Business
                      </a>
                    </h5>
                    <div className="post-meta d-flex justify-content-between mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2 mb-0">
                          <a href="javascript:void(0)" className="text-muted like">
                            <i className="uil uil-heart me-1" />
                            33
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="text-muted comments">
                            <i className="uil uil-comment me-1" />
                            08
                          </a>
                        </li>
                      </ul>
                      <a href="blog-detail.html" className="text-muted readmore">
                        Read More <i className="uil uil-angle-right-b align-middle" />
                      </a>
                    </div>
                  </div>
                  <div className="author">
                    <small className="text-light user d-block">
                      <i className="uil uil-user" /> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="uil uil-calendar-alt" /> 25th June 2021
                    </small>
                  </div>
                </div>
              </div>

              {/* PAGINATION START */}
              <div className="col-12">
                <ul className="pagination justify-content-center mb-0">
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                      Prev
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="javascript:void(0)">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)" aria-label="Next">
                      Next
                    </a>
                  </li>
                </ul>
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
                          <a href="javascript:void(0)" className="rounded">
                            <i data-feather="facebook" className="fea icon-sm fea-social" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="rounded">
                            <i data-feather="instagram" className="fea icon-sm fea-social" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="rounded">
                            <i data-feather="twitter" className="fea icon-sm fea-social" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="javascript:void(0)" className="rounded">
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
                          <a href="javascript:void(0)" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> About us
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Services
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Team
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Pricing
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Project
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Careers
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Blog
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Login
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <h5 className="footer-head">Usefull Links</h5>
                      <ul className="list-unstyled footer-list mt-4">
                        <li>
                          <a href="javascript:void(0)" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Terms of Services
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Documentation
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Changelog
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" className="text-foot">
                            <i className="uil uil-angle-right-b me-1" /> Components
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <h5 className="footer-head">Newsletter</h5>
                      <p className="mt-4">Sign up and receive the latest tips via email.</p>
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

                <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <ul className="list-unstyled text-sm-end mb-0">
                    <li className="list-inline-item">
                      <a href="javascript:void(0)">
                        <img src="asset/images/payments/american-ex.png" className="avatar avatar-ex-sm" title="American Express" alt="" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void(0)">
                        <img src="asset/images/payments/discover.png" className="avatar avatar-ex-sm" title="Discover" alt="" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void(0)">
                        <img src="asset/images/payments/master-card.png" className="avatar avatar-ex-sm" title="Master Card" alt="" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void(0)">
                        <img src="asset/images/payments/paypal.png" className="avatar avatar-ex-sm" title="Paypal" alt="" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void(0)">
                        <img src="asset/images/payments/visa.png" className="avatar avatar-ex-sm" title="Visa" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
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
          <div className="offcanvas-footer p-4 border-top text-center">
            <ul className="list-unstyled social-icon social mb-0">
              <li className="list-inline-item mb-0">
                <a href="https://1.envato.market/4n73n" target="_blank" className="rounded">
                  <i className="uil uil-shopping-cart align-middle" title="Buy Now" />
                </a>
              </li>
              <li className="list-inline-item mb-0">
                <a href="https://dribbble.com/shreethemes" target="_blank" className="rounded">
                  <i className="uil uil-dribbble align-middle" title="dribbble" />
                </a>
              </li>
              <li className="list-inline-item mb-0">
                <a href="https://www.facebook.com/shreethemes" target="_blank" className="rounded">
                  <i className="uil uil-facebook-f align-middle" title="facebook" />
                </a>
              </li>
              <li className="list-inline-item mb-0">
                <a href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded">
                  <i className="uil uil-instagram align-middle" title="instagram" />
                </a>
              </li>
              <li className="list-inline-item mb-0">
                <a href="https://twitter.com/shreethemes" target="_blank" className="rounded">
                  <i className="uil uil-twitter align-middle" title="twitter" />
                </a>
              </li>
              <li className="list-inline-item mb-0">
                <a href="mailto:support@shreethemes.in" className="rounded">
                  <i className="uil uil-envelope align-middle" title="email" />
                </a>
              </li>
              <li className="list-inline-item mb-0">
                <a href="https://shreethemes.in" target="_blank" className="rounded">
                  <i className="uil uil-globe align-middle" title="website" />
                </a>
              </li>
            </ul>
            {/*end icon*/}
          </div>
        </div>
      </div>
    </>
  );
}

Home.Layout = MainLayout;
export default Home;
