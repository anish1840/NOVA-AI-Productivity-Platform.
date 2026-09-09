import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Solutions from "./pages/Solutions";
import Startups from "./pages/solution/Startups";
import Developers from "./pages/solution/Developers";
import Marketing from "./pages/solution/Marketing";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  const normalPages = [
    "/",
    "/features",
    "/solutions",
    "/solution/Startups",
    "/solution/Developers",
    "/solution/Marketing",
    "/pricing",
    "/about",
    "/contact",
  ];

  const shouldShowLayout = normalPages.includes(location.pathname);

  return (
    <>
      <ScrollToTop />

      {shouldShowLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/solutions" element={<Solutions />} />
          <Route path="/solution/Startups" element={<Startups />} />
          <Route path="/solution/Developers" element={<Developers />} />
          <Route path="/solution/Marketing" element={<Marketing />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {shouldShowLayout && <Footer />}
    </>
  );
}

export default App;