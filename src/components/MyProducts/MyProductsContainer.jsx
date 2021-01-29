import React from "react";
import {connect} from "react-redux";
import {
    buyProduct,
    cancelBought,
    setCurrentPageAC,
    setProductsAC,
    setProductsTotalCountAC
} from "../../redux/main-reducer";
import axios from "axios";
import MyProducts from "./MyProducts.jsx";

class MyProductsContainer extends React.Component {

    componentDidMount() {
        if (this.props.productsData.length === 0) {
            axios.get(`http://localhost:5000/comfy/main?page=${this.props.currentPage}`).then(response => {
                    this.props.setProducts(response.data)
                    this.props.setTotalProductsCount(response.data.length)
                }
            )
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`http://localhost:5000/comfy/main?page=${pageNumber}`).then(response => {
                this.props.setProducts(response.data)
            }
        )
    }

    render() {
        return <MyProducts  {...this.props} onPageChanged={this.onPageChanged}/>
    }
}


let mapStateToProps = (state) => {
    return{
        productsData: state.mainPage.productsData,
        pageSize: state.mainPage.pageSize,
        totalProductsCount: state.mainPage.totalProductsCount,
        currentPage: state.mainPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalProductsCount: (totalCount) => {
            dispatch(setProductsTotalCountAC(totalCount))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyProductsContainer);

