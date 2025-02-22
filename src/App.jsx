import React from "react";
import TopHeader from "./components/TopHeader";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import MiddleImage from "./components/MiddleImage";
import Items from "./components/Items";
import Services from "./components/Services";
import TranslateTxt from "./components/TranslateTxt";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <>
      <SideBar />
      <TopHeader />
      <NavBar />
      <div className="px-4 md:px-10">
        <Hero />
        {/* <Products /> */}
      </div>
      <div>
        <MiddleImage />
      </div>
      <div className="px-4 md:px-10">
        <Items />
        <Services />
      </div>
      <div>
        <TranslateTxt />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
