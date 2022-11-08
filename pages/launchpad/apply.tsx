import {
  FORM_CHECKBOX,
  FORM_FILE,
  FORM_INPUT_TEXT,
  FORM_RADIO,
  FORM_SELECT,
  FORM_TEXT_AREA,
} from "helpers/core-constants";
import React, { useEffect, useState } from "react";
import { launchpadDynamicFromAction } from "state/actions/launchpad";

const Apply = () => {
  const [launchpadForm, setLaunchpadForm] = useState([]);
  useEffect(() => {
    launchpadDynamicFromAction(setLaunchpadForm);
    console.log(launchpadForm, "launchpadForm");
  }, []);
  return (
    <div className="container">
      <div className="appy-form">
        {launchpadForm?.map((item: any) =>
          item.type === FORM_INPUT_TEXT ? (
            <div className="form-div">
              <label htmlFor="">{item?.title}</label>
              <input type="text" className="form-control apply-input" id="" />
            </div>
          ) : item.type === FORM_SELECT ? (
            <div className="form-div">
              <label htmlFor="">{item?.title}</label>
              <select className="form-control apply-select-field" name="" id="">
                {item.optionList.map((radioItem: any) => (
                  <>
                    <option value="">{radioItem}</option>
                  </>
                ))}
              </select>
            </div>
          ) : item.type === FORM_RADIO ? (
            <div className="form-div">
              <label htmlFor="">{item?.title}</label>
              {item.optionList.map((radioItem: any) => (
                <>
                  <input
                    className="form-control apply-radio-input"
                    type="radio"
                  />
                  <span>{radioItem}</span>
                </>
              ))}
            </div>
          ) : item.type === FORM_CHECKBOX ? (
            <div className="form-div">
              <label htmlFor="">{item?.title}</label>
              {item.optionList.map((radioItem: any) => (
                <>
                  <input
                    className="form-control apply-radio-input"
                    type="checkbox"
                  />
                  <span>{radioItem}</span>
                </>
              ))}
            </div>
          ) : item.type === FORM_FILE ? (
            <div className="form-div">
              <label htmlFor="">{item?.title}</label>
              <input className="apply-file-input" type="file" />
            </div>
          ) : item.type === FORM_TEXT_AREA ? (
            <div className="form-div">
              <label htmlFor="">{item?.title}</label>
              <textarea className="apply-file-input" />
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Apply;
