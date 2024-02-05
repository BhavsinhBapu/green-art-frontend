import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { GenerateSecretKey, ShowGeneratedSecretKey } from "service/settings";
import { SetupGoogle2faAction } from "state/actions/settings";

const SecretKeyModal = ({ isKeyGenerate }: any) => {
  const [password, setPassword] = useState<any>("");
  const [secretKey, setSecretKey] = useState<any>("");
  const { t } = useTranslation("common");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isKeyGenerate) {
      const response = await GenerateSecretKey(password);
      if (!response.success) {
        toast.error(response.message);
        return;
      }
      toast.success(response.message);
      setSecretKey(response?.data?.secret_key || "");
      return;
    }
    const response = await ShowGeneratedSecretKey(password);
    if (!response.success) {
      toast.error(response.message);
      return;
    }
    toast.success(response.message);
    setSecretKey(response?.data?.secret_key || "");
  };
  return (
    <div
      className="modal fade"
      id="secretKeyModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="secretKeyLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered secret-key-dialog"
        role="document"
      >
        {secretKey ? (
          <div className="modal-content w-full">
            <div className="modal-header">
              <h5 className="modal-title" id="secretKeyLabel">
                {t("Secret Key")}
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
                <div className="col-12">
                  <p>
                    Secret Key: <strong> {secretKey}</strong>
                  </p>
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
            </div>
          </div>
        ) : (
          <form method="post" className="w-full">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="secretKeyLabel">
                  {t("Secret Key")}
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
                  <div className="col-12">
                    <input
                      placeholder={t("Password")}
                      type="password"
                      className="form-control "
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
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
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  {isKeyGenerate ? t("Geneate") : t("Show")}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SecretKeyModal;
