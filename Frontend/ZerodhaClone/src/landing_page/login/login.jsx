import { useState } from "react";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  // =====================================
  // INPUT CHANGE
  // =====================================

  function changedata(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }


  // =====================================
  // LOGIN FORM SUBMIT
  // =====================================

  async function handleSubmitForm(e) {

    e.preventDefault();

    console.log("Frontend data:", formData);


    try {

      // Backend ko login request
      const response = await fetch(
        "https://zerodhaclone-zzzq.onrender.com/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          // JWT cookie ke liye
          credentials: "include",

          // Form data backend ko bhejna
          body: JSON.stringify(formData)
        }
      );


      // Backend response
      const data = await response.json();

      console.log("Backend response:", data);


      // =====================================
      // LOGIN SUCCESS
      // =====================================

      if (response.ok) {

        alert("Login successful!");

        // Dashboard par redirect
        window.location.href = "https://zerodhaclone2-6jes.onrender.com/";

      }


      // =====================================
      // LOGIN FAILED
      // =====================================

      else {

        alert(data.message || "Login failed");

      }


    } catch (error) {

      console.error("Login Error:", error);

      alert("Unable to connect with server.");

    }

  }


  return (

    <div>

      <form onSubmit={handleSubmitForm}>

        {/* =====================================
            EMAIL
        ===================================== */}

        <div className="row mb-3 m-4">

          <label
            htmlFor="inputEmail3"
            className="col-sm-2 col-form-label"
          >
            Email
          </label>


          <div className="col-sm-10">

            <input
              type="email"

              name="email"

              className="form-control"

              id="inputEmail3"

              value={formData.email}

              placeholder="Enter your email"

              onChange={changedata}

              required
            />

          </div>

        </div>


        {/* =====================================
            PASSWORD
        ===================================== */}

        <div className="row mb-3 m-4">

          <label
            htmlFor="inputPassword3"
            className="col-sm-2 col-form-label"
          >
            Password
          </label>


          <div className="col-sm-10">

            <input
              type="password"

              name="password"

              className="form-control"

              id="inputPassword3"

              value={formData.password}

              placeholder="Enter your password"

              onChange={changedata}

              required
            />

          </div>

        </div>


        {/* =====================================
            LOGIN BUTTON
        ===================================== */}

        <button
          type="submit"
          className="btn btn-primary signup-button m-4"
        >
          Login
        </button>


      </form>

    </div>

  );
}

export default Login;