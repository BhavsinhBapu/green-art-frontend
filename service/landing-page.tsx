import request from "lib/request";

// /landing
export const landingPage = () => {
  return request.get("/landing");
};
///banner-list

export const bannerList = () => {
  return request.get("/banner-list");
};
// /announcement-list
export const announcementList = () => {
  return request.get("/announcement-list");
};

// feature - list;
export const featureList = () => {
  return request.get("/feature-list");
};
// social - media - list;
export const socialMediaList = () => {
  return request.get("/social-media-list");
};

// /banner-list/
export const bannerDetailsBySlug = (slug: any) => {
  return request.get(`/banner-list/${slug}`);
};
