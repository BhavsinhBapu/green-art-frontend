import Footer from "components/common/footer";
import SectionLoading from "components/common/SectionLoading";
import { AddPostStep } from "components/P2P/AddPost/AddPostStep";
import { AddPostOne } from "components/P2P/AddPost/AddPostStep_one";
import { AddPostThree } from "components/P2P/AddPost/AddPostStep_three";
import { AddPostTwo } from "components/P2P/AddPost/AddPostStep_two";
import { P2pTopBar } from "components/P2P/P2pHome/TopBar";
import { useState } from "react";
import { useAddPostInitial } from "state/actions/p2p";

const AddPost = () => {
  const {
    data,
    loading,
    error,
    setAddTabButton,
    addTabButton,
    addStep,
    setAddStep,
    selectedAsset,
    selectedCurrency,
    setSelectedAsset,
    setselectedCurrency,
  } = useAddPostInitial();

  console.log(data?.data?.currency, "ssacs");
  return (
    <>
      {loading ? (
        <SectionLoading />
      ) : (
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
          <AddPostStep />
          <div className="container">
            <div className="row">
              <div className="col-6">
                <button
                  className={`addTabButton ${
                    addTabButton && "buySellBoxActive"
                  }`}
                  onClick={() => setAddTabButton(true)}
                >
                  I Want to Buy
                </button>
              </div>
              <div className="col-6">
                <button
                  className={`addTabButton ${
                    !addTabButton && "buySellBoxActive"
                  }`}
                  onClick={() => setAddTabButton(false)}
                >
                  I Want to Sell
                </button>
              </div>
              {addStep === "stepOne" && (
                <AddPostOne
                  data={data}
                  setAddStep={setAddStep}
                  selectedAsset={selectedAsset}
                  selectedCurrency={selectedCurrency}
                  setSelectedAsset={setSelectedAsset}
                  setselectedCurrency={setselectedCurrency}
                />
              )}
              {addStep === "stepTwo" && <AddPostTwo setAddStep={setAddStep} />}
              {addStep === "stepThree" && (
                <AddPostThree setAddStep={setAddStep} />
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};
export default AddPost;
