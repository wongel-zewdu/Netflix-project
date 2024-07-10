import React from "react";
import "./index.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Banner from "./Banner/Banner";

const App = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <Footer />
    </div>
  );
};

export default App;
