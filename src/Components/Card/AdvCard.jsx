import React from "react";
import "./card.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
function AdvCard(props) {
  const { t } = useTranslation();
  const translation = {
    en: {
      title: props.title_en,
      description: props.description_en,
    },
    pt: {
      title: props.title_pt,
      description: props.description_pt,
    },
  };

  const Adv_Card = translation[i18n.language];
  return (
    <>
      <section className="adv_card">
        <div
          className="card"
          style={{ backgroundImage: "url(" + `${props.image}` + ")" }}
        >
          <div className="card-body">
            <div className="card-title">
              <h4>{t(Adv_Card.title)}</h4>
              <p className="card-text">{t(Adv_Card.description)}</p>
              <button className="btn button_design btn-light">{t("button.shopnow")}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdvCard;
