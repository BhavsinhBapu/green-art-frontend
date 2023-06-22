import { NoItemFound } from "components/NoItemFound/NoItemFound";
import P2PGiftCardHeader from "components/P2P/p2p-gift-card/p2p-gift-card-header/P2PGiftCardHeader";
import P2PGiftCardNavbar from "components/P2P/p2p-gift-card/p2p-gift-card-navbar/P2PGiftCardNavbar";
import ImageComponent from "components/common/ImageComponent";
import SectionLoading from "components/common/SectionLoading";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import {
  getMyGiftCardAdsListsApi,
  handleAdsDeleteApi,
} from "service/p2pGiftCards";

const limit = 2;
export default function Index() {
  const [loading, setLoading] = useState(false);
  const [myCards, setMyCards] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    getMyGiftCardAdsLists(limit, 1);
  }, []);

  const getMyGiftCardAdsLists = async (limit: any, page: any) => {
    setLoading(true);

    const data = await getMyGiftCardAdsListsApi(limit, page);
    setLoading(false);
    if (!data.success) {
      toast.error(data.message);
      return;
    }
    setMyCards(data.data);
  };

  const handlePageClick = (event: any) => {
    getMyGiftCardAdsLists(limit, event.selected + 1);
  };

  const handleAdsDelete = async (ads_id: any) => {
    const confirm = window.confirm("Are you sure you want to proceed?");
    if (!confirm) return;
    const data = await handleAdsDeleteApi(ads_id);
    if (!data.success) {
      toast.error(data.message);
      return;
    }
    toast.success(data.message);
    getMyGiftCardAdsLists(limit, 1);
  };
  const handleAdsEdit = (ads_uid: any) => {
    router.push(`/p2p/gift-card/edit-ads/${ads_uid}`);
  };
  return (
    <section>
      {/* second nav */}
      <P2PGiftCardNavbar />

      <P2PGiftCardHeader title={"My Gift Card Adds"} />
      {/* item part */}

      <div className="container">
        {loading ? (
          <SectionLoading />
        ) : (
          <div className="table-responsive mt-5">
            {myCards?.data?.length > 0 ? (
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
                  {myCards?.data?.map((item: any, index: number) => (
                    <tr className="tableRow" key={index}>
                      <td>{item.price}</td>
                      <td>{item.amount}</td>
                      <td>{item.status === 1 ? "Active" : "Deactive"}</td>
                      <td>{item.created_at}</td>

                      <td>
                        <button
                          className="tableButton p2p-gift-card-adds-margin-bottom"
                          onClick={() => handleAdsEdit(item.uid)}
                        >
                          Edit
                        </button>
                        <button
                          className="tableButton bg-card-primary-color p2p-gift-card-adds-margin-left"
                          onClick={() => handleAdsDelete(item.id)}
                        >
                          Delete
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
            pageCount={Math.ceil(myCards.total / limit)}
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
