export const TicketNote = () => {
  return (
    <>
      <form>
        <h5 className="uppercase p_color mb-3">Note</h5>
        <div className="side-ticket-add d-flex w-100 border p-3 rounded chat-side-info">
          <input className="w-100 px-2 rounded" type="text" name="notes" />
          <button className="chat_btn rounded ml-2" type="submit">
            Save
          </button>
        </div>
      </form>

      <ul>
        <li className="rounded chat-side-info mt-2 pt-2 pb-3 px-3">
          <div>
            Use border utilities to quickly style the border and border-radius
            of an element. Great for images, buttons, or any other element.
          </div>
          <div className="mt-3">
            <a className="chat_btn text-dark rounded" href="">
              <small>Delete</small>
            </a>
          </div>
        </li>
      </ul>
    </>
  );
};
