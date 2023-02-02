import { NoItemFound } from "components/NoItemFound/NoItemFound";
import PaginationGlobal from "components/Pagination/PaginationGlobal";
import { SupportCard } from "components/Support/support-card";
import { TicketBox } from "components/Support/ticket-box";
import { TicketFilter } from "components/Support/ticket-filter";
import { CustomLoading } from "components/common/CustomLoading";
import {
  SSRAuthCheck,
  pageAvailabilityCheck,
} from "middlewares/ssr-authentication-check";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import {
  knowledgebaseSupportProjectList,
  supportTicketList,
} from "service/knowledgebase";
import { customPage, landingPage } from "service/landing-page";

const Support = () => {
  const [fullDashboar, setFullDashboard] = useState<any>();
  const [loading, setloading] = useState<any>(false);
  const [ticket_list, setTicket_list] = useState<any>();
  const [projectList, setProjectList] = useState([]);
  const [filter, setfilter] = useState<any>({
    project: "",
    status: "",
    from: "",
    to: "",
  });
  const getDashbaordData = async () => {
    const DashboardData = await supportTicketList(5, 1, "", "", "", "", "");
    setFullDashboard(DashboardData.data);
    setTicket_list(DashboardData?.data?.ticket_list);
  };

  const getProjectList = async () => {
    const { data } = await knowledgebaseSupportProjectList();
    setProjectList(data);
  };
  const searchDashboardData = async (query: any) => {
    setloading(true);

    const DashboardData = await supportTicketList(5, 1, query, "", "", "", "");
    setFullDashboard(DashboardData.data);
    setTicket_list(DashboardData?.data?.ticket_list);
    setloading(false);
  };
  const FilterDashboardData = async () => {
    setloading(true);

    const DashboardData = await supportTicketList(
      5,
      1,
      "",
      filter.status,
      filter.project,
      filter.from,
      filter.to
    );
    setFullDashboard(DashboardData.data);
    setTicket_list(DashboardData?.data?.ticket_list);
    setloading(false);
  };
  const getDashbaordDataPaginationAction = async (
    page: any,
    setData: any,
    setLoading: any,
    selected: any
  ) => {
    setloading(true);

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
    setloading(true);
  };
  useEffect(() => {
    getDashbaordData();
    getProjectList();
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
              <div className="col-md-12 d-flex align-items-center">
                <input
                  placeholder="Search Ticket ID or Title or Puchase Code"
                  className="px-2 py-2 rounded search-ticket"
                  type="text"
                  onChange={(e) => {
                    setTimeout(() => {
                      searchDashboardData(e.target.value);
                    }, 1000);
                  }}
                />
                <div>
                  <button
                    type="button"
                    className="btn btn_ticket_search ml-2 rounded">
                    Ticket Create
                  </button>
                </div>
              </div>
            </div>

            {loading ? (
              <CustomLoading />
            ) : (
              <>
                <TicketFilter
                  filter={filter}
                  projectList={projectList}
                  setfilter={setfilter}
                  FilterDashboardData={FilterDashboardData}
                />
                <div className="row mt-5">
                  {ticket_list?.data?.map((ticket: any, index: any) => (
                    <TicketBox key={index} ticket={ticket} />
                  ))}
                </div>
                {ticket_list?.data.length === 0 && <NoItemFound />}
                {ticket_list?.data.length > 0 && (
                  <PaginationGlobal
                    setTimelineData={setTicket_list}
                    links={ticket_list?.links}
                    setLoading={null}
                    LinkTopaginationString={getDashbaordDataPaginationAction}
                  />
                )}
              </>
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
