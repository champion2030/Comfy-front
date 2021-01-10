import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './App.css';
import Header from "./components/Header/Header.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import TV from "./components/TV/TV";
import FooterContainer from "./components/Footer/FooterContainer";
import MyProductsContainer from "./components/MyProducts/MyProductsContainer";
import NotebookContainer from "./components/Notebook/NotebookContainer";

const App = () => {
    return (
      <BrowserRouter>
          <div className="app-wrapper">
            <Header/>
            <main className="main">
                <Route exact path='/' render={ () => <MyProductsContainer/>}/>
                <Route path='/content' render={ () => <MyProductsContainer/>}/>
                <Route path='/notebook' render={ () => <NotebookContainer/>}/>
                <Route path='/tv' render={ () => <TV/>}/>
            </main>
            <FooterContainer/>
          </div>
      </BrowserRouter>
  );
}

export default App;