import React from "react";

function Hero() {
  return (
    <div className="container">

      {/* Pricing Heading */}
      <div className="row p-4 p-md-5 mt-4 mt-md-5 border-bottom text-center">
        <h1>Pricing</h1>

        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>

      {/* Pricing Cards */}
      <div className="row p-3 p-md-5 mt-4 mt-md-5 text-center">

        {/* Equity */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <img
            src="/media/pricingEquity.svg"
            alt="Free equity delivery"
            className="img-fluid"
          />

          <h1 className="fs-3 mt-3">
            Free equity delivery
          </h1>

          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        {/* Intraday */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <img
            src="/media/intradayTrades.svg"
            alt="Intraday and F&O trades"
            className="img-fluid"
          />

          <h1 className="fs-3 mt-3">
            Intraday and F&O trades
          </h1>

          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        {/* Mutual Funds */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <img
            src="/media/pricingEquity.svg"
            alt="Free direct MF"
            className="img-fluid"
          />

          <h1 className="fs-3 mt-3">
            Free direct MF
          </h1>

          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;