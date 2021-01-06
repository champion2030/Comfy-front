import React from 'react'
import './App.css';
import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
      <div className="app-wrapper">
        <Header/>
        <Content/>
        <Footer/>
      </div>
  );
}

export default App;