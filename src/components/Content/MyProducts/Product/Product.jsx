import React from 'react'
import s from "./Product.module.css"

const Product = () => {
    return(
        <div className={s.products}>
            <div className={`${s.item} ${s.color1}`}>Grid Item 1</div>
            <div className={`${s.item} ${s.color2}`}>Grid Item 2</div>
            <div className={`${s.item} ${s.color3}`}>Grid Item 3</div>
            <div className={`${s.item} ${s.color4}`}>Grid Item 4</div>
            <div className={`${s.item} ${s.color1}`}>Grid Item 5</div>
        </div>
    )
}

export default Product;