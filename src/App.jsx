// src/App.js
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Lenis from "@studio-freight/lenis";
import useNavigationEvent from "./components/useNavigationEvent.jsx";
import { AnimatePresence } from "framer-motion";
import  PageTransition  from "./pages/Pagetransition/PageTransition.jsx";
// Main Pages
import Navbar from "./components/NavbarMain.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingScreen/LandingPage.jsx";
import Works from "./pages/Works.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Expertise from "./pages/Expertise.jsx";

// Blogs
import Blogs from "./pages/Blogs.jsx";
import Blog01 from "./pages/blogs/Blog1.jsx";
import Blog2 from "./pages/blogs/Blog2.jsx";
// Services
import Service1 from "./pages/Service1.jsx";
import Service2 from "./pages/Service2.jsx";
import Service3 from "./pages/Service3.jsx";
import Service4 from "./pages/Service4.jsx";

// Case study pages
import SereneSkinCaseStudy from "./pages/CaseStudy/SerenCaseStudy.jsx";
import ViratCaseStudy from "./pages/CaseStudy/ViratCaseStudy.jsx";
import AkoyaCaseStudy from "./pages/CaseStudy/AkoyaCaseStudygood.jsx";
import BakersCaseStudy from "./pages/CaseStudy/BakersCaseStudy.jsx";
import CreamFCaseStudy from "./pages/CaseStudy/CreamFCaseStudygood.jsx";
import BoschCaseStudy from "./pages/CaseStudy/BoschCaseStudy.jsx";
import NotFound from "./pages/NotFound.jsx";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader.jsx";
import FaqPage from "./pages/FAQPage.jsx";
// import SatvikraasCaseStudy from "./pages/CaseStudy/SatvikraasCaseStudy.jsx";

function App() {
  const isNavigating = useNavigationEvent(); // Get navigation event status
  const location = useLocation();

  // Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Customize easing
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  // Lenis ends

  // Disable right-click ---------------------------------------------------------
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", disableRightClick);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []); // Disable right-click ends ----------------------------------------------

  // Disable inspect ----------------------------------------------------------------
  useEffect(() => {
    const disableInspectShortcuts = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", disableInspectShortcuts);
    return () => {
      document.removeEventListener("keydown", disableInspectShortcuts);
    };
  }, []); // Disable inspect ends----------------------------------------------------------------

  // Validation pages (new pages add here )
  const validRoutes = [
    "/",
    "/works",
    "/faq",
    "/about",
    "/contact-us",
    "/expertise",
    "/blogs",
    "/blogs/blog01",
    "/blogs/blog02",
    "/service1",
    "/service2",
    "/service3",
    "/service4",
    "/casestudy/akoya",
    "/casestudy/bakersstreet",
    "/casestudy/creamforest",
    "/casestudy/virat",
    "/casestudy/sereneskin",
    "/casestudy/lokneta",
    "/casestudy/bosch",
    "/casestudy/purus",
    "/casestudy/bakers",
    "/casestudy/creamf",
    "/casestudy/satvik",
  ];
  const isValidRoute = validRoutes.includes(location.pathname);

  return (
    <>
      {/* Loading Screen */}
      {/* {isNavigating && <Preloader trigger={isNavigating} />} */}
      {/* <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}> */}
      <div className="App">
        {isValidRoute && <Navbar />}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/blog01" element={<Blog01 />} />
          <Route path="/blogs/blog02" element={<Blog2 />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/service1" element={<Service1 />} />
          <Route path="/service2" element={<Service2 />} />
          <Route path="/service3" element={<Service3 />} />
          <Route path="/service4" element={<Service4 />} />
          <Route
            path="/casestudy/sereneskin"
            element={<SereneSkinCaseStudy />}
          />
          <Route path="/casestudy/virat" element={<ViratCaseStudy />} />
          <Route path="/casestudy/akoya" element={<AkoyaCaseStudy />} />
          <Route path="/casestudy/bakers" element={<BakersCaseStudy />} />
          <Route path="/casestudy/creamf" element={<CreamFCaseStudy />} />
          <Route path="/casestudy/bosch" element={<BoschCaseStudy />} />
          {/* <Route path="/casestudy/satvik" element={< SatvikraasCaseStudy/>} /> */}
          {/* <Route path="/casestudy/akoya1" element={<Akoyavideo />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {isValidRoute && <Footer />}
      </div>  
       {/* </PageTransition>
      </AnimatePresence> */}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}

export default AppWrapper;
