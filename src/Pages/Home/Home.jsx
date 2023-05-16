import React from "react";
import "./home.css";
import { useTranslation } from "react-i18next";
import ClientSlider from "../../Components/Clientslider/ClientSlider";
import AdvCard from "../../Components/Card/AdvCard";
function Home() {
  const { t } = useTranslation();
  const adv_data = [
    {
      id: 1,
      image: "/image/background/Product-Adv-1.jpg",
      title: "20% Off On Tank Tops",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum."
    },
    {
      id: 2,
      image: "/image/background/Product-Adv-2.jpeg",
      title: "Latest Eyewear For You",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum."
    },
    {
      id: 3,
      image: "/image/background/Product-Adv-3.jpg",
      title: "Let's Lorem Suit Up!",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum."
    },
  ];
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

      <section className="my-5">
        <div className="container">
          <ClientSlider />
        </div>
      </section>

      <section className="adv_offer_block">
        <div className="container">
          <div className="row">
            {adv_data.map((item) => (
              <div className="col-md-4">
                <AdvCard image={item.image} title={item.title} description={item.description}/>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
