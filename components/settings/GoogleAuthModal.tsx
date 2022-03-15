import React from "react";
import { SetupGoogle2faAction } from "state/actions/settings";
import { useRouter } from "next/router";
const GoogleAuthModal = ({ settings, setSettings }: any) => {
  const [code, setCode] = React.useState<string>("");
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    SetupGoogle2faAction(
      {
        code,
        setup: settings?.user?.google2fa === 0 ? "add" : "remove",
        google2fa_secret:
          settings?.user?.google2fa === 0
            ? settings?.google2fa_secret
            : settings?.user?.google2fa_secret,
      },
      setSettings
    );
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <form method="post">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Google Authentication
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
                <div className="col-4">
                  {settings?.user?.google2fa === 0 && (
                    <img src={settings?.qrcode} className="img-fluid" alt="" />
                  )}
                </div>
                <div className="col-8">
                  <p>
                    Open your Google Authenticator app, and scan Your secret
                    code and enter the 6-digit code from the app into the input
                    field
                  </p>
                  <input
                    placeholder="Code"
                    type="text"
                    className="form-control"
                    name="code"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
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
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={handleSubmit}
              >
                Verify
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoogleAuthModal;
