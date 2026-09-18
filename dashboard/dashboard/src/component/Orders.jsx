import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/allfindOrder")
      .then((data) => {
        console.log("API Data:", data.data);
        setOrders(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="orders">
      <div className="no-orders">
        {/* <p>You haven't placed any orders today</p> */}

        {/* <Link to={"/"} className="btn">
          Get started
        </Link> */}

        <div className="order-table table-responsive" style={{ width: "90%" }}>
          <table className="table">
            <thead>
              <tr style={{ border: "1px solid black" }}>
                <th
                  scope="col"
                  style={{
                    border: "1px solid black",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Name
                </th>

                <th
                  scope="col"
                  style={{
                    border: "1px solid black",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Qty
                </th>

                <th
                  scope="col"
                  style={{
                    border: "1px solid black",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Price
                </th>

                <th
                  scope="col"
                  style={{
                    border: "1px solid black",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Mode
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => {
                return (
                  <tr
                    key={order._id}
                    style={{ border: "1px solid black" }}
                  >
                    <td
                      style={{
                        border: "1px solid black",
                        fontSize: "16px",
                        color: "black",
                      }}
                    >
                      {order.name}
                    </td>

                    <td
                      style={{
                        border: "1px solid black",
                        fontSize: "16px",
                        color: "black",
                      }}
                    >
                      {order.qty}
                    </td>

                    <td
                      style={{
                        border: "1px solid black",
                        fontSize: "16px",
                        color: "black",
                      }}
                    >
                      {order.price}
                    </td>

                    <td
                      style={{
                        border: "1px solid black",
                        fontSize: "16px",
                        color: "black",
                      }}
                    >
                      {order.mode}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;