import React from "react";
import "./home.css";
import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation();
  return (
    <>
      <section className="banner-body">
        <div className="container">
          <div className="banner-title">
            <h1>{t("Home.banner_title")}</h1>
            <h6>{t("Home.banner_subtitle")}</h6>

            <div>
              <button className="btn button_design btn-light">
                {t("Home.contactus_button")}
              </button>
              <button className="btn button_design2 btn-outline-light mx-4">
                {t("Home.findus_button")}
              </button>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
