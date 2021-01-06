import React from 'react'
import s from "./MyProducts.module.css"
import Product from "./Product/Product";

const MyProducts = () => {
    return(
        <div>
            Смартфоны
            <Product/>
            Ноутбуки
            <Product/>
            Телевизоры
            <Product/>
            Стиральные машины
            <Product/>
            Скидки до -50%
            <Product/>
            Роботы пылесосы
            <Product/>
        </div>
    )
}

export default MyProducts;