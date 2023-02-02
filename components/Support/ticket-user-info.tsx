import { formateData } from "common";
import {
  TICKET_STATUS_CLOSE,
  TICKET_STATUS_OPEN,
  TICKET_STATUS_PENDING,
} from "helpers/core-constants";

export const TicketUserInfo = ({ ticketDetails }: any) => {
  return (
    <div className="p_color chat-side-info mb-4 p-3 rounded">
      <h5 className="uppercase">
        # {ticketDetails?.project_id} {ticketDetails?.title}
      </h5>
      <p>
        <small>
          {ticketDetails?.status === TICKET_STATUS_PENDING ? (
            <span className="badge bg-warning text-white">Pending</span>
          ) : ticketDetails?.status === TICKET_STATUS_OPEN ? (
            <span className="badge bg-info text-white">Open</span>
          ) : ticketDetails?.status === TICKET_STATUS_CLOSE ? (
            <span className="badge bg-danger text-white">Close</span>
          ) : (
            <span className="badge bg-danger text-white">Close forever</span>
          )}
        </small>
      </p>
      <p>
        <b className="mr-2">Assign To:</b>
        {ticketDetails?.agent_name ? (
          <small>{ticketDetails?.agent_name}</small>
        ) : (
          <small>Not Assign</small>
        )}
      </p>
      <p>
        <b className="mr-1">Ticket Created At: </b>
        <small>{formateData(ticketDetails?.created_at)}</small>
      </p>
    </div>
  );
};
