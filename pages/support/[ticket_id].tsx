import { SupportChat } from "components/Support/support-chat";
import { TicketNote } from "components/Support/ticket-note";
import { TicketUserInfo } from "components/Support/ticket-user-info";
import {
  SSRAuthCheck,
  pageAvailabilityCheck,
} from "middlewares/ssr-authentication-check";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SupportTicketDetails = () => {
  const router = useRouter();
  useEffect(() => {
    console.log(router.query.ticket_id, "router.query.ticket_id");
  }, [router.query.ticket_id]);
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
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/support");
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
    props: {},
  };
};
export default SupportTicketDetails;
