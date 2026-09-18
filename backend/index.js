require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Models
const Holding = require("./model/holdingModel.js");
const Position = require("./model/positionModel.js");
const order = require("./model/orderModel.js");
const user = require("./model/userModels.js");

// Data
const holdingData = require("./data/holdingData.js");
const positionData = require("./data/positionData.js");

// Create Express App
const app = express();

// =====================================
// MIDDLEWARE
// =====================================

// JSON data read karne ke liye
app.use(express.json());

// Cookie read karne ke liye
app.use(cookieParser());

// =====================================
// CORS
// =====================================

app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        "http://localhost:5173",
        "http://localhost:5174"
      ];

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true
  })
);

// =====================================
// ENVIRONMENT VARIABLES
// =====================================

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

// =====================================
// MONGODB CONNECTION
// =====================================

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

// =====================================
// HOLDINGS
// =====================================

// Add Holdings
app.get("/addHolding", async (req, res) => {
  try {
    for (const item of holdingData) {
      const holding = new Holding({
        name: item.name,
        qty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.net,
        day: item.day,
        isLoss: item.isLoss
      });

      await holding.save();
    }

    res.send("All holdings added successfully");
  } catch (error) {
    console.log(error);

    res.status(500).send("Error adding holdings");
  }
});

// Find All Holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const holdings = await Holding.find({});

    res.json(holdings);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Error finding holdings"
    });
  }
});

// =====================================
// POSITIONS
// =====================================

// Add Positions
app.get("/addPosition", async (req, res) => {
  try {
    for (const item of positionData) {
      const position = new Position({
        product: item.product,
        name: item.name,
        qty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.net,
        day: item.day,
        isLoss: item.isLoss
      });

      await position.save();
    }

    res.send("All positions added successfully");
  } catch (error) {
    console.log(error);

    res.status(500).send("Error adding positions");
  }
});

// Find All Positions
app.get("/allPositions", async (req, res) => {
  try {
    const positions = await Position.find({});

    res.json(positions);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Error finding positions"
    });
  }
});

// =====================================
// ORDERS
// =====================================

// Create New Order
app.post("/newOrder", async (req, res) => {
  try {
    const {
      name,
      qty,
      price,
      mode
    } = req.body;

    const newOrder = new order({
      name,
      qty,
      price,
      mode
    });

    await newOrder.save();

    res.status(201).json({
      message: "New order created successfully",
      order: newOrder
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Error creating new order"
    });
  }
});

// Find All Orders
app.get("/allfindOrder", async (req, res) => {
  try {
    const allOrders = await order.find({});

    res.status(200).json(allOrders);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Error finding orders"
    });
  }
});

// =====================================
// SIGNUP
// =====================================

app.post("/signup", async (req, res) => {
  try {
    // Frontend se data receive
    const {
      username,
      email,
      password
    } = req.body;

    console.log("Signup data:", {
      username,
      email
    });

    // Check user already exists
    const existingUser = await user.findOne({
      email
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered"
      });
    }

    // =====================================
    // Password Hash
    // =====================================

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    // =====================================
    // Create User
    // =====================================

    const newUser = await user.create({
      username,
      email,
      password: hashedPassword
    });

    console.log(
      "New user created:",
      newUser.email
    );

    // =====================================
    // Create JWT
    // =====================================

    const token = jwt.sign(
      {
        userId: newUser._id,
        email: newUser.email
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "1h"
      }
    );

    // =====================================
    // Store JWT in Cookie
    // =====================================

    res.cookie(
      "token",
      token,
      {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 1000
      }
    );

    // =====================================
    // Response
    // =====================================

    return res.status(201).json({
      message: "Signup successful"
    });

  } catch (error) {
    console.log("Signup Error:", error);

    return res.status(500).json({
      message: "Signup failed"
    });
  }
});

// =====================================
// LOGIN
// =====================================

app.post("/login", async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;

    // Find user
    const findUser = await user.findOne({
      email
    });

    if (!findUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // =====================================
    // Password Check
    // =====================================

    const result = await bcrypt.compare(
      password,
      findUser.password
    );

    if (!result) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    // =====================================
    // Create JWT
    // =====================================

    const token = jwt.sign(
      {
        userId: findUser._id,
        email: findUser.email
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "1h"
      }
    );

    // =====================================
    // Store JWT in Cookie
    // =====================================

    res.cookie(
      "token",
      token,
      {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 1000
      }
    );

    // =====================================
    // Response
    // =====================================

    return res.status(200).json({
      message: "User logged in successfully"
    });

  } catch (error) {
    console.log("Login Error:", error);

    return res.status(500).json({
      message: "Login failed"
    });
  }
});

// =====================================
// LOGOUT
// =====================================

app.post("/logout", (req, res) => {

  res.clearCookie("token", {
    httpOnly: true,
    secure: false
  });

  res.status(200).json({
    message: "Logged out successfully"
  });

});

// =====================================
// START SERVER
// =====================================

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}`
  );
});