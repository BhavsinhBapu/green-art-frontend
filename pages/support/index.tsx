import PaginationGlobal from "components/Pagination/PaginationGlobal";
import { SupportCard } from "components/Support/support-card";
import { TicketBox } from "components/Support/ticket-box";
import { TicketFilter } from "components/Support/ticket-filter";
import {
  SSRAuthCheck,
  pageAvailabilityCheck,
} from "middlewares/ssr-authentication-check";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { supportTicketList } from "service/knowledgebase";
import { customPage, landingPage } from "service/landing-page";

const Support = () => {
  const [fullDashboar, setFullDashboard] = useState<any>();
  const [ticket_list, setTicket_list] = useState<any>();
  const getDashbaordData = async () => {
    const DashboardData = await supportTicketList(5, 1, "", "", "", "", "");
    setFullDashboard(DashboardData.data);
    setTicket_list(DashboardData?.data?.ticket_list);
  };

  const searchDashboardData = async (query: any) => {
    const DashboardData = await supportTicketList(5, 1, query, "", "", "", "");
    setFullDashboard(DashboardData.data);
    setTicket_list(DashboardData?.data?.ticket_list);
  };
  const getDashbaordDataPaginationAction = async (
    page: any,
    setData: any,
    setLoading: any,
    selected: any
  ) => {
    const url = page.url.split("?")[1];
    const number = url.split("=")[1];
    const response = await supportTicketList(
      5,
      parseInt(number),
      "",
      "",
      "",
      "",
      ""
    );
    setFullDashboard(response.data);
    setTicket_list(response?.data?.ticket_list);
  };
  useEffect(() => {
    getDashbaordData();
  }, []);
  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="row  mb-5">
              <SupportCard
                name="Total Ticket"
                ticketNumber={fullDashboar?.ticket_count?.total_ticket_count}
              />
              <SupportCard
                name="Pending Ticket"
                ticketNumber={
                  fullDashboar?.ticket_count?.total_pending_ticket_count
                }
              />
              <SupportCard
                name="Open Ticket"
                ticketNumber={
                  fullDashboar?.ticket_count?.total_open_ticket_count
                }
              />
              <SupportCard
                name="Close Ticket"
                ticketNumber={
                  fullDashboar?.ticket_count?.total_close_forever_ticket_count
                }
              />
            </div>
            <div className="row">
              <div className="col-md-12 d-flex">
                <input
                  placeholder="Search Ticket ID or Title or Puchase Code"
                  className="w-100 px-2 py-2 rounded search-field"
                  type="text"
                  onChange={(e) => {
                    setTimeout(() => {
                      searchDashboardData(e.target.value);
                    }, 1000);
                  }}
                />
                <button
                  className=" btn_ticket_search px-3 ml-2 rounded"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>

            <TicketFilter />
            <div className="row mt-5">
              {ticket_list?.data?.map((ticket: any) => (
                <TicketBox ticket={ticket} />
              ))}
            </div>
            {ticket_list?.data.length > 0 && (
              <PaginationGlobal
                setTimelineData={setTicket_list}
                links={ticket_list?.links}
                setLoading={null}
                LinkTopaginationString={getDashbaordDataPaginationAction}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/support");
  const { data } = await landingPage();
  const { data: customPageData } = await customPage();
  const commonRes = await pageAvailabilityCheck();
  if (parseInt(commonRes.knowledgebase_support_module) !== 1) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
    },
  };
};
export default Support;
