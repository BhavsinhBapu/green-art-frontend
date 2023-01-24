import useTranslation from "next-translate/useTranslation";

export const NewsList = () => {
  const newsCategory = [
    "All",
    "Business",
    "Markets",
    "Technology",
    "Policy",
    "Regulation",
  ];

  const newsList = [
    {
      image:
        "https://public.bnbstatic.com/image/cms/content/body/162ff356fb6a770b5c512f715d14500e.png",
      title: "Binance To Expand Blockchain Ecosystem In Cambodia",
      discription:
        "The MoU that was inked earlier this year comes after the JV arrangement. In a previous memorandum of understanding, Binance and Royal Group agreed to work together on a number of initiatives to investigate the introduction of Web3/blockchain initiatives in Cambodia, including promoting awareness of and lowering informational barriers to blockchain technology and digital assets through educational initiatives.",
      date: "2022-11-14 07:55",
    },
    {
      image:
        "https://public.bnbstatic.com/image/cms/content/body/202301/4646133d08c4de0373702e761113abb1.png",
      title: "Binance To Expand Blockchain Ecosystem In Cambodia",
      discription:
        "The MoU that was inked earlier this year comes after the JV arrangement. In a previous memorandum of understanding, Binance and Royal Group agreed to work together on a number of initiatives to investigate the introduction of Web3/blockchain initiatives in Cambodia, including promoting awareness of and lowering informational barriers to blockchain technology and digital assets through educational initiatives.",
      date: "2022-11-14 07:55",
    },
  ];
  const { t } = useTranslation("common");

  return (
    <>
      <div className="row">
        <div className="col-12 mb-2">
          <ul className="newsCategory mt-5">
            {newsCategory.map((item, index) => (
              <li key={index}>
                <a href="">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 mt-2 mb-5">
          {newsList.map((list, index) => (
            <div key={index} className="newsCard p-4 mt-2">
              <a href="">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <img src={list.image} alt="" />
                  </div>
                  <div className="col-md-8 pt-3 pt-md-0">
                    <div className="newsCardText">
                      <h3>{list.title}</h3>
                      <p>{list.discription}</p>
                      <small>{list.date}</small>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
