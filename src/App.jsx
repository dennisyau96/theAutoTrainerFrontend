import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// components
import Home from "./component/Home";
import About from "./component/About";
import Program from "./component/Program";
import Reviews from "./component/Reviews";
import Testimonials from "./component/Testimonials";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Maintenance from "./component/Maintenance";
import Tip from "./component/Tip";

import "./App.css";
import "./animation.css";
import Nav from "./component/Nav";

const App = () => {
  // useEffect(() => {
  //   window.alert("Use Google Chrome for best experience");
  // }, []);
  return (
    <>
      <div className="w-screen" id="app">
        <div className="scroll-watcher "></div>

        <Header />
        <Nav />
        {/* <div className="right-0 sticky-top">
          <Tip />
        </div> */}

        <div id="mainContent" className=" h-100 bg-black">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/*" element={<Home />} />
              <Route path="/home-2/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/programs" element={<Program />} />
            </Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default App;
