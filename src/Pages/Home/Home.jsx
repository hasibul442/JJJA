import React from "react";
import "./home.css";
import { useTranslation } from "react-i18next";
import ClientSlider from "../../Components/Clientslider/ClientSlider";
import AdvCard from "../../Components/Card/AdvCard";
import ProductCard from "../../Components/Card/ProductCard";
import ProductData from "../../Components/Data/ProductData";
import AdvData from "../../Components/Data/AdvData";
function Home() {
  const { t } = useTranslation();
  const adv_data = AdvData;
  const Products = ProductData;
  return (
    <>
      <section className="banner-body">
        <div className="container">
          <div className="banner-text-block">
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
        </div>
      </section>

      {/* Client Brand Slider */}
      <section className="client_logo_slider">
        <div className="container">
          <ClientSlider />
        </div>
      </section>

      {/* Ads Section */}
      <section className="adv_offer_block">
        <div className="container">
          <div className="row">
            {adv_data.map((item, index) => (
              <div className="col-md-4" key={index}>
                <AdvCard
                  image={item.image}
                  title={item.title}
                  title_en={item.title_en}
                  title_pt={item.title_pt}
                  description_en={item.description_en}
                  description_pt={item.description_pt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured_product_block">
        <div className="container">
          <p className="text-center featured_product_title">
            Featured Products
          </p>
          <div className="row">
            {Products.map((item, index) => (
              <div className="col-md-3 mt-3" key={index}>
                <ProductCard
                  title_en={item.title_en}
                  title_pt={item.title_pt}
                  image={item.image}
                  price={item.price}
                  user={item.user}
                  rating={item.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
