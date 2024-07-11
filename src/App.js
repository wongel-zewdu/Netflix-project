import React from "react";
import "./index.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Banner from "./component/Banner/Banner";
import RowsList from "./component/Row/RowsList/RowsList";

const App = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <RowsList/>
      <Footer />
    </div>
  );
};

export default App;
