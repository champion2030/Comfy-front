let initialState = {
    noteData: [
        {title: "Диагональ 15,5", first: "Acer", second: "Lenovo", third: "Asus", fourth: "Samsung", fifth: "Apple"},
        {title: "Диагональ 17,7", first: "Meizu", second: "Redmi", third: "Asus", fourth: "Famous", fifth: "Rich"},
        {title: "Макбуки", first: "LG", second: "PHILIPS", third: "Old", fourth: "Very old", fifth: "Nice"}
    ]
}

const noteReducer  = (state = initialState, action) => {
    return state;
}


export default noteReducer;