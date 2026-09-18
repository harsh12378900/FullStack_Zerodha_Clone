import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* Right Content */}
        <div className="col-12 col-md-6 p-4 p-md-5 mt-3 mt-md-5">

          <h1>{productName}</h1>

          <p>{productDesription}</p>

          {/* Demo & Learn More */}
          <div className="d-flex flex-wrap gap-3">

            <a href={tryDemo}>
              Try Demo{" "}
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
              ></i>
            </a>

            <a href={learnMore}>
              Learn More{" "}
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
              ></i>
            </a>

          </div>

          {/* App Store Buttons */}
          <div className="mt-4 d-flex flex-wrap align-items-center gap-3">

            <a href={googlePlay}>
              <img
                src="/media/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
              />
            </a>

            <a href={appStore}>
              <img
                src="/media/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
              />
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}

export default LeftSection;