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
                    <Nav.Link href="#deets">Регистрация</Nav.Link>
                    <Nav.Link href="#auth">Вход</Nav.Link>
                    <Nav.Link href="#memes">Связаться</Nav.Link>
                </Nav>
            </Navbar>


        </div>
    )
}

export default SecondLine;