import BackButton from "components/P2P/BackButton";
import P2PGiftCardHeader from "components/P2P/p2p-gift-card/p2p-gift-card-header/P2PGiftCardHeader";
import P2PGiftCardNavbar from "components/P2P/p2p-gift-card/p2p-gift-card-navbar/P2PGiftCardNavbar";
import { CUstomSelect } from "components/common/CUstomSelect";
import SectionLoading from "components/common/SectionLoading";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TfiHandPointRight } from "react-icons/tfi";
import { toast } from "react-toastify";
import {
  buyP2PGiftCardAdsApi,
  getGiftCardAdsDetailsForBuyApi,
} from "service/p2pGiftCards";

const options = [{ value: 1, label: "Payment 1" }];

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [adsDetails, setAdsDetails] = useState<any>({});
  const [selectedPayment, setSelectedPayment] = useState<any>({});
  const { t } = useTranslation();
  useEffect(() => {
    getGiftCardAdsDetailsForBuy();
  }, []);

  const getGiftCardAdsDetailsForBuy = async () => {
    console.log("router", router?.query?.uid);
    setLoading(true);
    const data = await getGiftCardAdsDetailsForBuyApi(router?.query?.uid);
    setLoading(false);

    if (!data.success) {
      toast.error(data.message);
      return;
    }

    setAdsDetails(data.data);
  };

  const buyGiftCardHandler = async () => {
    if (
      adsDetails?.payment_methods &&
      Object.keys(selectedPayment).length === 0
    ) {
      toast.error("Select Payment Method");
      return;
    }
    let params: any = {
      gift_card_id: adsDetails?.id,
    };
    if (adsDetails?.payment_methods?.length !== 0) {
      params = {
        gift_card_id: adsDetails?.id,
        payment_method_uid: selectedPayment?.value,
      };
    }
    const data = await buyP2PGiftCardAdsApi(params);
    if (!data.success) {
      toast.error(data.message);
      return;
    }
    toast.success(data.message);
    console.log("response", data);
  };

  return (
    <section>
      <P2PGiftCardNavbar />

      <P2PGiftCardHeader title={"Gift Card Add Details"} />
      <div className="container">
        <div className="row p-5 boxShadow mt-5 mb-5">
          <div className="col-12">
            <div className="mt-3 mb-3">
              <BackButton />
            </div>
            <h1 className="ny-3">{t("Details")}</h1>
          </div>
          {loading ? (
            <SectionLoading />
          ) : (
            <>
              <div className="col-md-6 col-12 ">
                <div className=" py-4 rounded">
                  <div className="tableImg d-flex align-items-center">
                    <img
                      src="https://api-tradex.nftarttoken.xyz/images/avatars/yellow-hat.png"
                      alt=""
                    />
                    <h5>
                      {adsDetails?.user?.first_name}{" "}
                      {adsDetails?.user?.last_name}
                    </h5>
                  </div>
                  <div className="row pt-4">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <p>Price</p>
                        <h6 className="pl-3 text-warning">
                          {parseFloat(adsDetails?.price)}{" "}
                          {adsDetails?.currency_type}
                        </h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <p>{t("Available")}</p>
                        <h6 className="pl-3">
                          {parseFloat(adsDetails?.gift_card?.amount)}{" "}
                          {adsDetails?.gift_card?.coin_type}
                        </h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <p>(t{"Payment Time Limit"})</p>
                        <h6 className="pl-3">
                          {adsDetails?.time_limit} {t("Minutes")}
                        </h6>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="pt-5">
                        <h5>{t("Terms and Conditions")}</h5>
                        <div className="d-flex align-items-center p2pTerms pt-3">
                          <TfiHandPointRight />
                          <p>{adsDetails?.terms_condition}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {adsDetails?.payment_methods && (
                <div className="col-md-6 col-12">
                  <div>
                    <label className="pt-3">Select payment method</label>

                    <CUstomSelect
                      options={adsDetails?.payment_methods}
                      handleFunction={setSelectedPayment}
                    />
                  </div>
                </div>
              )}

              <div className="col-12">
                <div className="mt-3">
                  <button
                    className="primary-btn-outline"
                    onClick={buyGiftCardHandler}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
