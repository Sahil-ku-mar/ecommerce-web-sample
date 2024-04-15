import React from "react";
import "./App.css";
import Banner from "./components/atom/Banner";
import Header from "./components/atom/Header";
import Menu from "./components/atom/Menu";
import Homepage from "./pages/homepage";
const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Homepage/>
      <Menu />
      <Banner />
      </main>

      <footer></footer>
    </div>
  );
};

export default App;
