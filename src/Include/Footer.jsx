import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <>
      <section className="footerBlock">
        <footer className="footer-section">
          <div className="container">
            <div className="footer-cta pt-5 ">
              <div className="row">
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="cta-text">
                      <h4>{t("Footer.FindUs")}</h4>
                      <span>
                        Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                        Bangalore-560016{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="fas fa-phone"></i>
                    <div className="cta-text">
                      <h4>{t("Footer.CallUs")}</h4>
                      <span>+91 1XXXXXXX0</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="far fa-envelope-open"></i>
                    <div className="cta-text">
                      <h4>{t("Footer.EmailUs")}</h4>
                      <span>contact@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-content pt-5 pb-1">
              <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                  <div className="footer-widget">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img
                          src="/image/logo/logo_f.svg"
                          className="img-fluid"
                          alt="logo"
                        />
                      </a>
                    </div>
                    <div className="footer-text">
                      <p>
                      {t("Footer.Description")}
                      </p>
                    </div>
                    <div className="footer-social-icon">
                      <span>{t("Footer.FollowUs")}</span>
                      <ul className="social_icon">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>{t("Footer.UsefulLinks")}</h3>
                    </div>
                    <ul>
                      <li>
                        <a href="#">{t("Footer.OurTeam")}</a>
                      </li>
                      <li>
                        <a href="#">{t("Footer.OurGallery")}</a>
                      </li>
                      <li>
                        <a href="#">{t("Navbar.About")}</a>
                      </li>
                      <li>
                        <a href="#">{t("Footer.FAQ")}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>{t("Footer.Subscribe")}</h3>
                    </div>
                    <div className="footer-text mb-25">
                      <p>
                      {t("Footer.SubscribeText")}
                      </p>
                    </div>
                    <div className="subscribe-form">
                      <form action="#">
                        <input type="text" placeholder={t("Footer.EmailAddress")} />
                        <button>
                          <i className="fab fa-telegram-plane"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                  <div className="copyright-text">
                    <p>
                      Copyright &copy; {year}, All Right Reserved{" "}
                      <a href="#">Hasibul Hasan</a>
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Service</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Product</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
