import React from "react";
import "./home.css";
import { useTranslation } from "react-i18next";
import ClientSlider from "../../Components/Clientslider/ClientSlider";
import AdvCard from "../../Components/Card/AdvCard";
import ProductCard from "../../Components/Card/ProductCard";
import ProductData from "../../Components/Data/ProductData";
function Home() {
  const { t } = useTranslation();
  const adv_data = [
    {
      id: 1,
      image: "/image/background/Product-Adv-1.jpg",
      title_en: "20% Off On Tank Tops",
      title_pt: "20% de desconto em regatas",
      description_en:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description_pt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
    },
    {
      id: 2,
      image: "/image/background/Product-Adv-2.jpeg",
      title_en: "Latest Eyewear For You",
      title_pt: "Últimos óculos para você",
      description_en:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description_pt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
    },
    {
      id: 3,
      image: "/image/background/Product-Adv-3.jpg",
      title_en: "Let's Lorem Suit Up!",
      title_pt: "Vamos Lorem Suit Up!",
      description_en:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description_pt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
    },
  ];

  const Products = ProductData;
  console.log(Products);
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
