let BUY = 'BUY'
let CANCEL = 'CANCEL'

let initialState = {
    productsData: [
        {id: 1, bought: false, title: "Смартфоны", first: "Acer", second: "Lenovo", third: "Asus", fourth: "Samsung", fifth: "Apple"},
        {id: 2, bought: false, title: "Ноутбуки", first: "Meizu", second: "Redmi", third: "Asus", fourth: "Famous", fifth: "Rich"},
        {id: 3, bought: false, title: "Телевизоры", first: "LG", second: "PHILIPS", third: "Old", fourth: "Very old", fifth: "Nice"},
        {id: 4, bought: false, title: "Скидки", first: "LG", second: "PHILIPS", third: "Old", fourth: "Very old", fifth: "Nice"}
    ]
}

const mainReducer  = (state = initialState, action) => {

    switch (action.type){
        case BUY:
            return  {...state,
                productsData: state.productsData.map(u => {
                        if (u.id === action.productId){
                            return {...u, bought: true}
                        }
                        return u
                    }
                )}
        case CANCEL:
            return  {...state,
                productsData: state.productsData.map(u => {
                        if (u.id === action.productId){
                            return {...u, bought: false}
                        }
                        return u
                    }
                )}
        default:
            return state

    }
}


export const buyProduct = (productId) => ({type: BUY, productId})
export const cancelBought = (productId) => ({type: CANCEL, productId})


export default mainReducer;