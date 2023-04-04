import { CUstomSelect } from "components/common/CUstomSelect";
import { useEffect, useState } from "react";
import { BsPlusLg, BsQuestionSquareFill } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

export const AddPostOne = ({
  setAddStep,
  data,
  setSelectedAsset,
  setselectedCurrency,
  pricePoint,
}: any) => {
  const [AssetOptions, setAssetOptions] = useState([]);
  const [CurrencyOptions, setCurrencyOptions] = useState([]);

  const handleCurrency = (e: any) => {
    setselectedCurrency(e);
  };
  const handleAsset = (e: any) => {
    setSelectedAsset(e);
  };
  useEffect(() => {
    let myAssets: any = [];
    let myCurrency: any = [];
    data?.data?.currency.map((asset: any) => {
      const obj = {
        value: asset.currency_code,
        label: asset.name,
      };
      myCurrency.push(obj);
    });
    data?.data?.assets.map((asset: any) => {
      const obj = {
        value: asset.coin_type,
        label: asset.name,
      };
      myAssets.push(obj);
    });
    setAssetOptions(myAssets);
    setCurrencyOptions(myCurrency);
  }, [data?.data?.assets]);
  return (
    <div className="col-12 mt-4">
      <div className="buySellAddBox px-4 py-5 rounded">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <label> Asset:</label>
            <CUstomSelect
              options={AssetOptions}
              isSearchable={true}
              handleFunction={handleAsset}
            />
          </div>
          <div className="col-md-6 col-lg-4 mt-4 mt-md-0">
            <label> With Fiat:</label>
            <CUstomSelect
              options={CurrencyOptions}
              isSearchable={true}
              handleFunction={handleCurrency}
            />
          </div>
          <div className="col-12 mt-5">
            <div className="row">
              <div className="col-md-3 col-6 adFromPrice">
                <p>Your Price</p>
                <h4>TK. {pricePoint.highest_price}</h4>
              </div>
              <div className="col-md-3 col-6 adFromPrice">
                <p>Lowest Order Price</p>
                <h4>TK. {pricePoint.lowest_price}</h4>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="row">
              <div className="col-md-3 col-6">
                <label>Price Type</label>
                <div className="adFromCheckBox">
                  <input type="radio" name="optradio" />
                  <p>Fixed</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <label></label>
                <div className="adFromCheckBox">
                  <input type="radio" name="optradio" />
                  <p>Floating</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <label>Fixed</label>
            <span className="adFromPriceInecDecButton d-flex align-items-center">
              <button>
                <FaMinus />
              </button>
              <p>12.90</p>
              <button>
                <BsPlusLg />
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 adFromHelp">
        <a href="">
          <BsQuestionSquareFill className="shadow" />
          Help & Guide
        </a>
      </div>
      <div className="mt-4 row col-sm-4 col-md-3 col-lg-2 float-right mx-auto">
        <button
          onClick={() => setAddStep("stepTwo")}
          className="addTabButton buySellBoxActive py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};
