import { NoItemFound } from "components/NoItemFound/NoItemFound";
import P2PGiftCardHeader from "components/P2P/p2p-gift-card/p2p-gift-card-header/P2PGiftCardHeader";
import P2PGiftCardNavbar from "components/P2P/p2p-gift-card/p2p-gift-card-navbar/P2PGiftCardNavbar";
import ImageComponent from "components/common/ImageComponent";
import SectionLoading from "components/common/SectionLoading";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineGift } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";
import { RiPagesLine } from "react-icons/ri";
import ReactPaginate from "react-paginate";
import { getMyCards } from "state/actions/giftCards";

const limit = 10;
export default function Index() {
  const [loading, setLoading] = useState(false);
  const [myCards, setMyCards] = useState<any>({});

  useEffect(() => {
    getMyCards(1, limit, 1, setLoading, setMyCards);
  }, []);

  const handlePageClick = (event: any) => {
    getMyCards(1, limit, event.selected + 1, setLoading, setMyCards);
  };
  return (
    <section>
      {/* second nav */}
      <P2PGiftCardNavbar />

      <P2PGiftCardHeader title={"Gift Card Lists"} />
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
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myCards?.data?.map((item: any, index: number) => (
                    <tr className="tableRow" key={index}>
                      <td>
                        <ImageComponent
                          src={item.banner.image || "/demo_gift_banner.png"}
                          height={200}
                        />
                      </td>
                      <td>{item.banner.title}</td>
                      <td>{item.amount}</td>
                      <td>
                        <Link href={`/p2p/gift-card/create-ads/${item.id}`}>
                          <a className="tableButton">Create</a>
                        </Link>
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
