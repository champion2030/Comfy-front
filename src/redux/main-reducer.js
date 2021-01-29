
const BUY = 'BUY'
const CANCEL = 'CANCEL'
const SET_PRODUCTS = 'SET-PRODUCTS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_PRODUCTS_COUNT = 'SET-TOTAL-PRODUCTS-COUNT'

let initialState = {
    productsData: [ ],
    pageSize: 5,
    totalProductsCount: 0,
    currentPage: 1
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

        default:
            return state

    }
}


export const buyProduct = (productId) => ({type: BUY, productId})
export const cancelBought = (productId) => ({type: CANCEL, productId})
export const setProductsAC = (productsData) => ({type: SET_PRODUCTS, productsData})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setProductsTotalCountAC = (totalProductsCount) => ({type: SET_TOTAL_PRODUCTS_COUNT, count: totalProductsCount})


export default mainReducer;