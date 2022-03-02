import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const ImageInputField = ({ setter, getter }: any) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setter(acceptedFiles[0]);
    },
    [setter]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  return (
    <div>
      <div className="container cstm-img-picker">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drop the files hereeeeeeeeeee ...</p>
          <h1>jasjdnskjan</h1>
        </div>
      </div>
      <div className="col-lg-6 mb-lg-0 mb-4">
        <div className="idcard">
          <div className="container cstm-img-picker">
            <img src={getter} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageInputField;
