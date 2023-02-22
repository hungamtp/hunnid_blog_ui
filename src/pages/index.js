import { Inter } from '@next/font/google';

export default function Home() {
  const toggleMenu = e => {
    document.getElementById('isToggle').classList.toggle('open');
    var isOpen = document.getElementById('navigation');
    if (isOpen.style.display === 'block') {
      isOpen.style.display = 'none';
    } else {
      isOpen.style.display = 'block';
    }
  };

  function toggleSwitcher() {
    var i = document.getElementById('style-switcher');
    if (i.style.left === '-189px') {
      i.style.left = '0px';
    } else {
      i.style.left = '-189px';
    }
  }

  return (
    <>
      <main>
        <div>
          <meta charSet="utf-8" />
          <title>Landrick - Saas &amp; Software Landing Page Template</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Premium Bootstrap 5 Landing Page Template" />
          <meta name="keywords" content="Saas, Software, multi-uses, HTML, Clean, Modern" />
          <meta name="author" content="Shreethemes" />
          <meta name="email" content="support@shreethemes.in" />
          <meta name="website" content="https://shreethemes.in" />
          <meta name="Version" content="v3.8.0" />
          {/* favicon */}
          <link rel="shortcut icon" href="images/favicon.ico" />
          {/* Bootstrap */}
          <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          {/* Icons */}
          <link href="css/materialdesignicons.min.css" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css" />
          {/* Main Css */}
          <link href="css/style.css" rel="stylesheet" type="text/css" id="theme-opt" />
          <link href="css/colors/default.css" rel="stylesheet" id="color-opt" />
          <header id="topnav" className="defaultscroll sticky">
            <div className="container">
              {/* Logo container*/}
              <a className="logo" href="index.html">
                <img src="images/logo-dark.png" height={24} className="logo-light-mode" alt="" />
                <img src="images/logo-light.png" height={24} className="logo-dark-mode" alt="" />
              </a>
              {/* Logo End */}
              {/* End Logo container*/}
              <div className="menu-extras">
                <div className="menu-item">
                  {/* Mobile menu toggle*/}
                  <a className="navbar-toggle" id="isToggle" onclick={e => toggleMenu(e)}>
                    <div className="lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </a>
                  {/* End mobile menu toggle*/}
                </div>
              </div>
              {/*Login button Start*/}
              <ul className="buy-button list-inline mb-0">
                <li className="list-inline-item mb-0">
                  <a href="javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <div className="btn btn-icon btn-pills btn-soft-primary">
                      <i data-feather="settings" className="fea icon-sm" />
                    </div>
                  </a>
                </li>
                <li className="list-inline-item ps-1 mb-0">
                  <a href="https://1.envato.market/4n73n" target="_blank">
                    <div className="btn btn-icon btn-pills btn-primary">
                      <i data-feather="shopping-cart" className="fea icon-sm" />
                    </div>
                  </a>
                </li>
              </ul>
              {/*Login button End*/}
              <div id="navigation">
                {/* Navigation Menu*/}
                <ul className="navigation-menu">
                  <li>
                    <a href="index.html" className="sub-menu-item">
                      Home
                    </a>
                  </li>
                  <li className="has-submenu parent-parent-menu-item">
                    <a href="javascript:void(0)">Landing</a>
                    <span className="menu-arrow" />
                    <ul className="submenu megamenu">
                      <li>
                        <ul>
                          <li>
                            <a href="index-saas.html" className="sub-menu-item">
                              Saas
                            </a>
                          </li>
                          <li>
                            <a href="index-classic-saas.html" className="sub-menu-item">
                              Classic Saas
                            </a>
                          </li>
                          <li>
                            <a href="index-agency.html" className="sub-menu-item">
                              Agency
                            </a>
                          </li>
                          <li>
                            <a href="index-apps.html" className="sub-menu-item">
                              Application
                            </a>
                          </li>
                          <li>
                            <a href="index-classic-app.html" className="sub-menu-item">
                              Classic Application
                            </a>
                          </li>
                          <li>
                            <a href="index-studio.html" className="sub-menu-item">
                              Studio
                            </a>
                          </li>
                          <li>
                            <a href="index-marketing.html" className="sub-menu-item">
                              Marketing
                            </a>
                          </li>
                          <li>
                            <a href="index-enterprise.html" className="sub-menu-item">
                              Enterprise
                            </a>
                          </li>
                          <li>
                            <a href="index-services.html" className="sub-menu-item">
                              Service
                            </a>
                          </li>
                          <li>
                            <a href="index-payments.html" className="sub-menu-item">
                              Payments
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>
                            <a href="index-developer.html" className="sub-menu-item">
                              Developer
                            </a>
                          </li>
                          <li>
                            <a href="index-seo-agency.html" className="sub-menu-item">
                              SEO Agency
                            </a>
                          </li>
                          <li>
                            <a href="index-hospital.html" className="sub-menu-item">
                              Hospital
                            </a>
                          </li>
                          <li>
                            <a href="index-coworking.html" className="sub-menu-item">
                              Coworking
                            </a>
                          </li>
                          <li>
                            <a href="index-it-solution.html" className="sub-menu-item">
                              IT Solution{' '}
                            </a>
                          </li>
                          <li>
                            <a href="index-it-solution-two.html" className="sub-menu-item">
                              IT Solution Two{' '}
                            </a>
                          </li>
                          <li>
                            <a href="index-business.html" className="sub-menu-item">
                              Business
                            </a>
                          </li>
                          <li>
                            <a href="index-modern-business.html" className="sub-menu-item">
                              Modern Business
                            </a>
                          </li>
                          <li>
                            <a href="index-finance.html" className="sub-menu-item">
                              Finance{' '}
                            </a>
                          </li>
                          <li>
                            <a href="index-logistics.html" className="sub-menu-item">
                              Delivery &amp; Logistics <span className="mdi mdi-star text-warning" />
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>
                            <a href="index-hotel.html" className="sub-menu-item">
                              Hotel
                            </a>
                          </li>
                          <li>
                            <a href="index-construction.html" className="sub-menu-item">
                              Construction
                            </a>
                          </li>
                          <li>
                            <a href="index-real-estate.html" className="sub-menu-item">
                              Real Estate
                            </a>
                          </li>
                          <li>
                            <a href="index-videocall.html" className="sub-menu-item">
                              Video Conference{' '}
                            </a>
                          </li>
                          <li>
                            <a href="index-blockchain.html" className="sub-menu-item">
                              Blockchain{' '}
                            </a>
                          </li>
                          <li>
                            <a href="index-crypto-two.html" className="sub-menu-item">
                              Cryptocurrency Two{' '}
                            </a>
                          </li>
                          <li>
                            <a href="index-integration.html" className="sub-menu-item">
                              Integration
                            </a>
                          </li>
                          <li>
                            <a href="index-task-management.html" className="sub-menu-item">
                              Task Management{' '}
                            </a>
                          </li>
                          <li>
                            <a href="index-email-inbox.html" className="sub-menu-item">
                              Email Inbox{' '}
                            </a>
                          </li>
                          <li>
                            <a href="index-travel.html" className="sub-menu-item">
                              Travel{' '}
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>
                            <a href="index-insurance.html" className="sub-menu-item">
                              Insurance
                            </a>
                          </li>
                          <li>
                            <a href="index-online-learning.html" className="sub-menu-item">
                              Online Learning
                            </a>
                          </li>
                          <li>
                            <a href="index-course.html" className="sub-menu-item">
                              Course
                            </a>
                          </li>
                          <li>
                            <a href="index-single-product.html" className="sub-menu-item">
                              Product
                            </a>
                          </li>
                          <li>
                            <a href="index-social-marketing.html" className="sub-menu-item">
                              Social Media
                            </a>
                          </li>
                          <li>
                            <a href="index-digital-agency.html" className="sub-menu-item">
                              Digital Agency
                            </a>
                          </li>
                          <li>
                            <a href="index-car-riding.html" className="sub-menu-item">
                              Car Ride
                            </a>
                          </li>
                          <li>
                            <a href="index-customer.html" className="sub-menu-item">
                              Customer
                            </a>
                          </li>
                          <li>
                            <a href="index-software.html" className="sub-menu-item">
                              Software
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>
                            <a href="index-landing-one.html" className="sub-menu-item">
                              Landing One{' '}
                            </a>
                          </li>
                          <li>
                            <a href="index-landing-two.html" className="sub-menu-item">
                              Landing Two{' '}
                            </a>
                          </li>
                          <li>
                            <a href="index-landing-three.html" className="sub-menu-item">
                              Landing Three{' '}
                            </a>
                          </li>
                          <li>
                            <a href="index-landing-four.html" className="sub-menu-item">
                              Landing Four
                            </a>
                          </li>
                          <li>
                            <a href="index-personal.html" className="sub-menu-item">
                              Personal
                            </a>
                          </li>
                          <li>
                            <a href="index-freelancer.html" className="sub-menu-item">
                              Freelance{' '}
                            </a>
                          </li>
                          <li>
                            <a href="index-event.html" className="sub-menu-item">
                              Event
                            </a>
                          </li>
                          <li>
                            <a href="index-ebook.html" className="sub-menu-item">
                              E-Book
                            </a>
                          </li>
                          <li>
                            <a href="index-onepage.html" className="sub-menu-item">
                              Saas <span className="badge bg-warning ms-2">Onepage</span>
                            </a>
                          </li>
                        </ul>
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
                              {' '}
                              About Us
                            </a>
                          </li>
                          <li>
                            <a href="page-aboutus-two.html" className="sub-menu-item">
                              {' '}
                              About Us Two{' '}
                            </a>
                          </li>
                          <li>
                            <a href="page-services.html" className="sub-menu-item">
                              Services
                            </a>
                          </li>
                          <li>
                            <a href="page-history.html" className="sub-menu-item">
                              History{' '}
                            </a>
                          </li>
                          <li>
                            <a href="page-team.html" className="sub-menu-item">
                              {' '}
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
                              Members{' '}
                            </a>
                          </li>
                          <li>
                            <a href="account-works.html" className="sub-menu-item">
                              Works{' '}
                            </a>
                          </li>
                          <li>
                            <a href="account-messages.html" className="sub-menu-item">
                              Messages{' '}
                            </a>
                          </li>
                          <li>
                            <a href="account-chat.html" className="sub-menu-item">
                              Chat{' '}
                            </a>
                          </li>
                          <li>
                            <a href="account-payments.html" className="sub-menu-item">
                              Payments{' '}
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
                              Blog Detail 2{' '}
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
                              All Cases{' '}
                            </a>
                          </li>
                          <li>
                            <a href="page-case-detail.html" className="sub-menu-item">
                              Case Detail{' '}
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="course-detail.html" className="sub-menu-item">
                          Course Detail <span className="mdi mdi-star text-warning" />{' '}
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
                                  BS5 Login{' '}
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
                                  BS5 Singup{' '}
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
                                  BS5 Reset Password{' '}
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
                          Footer Layouts{' '}
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
                                  <img src="images/demos/corporate.png" className="img-fluid rounded shadow-md" alt="" />
                                </span>
                                <span className="mt-lg-2 d-block">Corporate</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="index-crypto.html" className="sub-menu-item">
                              <div className="text-lg-center">
                                <span className="d-none d-lg-block">
                                  <img src="images/demos/crypto.png" className="img-fluid rounded shadow-md" alt="" />
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
                                  <img src="images/demos/shop.png" className="img-fluid rounded shadow-md" alt="" />
                                </span>
                                <span className="mt-lg-2 d-block">Shop</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="index-portfolio.html" className="sub-menu-item">
                              <div className="text-lg-center">
                                <span className="d-none d-lg-block">
                                  <img src="images/demos/portfolio.png" className="img-fluid rounded shadow-md" alt="" />
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
                                  <img src="images/demos/help-center.png" className="img-fluid rounded shadow-md" alt="" />
                                </span>
                                <span className="mt-lg-2 d-block">Help Center</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="index-hosting.html" className="sub-menu-item">
                              <div className="text-lg-center">
                                <span className="d-none d-lg-block">
                                  <img src="images/demos/hosting.png" className="img-fluid rounded shadow-md" alt="" />
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
                                  <img src="images/demos/job.png" className="img-fluid rounded shadow-md" alt="" />
                                </span>
                                <span className="mt-lg-2 d-block">Job &amp; Career</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="forums.html" className="sub-menu-item">
                              <div className="text-lg-center">
                                <span className="d-none d-lg-block">
                                  <img src="images/demos/forums.png" className="img-fluid rounded shadow-md" alt="" />
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
                                  <img src="images/demos/blog.png" className="img-fluid rounded shadow-md" alt="" />
                                </span>
                                <span className="mt-lg-2 d-block">Blog</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="sub-menu-item">
                              <div className="text-lg-center">
                                <span className="d-none d-lg-block">
                                  <img src="images/demos/comingsoon.png" className="img-fluid rounded shadow-md" alt="" />
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="../dashboard/index.html" target="_blank" className="sub-menu-item">
                      Admin
                    </a>
                  </li>
                </ul>
                {/*end navigation menu*/}
              </div>
              {/*end navigation*/}
            </div>
            {/*end container*/}
          </header>
          {/*end header*/}
          {/* Navbar End */}
          {/* Hero Start */}
          <section className="bg-half-170 bg-light d-table w-100">
            <div className="container">
              <div className="row mt-5 justify-content-center">
                <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                    <h4 className="title mb-0"> Blog </h4>
                  </div>
                </div>{' '}
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
                      <a href="#">Page</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Blog</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Blog Grid
                    </li>
                  </ul>
                </nav>
              </div>
            </div>{' '}
            {/*end container*/}
          </section>
          {/*end section*/}
          {/* Hero End */}
          {/* Shape Start */}
          <div className="position-relative">
            <div className="shape overflow-hidden text-white">
              <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
              </svg>
            </div>
          </div>
          {/*Shape End*/}
          {/* Blog STart */}
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                  <div className="card blog rounded border-0 shadow overflow-hidden">
                    <div className="position-relative">
                      <img src="images/blog/01.jpg" className="card-img-top" alt="..." />
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
                {/*end col*/}
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                  <div className="card blog rounded border-0 shadow overflow-hidden">
                    <div className="position-relative">
                      <img src="images/blog/02.jpg" className="card-img-top" alt="..." />
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
                {/*end col*/}
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                  <div className="card blog rounded border-0 shadow overflow-hidden">
                    <div className="position-relative">
                      <img src="images/blog/03.jpg" className="card-img-top" alt="..." />
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
                {/*end col*/}
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                  <div className="card blog rounded border-0 shadow overflow-hidden">
                    <div className="position-relative">
                      <img src="images/blog/04.jpg" className="card-img-top" alt="..." />
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
                {/*end col*/}
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                  <div className="card blog rounded border-0 shadow overflow-hidden">
                    <div className="position-relative">
                      <img src="images/blog/05.jpg" className="card-img-top" alt="..." />
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
                {/*end col*/}
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                  <div className="card blog rounded border-0 shadow overflow-hidden">
                    <div className="position-relative">
                      <img src="images/blog/06.jpg" className="card-img-top" alt="..." />
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
                {/*end col*/}
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                  <div className="card blog rounded border-0 shadow overflow-hidden">
                    <div className="position-relative">
                      <img src="images/blog/07.jpg" className="card-img-top" alt="..." />
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
                {/*end col*/}
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                  <div className="card blog rounded border-0 shadow overflow-hidden">
                    <div className="position-relative">
                      <img src="images/blog/08.jpg" className="card-img-top" alt="..." />
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
                {/*end col*/}
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
                {/*end col*/}
                {/* PAGINATION END */}
              </div>
              {/*end row*/}
            </div>
            {/*end container*/}
          </section>
          {/*end section*/}
          {/* Blog End */}
          {/* Footer Start */}
          <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="footer-py-60">
                    <div className="row">
                      <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                        <a href="#" className="logo-footer">
                          <img src="images/logo-light.png" height={24} alt="" />
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
                          <img src="images/payments/american-ex.png" className="avatar avatar-ex-sm" title="American Express" alt="" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)">
                          <img src="images/payments/discover.png" className="avatar avatar-ex-sm" title="Discover" alt="" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)">
                          <img src="images/payments/master-card.png" className="avatar avatar-ex-sm" title="Master Card" alt="" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)">
                          <img src="images/payments/paypal.png" className="avatar avatar-ex-sm" title="Paypal" alt="" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)">
                          <img src="images/payments/visa.png" className="avatar avatar-ex-sm" title="Visa" alt="" />
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
                <img src="images/logo-dark.png" height={24} className="light-version" alt="" />
                <img src="images/logo-light.png" height={24} className="dark-version" alt="" />
              </h5>
              <button
                type="button"
                className="btn-close d-flex align-items-center text-dark"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="uil uil-times fs-4" />
              </button>
            </div>
            <div className="offcanvas-body p-4">
              <div className="row">
                <div className="col-12">
                  <img src="images/contact.svg" className="img-fluid d-block mx-auto" style={{ maxWidth: '256px' }} alt="" />
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
          <div id="style-switcher" className="bg-light border p-3 pt-2 pb-2" onclick={() => toggleSwitcher()}>
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
                  <a
                    href="javascript:void(0)"
                    className="btn btn-sm btn-block btn-dark light-version t-light mt-2"
                    onclick="setTheme('style')"
                  >
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
              <a className="settings bg-white title-bg-dark shadow d-block">
                <i className="mdi mdi-cog ms-1 mdi-24px position-absolute mdi-spin text-primary" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
