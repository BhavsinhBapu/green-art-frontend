import React from "react";
import { motion } from "framer-motion";

const GetInTouch = ({ landing, featureListdata }: any) => {
  const cards = [
    {
      backgroundUrl:
        "https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      category: "Category 1",
      heading: "Example Card Heading 1",
    },
    {
      backgroundUrl:
        "https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      category: "Category 2",
      heading: "Example Card Heading 2",
    },
    {
      backgroundUrl:
        "https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      category: "Category 3",
      heading: "Example Card Heading 3",
    },
    {
      backgroundUrl:
        "https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      category: "Category 4",
      heading: "Example Card Heading 4",
    },
  ];
  return (
    <div>
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
