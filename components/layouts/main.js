import Image from 'next/image';
import Link from 'next/link';
function MainLayout({ children }) {
  return (
    <>
      <header id="topnav" className="defaultscroll sticky bg-white">
        <div className="container">
          <Link className="logo" href="/">
            <Image src="/asset/icon/temp-icon.png" height={30} width={30} className="logo-light-mode" alt="" />
          </Link>
          <ul className="buy-button list-inline mb-0">
            <div className="list-inline-item ps-1 mb-0 ">
              <li>
                <div className="btn btn-icon btn-pills btn-light">VN</div>
              </li>
            </div>
          </ul>
          <div id="navigation">
            <ul className="navigation-menu">
              <li>
                <Link href="/" className="sub-menu-item">
                  Home
                </Link>
              </li>
              <li className="has-submenu parent-parent-menu-item">
                <a href="">Pages</a>
                <span className="menu-arrow" />
                <ul className="submenu">
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Company </a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="page-aboutus.html" className="sub-menu-item">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="page-aboutus-two.html" className="sub-menu-item">
                          About Us Two
                        </a>
                      </li>
                      <li>
                        <a href="page-services.html" className="sub-menu-item">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="page-history.html" className="sub-menu-item">
                          History
                        </a>
                      </li>
                      <li>
                        <a href="page-team.html" className="sub-menu-item">
                          Team
                        </a>
                      </li>
                      <li>
                        <a href="page-pricing.html" className="sub-menu-item">
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Account </a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="account-profile.html" className="sub-menu-item">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a href="account-members.html" className="sub-menu-item">
                          Members
                        </a>
                      </li>
                      <li>
                        <a href="account-works.html" className="sub-menu-item">
                          Works
                        </a>
                      </li>
                      <li>
                        <a href="account-messages.html" className="sub-menu-item">
                          Messages
                        </a>
                      </li>
                      <li>
                        <a href="account-chat.html" className="sub-menu-item">
                          Chat
                        </a>
                      </li>
                      <li>
                        <a href="account-payments.html" className="sub-menu-item">
                          Payments
                        </a>
                      </li>
                      <li>
                        <a href="account-setting.html" className="sub-menu-item">
                          Setting
                        </a>
                      </li>
                      <li>
                        <a href="page-invoice.html" className="sub-menu-item">
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Email Template</a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="email-confirmation.html" className="sub-menu-item">
                          Confirmation
                        </a>
                      </li>
                      <li>
                        <a href="email-password-reset.html" className="sub-menu-item">
                          Reset Password
                        </a>
                      </li>
                      <li>
                        <a href="email-alert.html" className="sub-menu-item">
                          Alert
                        </a>
                      </li>
                      <li>
                        <a href="email-invoice.html" className="sub-menu-item">
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Blog </a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="blog-grid.html" className="sub-menu-item">
                          Blog Grid
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid-sidebar.html" className="sub-menu-item">
                          Blog with Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-list.html" className="sub-menu-item">
                          Blog Listing
                        </a>
                      </li>
                      <li>
                        <a href="blog-list-sidebar.html" className="sub-menu-item">
                          Blog List &amp; Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-detail.html" className="sub-menu-item">
                          Blog Detail
                        </a>
                      </li>
                      <li>
                        <a href="blog-detail-two.html" className="sub-menu-item">
                          Blog Detail 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Case Study </a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="page-cases.html" className="sub-menu-item">
                          All Cases
                        </a>
                      </li>
                      <li>
                        <a href="page-case-detail.html" className="sub-menu-item">
                          Case Detail
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="course-detail.html" className="sub-menu-item">
                      Course Detail <span className="mdi mdi-star text-warning" />
                    </a>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Auth Pages </a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li className="has-submenu parent-menu-item">
                        <a href=""> Login </a>
                        <span className="submenu-arrow" />
                        <ul className="submenu">
                          <li>
                            <a href="auth-login.html" className="sub-menu-item">
                              Login
                            </a>
                          </li>
                          <li>
                            <a href="auth-cover-login.html" className="sub-menu-item">
                              Login Cover
                            </a>
                          </li>
                          <li>
                            <a href="auth-login-three.html" className="sub-menu-item">
                              Login Simple
                            </a>
                          </li>
                          <li>
                            <a href="auth-bs-login.html" className="sub-menu-item">
                              BS5 Login
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu parent-menu-item">
                        <a href=""> Signup </a>
                        <span className="submenu-arrow" />
                        <ul className="submenu">
                          <li>
                            <a href="auth-signup.html" className="sub-menu-item">
                              Signup
                            </a>
                          </li>
                          <li>
                            <a href="auth-cover-signup.html" className="sub-menu-item">
                              Signup Cover
                            </a>
                          </li>
                          <li>
                            <a href="auth-signup-three.html" className="sub-menu-item">
                              Signup Simple
                            </a>
                          </li>
                          <li>
                            <a href="auth-bs-signup.html" className="sub-menu-item">
                              BS5 Singup
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu parent-menu-item">
                        <a href=""> Reset password </a>
                        <span className="submenu-arrow" />
                        <ul className="submenu">
                          <li>
                            <a href="auth-re-password.html" className="sub-menu-item">
                              Reset Password
                            </a>
                          </li>
                          <li>
                            <a href="auth-cover-re-password.html" className="sub-menu-item">
                              Reset Password Cover
                            </a>
                          </li>
                          <li>
                            <a href="auth-re-password-three.html" className="sub-menu-item">
                              Reset Password Simple
                            </a>
                          </li>
                          <li>
                            <a href="auth-bs-reset.html" className="sub-menu-item">
                              BS5 Reset Password
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Utility </a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="page-terms.html" className="sub-menu-item">
                          Terms of Services
                        </a>
                      </li>
                      <li>
                        <a href="page-privacy.html" className="sub-menu-item">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Special</a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="page-comingsoon.html" className="sub-menu-item">
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a href="page-comingsoon2.html" className="sub-menu-item">
                          Coming Soon Two
                        </a>
                      </li>
                      <li>
                        <a href="page-maintenance.html" className="sub-menu-item">
                          Maintenance
                        </a>
                      </li>
                      <li>
                        <a href="page-error.html" className="sub-menu-item">
                          Error
                        </a>
                      </li>
                      <li>
                        <a href="page-thankyou.html" className="sub-menu-item">
                          Thank you
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Contact </a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="page-contact-detail.html" className="sub-menu-item">
                          Contact Detail
                        </a>
                      </li>
                      <li>
                        <a href="page-contact-one.html" className="sub-menu-item">
                          Contact One
                        </a>
                      </li>
                      <li>
                        <a href="page-contact-two.html" className="sub-menu-item">
                          Contact Two
                        </a>
                      </li>
                      <li>
                        <a href="page-contact-three.html" className="sub-menu-item">
                          Contact Three
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Multi Level Menu</a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="" className="sub-menu-item">
                          Level 1.0
                        </a>
                      </li>
                      <li className="has-submenu parent-menu-item">
                        <a href=""> Level 2.0 </a>
                        <span className="submenu-arrow" />
                        <ul className="submenu">
                          <li>
                            <a href="" className="sub-menu-item">
                              Level 2.1
                            </a>
                          </li>
                          <li>
                            <a href="" className="sub-menu-item">
                              Level 2.2
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="footer.html" className="sub-menu-item">
                      Footer Layouts
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu parent-parent-menu-item">
                <a href="">Pages</a>
                <span className="menu-arrow" />
                <ul className="submenu">
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Company </a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="page-aboutus.html" className="sub-menu-item">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="page-aboutus-two.html" className="sub-menu-item">
                          About Us Two
                        </a>
                      </li>
                      <li>
                        <a href="page-services.html" className="sub-menu-item">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="page-history.html" className="sub-menu-item">
                          History
                        </a>
                      </li>
                      <li>
                        <a href="page-team.html" className="sub-menu-item">
                          Team
                        </a>
                      </li>
                      <li>
                        <a href="page-pricing.html" className="sub-menu-item">
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Account </a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="account-profile.html" className="sub-menu-item">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a href="account-members.html" className="sub-menu-item">
                          Members
                        </a>
                      </li>
                      <li>
                        <a href="account-works.html" className="sub-menu-item">
                          Works
                        </a>
                      </li>
                      <li>
                        <a href="account-messages.html" className="sub-menu-item">
                          Messages
                        </a>
                      </li>
                      <li>
                        <a href="account-chat.html" className="sub-menu-item">
                          Chat
                        </a>
                      </li>
                      <li>
                        <a href="account-payments.html" className="sub-menu-item">
                          Payments
                        </a>
                      </li>
                      <li>
                        <a href="account-setting.html" className="sub-menu-item">
                          Setting
                        </a>
                      </li>
                      <li>
                        <a href="page-invoice.html" className="sub-menu-item">
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Email Template</a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="email-confirmation.html" className="sub-menu-item">
                          Confirmation
                        </a>
                      </li>
                      <li>
                        <a href="email-password-reset.html" className="sub-menu-item">
                          Reset Password
                        </a>
                      </li>
                      <li>
                        <a href="email-alert.html" className="sub-menu-item">
                          Alert
                        </a>
                      </li>
                      <li>
                        <a href="email-invoice.html" className="sub-menu-item">
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Blog </a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="blog-grid.html" className="sub-menu-item">
                          Blog Grid
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid-sidebar.html" className="sub-menu-item">
                          Blog with Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-list.html" className="sub-menu-item">
                          Blog Listing
                        </a>
                      </li>
                      <li>
                        <a href="blog-list-sidebar.html" className="sub-menu-item">
                          Blog List &amp; Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-detail.html" className="sub-menu-item">
                          Blog Detail
                        </a>
                      </li>
                      <li>
                        <a href="blog-detail-two.html" className="sub-menu-item">
                          Blog Detail 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Case Study </a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="page-cases.html" className="sub-menu-item">
                          All Cases
                        </a>
                      </li>
                      <li>
                        <a href="page-case-detail.html" className="sub-menu-item">
                          Case Detail
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="course-detail.html" className="sub-menu-item">
                      Course Detail <span className="mdi mdi-star text-warning" />
                    </a>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Auth Pages </a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li className="has-submenu parent-menu-item">
                        <a href=""> Login </a>
                        <span className="submenu-arrow" />
                        <ul className="submenu">
                          <li>
                            <a href="auth-login.html" className="sub-menu-item">
                              Login
                            </a>
                          </li>
                          <li>
                            <a href="auth-cover-login.html" className="sub-menu-item">
                              Login Cover
                            </a>
                          </li>
                          <li>
                            <a href="auth-login-three.html" className="sub-menu-item">
                              Login Simple
                            </a>
                          </li>
                          <li>
                            <a href="auth-bs-login.html" className="sub-menu-item">
                              BS5 Login
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu parent-menu-item">
                        <a href=""> Signup </a>
                        <span className="submenu-arrow" />
                        <ul className="submenu">
                          <li>
                            <a href="auth-signup.html" className="sub-menu-item">
                              Signup
                            </a>
                          </li>
                          <li>
                            <a href="auth-cover-signup.html" className="sub-menu-item">
                              Signup Cover
                            </a>
                          </li>
                          <li>
                            <a href="auth-signup-three.html" className="sub-menu-item">
                              Signup Simple
                            </a>
                          </li>
                          <li>
                            <a href="auth-bs-signup.html" className="sub-menu-item">
                              BS5 Singup
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu parent-menu-item">
                        <a href=""> Reset password </a>
                        <span className="submenu-arrow" />
                        <ul className="submenu">
                          <li>
                            <a href="auth-re-password.html" className="sub-menu-item">
                              Reset Password
                            </a>
                          </li>
                          <li>
                            <a href="auth-cover-re-password.html" className="sub-menu-item">
                              Reset Password Cover
                            </a>
                          </li>
                          <li>
                            <a href="auth-re-password-three.html" className="sub-menu-item">
                              Reset Password Simple
                            </a>
                          </li>
                          <li>
                            <a href="auth-bs-reset.html" className="sub-menu-item">
                              BS5 Reset Password
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Utility </a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="page-terms.html" className="sub-menu-item">
                          Terms of Services
                        </a>
                      </li>
                      <li>
                        <a href="page-privacy.html" className="sub-menu-item">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Special</a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="page-comingsoon.html" className="sub-menu-item">
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a href="page-comingsoon2.html" className="sub-menu-item">
                          Coming Soon Two
                        </a>
                      </li>
                      <li>
                        <a href="page-maintenance.html" className="sub-menu-item">
                          Maintenance
                        </a>
                      </li>
                      <li>
                        <a href="page-error.html" className="sub-menu-item">
                          Error
                        </a>
                      </li>
                      <li>
                        <a href="page-thankyou.html" className="sub-menu-item">
                          Thank you
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Contact </a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="page-contact-detail.html" className="sub-menu-item">
                          Contact Detail
                        </a>
                      </li>
                      <li>
                        <a href="page-contact-one.html" className="sub-menu-item">
                          Contact One
                        </a>
                      </li>
                      <li>
                        <a href="page-contact-two.html" className="sub-menu-item">
                          Contact Two
                        </a>
                      </li>
                      <li>
                        <a href="page-contact-three.html" className="sub-menu-item">
                          Contact Three
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href=""> Multi Level Menu</a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="" className="sub-menu-item">
                          Level 1.0
                        </a>
                      </li>
                      <li className="has-submenu parent-menu-item">
                        <a href=""> Level 2.0 </a>
                        <span className="submenu-arrow" />
                        <ul className="submenu">
                          <li>
                            <a href="" className="sub-menu-item">
                              Level 2.1
                            </a>
                          </li>
                          <li>
                            <a href="" className="sub-menu-item">
                              Level 2.2
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="footer.html" className="sub-menu-item">
                      Footer Layouts
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu parent-menu-item">
                <a href="">Docs</a>
                <span className="menu-arrow" />
                <ul className="submenu">
                  <li>
                    <a href="documentation.html" className="sub-menu-item">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="changelog.html" className="sub-menu-item">
                      Changelog
                    </a>
                  </li>
                  <li>
                    <a href="components.html" className="sub-menu-item">
                      Components
                    </a>
                  </li>
                  <li>
                    <a href="widget.html" className="sub-menu-item">
                      Widget
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu parent-parent-menu-item">
                <Link href="/about">About Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div>{children}</div>

      <div className="offcanvas offcanvas-end bg-white shadow" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header p-4 border-bottom">
          <h5 id="offcanvasRightLabel" className="mb-0">
            {/* <img src="asset/images/logo-dark.png" height={24} className="light-version" alt="" />
            <img src="asset/images/logo-light.png" height={24} className="dark-version" alt="" /> */}
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
    </>
  );
}

export default MainLayout;
