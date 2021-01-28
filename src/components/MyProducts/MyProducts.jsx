import React from 'react'
import s from "./MyProducts.module.css"
import {NavLink} from "react-router-dom";
import axios from "axios";

class MyProducts extends React.Component {

    componentDidMount() {
        if (this.props.productsData.length === 0) {
            axios.get(`http://localhost:5000/comfy/main?page=${this.props.currentPage}`).then(response => {
                    this.props.setProducts(response.data);
                this.props.setTotalProductsCount(response.data.length)
                }
            )
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`http://localhost:5000/comfy/main?page=${pageNumber}`).then(response => {
                this.props.setProducts(response.data)
            }
        )
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalProductsCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }
        return <div>
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
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && s.selectedPage}
                                 onClick={() => {
                                     this.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
        </div>
    }

}

export default MyProducts;