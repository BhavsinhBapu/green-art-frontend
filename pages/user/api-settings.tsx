import type { GetServerSideProps, NextPage } from "next";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { useEffect, useState } from "react";
import {
  UserSettingsAction,
  Google2faLoginAction,
  UpdateCurrencyAction,
} from "state/actions/settings";
import GoogleAuthModal from "components/settings/GoogleAuthModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/store";
import useTranslation from "next-translate/useTranslation";
import Footer from "components/common/footer";
import { customPage, landingPage } from "service/landing-page";
import PlaceBottomRight from "components/gradient/placeBottomRight";
import PlaceTopLeft from "components/gradient/placeTopLeft";
import SecretKeyModal from "components/settings/SecretKeyModal";
import { toast } from "react-toastify";
import { CUstomSelect } from "components/common/CUstomSelect";
import CustomDataTable from "components/Datatable";
import IpAddressModal from "components/settings/IpAddressModal";

const allowUser = [
  {
    label: "Yes",
    value: 1,
  },
  {
    label: "No",
    value: 0,
  },
];

const withdrawlAccess = [
  {
    label: "Off",
    value: 1,
  },
  {
    label: "On",
    value: 0,
  },
];

const tradelAccess = [
  {
    label: "Off",
    value: 1,
  },
  {
    label: "On",
    value: 0,
  },
];

const ApiSettings: NextPage = () => {
  const dispatch = useDispatch();

  const [isKeyGenerate, setIsKeyGenerate] = useState(true);
  const { t } = useTranslation("common");
  const [settings, setSettings] = useState<any>();
  const { settings: settingsReducer } = useSelector(
    (state: RootState) => state.common
  );
  const [selectedLimit, setSelectedLimit] = useState<any>("10");
  const [Changeable, setChangeable] = useState<any[]>([
    {
      id: 1,
      ip_address: "121.90.21.21",
      tradeingAccess: true,
      withdrawlAccess: false,
      isBlocked: false,
      date: "10-03-2024",
    },
    {
      id: 2,
      ip_address: "155.230.18.21",
      tradeingAccess: false,
      withdrawlAccess: true,
      isBlocked: true,
      date: "11-03-2024",
    },
    {
      id: 3,
      ip_address: "167.10.20.91",
      tradeingAccess: true,
      withdrawlAccess: false,
      isBlocked: true,
      date: "12-03-2024",
    },
    {
      id: 4,
      ip_address: "121.12.19.12",
      tradeingAccess: false,
      withdrawlAccess: true,
      isBlocked: false,
      date: "13-03-2024",
    },
  ]);
  const [processing, setProcessing] = useState<boolean>(false);
  const [search, setSearch] = useState<any>("");

  const columns = [
    {
      Header: t("Ip Address"),
      accessor: "ip_address",
    },

    {
      Header: t("Trading Access"),
      Cell: ({ row }: any) => (
        <label className="gift-card-buy-switch mb-0">
          <input type="checkbox" checked={row?.original?.tradeingAccess} />
          <span className="gift-card-buy-slider gift-card-buy"></span>
        </label>
      ),
    },
    {
      Header: t("Withdrawal Access"),
      Cell: ({ row }: any) => (
        <label className="gift-card-buy-switch mb-0">
          <input type="checkbox" checked={row?.original?.withdrawlAccess} />
          <span className="gift-card-buy-slider gift-card-buy"></span>
        </label>
      ),
    },
    {
      Header: t("Is Blocked"),
      Cell: ({ row }: any) => (
        <label className="gift-card-buy-switch mb-0">
          <input type="checkbox" checked={row?.original?.tradeingAccess} />
          <span className="gift-card-buy-slider gift-card-buy"></span>
        </label>
      ),
    },
    {
      Header: t("Date"),
      accessor: "date",
    },
    {
      Header: t("Action"),
      Cell: ({ row }: any) => (
        <div className="active-link">
          <button className="btn">Delete</button>
        </div>
      ),
    },
  ];
  useEffect(() => {
    dispatch(UserSettingsAction(setSettings));

    return () => {
      setSettings(null);
    };
  }, []);

  const handleFunc = () => {
    console.log("good");
  };
  return (
    <>
      <div className="page-wrap">
        <div className="page-main-content">
          <div className="container mt-5">
            <div className="section-top-wrap mb-25">
              <div className="profle-are-top">
                <h2 className="section-top-title mb-0">{t("Api Settings")}</h2>
              </div>
            </div>
          </div>
          <div className="setting-area">
            <PlaceTopLeft />
            <PlaceBottomRight />
            <div className="container">
              <div className="setting-bg boxShadow mb-5">
                <div className="row">
                  <div className="col-md-12 mb-xl-0 mb-4">
                    <div className="card-body">
                      <div className="cp-user-card-header-area">
                        <div className="cp-user-title">
                          <h4>{t("Generate Secret Key")}</h4>
                        </div>
                      </div>
                      <div className="my-3 ">
                        <div
                          className="border rounded d-flex flex-wrap py-2 px-3 align-items-center justify-content-between"
                          style={{ gap: "10px" }}
                        >
                          <div
                            className=" d-flex flex-wrap"
                            style={{ gap: "10px" }}
                          >
                            <p>{t(`Public Key : `)}</p>
                            <p style={{ wordBreak: "break-all" }}>
                              {settingsReducer?.public_key ||
                                process.env.NEXT_PUBLIC_SECRET_KEY}
                            </p>
                          </div>
                          {(settingsReducer?.public_key ||
                            process.env.NEXT_PUBLIC_SECRET_KEY) && (
                            <span
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  settingsReducer?.public_key ||
                                    process.env.NEXT_PUBLIC_SECRET_KEY
                                );
                                toast.success("Successfully copied");
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              <i className="fa fa-clone"></i>
                            </span>
                          )}
                        </div>
                        <div
                          className="border mt-3 rounded px-3 py-2 d-flex flex-wrap"
                          style={{ gap: "10px" }}
                        >
                          <p>{t(`Secret Key : `)}</p>
                          <p>*********************</p>
                        </div>
                      </div>
                      {settingsReducer?.secret_key_available == 1 ? (
                        <button
                          type="button"
                          className="btn btn-primary px-3 py-2"
                          data-toggle="modal"
                          data-target="#secretKeyModal"
                          onClick={() => setIsKeyGenerate(false)}
                        >
                          Show Secret Key
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-primary px-3 py-2"
                          data-toggle="modal"
                          data-target="#secretKeyModal"
                          onClick={() => setIsKeyGenerate(true)}
                        >
                          Generate Secret Key
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="setting-bg boxShadow mb-5">
                <div className="row">
                  <div className="col-md-12 mb-xl-0 mb-4">
                    <div className="card-body">
                      <div className="cp-user-card-header-area">
                        <div className="cp-user-title">
                          <h4>{t("Api Access Settings")}</h4>
                        </div>
                      </div>
                      <div className="my-3 ">
                        <div className="row" style={{ alignItems: "end" }}>
                          <div className="col-md-3">
                            <div className="form-group p2pSelectFilter">
                              <label>
                                {" "}
                                {t(`Allow This User To Access Api`)}
                              </label>
                              <CUstomSelect
                                options={allowUser}
                                handleFunction={handleFunc}
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group p2pSelectFilter">
                              <label>
                                {" "}
                                {t(`Withdrawal Api Access Enable`)}
                              </label>
                              <CUstomSelect
                                options={withdrawlAccess}
                                handleFunction={handleFunc}
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group p2pSelectFilter">
                              <label>{t(`Trade Api Access Enable`)}</label>
                              <CUstomSelect
                                options={tradelAccess}
                                handleFunction={handleFunc}
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group p2pSelectFilter">
                              <button
                                className="btn w-full"
                                style={{ height: "42px" }}
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="setting-bg boxShadow mb-5">
                <div className="row">
                  <div className="col-md-12 mb-xl-0 mb-4">
                    <div className="card-body">
                      <div className="cp-user-card-header-area mb-0">
                        <div className="cp-user-title">
                          <h4>{t("White Listed Ip Address")}</h4>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="btn btn-primary px-3 py-2"
                            data-toggle="modal"
                            data-target="#newIpAddressModal"
                          >
                            Add New
                          </button>
                        </div>
                      </div>

                      <div className="asset-balances-area cstm-loader-area">
                        <div className="asset-balances-left">
                          <div className="section-wrapper px-0">
                            <div className="tableScroll pr-0">
                              <div className=" table-responsive">
                                <CustomDataTable
                                  columns={columns}
                                  data={Changeable}
                                  selectedLimit={selectedLimit}
                                  setSelectedLimit={setSelectedLimit}
                                  search={search}
                                  setSearch={setSearch}
                                  processing={processing}
                                  verticalAlignData={`middle`}
                                  isOverflow={true}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <SecretKeyModal isKeyGenerate={isKeyGenerate} />
      <IpAddressModal />
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/api-settings");
  return {
    props: {},
  };
};

export default ApiSettings;
