import React from 'react'
import s from "./MyProducts.module.css"
import {NavLink} from "react-router-dom";
import axios from "axios";

let MyProducts = (props) => {
    if (props.productsData.length === 0) {
        axios.get("http://localhost:5000/main").then(response => {
                props.setProducts(response.data)
            }
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
                            <p>{u.price}</p>
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