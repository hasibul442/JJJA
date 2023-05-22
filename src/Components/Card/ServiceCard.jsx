import React from "react";

function ServiceCard(props) {
  return (
    <>
      <div className="card service_card">
          <div className="card-1">
            <div className="card__icon">
              {props.icon} <span  className="card__title">{props.title_en}</span>
            </div>

            <p className="card__description">
              {props.description_en}
            </p>
            <p className="card__apply">
              <a className="card__link" href="#">
                Contact Us <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
      </div>
    </>
  );
}

export default ServiceCard;
