import { CUstomSelect } from "components/common/CUstomSelect";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { BsQuestionSquareFill } from "react-icons/bs";
import * as Yup from "yup";

export const AddPostTwo = ({
  setAddStep,
  selectedAsset,
  data,
  selectedPayment,
  setSelectedPayment,
  selectedPaymentTime,
  setSelectedPaymentTime,
  amount,
  setAmount,
}: any) => {
  const [PaymentOption, setPaymentOption] = useState([]);
  const [PaymentTime, setPaymentTime] = useState([]);
  const [limit, setLimit] = useState<any>({
    minimum_price: 0,
    maximum_price: 0,
  });
  useEffect(() => {
    const value = data?.data?.assets.find(
      (item: any) => (item.coin_type = selectedAsset?.value)
    );
    setLimit({
      minimum_price: value.minimum_price,
      maximum_price: value.maximum_price,
    });
  }, [data?.data?.assets, selectedAsset?.value]);
  const handlePayment = (e: any) => {
    setSelectedPayment(e);
  };
  const handlePaymentTime = (e: any) => {
    setSelectedPaymentTime(e);
  };
  useEffect(() => {
    let payment_method: any = [];
    let payment_time: any = [];
    data?.data?.payment_method?.map((asset: any) => {
      const obj = {
        value: asset.uid,
        label: asset?.admin_pamynt_method?.name,
      };
      payment_method.push(obj);
    });
    data?.data?.payment_time?.map((asset: any) => {
      const obj = {
        value: asset.uid,
        label: asset.time,
      };
      payment_time.push(obj);
    });
    setPaymentOption(payment_method);
    setPaymentTime(payment_time);
  }, [data.data.payment_method, data.data.payment_time]);
  const validationSchema = Yup.object().shape({
    min_limit: Yup.number()
      .min(
        limit.minimum_price,
        `Min limit must be at least ${limit.minimum_price}`
      )
      .required("Min limit is required"),
    max_limit: Yup.number()
      .max(
        limit.maximum_price,
        `Max limit must be less than or equal to ${limit.maximum_price}`
      )
      .required("Max limit is required"),
  });

  const formik = useFormik({
    initialValues: {
      min_limit: amount.min_limit,
      max_limit: amount.max_limit,
    },
    validationSchema,
    onSubmit: (values) => {
      // handle submit
    },
  });
  return (
    <div className="col-12 mt-4">
      <div className="buySellAddBox px-4 py-5 rounded">
        <div className="row">
          <div className="col-md-6">
            <label> Total Amount:</label>
            <div className="P2psearchBox position-relative">
              <input
                type="number"
                placeholder="0.00"
                value={amount.amount}
                onChange={(e) => {
                  setAmount({
                    ...amount,
                    amount: e.target.value,
                  });
                }}
              />
              <button>
                <span className="ml-3 text-muted">{selectedAsset?.value}</span>
              </button>
            </div>
          </div>

          <div className="col-12 mt-4">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <label htmlFor="min_limit">Order Limit:</label>
                <div className="P2psearchBox position-relative">
                  <input
                    type="number"
                    placeholder="Min limit"
                    id="min_limit"
                    {...formik.getFieldProps("min_limit")}
                  />
                  {formik.touched.min_limit && formik.errors.min_limit && (
                    <span className="text-danger">
                      {formik.errors.min_limit}
                    </span>
                  )}
                  <button>
                    <span className="ml-3 text-muted">
                      {selectedAsset?.value}
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <label htmlFor="max_limit"> </label>
                <div className="P2psearchBox position-relative mt-2">
                  <input
                    type="text"
                    placeholder="Max limit"
                    id="max_limit"
                    {...formik.getFieldProps("max_limit")}
                  />
                  {formik.touched.max_limit && formik.errors.max_limit && (
                    <span className="text-danger">
                      {formik.errors.max_limit}
                    </span>
                  )}
                  <button>
                    <span className="ml-3 text-muted">
                      {selectedAsset?.value}
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-12 mt-4">
                <label className="d-block pb-0 mb-0">Payment Method</label>
                <span>Select up to 5 payment methods</span>
                <div className="col-md-4 p-0">
                  <CUstomSelect
                    options={PaymentOption}
                    isSearchable={true}
                    isMulti={true}
                    placeholder="Add"
                    handleFunction={handlePayment}
                    defaultValue={selectedPayment}
                  />
                </div>
              </div>
              <div className="col-12 mt-4">
                <label>Payment Time Limit</label>
                <div className="col-md-3 p-0">
                  <CUstomSelect
                    options={PaymentTime}
                    isSearchable={false}
                    placeholder="Select payment time"
                    handleFunction={handlePaymentTime}
                    defaultValue={selectedPaymentTime}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 adFromHelp">
        <a href="">
          <BsQuestionSquareFill className="shadow" />
          Help & Guide
        </a>
      </div>
      <div className="addPostNextButton mt-3">
        <p className="d-flex align-items-center">
          Reserved Fee <h6> -- {selectedAsset?.value}</h6>
        </p>
        <div>
          <button onClick={() => setAddStep("stepOne")} className=" py-2">
            Previous
          </button>
          {selectedPayment.length > 0 &&
            !formik.errors.max_limit &&
            !formik.errors.min_limit && (
              <button
                onClick={() => setAddStep("stepThree")}
                className=" py-2 buySellBoxActive ml-2"
              >
                Next
              </button>
            )}
        </div>
      </div>
    </div>
  );
};
