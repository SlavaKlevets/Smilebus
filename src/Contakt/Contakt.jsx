import React from "react";
import style from "./Contakt.module.css"
import {NavLink} from "react-router-dom";

export const Contakt = (props) => {
    return (
        <div className={style.wrap}>
            <span className={style.spanImg}>
                <svg className={style.contaktImg} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 10C35.8 10 38 12.3 38 15V42C38 44.8 35.7 47 33 47H20C17.2 47 15 44.7 15 42V15C15 12.2 17.3 10 20 10H33ZM33 8H20C16.1 8 13 11.1 13 15V42C13 45.9 16.1 49 20 49H33C36.9 49 40 45.9 40 42V15C40 11.1 36.9 8 33 8ZM26.5 39C25.7 39 25 39.7 25 40.5C25 41.3 25.7 42 26.5 42C27.3 42 28 41.3 28 40.5C28 39.7 27.3 39 26.5 39Z" fill="#333333"></path>
                </svg>
                <h1 className={style.contakt}>Контакты</h1>
            </span>
            <div className={style.ptitem}>
                    <div className={style.ptitem1}>
                        <h1 className={style.dannye2}>Колл-центр</h1>
                        <h2 className={style.vnimanie2}>Телефон:</h2>
                        <span className={style.dannye}>618-0000 (A1, МТС, life)</span>
                    </div>
                    <div className={style.ptitem2}>
                        <h1 className={style.dannye2}>Аренда автобусов</h1>
                        <span className={style.dannye}>Вы можете арендовать наши автобусы для любого мероприятия</span>
                        <h1 className={style.vnimanie2}>Телефон: </h1>
                        <span className={style.dannye}>618-0000 (A1, МТС, life)</span>
                        <h1 className={style.vnimanie2}>График работы:</h1>
                        <span className={style.dannye}>Ежедневно, круглосуточно, без обеда</span>
                        <h1 className={style.vnimanie2}>Эл. почта:</h1>
                        <span className={style.dannye}>rent@618.by</span>
                    </div>
            </div>
        </div>
    );
}