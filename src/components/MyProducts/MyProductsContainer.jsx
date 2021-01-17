import React from 'react'
import {connect} from "react-redux";
import MyProducts from "./MyProducts";
import {buyProduct, cancelBought, setProductsAC} from "../../redux/main-reducer";

let mapStateToProps = (state) => {
    return{
        productsData: state.mainPage.productsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        buy: (productId) => {
            dispatch(buyProduct(productId))
        },
        cancel: (productId) => {
            dispatch(cancelBought(productId))
        },
        setProducts: (products) => {
            dispatch(setProductsAC(products))
        }
    }
}


const MyProductsContainer = connect(mapStateToProps, mapDispatchToProps)(MyProducts);

export default MyProductsContainer;