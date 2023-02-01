import { formateData } from "common";
import Link from "next/link";

export const TicketBox = ({ ticket }: any) => {
  console.log(ticket, "ticket");
  return (
    <Link href={"/support/" + ticket?.unique_code}>
      <div className="col-12 my-2 ticket-card">
        <div className="card p-3 ">
          <a href="">
            <div className="row">
              <div className="col-md-8 ticket-card-inner">
                <h4 className="fw_600 text-dark p_color uppercase">
                  #{ticket?.project_id}
                </h4>
                <h6 className="fw_600 text-dark py-2">{ticket?.title}</h6>
              </div>
              <div className="col-md-4 p_color">
                <p>
                  <b>
                    Status: <span className="badge bg-warning">Pending</span>
                  </b>
                </p>
                <p>
                  <b>Assign To:</b> <small>Not Assign</small>
                </p>
                <p>
                  <b>Created At: </b>
                  <small>{formateData(ticket.created_at)}</small>
                </p>
                <p>
                  <b>Last Reply: </b>
                  <small>{formateData(ticket.updated_at)}</small>
                </p>
              </div>
              <hr />
              <div className="col-12">
                <p className="pt-3 p_color">
                  <b>Last Message:</b>
                  <br />
                  <small>{ticket?.last_conversation?.message}</small>
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Link>
  );
};
