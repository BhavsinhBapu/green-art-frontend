import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  UploadDrivingLicenceImageAction,
  UploadNidImageAction,
  UploadPassportImageAction,
} from "state/actions/user";
import { useDispatch } from "react-redux";

const NidModal = ({ type }: any) => {
  const [previousType, setPreviousType] = useState<string>("");
  const [frontSide, setFrontSide] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [backSide, setBackSide] = useState(null);
  if (type !== previousType) {
    setPreviousType(type);
    setFrontSide(null);
    setBackSide(null);
  }
  const [uploadFiles, setUploadFiles] = useState({
    frontSide: null,
    backSide: null,
  });
  const storeSelectedFile = (e: any, setState: any, side: number) => {
    var reader = new FileReader();
    var url = reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = function (e) {
      setState(reader.result);
    };

    side === 1
      ? setUploadFiles({ ...uploadFiles, frontSide: e.target.files[0] })
      : setUploadFiles({ ...uploadFiles, backSide: e.target.files[0] });

    console.log(url, "url");
  };
  const uploadImage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const formData: any = new FormData();
    formData.append("file_two", uploadFiles.frontSide);
    formData.append("file_three", uploadFiles.backSide);
    if (type === "nid") {
      UploadNidImageAction(formData, setProcessing);
    } else if (type === "driving-licence") {
      UploadDrivingLicenceImageAction(formData, setProcessing);
    } else if (type === "passport") {
      UploadPassportImageAction(formData, setProcessing);
    }
  };
  return (
    <div
      className="modal fade cp-user-idverifymodal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <img src="/close.svg" className="img-fluid" alt="" />
              </span>
            </button>
            <form id="nidUpload" className="Upload">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="card-list">
                      <div
                        className="alert alert-danger d-none error_msg"
                        id="error_msg"
                        role="alert"
                      ></div>
                      <div
                        className="alert alert-success d-none succ_msg"
                        role="alert"
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-lg-0 mb-4">
                    <div className="idcard">
                      <h3 className="title">Front Side</h3>
                      <div className="container cstm-img-picker">
                        {frontSide ? (
                          <img src={frontSide} className="img-fluid" alt="" />
                        ) : (
                          <label className="container cstm-img-picker">
                            <input
                              type="file"
                              name="front_side"
                              onChange={(e) => {
                                storeSelectedFile(e, setFrontSide, 1);
                              }}
                            />
                            <span>drag and drop file</span>
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-lg-0 mb-4">
                    <div className="idcard">
                      <h3 className="title">Back Side</h3>
                      <div className="container cstm-img-picker">
                        {backSide ? (
                          <img src={backSide} className="img-fluid" alt="" />
                        ) : (
                          <label className="container cstm-img-picker">
                            <input
                              type="file"
                              name="front_side"
                              onChange={(e) => {
                                storeSelectedFile(e, setBackSide, 2);
                              }}
                            />
                            <span>drag and drop file</span>
                          </label>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn nimmu-user-sibmit-button mt-5"
                    onClick={(e) => {
                      uploadImage(e);
                    }}
                  >
                    {processing ? (
                      <>
                        <span
                          className="spinner-border spinner-border-md"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        <span>Please wait</span>
                      </>
                    ) : (
                      "Upload"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NidModal;
