import React from "react";
import "../App.css";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container p-4 p-md-5">

        <div className="row">

          {/* Logo & Copyright */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <img
              src="/media/images/logo.svg"
              alt="Logo"
              className="img-fluid"
              style={{ width: "50%", maxWidth: "180px" }}
            />

            <p className="mt-3 text-muted">
              © 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <h5>Company</h5>

            <p>About</p>
            <p>Products</p>
            <p>Pricing</p>
            <p>Referral programme</p>
            <p>Careers</p>
            <p>Zerodha.tech</p>
            <p>Press & media</p>
            <p>Zerodha cares (CSR)</p>
          </div>

          {/* Support */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <h5>Support</h5>

            <p>Contact</p>
            <p>Support portal</p>
            <p>Z-Connect blog</p>
            <p>List of charges</p>
            <p>Downloads & resources</p>
          </div>

          {/* Account */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <h5>Account</h5>

            <p>Open an account</p>
            <p>Fund transfer</p>
            <p>60 day challenge</p>
          </div>

        </div>

        {/* Legal Information */}
        <div
          className="mt-4 mt-md-5 text-muted"
          style={{ fontSize: "14px", lineHeight: "1.7" }}
        >

          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;