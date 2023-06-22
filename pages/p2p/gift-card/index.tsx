import { NoItemFound } from "components/NoItemFound/NoItemFound";
import P2PGiftCardNavbar from "components/P2P/p2p-gift-card/p2p-gift-card-navbar/P2PGiftCardNavbar";
import { CUstomSelect } from "components/common/CUstomSelect";
import SectionLoading from "components/common/SectionLoading";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import { getAllGiftCardAdsApi } from "service/p2pGiftCards";

const ooptions = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 3, label: "Option 3" },
];

const limit = 2;

export default function Index() {
  const [allGiftCardAds, setAllGiftCardAds] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getAllGiftCardAds();
  }, []);

  const getAllGiftCardAds = async () => {
    setLoading(true);
    const data = await getAllGiftCardAdsApi();
    setLoading(false);

    if (!data.success) {
      toast.error(data.message);
      return;
    }
    setAllGiftCardAds(data.data);

    console.log("data", data);
  };

  const demoFunc = (event: any) => {
    console.log("Demo Func");
  };

  const handlePageClick = () => {
    console.log('')
  }
  return (
    <section>
      <div className="p2p_bg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="text-white">
                Tradexpro Peer-to-Peer Ecosystem With unlimited countries and
                payment system
              </h2>

              <p className="text-white">
                Tradexpro is the largest centralized exchange globally. However,
                it is also a major player in the P2P trading space
              </p>
            </div>
            {/* <div className="col-md-12">{isLoggedIn && <P2pTopBar />}</div> */}
          </div>
        </div>
      </div>
      {/* second nav */}
      <P2PGiftCardNavbar />
      {/* filter part */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <label>Amount</label>
            <div className="P2psearchBox position-relative">
              <input type="text" placeholder="Enter amount EUR" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group p2pSelectFilter">
              <label> Fiat</label>
              <CUstomSelect options={ooptions} handleFunction={demoFunc} />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group p2pSelectFilter">
              <label> Payment</label>
              <CUstomSelect options={ooptions} handleFunction={demoFunc} />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group p2pSelectFilter">
              <label>Available Region(s)</label>
              <CUstomSelect options={ooptions} handleFunction={demoFunc} />
            </div>
          </div>
        </div>
      </div>
      {/* item part */}
      <div className="container">
        {loading ? (
          <SectionLoading />
        ) : (
          <div className="table-responsive mt-5">
            {allGiftCardAds?.data?.length > 0 ? (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Price</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allGiftCardAds?.data?.map((item: any, index: number) => (
                    <tr className="tableRow" key={index}>
                      <td>{item.price}</td>
                      <td>{item.amount}</td>
                      <td>{item.status === 1 ? "Active" : "Deactive"}</td>
                      <td>{item.created_at}</td>

                      <td>
                        <button className="tableButton p2p-gift-card-adds-margin-bottom">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="my-5">
                <NoItemFound />
              </div>
            )}
          </div>
        )}
        <div className="row justify-content-center my-5">
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={Math.ceil(allGiftCardAds.total / limit)}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className={`d-flex align-items-center justify-content-center`}
            pageLinkClassName={`paginate-number`}
            activeLinkClassName={`active-paginate-cls`}
            previousLinkClassName={`text-primary-color text-25 mr-2`}
            nextLinkClassName={`text-primary-color text-25 ml-2`}
          />
        </div>
      </div>
    </section>
  );
}
