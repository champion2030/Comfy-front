const BUY = 'BUY'
const CANCEL = 'CANCEL'
const SET_PRODUCTS = 'SET-PRODUCTS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_PRODUCTS_COUNT = 'SET-TOTAL-PRODUCTS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    productsData: [ ],
    pageSize: 5,
    totalProductsCount: 0,
    currentPage: 1,
    isFetching: false
};

const mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case BUY:
            return {
                ...state,
                productsData: state.productsData.map(u => {
                        if (u.id === action.productId) {
                            return {...u, bought: false}
                        }
                        return u
                    }
                )
            }

        case CANCEL:
            return {
                ...state,
                productsData: state.productsData.map(u => {
                        if (u.id === action.productId) {
                            return {...u, bought: true}
                        }
                        return u
                    }
                )
            }

        case SET_PRODUCTS: {
            return {...state, productsData: action.productsData}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_PRODUCTS_COUNT: {
            return {...state, totalProductsCount: action.count}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state

    }
}


export const buyProduct = (productId) => ({type: BUY, productId})
export const cancelBought = (productId) => ({type: CANCEL, productId})
export const setProducts = (productsData) => ({type: SET_PRODUCTS, productsData})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setProductsTotalCount = (totalProductsCount) => ({type: SET_TOTAL_PRODUCTS_COUNT, count: totalProductsCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export default mainReducer;