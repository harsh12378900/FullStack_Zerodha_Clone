import React from "react";
import "../../App.css";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">

<div
  className="p-3 p-md-5 d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center align-items-md-center gap-3"
  id="supportWrapper"
>
  <h4 className="mb-0">Support Portal</h4>

  <a href="">Track Tickets</a>
</div>

      <div className="row p-3 p-md-5 m-2 m-md-3">

        {/* Search Section */}
        <div className="col-12 col-md-7 p-3">

          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            placeholder="Eg. how do I activate F&O"
            className="form-control mt-3"
          />

          <br />

          <a href="" className="link4">
            Track account opening
          </a>

          <a href="" className="link4">
            Track segment activation
          </a>

          <a href="" className="link4">
            Intraday margins
          </a>

          <a href="" className="link4">
            Kite user manual
          </a>

        </div>

        {/* Featured Section */}
        <div className="col-12 col-md-5 p-3 mt-4 mt-md-0">

          <h1 className="fs-3">
            Featured
          </h1>

          <ol>
            <li>
              <a href="">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>

            <li>
              <a href="">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>

        </div>

      </div>

    </section>
  );
}

export default Hero;