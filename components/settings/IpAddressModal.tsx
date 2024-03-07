import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  GenerateSecretKey,
  ShowGeneratedSecretKey,
  addWhiteListApi,
} from "service/settings";
import { SetupGoogle2faAction } from "state/actions/settings";
import { setSecretKeySettings } from "state/reducer/common";

const IpAddressModal = ({
  isWhiteListModalOpen,
  setIsWhiteListModalOpen,
}: any) => {
  const [ipAddress, setIpAddress] = useState<any>("");
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!ipAddress) {
      toast.error("Add Ip Address");
      return;
    }
    let value = {
      ip: ipAddress,
      status: 1,
      trade: 1,
      withdrawal: 1,
    };
    const response = await addWhiteListApi(value);
    if (!response.success) {
      toast.error(response.message);
      return;
    }
    toast.success(response.message);
    setIsWhiteListModalOpen(false);
  };

  return (
    <>
      <div className="modal d-block">
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
                  onClick={() => setIsWhiteListModalOpen(false)}
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
                      name="Ip address"
                      style={{ height: "46px" }}
                      value={ipAddress}
                      onChange={(e: any) => setIpAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsWhiteListModalOpen(false)}
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
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default IpAddressModal;
