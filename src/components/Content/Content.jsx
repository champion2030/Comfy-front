import React from 'react'
import s from "./Content.module.css"
import MyProducts from "./MyProducts/MyProducts.jsx";
import Notebook from "./Notebook/Notebook";
import TV from "./TV/TV";
import { Route } from "react-router-dom";


const Content = () => {
    return(
        <main className={s.content}>
            <div>
                <Route path="/content" component={MyProducts}/>
                <Route path="/notebook" component={Notebook}/>
                <Route path="/tv" component={TV}/>
            </div>
        </main>
    )
}

export default Content;