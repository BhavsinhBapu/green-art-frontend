import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { GenerateSecretKey, ShowGeneratedSecretKey } from "service/settings";
import { SetupGoogle2faAction } from "state/actions/settings";
import { setSecretKeySettings } from "state/reducer/common";

const IpAddressModal = () => {
  const [password, setPassword] = useState<any>("");
  const [otp, setOtp] = useState<any>("");
  const [secretKey, setSecretKey] = useState<any>("");
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    toast.success("Successfully submitted");
  };
  return (
    <div
      className="modal fade"
      id="newIpAddressModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="newIpAddressLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <form method="post" className="w-full">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newIpAddressLabel">
                {t("Add New Ip Address")}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="form-group col-12">
                  <label>Ip Address</label>
                  <input
                    placeholder={t("Enter Ip Address")}
                    type="text"
                    className="form-control w-full"
                    name="otp"
                    style={{ height: "46px" }}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                {t("Close")}
              </button>

              <button
                type="submit"
                className="btn btn-primary bg-primary-color"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IpAddressModal;
