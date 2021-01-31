import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './App.css';
import Header from "./components/Header/Header.jsx";
import {Route} from "react-router-dom";
import TV from "./components/TV/TV";
import FooterContainer from "./components/Footer/FooterContainer";
import NotebookContainer from "./components/Notebook/NotebookContainer";
import MainPageContainer from "./components/MyProducts/MainPageContainer";
import ProductContainer from "./components/Product/ProductContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <main className="main">
                <Route exact path='/' render={() => <MainPageContainer/>}/>
                <Route path='/content' render={() => <MainPageContainer/>}/>
                <Route path='/notebook' render={() => <NotebookContainer/>}/>
                <Route path='/product' render={() => <ProductContainer/>}/>
                <Route path='/tv' render={() => <TV/>}/>
            </main>
            <FooterContainer/>
        </div>
    );
}

export default App;