import React from 'react'
import {connect} from "react-redux";
import MyProducts from "./MyProducts";

let mapStateToProps = (state) => {
    return{
        productsData: state.mainPage.productsData
    }
}

const MyProductsContainer = connect(mapStateToProps)(MyProducts);

export default MyProductsContainer;