let BUY = 'BUY'
let CANCEL = 'CANCEL'
let SET_PRODUCTS = 'SET_PRODUCTS'

let initialState = {
    productsData: []
};

const mainReducer  = (state = initialState, action) => {

    switch (action.type){
        case BUY:
            return  {...state,
                productsData: state.productsData.map(u => {
                        if (u.id === action.productId){
                            return {...u, bought: false}
                        }
                        return u
                    }
                )}
        case CANCEL:
            return  {...state,
                productsData: state.productsData.map(u => {
                        if (u.id === action.productId){
                            return {...u, bought: true}
                        }
                        return u
                    }
                )}
        case SET_PRODUCTS: {
            return {...state, productsData: [...state.productsData, ...action.productsData]}
        }
        default:
            return state

    }
}


export const buyProduct = (productId) => ({type: BUY, productId})
export const cancelBought = (productId) => ({type: CANCEL, productId})
export const setProductsAC = (products) => ({type: SET_PRODUCTS, products})



export default mainReducer;