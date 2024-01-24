import React from "react";
import { motion } from "framer-motion";

const GetInTouch = ({ landing, featureListdata }: any) => {
  return (
    <div>
      <div className="placeTopLeft">
        <img
          src="https://assets-global.website-files.com/60c8db180183804ef2b45120/60cb6b0ac3e71fa837cb2929_hero-glow.svg"
          alt="Hero Banner"
        />
      </div>
      <div className="placeBottomRight">
        <img
          src="https://assets-global.website-files.com/60c8db180183804ef2b45120/60cb6b0ac3e71fa837cb2929_hero-glow.svg"
          alt="Hero Banner"
        />
      </div>
      {parseInt(landing.landing_sixth_section_status) === 1 && (
        <motion.section
          className="get-touch-area"
          style={{ padding: "60px 0" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="container-4xl">
            <div className="section-title mb-3">
              <h2 className="title">{landing?.landing_feature_title}</h2>
            </div>

            <section className="hero-section">
              <div className="card-grid">
                {featureListdata?.map((feature: any, index: any) => (
                  <Card key={index} feature={feature} />
                ))}
              </div>
            </section>
          </div>
        </motion.section>
      )}
    </div>
  );
};

export default GetInTouch;
const Card = ({ feature }: any) => {
  return (
    <a className="card" href="#">
      <div
        className="card__background"
        style={{
          backgroundImage: `url(${feature.feature_icon})`,
        }}
      ></div>
      <div className="card__content">
        <h3 className="card__heading">{feature?.feature_title}</h3>
        <p className="card__category">{feature?.description}</p>
      </div>
    </a>
  );
};
