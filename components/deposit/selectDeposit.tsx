import React from "react";

const SelectDeposit = ({
  setSelectedMethod,
  depositInfo,
  selectedMethod,
}: any) => {
  return (
    
    <div className="row mt-3">
      {depositInfo?.payment_methods.map((payment: any, index: number) => (
        <div className="col-lg-2 px-0">
          <div
            className={
              selectedMethod.method === payment.payment_method
                ? "select-deposit-method-item-active"
                : "select-deposit-method-item"
            }
            key={index}
            onClick={() => {
              setSelectedMethod({
                method: payment.payment_method,
                method_id: payment?.id,
              });
            }}
          >
            {payment.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectDeposit;
