import { formateData } from "common";
import Footer from "components/common/footer";
import { GetServerSideProps } from "next";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import {
  bannerDetailsBySlug,
  customPage,
  landingPage,
} from "service/landing-page";

const Bannerdetails = ({
  details,
  status,
  customPageData,
  socialData,
  copyright_text,
}: any) => {
  const { t } = useTranslation("common");

  if (status === false) {
    return (
      <div className="container">
        <div className="section-wrapper text-center">
          <h4>{t("404 not found")}</h4>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container mb-5">
        <div className="section-wrapper text-center">
          <h1 className="display-4 mb-2">{details.title}</h1>
          <p className="mb-2">
            Last revised: {formateData(details.updated_at)}
          </p>
          <img src={details.image} className="cover-image mb-5" />
          <div
            dangerouslySetInnerHTML={{
              __html: details.description.replace(
                /(<? *script)/gi,
                "illegalscript"
              ),
            }}
          ></div>
          {/* <p className="text-justify">{details.description}</p> */}
        </div>
      </div>
      <Footer
        customPageData={customPageData}
        socialData={socialData}
        copyright_text={copyright_text}
      />
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { slug } = ctx.query;
  const { data } = await bannerDetailsBySlug(slug);
  const { data: customPageData } = await customPage();
  const { data: landingData } = await landingPage();

  return {
    props: {
      details: data.data,
      status: data.success,
      customPageData: customPageData.data,
      socialData: landingData.media_list,
      copyright_text: landingData?.copyright_text,
    },
  };
};
export default Bannerdetails;
