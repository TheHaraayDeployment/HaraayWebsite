// src/App.js
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Sugar } from "react-preloaders";
import "./App.css";
// import PageTransition from "./components/Pagetransition.jsx"; // Import the transition component
import Lenis from "@studio-freight/lenis";
import useNavigationEvent from "./components/useNavigationEvent.jsx";

// Import your components
// Import your components
import Navbar from "./components/NavbarMain.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingScreen/LandingPage.jsx";
import Works from "./pages/Works.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Expertise from "./pages/Expertise.jsx";
import Blogs from "./pages/Blogs.jsx";
import Blog01 from "./pages/blogs/Blog1.jsx";
import Blog2 from "./pages/blogs/Blog2.jsx";
import Service1 from "./pages/Service1.jsx";
import Service2 from "./pages/Service2.jsx";
import Service3 from "./pages/Service3.jsx";
import Service4 from "./pages/Service4.jsx";

// Case study AkoyaCaseStudy
import SereneSkinCaseStudy from "./pages/CaseStudy/SerenCaseStudy.jsx";
// import PurusCaseStudy from "./pages/CaseStudy/PurusCaseStudy.jsx";
import ViratCaseStudy from "./pages/CaseStudy/ViratCaseStudy.jsx";
import AkoyaCaseStudy from "./pages/CaseStudy/AkoyaCaseStudygood.jsx";
import BakersCaseStudy from "./pages/CaseStudy/BakersCaseStudy.jsx";
import CreamFCaseStudy from "./pages/CaseStudy/CreamFCaseStudygood.jsx";

// import BakersCaseStudy from "./pages/BakersCaseStudy.jsx";
// import CreamforestCaseStudy from "./pages/CreamforestCaseStudy.jsx";
// import ViratCaseStudy from "./pages/CaseStudy/ViratCaseStudy.jsx";
// import BakersCaseStudydetails2 from "./pages/BakersCaseStudydetails2.jsx";
// import CreamfCaseStudyDetail from "./pages/CreamfCaseStudydetails.jsx";
// import ViratCaseStudyDetail from "./pages/ViratCaseStudydetails.jsx";
// import SereneCaseStudyDetail from "./pages/CaseStudyDeatail/SereneCaseStudydetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader.jsx";
// import AkoyaCaseStudy from "./pages/CaseStudy/AkoyaCaseStudy.jsx";
// import LoknetaCaseStudy from "./pages/CaseStudy/LoknetaCaseStudy.jsx";
// import BoscheCaseStudy from "./pages/CaseStudy/BoscheCaseStudy.jsx";
// import Purus from "./pages/CaseStudy/PurusCaseStudy.jsx";
import Countdown from "./Countdown.jsx";
import FaqPage from "./pages/FAQPage.jsx";

function App() {
  const isNavigating = useNavigationEvent(); // Get navigation event status
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true); // Initial loading state
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

  // Disable right-click
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", disableRightClick);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);
  // Disable inspect
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
  }, []);

  // Validation
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
    "/casestudy/bakersstreet/detail",
    "/casestudy/creamforest/detail",
    "/casestudy/virat/detail",
    "/casestudy/sereneskin/detail",
    "/casestudy/lokneta",
    "/casestudy/bosche",
    "/casestudy/purus",
    "/casestudy/bakers",
    "/casestudy/creamf",
  ];
  const isValidRoute = validRoutes.includes(location.pathname);
  const showHeaderFooter = location.pathname !== "/404";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isNavigating && <Preloader trigger={isNavigating} />}

      {/* Countdown component */}
      {/* <Countdown /> */}
      {/*  */}

      <div className="App">
        {isValidRoute && <Navbar />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<AboutUs />} />/
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
            ViratCaseStudy
          />{" "}
          <Route path="/casestudy/virat" element={<ViratCaseStudy />} />
          <Route path="/casestudy/akoya" element={<AkoyaCaseStudy />} />
          <Route path="/casestudy/bakers" element={<BakersCaseStudy />} />
          <Route path="/casestudy/creamf" element={<CreamFCaseStudy />} />
          {/* <Route path="/casestudy/akoya1" element={<Akoyavideo />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {isValidRoute && <Footer />}
      </div>
    </>
  );
}

function AppWrapper() {
  return (
    // <React.Fragment>
    <Router>
      <ScrollToTop />
      <App />
      {/* <Sugar background="#f7f7f7" /> */}
    </Router>
    // //{" "}
    ///* </React.Fragment> */
  );
}

export default AppWrapper;
