import React from "react";
import "./contactus.css";
import { useTranslation } from "react-i18next";
function Contactus() {
  const {t} = useTranslation();
  return (
    <>
      <section className="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2>{t("contactus.Contact")}</h2>
            <div className="links">
              <div className="link">
                <a>
                  <img
                    src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div className="link">
                <a>
                  <img
                    src="https://i.postimg.cc/YCV2QBJg/github.png"
                    alt="github"
                  />
                </a>
              </div>
              <div className="link">
                <a>
                  <img
                    src="https://i.postimg.cc/W4Znvrry/codepen.png"
                    alt="codepen"
                  />
                </a>
              </div>
              <div className="link">
                <a>
                  <img
                    src="https://i.postimg.cc/NjLfyjPB/email.png"
                    alt="email"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form>
              <div className="form-item">
                <input type="text" name="sender" required />
                <label>{t("contactus.Name")}:</label>
              </div>
              <div className="form-item">
                <input type="text" name="email" required />
                <label>{t("contactus.Email")}:</label>
              </div>
              <div className="form-item">
                <textarea className="" name="message" required></textarea>
                <label>{t("contactus.Message")}:</label>
              </div>
              <button className="submit-btn">{t("contactus.Submit")}</button>
            </form>
          </div>
        </div>
      </section>

      <section className="contactinfo">
        <div className="container">
          <h1 className="get-in-touch">{t("contactus.GetInTouch")}</h1>
          <div className="row pt-5">
            <div className="col-lg-4 pb-3 text-center">
              <div className="card glassmorphism">
                <div className="card-body">
                  <div className="address-icon-box text-center mt-5">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h3 className="address-headline">{t("contactus.Address")}</h3>
                  <p className="text-white">
                    Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                    Bangalore-560016
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 pb-3 text-center">
              <div className="card glassmorphism">
                <div className="card-body">
                  <div className="address-icon-box text-center mt-5">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <h3 className="address-headline">{t("contactus.Phone")}</h3>
                  <p className="text-white">
                  {t("contactus.Telephone")} : +88 0xxxxxxx <br />
                    {/* Mobile : +88 01713090871 <br /> */}
                    {t("contactus.Mobile")} : +88 0xxxxxxxx
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 pb-3 text-center">
              <div className="card glassmorphism">
                <div className="card-body">
                  <div className="address-icon-box text-center mt-5">
                    <i className="fas fa-comment-alt-dots"></i>
                  </div>
                  <h3 className="address-headline">{t("contactus.Email")}</h3>
                  <p className="text-white">info@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
          <h1 className="get-in-touch  text-center">{t("contactus.Deriction")}</h1>
          <div className="pt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1126831832635!2d90.39064921447506!3d23.779001393601128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b8864a3c37%3A0x7c221cca7ca22475!2sKatalyst%20Bangladesh!5e0!3m2!1sen!2sbd!4v1653400860159!5m2!1sen!2sbd"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              title="Google Map Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </section>
    </>
  );
}

export default Contactus;
