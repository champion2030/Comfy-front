import React from 'react'
import s from "./FirstLine.module.css"
import {NavLink} from "react-router-dom";

const FirstLine = () => {
    return(
        <div className={s.lineone}>
            <NavLink to="/content"><img src="https://static.wr.market/upload/shops/3230/b66b5405e4d20361a685704760f6b7d4.png" alt="Логотип"/></NavLink>
        </div>
    )
}

export default FirstLine;