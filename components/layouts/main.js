function MainLayout({ children }) {
  const handleChangeTheme = () => {
    console.log('change theme');
  };
  return (
    <>
      <header id="topnav" className="defaultscroll sticky bg-white">
        <div className="container">
          <a className="logo" href="index.html">
            <img src="/asset/images/logo-dark.png" height={24} className="logo-light-mode" alt="" />
            <img src="/asset/images/logo-light.png" height={24} className="logo-dark-mode" alt="" />
          </a>
          <div className="menu-extras">
            <div className="menu-item">
              <a className="navbar-toggle" id="isToggle" onclick={e => toggleMenu(e)}>
                <div className="lines">
                  <span />
                  <span />
                  <span />
                </div>
              </a>
            </div>
          </div>
          <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item ps-1 mb-0">
              <div className="btn btn-icon btn-pills btn-primary">VN</div>
            </li>
            <li className="list-inline-item mb-0">
              <div className="btn btn-icon btn-pills ">
                <img className="animate-waving-hand" src="/asset/icon/sun.png" />
              </div>
            </li>
          </ul>
          <div id="navigation">
            <ul className="navigation-menu">
              <li>
                <a href="index.html" className="sub-menu-item">
                  Home
                </a>
              </li>
              <li className="has-submenu parent-parent-menu-item">
                <a href="javascript:void(0)">Pages</a>
                <span className="menu-arrow" />
                <ul className="submenu">
                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Company </a>
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
                    <a href="javascript:void(0)"> Account </a>
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
                    <a href="javascript:void(0)"> Email Template</a>
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
                    <a href="javascript:void(0)"> Blog </a>
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
                    <a href="javascript:void(0)"> Case Study </a>
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
                    <a href="javascript:void(0)"> Auth Pages </a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li className="has-submenu parent-menu-item">
                        <a href="javascript:void(0)"> Login </a>
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
                        <a href="javascript:void(0)"> Signup </a>
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
                        <a href="javascript:void(0)"> Reset password </a>
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
                    <a href="javascript:void(0)"> Utility </a>
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
                    <a href="javascript:void(0)"> Special</a>
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
                    <a href="javascript:void(0)"> Contact </a>
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
                    <a href="javascript:void(0)"> Multi Level Menu</a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="javascript:void(0)" className="sub-menu-item">
                          Level 1.0
                        </a>
                      </li>
                      <li className="has-submenu parent-menu-item">
                        <a href="javascript:void(0)"> Level 2.0 </a>
                        <span className="submenu-arrow" />
                        <ul className="submenu">
                          <li>
                            <a href="javascript:void(0)" className="sub-menu-item">
                              Level 2.1
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="sub-menu-item">
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
                <a href="javascript:void(0)">Pages</a>
                <span className="menu-arrow" />
                <ul className="submenu">
                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Company </a>
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
                    <a href="javascript:void(0)"> Account </a>
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
                    <a href="javascript:void(0)"> Email Template</a>
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
                    <a href="javascript:void(0)"> Blog </a>
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
                    <a href="javascript:void(0)"> Case Study </a>
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
                    <a href="javascript:void(0)"> Auth Pages </a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li className="has-submenu parent-menu-item">
                        <a href="javascript:void(0)"> Login </a>
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
                        <a href="javascript:void(0)"> Signup </a>
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
                        <a href="javascript:void(0)"> Reset password </a>
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
                    <a href="javascript:void(0)"> Utility </a>
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
                    <a href="javascript:void(0)"> Special</a>
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
                    <a href="javascript:void(0)"> Contact </a>
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
                    <a href="javascript:void(0)"> Multi Level Menu</a>
                    <span className="submenu-arrow" />
                    <ul className="submenu">
                      <li>
                        <a href="javascript:void(0)" className="sub-menu-item">
                          Level 1.0
                        </a>
                      </li>
                      <li className="has-submenu parent-menu-item">
                        <a href="javascript:void(0)"> Level 2.0 </a>
                        <span className="submenu-arrow" />
                        <ul className="submenu">
                          <li>
                            <a href="javascript:void(0)" className="sub-menu-item">
                              Level 2.1
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="sub-menu-item">
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
                <a href="javascript:void(0)">Docs</a>
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
                <a href="javascript:void(0)">Demos</a>
                <span className="menu-arrow" />
                <ul className="submenu megamenu">
                  <li>
                    <ul>
                      <li>
                        <a href="index-corporate.html" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img src="asset/images/demos/corporate.png" className="img-fluid rounded shadow-md" alt="" />
                            </span>
                            <span className="mt-lg-2 d-block">Corporate</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="index-crypto.html" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img src="asset/images/demos/crypto.png" className="img-fluid rounded shadow-md" alt="" />
                            </span>
                            <span className="mt-lg-2 d-block">Cryptocurrency</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <a href="index-shop.html" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img src="asset/images/demos/shop.png" className="img-fluid rounded shadow-md" alt="" />
                            </span>
                            <span className="mt-lg-2 d-block">Shop</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="index-portfolio.html" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img src="asset/images/demos/portfolio.png" className="img-fluid rounded shadow-md" alt="" />
                            </span>
                            <span className="mt-lg-2 d-block">Portfolio</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <a href="helpcenter-overview.html" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img src="asset/images/demos/help-center.png" className="img-fluid rounded shadow-md" alt="" />
                            </span>
                            <span className="mt-lg-2 d-block">Help Center</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="index-hosting.html" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img src="asset/images/demos/hosting.png" className="img-fluid rounded shadow-md" alt="" />
                            </span>
                            <span className="mt-lg-2 d-block">Hosting &amp; Domain</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <a href="index-job.html" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img src="asset/images/demos/job.png" className="img-fluid rounded shadow-md" alt="" />
                            </span>
                            <span className="mt-lg-2 d-block">Job &amp; Career</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="forums.html" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img src="asset/images/demos/forums.png" className="img-fluid rounded shadow-md" alt="" />
                            </span>
                            <span className="mt-lg-2 d-block">Forums</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <a href="index-blog.html" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img src="asset/images/demos/blog.png" className="img-fluid rounded shadow-md" alt="" />
                            </span>
                            <span className="mt-lg-2 d-block">Blog</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img src="asset/images/demos/comingsoon.png" className="img-fluid rounded shadow-md" alt="" />
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div>{children}</div>
    </>
  );
}

export default MainLayout;
