import P2PGiftCardHeader from "components/P2P/p2p-gift-card/p2p-gift-card-header/P2PGiftCardHeader";
import P2PGiftCardNavbar from "components/P2P/p2p-gift-card/p2p-gift-card-navbar/P2PGiftCardNavbar";
import { CUstomSelect } from "components/common/CUstomSelect";
import SectionLoading from "components/common/SectionLoading";
import request from "lib/request";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getCreateAdsSettingsDataApi } from "service/p2pGiftCards";

const options = [
  { value: 1, label: "Bank Transfer" },
  { value: 2, label: "Crypto Transfer" },
];

const status = [
  { value: 1, label: "Active" },
  { value: 0, label: "Deactive" },
];

export default function Index() {
  const { t } = useTranslation();

  const router = useRouter();

  const [settings, setSettings] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const [selectedPaymentType, setSelectedPaymentType] = useState();

  useEffect(() => {
    getCreateAdsSettingsData();
  }, []);

  const getCreateAdsSettingsData = async () => {
    setLoading(true);
    const data: any = await getCreateAdsSettingsDataApi();

    setLoading(false);
    if (!data?.success) {
      toast.error(data?.message);
      return;
    }

    setSettings(data?.data);
    console.log("data", data, router?.query?.id);
  };

  const paymentTypeHandler = (event: any) => {
    setSelectedPaymentType(event.value);
  };

  return (
    <section>
      <P2PGiftCardNavbar />
      <P2PGiftCardHeader title={"Create Gift Card Ads"} />

      {/* from for create */}
      {loading ? (
        <div className="container">
          <SectionLoading />
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group p2pSelectFilter">
                <h6 className="gift-buy-input-label font-normal mb-3">
                  {t(`Payment Currencey Type`)}
                </h6>
                <CUstomSelect
                  options={options}
                  classname={"buy-amount-select-section border rounded"}
                  handleFunction={paymentTypeHandler}
                />
              </div>
            </div>
            {selectedPaymentType && (
              <div className="col-md-6">
                <div className="form-group p2pSelectFilter">
                  <h6 className="gift-buy-input-label font-normal mb-3">
                    {t(`Currencey Type`)}
                  </h6>
                  <CUstomSelect
                    options={
                      selectedPaymentType === 1
                        ? settings?.currency
                        : settings?.assets
                    }
                    classname={"buy-amount-select-section border rounded"}
                  />
                </div>
              </div>
            )}

            <div className="col-md-6">
              <div className="form-group p2pSelectFilter">
                <h6 className="gift-buy-input-label font-normal mb-3">
                  {t(`Price`)}
                </h6>
                <div className="d-flex buy-input-bg input-padding-y rounded border">
                  <input
                    type="number"
                    min={1}
                    placeholder="Enter Price"
                    className="px-3 w-full bg-transparent border-none"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group p2pSelectFilter">
                <h6 className="gift-buy-input-label font-normal mb-3">
                  {t(`Status`)}
                </h6>
                <CUstomSelect
                  options={status}
                  classname={"buy-amount-select-section border rounded"}
                  defaultValue={status[0]}
                />
              </div>
            </div>
            {selectedPaymentType === 1 && (
              <div className="col-md-6">
                <div className="form-group p2pSelectFilter">
                  <h6 className="gift-buy-input-label font-normal mb-3">
                    {t(`Payment Method`)}
                  </h6>
                  <CUstomSelect
                    options={settings?.payment_method}
                    classname={"buy-amount-select-section border rounded"}
                  />
                </div>
              </div>
            )}

            <div className="col-md-6">
              <div className="form-group p2pSelectFilter">
                <h6 className="gift-buy-input-label font-normal mb-3">
                  {t(`Country`)}
                </h6>
                <CUstomSelect
                  options={settings?.country}
                  isSearchable={true}
                  isMulti={true}
                  classname={"buy-amount-select-section border rounded"}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group p2pSelectFilter">
                <h6 className="gift-buy-input-label font-normal mb-3">
                  {t(`Time Limit`)}
                </h6>
                <CUstomSelect
                  options={settings?.payment_time}
                  classname={"buy-amount-select-section border rounded"}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group p2pSelectFilter">
                <h6 className="gift-buy-input-label font-normal mb-3">
                  {t(`User Registerd`)}
                </h6>
                <div className="d-flex buy-input-bg input-padding-y rounded border">
                  <input
                    type="number"
                    min={1}
                    placeholder="Enter Day"
                    className="px-3 w-full bg-transparent border-none"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group p2pSelectFilter">
                <h6 className="gift-buy-input-label font-normal mb-3">
                  {t(`Terms And Condition (Optional)`)}
                </h6>
                <div className="d-flex buy-input-bg input-padding-y rounded border">
                  <textarea
                    placeholder="Enter Terms And Condition"
                    className="px-3 w-full bg-transparent border-none"
                    rows={4}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right my-3">
            <button className="tableButton bg-card-primary-color mr-5">
              Cancel
            </button>
            <button className="tableButton">Create</button>
          </div>
        </div>
      )}
    </section>
  );
}
