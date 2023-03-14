const Footer = () => {
  return (
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
                          <input type="submit" id="submitsubscribe" name="send" className="btn btn-soft-primary" defaultValue="Subscribe" />
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
  );
};
export default Footer;
