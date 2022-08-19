import { formateData } from "common";
import Footer from "components/common/footer";
import { GetServerSideProps } from "next";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import {
  bannerDetailsBySlug,
  customPage,
  customPageWithSlug,
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
      <div className="container ">
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
          <img src={details.image} />
          <h1 className="display-4 mt-3">{details.title}</h1>
          <p className="mt-2 mb-2">
            Last revised: {formateData(details.updated_at)}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: details.description.replace(
                /(<? *script)/gi,
                "illegalscript"
              ),
            }}
          ></div>
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
  let response: any;
  const { data: customPageData } = await customPage();
  const { data } = await landingPage();
  try {
    const { data } = await customPageWithSlug(slug);
    response = data;
  } catch (error) {}
  return {
    props: {
      details: response.data,
      status: response.success,
      customPageData: customPageData.data,
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
    },
  };
};
export default Bannerdetails;
