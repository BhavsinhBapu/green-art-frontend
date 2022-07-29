import { GetServerSideProps } from "next";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { bannerDetailsBySlug } from "service/landing-page";

const Bannerdetails = ({ details, status }: any) => {
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
    <div className="container">
      <div className="section-wrapper text-center">
        <img src={details.image} />
        <h1 className="display-4 mt-3">{details.title}</h1>
        <p>{details.description}</p>
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { slug } = ctx.query;
  const { data } = await bannerDetailsBySlug(slug);

  return {
    props: {
      details: data.data,
      status: data.success,
    },
  };
};
export default Bannerdetails;
