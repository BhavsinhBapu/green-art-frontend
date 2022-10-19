import React from "react";

export const SEO = ({ children, seoData }: any) => {
  console.log("seoData", seoData);

  return (
    <div>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={seoData?.seo_social_title} />
        <meta name="description" content={seoData?.seo_meta_description} />
        <meta name="keywords" content={seoData?.seo_meta_keywords} />
        <meta property="og:image" content={seoData?.seo_image} />
      </head>
      {children}
    </div>
  );
};
