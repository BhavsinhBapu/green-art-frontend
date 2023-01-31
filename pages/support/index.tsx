import { SupportCard } from "components/Support/support-card";
import { TicketBox } from "components/Support/ticket-box";
import { TicketFilter } from "components/Support/ticket-filter";

const Support = () => {
  const ticketList = [
    {
      title: "Total Ticket",
      ticketNumber: 2,
    },
    {
      title: "Pending Ticket",
      ticketNumber: 2,
    },
    {
      title: "Open Ticket",
      ticketNumber: 0,
    },
    {
      title: "Close Ticket",
      ticketNumber: 1,
    },
  ];

  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <div className="support-left-user py-4">
              <div className="support-user-img text-center mb-4">
                <img src="/user.jpeg" alt="img" />
                <h6 className="my-2">Mr User</h6>
                <small className="fw-bolder text-secondary">
                  user@email.com
                </small>
              </div>
              <ul className="user-item-list">
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li>
                  <a href="" target="__blank">
                    Exchange
                  </a>
                </li>
                <li>
                  <a href="">Knowledge</a>
                </li>
                <li>
                  <a href="">Create Ticket</a>
                </li>
                <li>
                  <a href="">Pending Ticket (1)</a>
                </li>
                <li>
                  <a href="">Open Ticket (0)</a>
                </li>
                <li>
                  <a href="">Close Ticket (0)</a>
                </li>
                <li>
                  <a href="">Close Forever Ticket (0)</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 col-lg-9">
            <div className="row  mb-5">
              {ticketList.map((item, index) => (
                <SupportCard key={index} item={item} />
              ))}
            </div>
            <div className="row">
              <div className="col-md-12 d-flex">
                <input
                  placeholder="Search Ticket ID or Title or Puchase Code"
                  className="w-100 px-2 py-2 rounded search-field"
                  type="text"
                  name="search"
                  value=""
                />
                <button
                  className=" btn_ticket_search px-3 ml-2 rounded"
                  type="submit">
                  Search
                </button>
              </div>
            </div>

            <TicketFilter />

            <div className="row mt-5">
              <TicketBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Support;
