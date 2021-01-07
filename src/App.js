import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './App.css';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import MyProducts from "./components/MyProducts/MyProducts";
import Notebook from "./components/Notebook/Notebook";
import TV from "./components/TV/TV";

const App = (props) => {


    return (
      <BrowserRouter>
          <div className="app-wrapper">
            <Header/>
            <main className="main">
                <Route exact path='/' render={ () => <MyProducts state={props.appState.mainPage}/>}/>
                <Route path='/content' render={ () => <MyProducts state={props.appState.mainPage}/>}/>
                <Route path='/notebook' render={ () => <Notebook state={props.appState.notePage}/>}/>
                <Route path='/tv' render={ () => <TV/>}/>
            </main>
            <Footer state={props.appState.footerPage}/>
          </div>
      </BrowserRouter>
  );
}

export default App;