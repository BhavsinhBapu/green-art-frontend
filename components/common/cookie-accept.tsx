import React from "react";

const CookieAccept = ({ iUnderStand }: any) => {
  return (
    <div className="wrapper">
      <img src="/undraw_warning_re_eoyh.svg" />
      <div className="content">
        <header>Cookies Constent</header>
        <p>This website use cookies to ensure you get the besr experience</p>
        <div className="buttons">
          <button
            className="item"
            onClick={() => {
              iUnderStand();
            }}
          >
            I understand
          </button>
          <a href="#" className="item">
            provacy policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookieAccept;
