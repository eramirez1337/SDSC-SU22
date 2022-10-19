import React from "react";
import LoadingImage from "../assets/hammer.png";
import LoadingGif from "../assets/pickaxe.gif";

function Loading() {
  return (
    <div className="loading d-flex flex-column">
      <div className="row">
        <div className="col-12">
          <div className="d-flex w-100 justify-content-center">
            <h1 className="display-3 bold">Media Mine</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="container loading-image-holder w-100 d-flex justify-content-center">
            <img
              className="loading-image"
              src={LoadingGif}
              alt="loading..."
            />
          </div>
        </div>
      </div>
      <h1
        className="display-6 text-center w-100 mt-3"
        style={{ color: "var(--sea-green-crayola)" }}
      >
        Mining in Progress...
      </h1>
    </div>
  );
}

export default Loading;
