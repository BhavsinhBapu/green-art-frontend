import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoIosEye } from "react-icons/io";

export const UserHeader = () => {
  return (
    <div className="container">
      <div className="row py-4 border-bottom align-items-center">
        <div className="col-md-6">
          <div className="tableImg d-flex align-items-center">
            <img
              src="https://api-tradex.nftarttoken.xyz/images/avatars/yellow-hat.png"
              alt=""
            />
            <h6 className="ml-2">Chirik34</h6>
            <span className="badge badge-secondary px-2 ml-2 py-2">
              Verified User
            </span>
          </div>
          <div className="ml-4 pl-2 d-flex align-items-center pt-1 userVerified">
            <p>
              Email <BsFillCheckCircleFill />
            </p>
            <p>
              SMS <BsFillCheckCircleFill />
            </p>
            <p>
              KYC <BsFillCheckCircleFill />
            </p>
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="d-flex align-items-center justify-content-start justify-content-md-end">
            <div>
              <p>
                P2P Estimated Value (BTC)
                <span className="badge badge-light px-1 ml-2 py-1">
                  <IoIosEye className="h5 mb-0" />
                </span>
              </p>
              <h6>32,422.099 BTC</h6>
            </div>
            <button className="tableButton px-3 ml-4">Become Merchant</button>
          </div>
        </div>
      </div>
    </div>
  );
};
