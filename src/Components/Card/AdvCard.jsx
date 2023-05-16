import React from "react";
import "./card.css";
function AdvCard(props) {
  return (
    <>
      <section className="adv_card">
        <div
          className="card"
          style={{ backgroundImage: "url(" + `${props.image}` + ")" }}
        >
          <div className="card-body">
            <div className="card-title">
              <h4>{props.title}</h4>
              <p className="card-text">{props.description}</p>
              <button className="btn button_design btn-light">Shop Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdvCard;
