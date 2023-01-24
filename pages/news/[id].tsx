import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineReddit } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const NewsDetails = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="container">
        <Link href="/news">
          <a>
            <h3 className="pb-2 newsDetailsTitle d-flex align-items-center">
              <BiChevronLeft />
              {t("Top news")}
            </h3>
          </a>
        </Link>
        <hr />

        <div className="row">
          <div className="col-md-8">
            <div className="newsCardText mt-4">
              <h3>New year, same old Bitcoin…</h3>
              <small>2022-11-14 07:55</small>
              <p>
                We break down the convert portal transactions to gauge where the
                market is each week. We notice a pattern with the top 3
                consisting of stable coin swaps, crypto to stablecoin and
                stablecoin to crypto. When the market is quiet, seeing extended
                movements stablecoin swaps usually top the list with users
                transacting between BUSD and USDT with tight spreads. On the
                flipside, when the market has seen a period of expansion (up or
                down), we will usually see crypto to stablecoin or stablecoin to
                crypto transactions top the list, as users will enter and exit
                positions.
              </p>
            </div>
            <div className="row">
              <div className="col-md-8 mx-auto py-4">
                <img
                  className="rounded"
                  src="https://public.bnbstatic.com/image/cms/content/body/202301/4646133d08c4de0373702e761113abb1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <h4 className="mt-4 ">{t("Share")}</h4>
            <div className="my-3 newsShare d-flex align-items-center">
              <a href="">
                <BsTwitter />
              </a>
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <AiOutlineReddit />
              </a>
              <a href="">
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsDetails;
