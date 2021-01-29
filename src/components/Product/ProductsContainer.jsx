import React from "react";
import {connect} from "react-redux";
import {
    buyProduct,
    cancelBought,
    setCurrentPage,
    setProducts,
    setProductsTotalCount, toggleIsFetching
} from "../../redux/main-reducer";
import axios from "axios";
import Products from "./MyProducts.jsx";
import Preloader from "../common/Preloader/Preloader";

class ProductsContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        if (this.props.productsData.length === 0) {
            axios.get(`http://localhost:5000/comfy/main?page=${this.props.currentPage}`).then(response => {
                    this.props.toggleIsFetching(false)
                    this.props.setProducts(response.data)
                    this.props.setProductsTotalCount(response.data.length)
                }
            )
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`http://localhost:5000/comfy/main?page=${pageNumber}`).then(response => {
                this.props.toggleIsFetching(false)
                this.props.setProducts(response.data)
            }
        )
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Products  {...this.props} onPageChanged={this.onPageChanged}/>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        productsData: state.mainPage.productsData,
        pageSize: state.mainPage.pageSize,
        totalProductsCount: state.mainPage.totalProductsCount,
        currentPage: state.mainPage.currentPage,
        isFetching: state.mainPage.isFetching
    }
}

export default connect(mapStateToProps, {
    buyProduct,
    cancelBought,
    setProducts,
    setCurrentPage,
    setProductsTotalCount,
    toggleIsFetching
})(ProductsContainer);

