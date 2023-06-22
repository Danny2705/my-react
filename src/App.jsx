import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Company from "./components/Company/Company";
import Residence from "./components/Residence/Residence";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Started from "./components/Get Started/Started";
import Footer from "./Footer/Footer";
import "./index.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Company />
      <Residence />
      <Value />
      <Contact />
      <Started />
      <Footer />
    </div>
  );
};

export default App;
