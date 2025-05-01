import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Opportunity from "./components/Opportunity";
import Opportunity2 from "./components/Opportunity2";
import Quality from "./components/Quality";
import Container from "./components/Container";
import Footer from "./components/footer";
import NewApp from "./components/NewApp";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Home />
        <Stats />
        <Opportunity />
        <Opportunity2 />
        <Quality />
        <NewApp />
        <Footer />
      </div>
    </>
  );
}

export default App;
