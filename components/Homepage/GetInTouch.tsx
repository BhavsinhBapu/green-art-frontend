import React from "react";
import { motion } from "framer-motion";

const GetInTouch = ({ landing, featureListdata }: any) => {
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

            <motion.div
              className="row"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {featureListdata?.map((feature: any, index: any) => (
                <motion.div
                  className="col-lg-4 col-md-6 mt-4"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 2 }} // Adjust the delay here
                >
                  <a
                    href={`${
                      feature?.feature_url !== "" &&
                      feature?.feature_url != null
                        ? feature?.feature_url
                        : "#"
                    }`}
                    target={`${
                      feature?.feature_url !== "" &&
                      feature?.feature_url != null
                        ? "_blank"
                        : "_self"
                    }`}
                    rel="noreferrer"
                    className="single-card"
                  >
                    <motion.img
                      className="card-icon"
                      src={feature.feature_icon}
                      alt="icon"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    />
                    <h3 className="card-title">{feature?.feature_title}</h3>
                    <p className="card-content">{feature?.description}</p>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}
    </div>
  );
};

export default GetInTouch;
