import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {

  const navigate = useNavigate();

  function handleSignup() {
    navigate("/signup2");
  }

  return (
    <div className="container p-4 p-md-5">
      <div className="row text-center">

        <h1 className="mt-4 mt-md-5">
          Open a Zerodha account
        </h1>

        <p className="mt-3">
          Modern platforms and apps, ₹0 investment, and flat ₹20 intraday
          and F&O trades.
        </p>

        <button
          className="p-3 btn btn-primary w-50 w-md-auto mx-auto mt-3"
          onClick={handleSignup}
        >
          Sign up Now
        </button>

      </div>
    </div>
  );
}

export default OpenAccount;