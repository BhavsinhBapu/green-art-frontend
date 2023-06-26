import { TradeChat } from "components/P2P/Trade/trade-chat";
import P2PGiftCardHeader from "components/P2P/p2p-gift-card/p2p-gift-card-header/P2PGiftCardHeader";
import P2PGiftCardNavbar from "components/P2P/p2p-gift-card/p2p-gift-card-navbar/P2PGiftCardNavbar";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { sendMessageTrade } from "service/p2p";
import { RootState } from "state/store";

export default function Index() {
  const router = useRouter();
  const { uid }: any = router.query;
  const { p2pDetails: details } = useSelector((state: RootState) => state.user);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<any>();

  const sendMessage = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("order_uid", uid);
    formData.append("message", message);
    file && formData.append("file", file);
    setMessage("");
    await sendMessageTrade(formData);
  };
  return (
    <section>
      <P2PGiftCardNavbar />
      <P2PGiftCardHeader title={"Buy Details"} />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12"></div>
          <div className="col-md-6 col-12">
            <TradeChat
              col="col-12"
              details={details}
              sendMessage={sendMessage}
              setMessage={setMessage}
              setFile={setFile}
              message={message}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
