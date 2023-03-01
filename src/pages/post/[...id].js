import { useRouter } from 'next/router';
import MainLayout from 'components/layouts/main';
const BlogDetail = () => {
  const router = useRouter;
  return (
    <div>
      <section className="bg-half-170 d-table w-100" style={{ background: 'url("/asset/images/1.jpg") center center' }}>
        <div className="bg-overlay" />
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="pages-heading">
                <h3 className="title text-white title-dark mb-0">
                  {' '}
                  Smartest Applications for <br />
                  Your Business{' '}
                </h3>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="position-breadcrumb">
            <nav aria-label="breadcrumb" className="d-inline-block">
              <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                <li className="breadcrumb-item">
                  <a href="index.html">Landrick</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Blog</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Blog Details
                </li>
              </ul>
            </nav>
          </div>
        </div>{' '}
        {/*end container*/}
      </section>
      {/*end section*/}
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
          </svg>
        </div>
      </div>
      {/* Hero End */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-md-2 d-none d-md-block">
                  <ul className="list-unstyled text-center sticky-bar social-icon mb-0">
                    <li className="mb-3 h6">Share</li>
                    <li>
                      <a href="javascript:void(0)" className="rounded">
                        <i data-feather="facebook" className="fea icon-sm fea-social" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="rounded">
                        <i data-feather="instagram" className="fea icon-sm fea-social" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="rounded">
                        <i data-feather="twitter" className="fea icon-sm fea-social" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="rounded">
                        <i data-feather="linkedin" className="fea icon-sm fea-social" />
                      </a>
                    </li>
                  </ul>
                  {/*end icon*/}
                </div>
                <div className="col-md-10">
                  <p className="text-muted">
                    This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is
                    said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made'
                    text to sing with the melody.
                  </p>
                  <ul className="list-unstyled d-flex justify-content-between mt-4">
                    <li className="list-inline-item user me-2">
                      <a href="javascript:void(0)" className="text-muted">
                        <i className="uil uil-user text-dark" /> Calvin Carlo
                      </a>
                    </li>
                    <li className="list-inline-item date text-muted">
                      <i className="uil uil-calendar-alt text-dark" /> 25th June 2021
                    </li>
                  </ul>
                  <img src="/asset/images/blog/bg1.jpg" className="img-fluid rounded-md shadow" alt="" />
                  <h5 className="mt-4">Mornings contain the secret to an extraordinarily successful life</h5>
                  <p className="text-muted">
                    Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned
                    to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader
                    will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces
                    (typography), or the distribution of text on the page (layout or type area).
                  </p>
                  <h5 className="mt-4">Comments :</h5>
                  <ul className="media-list list-unstyled mb-0">
                    <li className="mt-4">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <a className="pe-3" href="#">
                            <img
                              src="/asset/images/client/01.jpg"
                              className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                              alt="img"
                            />
                          </a>
                          <div className="flex-1 commentor-detail">
                            <h6 className="mb-0">
                              <a href="javascript:void(0)" className="text-dark media-heading">
                                Lorenzo Peterson
                              </a>
                            </h6>
                            <small className="text-muted">15th August, 2021 at 01:25 pm</small>
                          </div>
                        </div>
                        <a href="#" className="text-muted">
                          <i className="mdi mdi-reply" /> Reply
                        </a>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted fst-italic p-3 bg-light rounded">
                          " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                          some form, by injected humour "
                        </p>
                      </div>
                    </li>
                    <li className="mt-4">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <a className="pe-3" href="#">
                            <img
                              src="/asset/images/client/02.jpg"
                              className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                              alt="img"
                            />
                          </a>
                          <div className="flex-1 commentor-detail">
                            <h6 className="mb-0">
                              <a href="javascript:void(0)" className="media-heading text-dark">
                                Tammy Camacho
                              </a>
                            </h6>
                            <small className="text-muted">15th August, 2021 at 05:44 pm</small>
                          </div>
                        </div>
                        <a href="#" className="text-muted">
                          <i className="mdi mdi-reply" /> Reply
                        </a>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted fst-italic p-3 bg-light rounded">
                          " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                          some form, by injected humour "
                        </p>
                      </div>
                    </li>
                    <li className="mt-4">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <a className="pe-3" href="#">
                            <img
                              src="/asset/images/client/03.jpg"
                              className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                              alt="img"
                            />
                          </a>
                          <div className="flex-1 commentor-detail">
                            <h6 className="mb-0">
                              <a href="javascript:void(0)" className="media-heading text-dark">
                                Tammy Camacho
                              </a>
                            </h6>
                            <small className="text-muted">16th August, 2021 at 03:44 pm</small>
                          </div>
                        </div>
                        <a href="#" className="text-muted">
                          <i className="mdi mdi-reply" /> Reply
                        </a>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted fst-italic p-3 bg-light rounded">
                          " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                          some form, by injected humour "
                        </p>
                      </div>
                      <ul className="list-unstyled ps-4 ps-md-5 sub-comment">
                        <li className="mt-4">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <a className="pe-3" href="#">
                                <img
                                  src="/asset/images/client/01.jpg"
                                  className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                  alt="img"
                                />
                              </a>
                              <div className="flex-1 commentor-detail">
                                <h6 className="mb-0">
                                  <a href="javascript:void(0)" className="text-dark media-heading">
                                    Lorenzo Peterson
                                  </a>
                                </h6>
                                <small className="text-muted">17th August, 2021 at 01:25 pm</small>
                              </div>
                            </div>
                            <a href="#" className="text-muted">
                              <i className="mdi mdi-reply" /> Reply
                            </a>
                          </div>
                          <div className="mt-3">
                            <p className="text-muted fst-italic p-3 bg-light rounded">
                              " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                              some form, by injected humour "
                            </p>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <h5 className="mt-4">Leave A Comment :</h5>
                  <form className="mt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Your Comment</label>
                          <div className="form-icon position-relative">
                            <i data-feather="message-circle" className="fea icon-sm icons" />
                            <textarea
                              id="message"
                              placeholder="Your Comment"
                              rows={5}
                              name="message"
                              className="form-control ps-5"
                              required
                              defaultValue={''}
                            />
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Name <span className="text-danger">*</span>
                          </label>
                          <div className="form-icon position-relative">
                            <i data-feather="user" className="fea icon-sm icons" />
                            <input id="name2" name="name" type="text" placeholder="Name" className="form-control ps-5" required />
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Email <span className="text-danger">*</span>
                          </label>
                          <div className="form-icon position-relative">
                            <i data-feather="mail" className="fea icon-sm icons" />
                            <input id="email2" type="email" placeholder="Email" name="email" className="form-control ps-5" required />
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-md-12">
                        <div className="send d-grid">
                          <button type="submit" className="btn btn-primary">
                            Send Message
                          </button>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </form>
                  {/*end form*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Start */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-py-60">
                <div className="row">
                  <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                    <a href="#" className="logo-footer">
                      <img src="/asset/images/logo-light.png" height={24} alt="" />
                    </a>
                    <p className="mt-4">
                      Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.
                    </p>
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
                  {/*end col*/}
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
                  {/*end col*/}
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
                  {/*end col*/}
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
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
        <div className="footer-py-30 footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="text-sm-start">
                  <p className="mb-0">
                    © Landrick. Design with <i className="mdi mdi-heart text-danger" /> by{' '}
                    <a href="https://shreethemes.in/" target="_blank" className="text-reset">
                      Shreethemes
                    </a>
                    .
                  </p>
                </div>
              </div>
              {/*end col*/}
              <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled text-sm-end mb-0">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <img src="/asset/images/payments/american-ex.png" className="avatar avatar-ex-sm" title="American Express" alt="" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <img src="/asset/images/payments/discover.png" className="avatar avatar-ex-sm" title="Discover" alt="" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <img src="/asset/images/payments/master-card.png" className="avatar avatar-ex-sm" title="Master Card" alt="" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <img src="/asset/images/payments/paypal.png" className="avatar avatar-ex-sm" title="Paypal" alt="" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <img src="/asset/images/payments/visa.png" className="avatar avatar-ex-sm" title="Visa" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </div>
      </footer>
      {/*end footer*/}
      {/* Footer End */}
      {/* Offcanvas Start */}
      <div className="offcanvas offcanvas-end bg-white shadow" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header p-4 border-bottom">
          <h5 id="offcanvasRightLabel" className="mb-0">
            <img src="/asset/images/logo-dark.png" height={24} className="light-version" alt="" />
            <img src="/asset/images/logo-light.png" height={24} className="dark-version" alt="" />
          </h5>
          <button type="button" className="btn-close d-flex align-items-center text-dark" data-bs-dismiss="offcanvas" aria-label="Close">
            <i className="uil uil-times fs-4" />
          </button>
        </div>
        <div className="offcanvas-body p-4">
          <div className="row">
            <div className="col-12">
              <img src="/asset/images/contact.svg" className="img-fluid d-block mx-auto" style={{ maxWidth: '256px' }} alt="" />
              <div className="card border-0 mt-5" style={{ zIndex: 1 }}>
                <div className="card-body p-0">
                  <form method="post" name="myForm" onsubmit="return validateForm()">
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
                      {/*end col*/}
                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label">Subject</label>
                          <div className="form-icon position-relative">
                            <i data-feather="book" className="fea icon-sm icons" />
                            <input name="subject" id="subject" className="form-control ps-5" placeholder="subject :" />
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
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
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </form>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
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
      {/* Offcanvas End */}
      {/* Back to top */}
      <a href="#" onclick="topFunction()" id="back-to-top" className="back-to-top fs-5">
        <i data-feather="arrow-up" className="fea icon-sm icons align-middle" />
      </a>
      {/* Back to top */}
      {/* Style switcher */}
      <div id="style-switcher" className="bg-light border p-3 pt-2 pb-2" onclick="toggleSwitcher()">
        <div>
          <h6 className="title text-center">Select Your Color</h6>
          <ul className="pattern">
            <li className="list-inline-item">
              <a className="color1" href="javascript: void(0);" onclick="setColor('default')" />
            </li>
            <li className="list-inline-item">
              <a className="color2" href="javascript: void(0);" onclick="setColor('green')" />
            </li>
            <li className="list-inline-item">
              <a className="color3" href="javascript: void(0);" onclick="setColor('purple')" />
            </li>
            <li className="list-inline-item">
              <a className="color4" href="javascript: void(0);" onclick="setColor('red')" />
            </li>
            <li className="list-inline-item">
              <a className="color5" href="javascript: void(0);" onclick="setColor('skyblue')" />
            </li>
            <li className="list-inline-item">
              <a className="color6" href="javascript: void(0);" onclick="setColor('skobleoff')" />
            </li>
            <li className="list-inline-item">
              <a className="color7" href="javascript: void(0);" onclick="setColor('cyan')" />
            </li>
            <li className="list-inline-item">
              <a className="color8" href="javascript: void(0);" onclick="setColor('slateblue')" />
            </li>
            <li className="list-inline-item">
              <a className="color9" href="javascript: void(0);" onclick="setColor('yellow')" />
            </li>
          </ul>
          <h6 className="title text-center pt-3 mb-0 border-top">Theme Option</h6>
          <ul className="text-center list-unstyled">
            <li className="d-grid">
              <a
                href="javascript:void(0)"
                className="btn btn-sm btn-block btn-primary rtl-version t-rtl-light mt-2"
                onclick="setTheme('style-rtl')"
              >
                RTL
              </a>
            </li>
            <li className="d-grid">
              <a
                href="javascript:void(0)"
                className="btn btn-sm btn-block btn-primary ltr-version t-ltr-light mt-2"
                onclick="setTheme('style')"
              >
                LTR
              </a>
            </li>
            <li className="d-grid">
              <a
                href="javascript:void(0)"
                className="btn btn-sm btn-block btn-primary dark-rtl-version t-rtl-dark mt-2"
                onclick="setTheme('style-dark-rtl')"
              >
                RTL
              </a>
            </li>
            <li className="d-grid">
              <a
                href="javascript:void(0)"
                className="btn btn-sm btn-block btn-primary dark-ltr-version t-ltr-dark mt-2"
                onclick="setTheme('style-dark')"
              >
                LTR
              </a>
            </li>
            <li className="d-grid">
              <a
                href="javascript:void(0)"
                className="btn btn-sm btn-block btn-dark dark-version t-dark mt-2"
                onclick="setTheme('style-dark')"
              >
                Dark
              </a>
            </li>
            <li className="d-grid">
              <a href="javascript:void(0)" className="btn btn-sm btn-block btn-dark light-version t-light mt-2" onclick="setTheme('style')">
                Light
              </a>
            </li>
          </ul>
          <h6 className="title text-center pt-3 mb-0 border-top">Admin</h6>
          <ul className="text-center list-unstyled mb-0">
            <li>
              <a href="javascript:void(0)" target="_blank" className="btn btn-sm btn-block btn-success mt-2">
                Admin Dashboard
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <a href="javascript: void(0);" className="settings bg-white title-bg-dark shadow d-block">
            <i className="mdi mdi-cog ms-1 mdi-24px position-absolute mdi-spin text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
};
BlogDetail.Layout = MainLayout;
export default BlogDetail;
