import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Leverage = ({ leverage, setLeverage }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation("common");

  const toggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const modifyLeverage = (value: number) => {
    setLeverage(value);
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
        className={`modal-button-future`}
      >
        {leverage}x
      </div>
      {isModalOpen && (
        <div id="demo-modal" className="gift-card-modal">
          <div className="future-modal__content p-5">
            <h3>Leverage</h3>
            <div className="leverage-section">{leverage}x</div>
            <div className="mt-3 percent-container mb-5 d-flex flex-wrap">
              <span
                className="percent-btn col-3 mb-2"
                onClick={() => {
                  modifyLeverage(1);
                }}
              >
                1x
              </span>
              <span
                className="percent-btn col-3 mb-2"
                onClick={() => {
                  modifyLeverage(10);
                }}
              >
                10x
              </span>
              <span
                className="percent-btn col-3 mb-2"
                onClick={() => {
                  modifyLeverage(20);
                }}
              >
                20x
              </span>
              <span
                className="percent-btn col-3 mb-2"
                onClick={() => {
                  modifyLeverage(30);
                }}
              >
                30x
              </span>
              <span
                className="percent-btn col-3 mb-2"
                onClick={() => {
                  modifyLeverage(40);
                }}
              >
                40x
              </span>
              <span
                className="percent-btn col-3 mb-2"
                onClick={() => {
                  modifyLeverage(50);
                }}
              >
                50x
              </span>
            </div>
            <div>
            
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Leverage;
