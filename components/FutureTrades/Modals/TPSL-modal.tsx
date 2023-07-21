import { CROSS, ISOLATED } from "helpers/core-constants";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { CiMoneyCheck1 } from "react-icons/ci";
import { getTpslFuture } from "service/futureTrade";

const TpslModal = ({ uid }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation("common");
  const toggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const getTPSLDetails = async () => {
    setLoading(true);
    const { data } = await getTpslFuture(uid);
    setDetails(data);
    console.log(data, "datadatadatadata");
    setLoading(false);
  };
  useEffect(() => {
    isModalOpen && getTPSLDetails();
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        id=""
        data-toggle="pill"
        role="tab"
        aria-controls="pills-transfer-1"
        aria-selected="true"
        onClick={toggle}
      >
        <CiMoneyCheck1 size={24} className="ml-3" />
      </div>
      {isModalOpen && (
        <div id="demo-modal" className="gift-card-modal">
          <div className="future-modal__content p-5">
            <h6 className="text-center">Take Profit and Stop Loss</h6>
            <div className="mb-3">
              <div className="position-content">
                <span>Symbol</span>
                <span>data </span>
              </div>
              <div className="position-content">
                <span>Entry Price</span>
                <span>5555 55555</span>
              </div>
              <div className="position-content">
                <span>Mark Price</span>
                <span>51 2558896</span>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-6">
                <h6 className="text-center mb-2">Take Profit and Stop Loss</h6>
                <div className="mb-3">
                  <div className="position-content">
                    <span>Symbol</span>
                    <span>data </span>
                  </div>
                  <div className="position-content">
                    <span>Entry Price</span>
                    <span>5555 55555</span>
                  </div>
                  <div className="position-content">
                    <span>Mark Price</span>
                    <span>51 2558896</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <h6 className="text-center mb-2">Take Profit and Stop Loss</h6>
                <div className="mb-3">
                  <div className="position-content">
                    <span>Symbol</span>
                    <span>data </span>
                  </div>
                  <div className="position-content">
                    <span>Entry Price</span>
                    <span>5555 55555</span>
                  </div>
                  <div className="position-content">
                    <span>Mark Price</span>
                    <span>51 2558896</span>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="position-button-area">
              <button
                style={{
                  width: "98%",
                  margin: 2,
                }}
                className="primary-btn"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                style={{
                  width: "98%",
                  margin: 2,
                }}
                className="primary-btn"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TpslModal;
