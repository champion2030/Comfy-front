import React from "react";
import s from "./MyProducts.module.css";
import {NavLink} from "react-router-dom";


let Products = (props) => {
    let pagesCount = Math.ceil(props.totalProductsCount / props.pageSize)
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={s.products}>
            {
                props.productsData.map(u => <div key={u.id}>
                    <div className={s.productItem}>
                        <div className={s.productAlign}>
                            <div>
                                <NavLink to={'/product/' + u.id}>
                                <img src={u.photo} className={s.photo} alt={"Товар"}/>
                                </NavLink>
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
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
    </div>
}

export default Products;