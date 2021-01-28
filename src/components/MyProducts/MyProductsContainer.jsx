import {connect} from "react-redux";
import MyProducts from "./MyProducts";
import {
    buyProduct,
    cancelBought,
    setCurrentPageAC,
    setProductsAC,
    setProductsTotalCountAC
} from "../../redux/main-reducer";

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


const MyProductsContainer = connect(mapStateToProps, mapDispatchToProps)(MyProducts);

export default MyProductsContainer;