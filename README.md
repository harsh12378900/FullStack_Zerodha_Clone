# 📈 Zerodha Clone — Full Stack MERN Application

A full-stack **Zerodha-inspired stock trading platform** built using the MERN stack.

This project demonstrates how a modern full-stack application works from frontend UI to backend REST APIs, authentication, database management, cookies, middleware, and deployment.

> ⚠️ This project is created for educational and portfolio purposes only. It is not affiliated with or endorsed by Zerodha.

---

## 🚀 Live Demo

🌐 **Live Website:**  
https://your-live-frontend-url.com

🔗 **Backend API:**  
https://your-live-backend-url.com

---

## 📌 About The Project

The **Zerodha Clone** is a full-stack web application inspired by the interface and functionality of modern stock trading platforms.

The project is divided into:

- 🎨 Frontend
- ⚙️ Backend
- 🗄️ Database
- 🔐 Authentication
- 🌐 REST APIs
- 🍪 Cookie-based authentication
- 🛡️ Middleware & Error Handling

The main goal of this project was to understand how a complete MERN application communicates between the frontend, backend, and database.

---

# ✨ Features

## 👤 Authentication

- User Signup
- User Login
- User Logout
- Password hashing using bcrypt
- JWT-based authentication
- Authentication using HTTP cookies
- Protected backend routes
- User session handling

---

## 📊 Trading Dashboard

- Dashboard overview
- Holdings
- Positions
- Orders
- Funds
- Watchlist
- Stock-related information
- Buy Order functionality
- Portfolio summary

---

## 📦 Holdings

Users can:

- View their holdings
- Check quantity
- View average price
- View current price
- Track portfolio value

---

## 📋 Orders

Users can:

- Place buy orders
- View previous orders
- Track order information
- Store order details in MongoDB

---

## 💰 Funds

The dashboard provides a funds section where users can view their available trading-related information.

---

## 👀 Watchlist

The application includes a watchlist interface inspired by modern trading platforms.

---

# 🛠️ Technologies Used

## 🎨 Frontend

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling |
| JavaScript | Application logic |
| React.js | Frontend development |
| React Router | Client-side routing |
| Bootstrap | Responsive UI |
| Axios / Fetch API | API communication |
| React Hooks | State and lifecycle management |
| Props | Component data communication |
| Context API | Global state management |
| Vite | Frontend development/build tool |

---

## ⚙️ Backend

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| JWT | Authentication |
| bcrypt | Password hashing |
| Cookie Parser | Cookie handling |
| CORS | Cross-origin requests |
| dotenv | Environment variables |

---

# 🔐 Authentication Architecture

The project uses **JWT authentication with HTTP cookies**.

### Authentication Flow

```text
User
 │
 ▼
Signup / Login
 │
 ▼
Express Backend
 │
 ▼
Password Verification
 │
 ▼
JWT Token Generated
 │
 ▼
HTTP Cookie
 │
 ▼
Browser
 │
 ▼
Authenticated API Requests
 │
 ▼
Backend Middleware
 │
 ▼
Protected Route
