import { useState, useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    fetch("https://zerodhaclone-zzzq.onrender.com/allHoldings")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Data:", data);
        setHoldings(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const labels = holdings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock name",
        data: holdings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">
        Holdings ({holdings.length})
      </h3>

      <div className="order-table table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((stock, index) => {
              const curValue = stock.price * stock.qty;

              const isProfit =
                curValue - stock.avg * stock.qty >= 0;

              const profClass = isProfit ? "profit" : "loss";

              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>

                  <td>{stock.qty}</td>

                  <td>{stock.avg.toFixed(2)}</td>

                  <td>{stock.price.toFixed(2)}</td>

                  <td>{curValue.toFixed(2)}</td>

                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>

                  <td className={profClass}>
                    {stock.net}
                  </td>

                  <td className={dayClass}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col-12 col-md-4">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>

        <div className="col-12 col-md-4">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>

        <div className="col-12 col-md-4">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;