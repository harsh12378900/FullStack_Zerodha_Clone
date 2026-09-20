import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  console.log("BUY WINDOW RENDERED");
  console.log("UID:", uid);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post("https://zerodhaclone-zzzq.onrender.com/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    GeneralContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div
      className="container w-100"
      id="buy-window"
      draggable="true"
    >
      <div className="regular-order w-100">
        <div className="inputs d-flex flex-column flex-sm-row gap-3">
          <fieldset className="flex-fill">
            <legend>Qty.</legend>

            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              className="form-control"
            />
          </fieldset>

          <fieldset className="flex-fill">
            <legend>Price</legend>

            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              className="form-control"
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
        <span>Margin required ₹140.65</span>

        <div className="d-flex gap-2">
          <Link
            className="btn btn-blue"
            onClick={handleBuyClick}
          >
            Buy
          </Link>

          <Link
            to=""
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;