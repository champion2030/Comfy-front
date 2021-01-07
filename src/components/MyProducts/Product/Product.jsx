import React from 'react'
import s from "./Product.module.css"
import ProductItem from "./ProductItem/ProductItem";

const Product = (props) => {
    return(
        <div>
        <p>{props.title}</p>
        <div className={s.products}>
                <ProductItem id="1" name={props.first}/>
                <ProductItem id="2" name={props.second}/>
                <ProductItem id="3" name={props.third}/>
                <ProductItem id="4" name={props.fourth}/>
                <ProductItem id="5" name={props.fifth}/>
            </div>
        </div>
    )
}

export default Product;