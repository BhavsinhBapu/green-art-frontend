import { motion, useAnimation } from "framer-motion";
import ImageComponent from "components/common/ImageComponent";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Cover = ({ landing, loggedin, landing_banner_image }: any) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const textControls = useAnimation();
  const imageControls = useAnimation();

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 2, // Slower duration
        delay: index * 0.5, // Adjusted delay for staggered entrance
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    }),
  };

  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 2.5, // Slower duration
        damping: 10,
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    // Trigger text animation with a delay
    textControls.start("visible");

    // Trigger image animation after a longer delay
    setTimeout(() => {
      imageControls.start("visible");
    }, 1500); // Adjusted delay for the image animation
  }, [textControls, imageControls]);

  return (
    <div>
      {parseInt(landing?.landing_first_section_status) === 1 && (
        <section className="hero-banner-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6 conver-col1">
                <motion.h1
                  className="banner-title"
                  custom={0}
                  variants={textVariants}
                  initial="hidden"
                  animate={textControls}
                >
                  {landing?.landing_title ||
                    t("Buy & Sell Instantly And Hold Cryptocurrency")}
                </motion.h1>
                <motion.p
                  className="banner-content"
                  custom={1}
                  variants={textVariants}
                  initial="hidden"
                  animate={textControls}
                >
                  {landing?.landing_description ||
                    t(
                      "Tradexpro exchange is such a marketplace where people can trade directly with each other"
                    )}
                </motion.p>
                {!loggedin && (
                  <motion.a
                    href={
                      router.locale !== "en"
                        ? `/${router.locale}/signup`
                        : "/signup"
                    }
                    className="primary-btn"
                    custom={2}
                    variants={textVariants}
                    initial="hidden"
                    animate={textControls}
                  >
                    {t("Register Now")}
                  </motion.a>
                )}
              </div>
              <motion.div
                className="col-md-6"
                initial="hidden"
                animate={imageControls}
                variants={imageVariants}
              >
                <ImageComponent
                  src={
                    landing_banner_image ||
                    "/undraw_crypto_flowers_re_dyqo.svg.svg"
                  }
                  height={440}
                />
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cover;
