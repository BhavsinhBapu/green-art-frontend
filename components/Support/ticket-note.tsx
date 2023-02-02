import { useState } from "react";
import {
  supportTicketNoteCreate,
  supportTicketNoteDelete,
} from "service/knowledgebase";

export const TicketNote = ({ ticketDetails, notes, setNotes }: any) => {
  const [note, setNote] = useState("");

  const saveNote = async () => {
    const { data } = await supportTicketNoteCreate(ticketDetails?.id, note);
    setNotes(data);
    setNote("");
  };
  const deleteNote = async () => {
    console.log(ticketDetails?.unique_code, "ticketDetails?.unique_code");
    const { data } = await supportTicketNoteDelete(ticketDetails?.unique_code);
    setNotes(data);
  };
  return (
    <>
      <h5 className="uppercase p_color mb-3">Note</h5>
      <div className="side-ticket-add d-flex w-100 border p-3 rounded chat-side-info">
        <input
          className="w-100 px-2 rounded"
          type="text"
          name="notes"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
        <button
          className="chat_btn rounded ml-2"
          type="button"
          onClick={saveNote}>
          Save
        </button>
      </div>

      <div>
        {notes?.map((note: any) => (
          <div className="rounded chat-side-info mt-2 pt-2 pb-3 px-3">
            <div>{note?.notes}</div>
            <div className="text-right mt-3">
              <a href="" className="chat_btn rounded" onClick={deleteNote}>
                <small>Delete</small>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
