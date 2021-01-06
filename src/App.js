import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './App.css';
import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
            <Header/>
            <Content/>
            <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;