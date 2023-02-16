import Footer from "components/common/footer";
import { AddPostSteep } from "components/P2P/AddPost/AddPostSteep";
import { AddPostOne } from "components/P2P/AddPost/AddPostSteep_one";
import { AddPostThree } from "components/P2P/AddPost/AddPostSteep_three";
import { AddPostTwo } from "components/P2P/AddPost/AddPostSteep_two";
import { P2pTopBar } from "components/P2P/P2pHome/TopBar";
import { useState } from "react";

const AddPost = () => {
  const [addTabButton, setAddTabButton] = useState(true);
  const [addSteep, setAddSteep] = useState("steepOne");

  return (
    <>
      <div className="mb-5">
        <P2pTopBar />
        <div className="adPost_bg py-3">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3>Post Normal Ad</h3>
              </div>
            </div>
          </div>
        </div>
        <AddPostSteep />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <button
                className={`addTabButton ${addTabButton && "buySellBoxActive"}`}
                onClick={() => setAddTabButton(true)}>
                I Want to Buy
              </button>
            </div>
            <div className="col-6">
              <button
                className={`addTabButton ${
                  !addTabButton && "buySellBoxActive"
                }`}
                onClick={() => setAddTabButton(false)}>
                I Want to Sell
              </button>
            </div>
            {addSteep === "steepOne" && (
              <AddPostOne setAddSteep={setAddSteep} />
            )}
            {addSteep === "steepTwo" && (
              <AddPostTwo setAddSteep={setAddSteep} />
            )}
            {addSteep === "steepThree" && (
              <AddPostThree setAddSteep={setAddSteep} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AddPost;