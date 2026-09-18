import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./landing_page/home/Homepage";
import Signup from "./landing_page/signup/signupPage";
import Aboutpage from "./landing_page/about/AboutPage";
import Pricingpage from "./landing_page/pricing/PricingPage";
import Supportpage from "./landing_page/support/SupportPage";
import ProductPage from "./landing_page/product/Productpage";
import LoginPage from "./landing_page/login/loginPage";
import OpenAccount from "./landing_page/OpenAccount";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFoun from "./landing_page/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Homepage />} />

        <Route path="/openaccount" element={<OpenAccount />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/signup2" element={<Signup />} />

        <Route path="/sign" element={<Signup />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/about" element={<Aboutpage />} />

        <Route path="/pricing" element={<Pricingpage />} />

        <Route path="/support" element={<Supportpage />} />

        <Route path="/product" element={<ProductPage />} />

        <Route path="*" element={<NotFoun />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;