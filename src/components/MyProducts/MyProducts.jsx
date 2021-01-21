import React from 'react'
import s from "./MyProducts.module.css"
import {NavLink} from "react-router-dom";
import axios from "axios";

class MyProducts extends React.Component {

    componentDidMount() {
        if (this.props.productsData.length === 0) {
            axios.get(`http://localhost:5000/main?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                    this.props.setProducts(response.data)
                }
            )
        }
    }

    render(){

        let pagesCount = Math.ceil(this.props.totalProductsCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i < pagesCount; i++){
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && s.selectedPage}>{p}</span>
                })}
            </div>
            <div className={s.products}>
            {
                this.props.productsData.map(u => <div key={u.id}>
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
                                                this.props.buy(u.id)
                                            }}>Cancel</button>
                                            : <button onClick={() => {
                                                this.props.cancel(u.id)
                                            }}>Buy</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </div>
    }

}

export default MyProducts;