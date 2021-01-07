import React from 'react'
import s from "./NoteItem.module.css"
import {NavLink} from "react-router-dom";

const NoteItem = (props) => {
    let path = "/product/" + props.id;
    return(
        <div className={s.productitem}>
            <NavLink to={path} className={`${s.item} ${s.color1}`}>{props.name}</NavLink>
        </div>
    )
}

export default NoteItem;