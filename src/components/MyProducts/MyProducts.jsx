import React from 'react'
import s from "./MyProducts.module.css"
import {NavLink} from "react-router-dom";

const MyProducts = (props) => {

    if (props.productsData.length === 0){
        props.setProducts([
            {id: 1, photo: "https://i.eldorado.ua/goods_images/1039096/6529089-1595606044.jpg" ,bought: false,
                title: "Ноутбук Acer Swift 3 SF314-41 (NX.HFDEU.04D) Sparkly Silver", price: 1000},
            {id: 2, photo: "https://cdn.synthetic.com.ua/media/assets/images/8/8/5/2/6/3/c/a/f/0/d/0/4/4/1/f/full/885263caf0d0441f84a990e29a0549ff.jpg" ,bought: false,
                title: "Ноутбук игровой Lenovo L340-15IRH Gaming (81LK00G4RA) Black", price: 1000},
            {id: 3, photo: "https://d.428.ua/img/2388411/3000/2000/ua_noutbuk_asus_x509jp_x509jp-ej070_noutbuk_asus_x509jp_x509jp-ej070~2461~1606.jpg" ,bought: false,
                title: "Ноутбук игровой Asus FA506IH-HN119 Grey", price: 1000},
            {id: 4, photo: "https://zhuk.ua/content/images/22/noutbuk-hp-255-g7-6ul22ea-dark-ash-silver-55087652464399.jpg" ,bought: false,
                title: "Ноутбук HP 15-dw1010ua (2F1Y3EA) Natural Silver", price: 1000},
            {id: 5, photo: "https://image3.marktplatznet.de/gc/00006/000000338346_1.jpg" ,bought: false,
                title: "Ноутбук Apple MacBook Pro 13.3'' TB MV962 Space Grey", price: 1000}
                ]
        )
    }

    return <div className={s.products}>
        {
            props.productsData.map(u => <div key={u.id}>
                <div className={s.productItem}>
                    <div className={s.productAlign}>
                        <div>
                            <img src={u.photo} className={s.photo} alt={"Товар"}/>
                        </div>
                        <div>
                            <NavLink to={"/product/" + u.id}>{u.title}</NavLink>
                        </div>
                        <div className={s.comments}>
                            <NavLink to={"/product/" + u.id}>Комментарии</NavLink>
                        </div>
                        <div>
                            <NavLink to={"/product/" + u.id}>{u.price}</NavLink>
                            <div>
                                {
                                    u.bought
                                        ? <button onClick={() => {
                                            props.buy(u.id)
                                        }}>Cancel</button>
                                        : <button onClick={() => {
                                            props.cancel(u.id)
                                        }}>Buy</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
        }
    </div>

}

export default MyProducts;