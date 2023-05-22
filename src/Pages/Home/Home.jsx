import React from "react";
import "./home.css";
import { useTranslation } from "react-i18next";
import ClientSlider from "../../Components/Clientslider/ClientSlider";
import AdvCard from "../../Components/Card/AdvCard";
import ProductCard from "../../Components/Card/ProductCard";
import ProductData from "../../Components/Data/ProductData";
import AdvData from "../../Components/Data/AdvData";
import ServiceData from "../../Components/Data/ServiceData";
import ServiceCard from "../../Components/Card/ServiceCard";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import whyChooseUsData from "../../Components/Data/whyChooseUsData";
function Home() {
  const { t } = useTranslation();
  const adv_data = AdvData;
  const Products = ProductData;
  const services = ServiceData;
  const chooseus = whyChooseUsData;
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

      {/* Conpany History */}
      <section className="aboutus pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="text-center">
                <div className="history-img mx-auto my-auto">
                  <div className="history-image">
                    <img
                      src="/image/About/Asset_22_1.png"
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 my-auto">
              <p className="h2 jjja-history-headline">Our Company</p>
              <p className="history-short-description">
                JJJA, a partnership entity, was established considering the
                growth potentiality of textile industries in Bangladesh. Textile
                manufacturers in Bangladesh need fiber, yarn, fabric, dyestuff,
                basic and auxiliary chemicals as their raw materials
              </p>

              <div>
                <a to="/about-us" className="learn-more button-style-2">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Learn More</span>
                </a>
              </div>
            </div>
          </div>
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

      {/* Our Services */}
      <section className="our_service">
        <div className="container">
          <p className="text-center our_service_title">Our Services</p>
          <p className="text-center our_service_subtitle">
            WE ARE COMMITTED TO A PRODUCTION CONSISTENT WITH THE VALUE,
            PROFESSIONALISM, CREATIVITY.
          </p>
          <div className="row mt-5">
            {services.map((item, index) => (
              <div className="col-md-4 mt-3" key={index}>
                <ServiceCard
                  title_en={item.title_en}
                  title_pt={item.title_pt}
                  description_en={item.description_en}
                  description_pt={item.description_pt}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why_choose_us">
        <div className="container">
          <p className="text-center our_service_title">Why Choose Us</p>
          <p className="text-center our_service_subtitle">
            WE BELIEVE THE JOY OF SUCCESS IS THE GREATEST WHEN SHARED.
          </p>

          <p className="why_choose_us_description">
            We believe the joy of success is the greatest when shared. Our
            mission is to help our customers and manufacturers achieve their
            business goals and more. Because as you grow, we grow. Partner with
            us for competitive prices, guaranteed quality and everything under
            one roof while you skip the complexity of navigating a foreign
            market.
          </p>

          <section className="mt-2">
          <div className="company-history-point">
            <div className="row">
              {chooseus.map((item, index) => (
                <div className="col-md-3" key={index}>
                  <ChooseUs icon={item.icon} title_en={item.title_en} title_pt={item.title_pt} color={item.color}/>
                  </div>
              ))}
            </div>
            {/* <div className="d-sm-flex justify-content-around pt-3">


              <div className="pb-2">
                <div className="text-center">
                  <i className="fad fa-dollar-sign fa-2x"></i>
                  <p>
                    Competitive price
                  </p>
                </div>
              </div>

              <div className="pb-2">
                <div className="text-center">
                  <i className="fad fa-ship fa-2x"></i>
                  <p>
                    In time <br /> shipment
                  </p>
                </div>
              </div>

              <div className="pb-2">
                <div className="text-center">
                  <i className="fas fa-user-friends fa-2x"></i>
                  <p>
                    Our outstanding <br /> services
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        </div>
      </section>
    </>
  );
}

export default Home;
