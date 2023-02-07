import { RiPagesLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";

export const P2pTopBar = () => {
  return (
    <div className="bg-dark py-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="d-flex float-right topBarList">
              <li>
                <a href="">
                  <RiPagesLine />
                  Orders
                </a>
              </li>
              <li>
                <a href="">
                  <HiUsers />
                  P2P User Center
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false">
                  More
                </a>
                <div className="dropdown-menu mt-3 bg-dark">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
