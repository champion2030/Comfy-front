let initialState = {
    productsData: [
        {title: "Смартфоны", first: "Acer", second: "Lenovo", third: "Asus", fourth: "Samsung", fifth: "Apple"},
        {title: "Ноутбуки", first: "Meizu", second: "Redmi", third: "Asus", fourth: "Famous", fifth: "Rich"},
        {title: "Телевизоры", first: "LG", second: "PHILIPS", third: "Old", fourth: "Very old", fifth: "Nice"},
        {title: "Скидки", first: "LG", second: "PHILIPS", third: "Old", fourth: "Very old", fifth: "Nice"}
    ]
}

const mainReducer  = (state = initialState, action) => {
    return state;
}


export default mainReducer;