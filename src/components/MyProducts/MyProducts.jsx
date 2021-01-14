import React from 'react'
import s from "./MyProducts.module.css"
import Product from "./Product/Product";

const MyProducts = (props) => {

    let productsElements = props.productsData
        .map(product => <Product key={product.id} title={product.title} first={product.first} second={product.second} third={product.third} fourth={product.fourth} fifth={product.fifth}/>)

    return(
        <div>
            {productsElements}
        </div>
    )
}

export default MyProducts;