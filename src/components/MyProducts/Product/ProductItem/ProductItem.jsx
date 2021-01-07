import React from 'react'
import s from "./ProductItem.module.css"
import {NavLink} from "react-router-dom";

const ProductItem = (props) => {
    let path = "/product/" + props.id;
    return(
        <div className={s.productitem}>
            <NavLink to={path} className={`${s.item} ${s.color1}`}>{props.name}</NavLink>
        </div>
    )
}

export default ProductItem;