import Image from 'next/image';
import Link from 'next/link';
import { Fade } from '@mui/material';
import { useState } from 'react';
import { LanguageData } from '@/utils/languageContext';
import { useContext } from 'react';
function MainLayout({ children }) {
  const [checked, setChecked] = useState(false);
  const { setLanguage } = useContext(LanguageData);
  const handleChange = language => {
    setChecked(prev => !prev);
    setLanguage(language);
  };
  return (
    <>
      <header id="topnav" className="defaultscroll sticky">
        <div className="container">
          <Link className="logo logo-item" href="/">
            <Image src="/asset/icon/temp-icon.png" height={30} width={30} className="logo-light-mode" alt="" />
          </Link>
          <ul className="buy-button">
            <Fade in={checked} timeout={800}>
              <div className="language-item" onClick={() => handleChange('EN')} style={{ display: !checked ? 'none' : 'flex' }}>
                vn
              </div>
            </Fade>
            <Fade in={!checked} timeout={800}>
              <div className="language-item" onClick={() => handleChange('VN')} style={{ display: checked ? 'none' : 'flex' }}>
                en
              </div>
            </Fade>
          </ul>
          <div id="navigation">
            <ul className="navigation-menu">
              <li className="has-submenu parent-parent-menu-item">
                <div className="header-item">cff</div>
              </li>
              <li className="has-submenu parent-parent-menu-item">
                <div className="header-item">
                  <Link className="header-item" href="/photo">
                    photo
                  </Link>
                </div>
              </li>
              <li className="has-submenu parent-parent-menu-item">
                <div className="header-item">tutor</div>

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
                      <div>
                        <a href="account-profile.html" className="sub-menu-item">
                          Profile
                        </a>
                      </div>
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
                <div className="header-item">
                  <Link className="header-item" href="/porfolio">
                    porfolio
                  </Link>
                </div>
              </li>
              <li className="has-submenu parent-parent-menu-item">
                <div className="header-item">
                  <Link className="header-item" href="/about">
                    me
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div>{children}</div>
      <footer className="footer footer-layout">
        <div className="footer-py-30 footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="text-sm-start">
                  <p className="mb-0">social</p>
                  <div className="social-section">
                    <div className="social-item">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                        <path
                          fill="white"
                          d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"
                        ></path>
                      </svg>
                    </div>
                    <div className="social-item">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                        <path
                          fill="white"
                          d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
                        ></path>
                      </svg>
                    </div>
                    <div className="social-item">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                        <path
                          fill="white"
                          d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"
                        ></path>
                      </svg>
                    </div>
                    <div className="social-item">fb</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="text-sm-start">
                  <p className="mb-0">This is a mesasdsage;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainLayout;
