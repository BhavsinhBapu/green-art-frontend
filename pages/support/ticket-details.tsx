import { SupportChat } from "components/Support/support-chat";
import { TicketNote } from "components/Support/ticket-note";
import { TicketUserInfo } from "components/Support/ticket-user-info";

const SupportTicketDetails = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <SupportChat />

          <div className="col-lg-4 mt-5 mt-lg-0">
            <TicketUserInfo />
            <TicketNote />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SupportTicketDetails;
