import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageInputField from "./imageInputField";

const NidModal = ({ type }: any) => {
  const [frontSide, setFrontSide] = useState(null);
  const [backSide, setBackSide] = useState(null);
  const storeSelectedFile = (e: any, setState: any) => {
    var reader = new FileReader();
    var url = reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = function (e) {
      setState(reader.result);
    };

    console.log(url, "url");
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
                                storeSelectedFile(e, setFrontSide);
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
                                storeSelectedFile(e, setBackSide);
                              }}
                            />
                            <span>drag and drop file</span>
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* {frontSide && (
                    <img src={frontSide} className="img-fluid" alt="" />
                  )} */}

                  {/* 
                  <div>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>Drop the files here ...</p>
                    </div>
                  </div> */}

                  {/* {paths.length > 0 &&
                    paths.map((path: any, index: any) => (
                      <div className="col-lg-6 mb-lg-0 mb-4" key={index}>
                        <div className="idcard">
                          <h3 className="title">Front Side {index + 2}</h3>
                          <div className="container cstm-img-picker">
                            <img src={path} className="img-fluid" alt="" />
                          </div>
                        </div>
                      </div>
                    ))} */}
                  <button
                    type="submit"
                    className="btn nimmu-user-sibmit-button mt-5"
                  >
                    Upload
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
