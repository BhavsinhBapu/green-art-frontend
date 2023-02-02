import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

export const SupportChat = ({
  sendMessage,
  setMessage,
  setFile,
  message,
}: any) => {
  const messagesEndRef = useRef(null);

  const { user } = useSelector((state: RootState) => state.user);
  const scrollToBottom = () => {
    //@ts-ignore
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const { supportChat: conversationDetails } = useSelector(
    (state: RootState) => state.user
  );
  useEffect(() => {
    scrollToBottom();
  }, [conversationDetails]);
  return (
    <div className="col-lg-8">
      <div className="chat_box rounded border p-3">
        <div className="chat_list w-100">
          <div className="row" id="append_conversation">
            {conversationDetails?.map((chat: any) =>
              chat?.user?.id === user.id || chat?.user_id === user.id ? (
                <div className="col-md-8 ml-auto">
                  <div className="d-flex justify-content-end my-2">
                    <small
                      className="chat_text mr-1"
                      dangerouslySetInnerHTML={{
                        __html: chat?.message,
                      }}
                    ></small>

                    <div>
                      <img className="chat_img" src="/user.jpeg" alt="" />
                    </div>
                  </div>
                  {chat.has_file === 1 && (
                    <a href="" target="_blank">
                      <img
                        className="rounded me-2 p-2"
                        width="90"
                        src={chat?.user?.photo}
                      />
                    </a>
                  )}
                </div>
              ) : (
                <div className="col-md-8">
                  <div className="d-flex justify-content-between my-2">
                    <div>
                      <img className="chat_img" src="/user.jpeg" alt="" />
                    </div>

                    <small
                      className="chat_text mr-1"
                      dangerouslySetInnerHTML={{
                        __html: chat?.message,
                      }}
                    ></small>
                  </div>

                  {chat.has_file === 1 && (
                    <a href="" target="_blank">
                      <img
                        className="rounded me-2 p-2"
                        width="90"
                        src={chat?.user?.photo}
                      />
                    </a>
                  )}
                </div>
              )
            )}
          </div>
        </div>
        <span ref={messagesEndRef}></span>
      </div>

      <div className="col-md-12 mt-4">
        <div className="d-flex gap-2 align-items-center">
          <input
            type="text"
            className="w-100 px-2 rounded py-2 message_bg"
            id="send-message-box"
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="message"
          />

          <div className="input-group chat_file_upload mx-1">
            <div className="custom-file ">
              <input
                type="file"
                className="custom-file-input "
                id="inputGroupFile01"
                onChange={(e: any) => {
                  setFile(e.target.files[0]);
                }}
              />
              <label className="custom-file-label">Choose</label>
            </div>
          </div>
          <button className="rounded chat_btn" onClick={sendMessage}>
            send
          </button>
        </div>
      </div>
    </div>
  );
};
