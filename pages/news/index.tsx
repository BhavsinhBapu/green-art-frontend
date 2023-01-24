import { NewsList } from "components/News/NewsList";
import { NewsSlider } from "components/News/NewsSlider";
import useTranslation from "next-translate/useTranslation";

const News = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="container">
        <h1 className="pb-2">{t("Top news")}</h1>
        <hr />
        <NewsSlider />
        <NewsList />
      </div>
    </>
  );
};
export default News;
