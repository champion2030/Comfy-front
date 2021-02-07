import React from 'react'
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';
import s from "./SecondLine.module.css"
import {NavLink} from "react-router-dom";

const SecondLine = () => {
    return(
        <div className={s.linetwo}>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <NavDropdown title="Каталог товаров" className={s.collasiblenavdropdown}>
                    <NavLink to="/notebook">Ноутбуки</NavLink>
                    <NavLink to="/tv">Телевизоры</NavLink>
                    <NavLink to="#">Бытовая техника</NavLink>
                    <NavLink to="#">Смартфоны</NavLink>
                </NavDropdown>

                <div className={s.d1}>
                    <form>
                        <input type="text" placeholder="Искать товары..."/>
                            <button type="submit"/>
                    </form>
                </div>

                <Nav>

                    <NavLink to="/register">Регистрация</NavLink>
                    <NavLink to="/login">Вход</NavLink>
                    <NavLink to="#memes">Связаться</NavLink>
                </Nav>
            </Navbar>


        </div>
    )
}

export default SecondLine;