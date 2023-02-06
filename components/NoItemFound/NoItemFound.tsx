import useTranslation from "next-translate/useTranslation";

export const NoItemFound = ({ message }: any) => {
  const { t } = useTranslation("common");
  return (
    <div className="text-center">
      <img width={200} className="my-5" src="/../noItem.svg" alt="" />
      <h3>{message ? message : t("No Item Found")}</h3>
    </div>
  );
};
