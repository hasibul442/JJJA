import React, { useEffect, useState } from "react";
import "./include.css";
import { useTranslation } from "react-i18next";
import { BsCartPlus, BsCartPlusFill, BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
function Navbar() {
  const [language, setLanguage] = useState("English");
  const { i18n, t } = useTranslation();

  const handleLanguage = (e) => {
    const lang = e.target.name;
    localStorage.setItem("language", lang);
    languageName(lang);
    i18n.changeLanguage(lang);
  };

  const languageName = (lang) => {
    if (lang === "en") {
      setLanguage("English");
    } else if (lang === "pt") {
      setLanguage("Português");
    }
  };

  const getLanguageFromSession = () => {
    const sessionlang = localStorage.getItem("language");
    languageName(sessionlang);
  };

  useEffect(() => {
    getLanguageFromSession();
  }, []);

  return (
    <>

      <section>
        <nav className="navbar navbar-expand-lg navbar-background">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand text-dark" to="/">
              <img src="/image/logo/logo.svg" className="navbar-logo" alt="" />
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto me-auto">
                <li className="nav-item">
                  <Link className="nav-link nav-link-hover" to="/">
                  {t("Navbar.Home")}
                  </Link>
                </li>
                <li className="nav-item ">
                  <a className="nav-link nav-link-hover" href="#">
                  {t("Navbar.Services")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-hover" href="#">
                  {t("Navbar.Products")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-hover" href="#">
                  {t("Navbar.Shipping")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-hover" href="#">
                  {t("Navbar.About")}
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-hover" to="/contactus">
                  {t("Navbar.Contact")}
                  </Link>
                </li>
              </ul>
              <div className="d-flex" role="search">
                <div className="search-box">
                  <div className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {language}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item btn"
                          name="en"
                          onClick={handleLanguage}
                        >
                          English (En)
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          name="pt"
                          onClick={handleLanguage}
                        >
                          Português (pt)
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
