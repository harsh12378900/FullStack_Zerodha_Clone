import { useState } from "react";

function Signup() {

  // Form ke andar user ka data store hoga
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });


  // =====================================
  // Input change hone par ye function chalega
  // =====================================

  const handleChange = (e) => {

    setFormData({
      ...formData,

      [e.target.name]: e.target.value
    });

  };


  // =====================================
  // Form submit hone par ye function chalega
  // =====================================

  const handleSubmitForm = async (e) => {

    // Page reload hone se rokta hai
    e.preventDefault();


    console.log("Frontend data:", formData);


    try {

      // Backend ko signup request bhej rahe hain
      const response = await fetch(
        "https://zerodhaclone-zzzq.onrender.com/signup",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          // JWT cookie ko receive/send karne ke liye
          credentials: "include",

          // JavaScript object ko JSON string me convert karna
          body: JSON.stringify(formData)
        }
      );


      // Backend ka response JSON me convert
      const data = await response.json();


      console.log("Backend response:", data);


      // =====================================
      // Signup successful
      // =====================================

      if (response.ok) {

        alert("Signup successful!");

        // Dashboard par redirect
        window.location.href = "https://zerodhaclone2-6jes.onrender.com"

      }


      // =====================================
      // Signup failed
      // =====================================

      else {

        alert(data.message);

      }


    } catch (error) {

      console.error("Signup Error:", error);

      alert("Unable to connect with server.");

    }

  };


  return (

    <div>

      <form onSubmit={handleSubmitForm}>


        {/* =====================================
            Username
        ===================================== */}

        <div className="row mb-3 m-4">

          <label
            htmlFor="inputName"
            className="col-sm-2 col-form-label"
          >
            Name
          </label>


          <div className="col-sm-10">

            <input
              type="text"

              className="form-control"

              id="inputName"

              name="username"

              placeholder="Enter your name"

              value={formData.username}

              onChange={handleChange}

            />

          </div>

        </div>



        {/* =====================================
            Email
        ===================================== */}

        <div className="row mb-3 m-4">

          <label
            htmlFor="inputEmail"
            className="col-sm-2 col-form-label"
          >
            Email
          </label>


          <div className="col-sm-10">

            <input
              type="email"

              className="form-control"

              id="inputEmail"

              name="email"

              placeholder="Enter your email"

              value={formData.email}

              onChange={handleChange}

            />

          </div>

        </div>



        {/* =====================================
            Password
        ===================================== */}

        <div className="row mb-3 m-4">

          <label
            htmlFor="inputPassword"
            className="col-sm-2 col-form-label"
          >
            Password
          </label>


          <div className="col-sm-10">

            <input
              type="password"

              className="form-control"

              id="inputPassword"

              name="password"

              placeholder="Enter your password"

              value={formData.password}

              onChange={handleChange}

            />

          </div>

        </div>



        {/* =====================================
            Signup Button
        ===================================== */}

        <button
          type="submit"
          className="btn btn-primary signup-button m-4"
        >
          Sign Up
        </button>


      </form>

    </div>

  );

}

export default Signup;