import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './App.css';
import {Route} from "react-router-dom";
import TV from "./components/TV/TV";
import FooterContainer from "./components/Footer/FooterContainer";
import NotebookContainer from "./components/Notebook/NotebookContainer";
import MainPageContainer from "./components/MyProducts/MainPageContainer";
import ProductContainer from "./components/Product/ProductContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Register from "./components/auth/authComponents/Register";
import Login from "./components/auth/authComponents/Login";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <main className="main">
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route exact path='/' render={() => <MainPageContainer/>}/>
                <Route path='/content' render={() => <MainPageContainer/>}/>
                <Route path='/notebook' render={() => <NotebookContainer/>}/>
                <Route path='/product/:productId' render={() => <ProductContainer/>}/>
                <Route path='/tv' render={() => <TV/>}/>
            </main>
            <FooterContainer/>
        </div>
    );
}

export default App;