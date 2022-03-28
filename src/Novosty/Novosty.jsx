import React from 'react';
import style from "./Novosty.module.css";
import {NavLink} from "react-router-dom";

export const Novosty = (props) => {

    return (
        <div className={style.wrap}>
            <h1 className={style.novosty}>Новости</h1>
            <div className={style.ptitem}>
                <div>
                    <button className={style.but}>Новость</button>
                    <h1 className={style.vnimanie}>Внимание! Бобруйск-Гомель - наш новый маршрут!</h1>
                    <div>
                        <span className={style.vnimanie2}>Внимание!  24.12.2021 открывается бронирование по новому маршруту - Бобруйск-Гомель! Минимум времени в пути! Разумная цена!</span>
                    </div>
                </div>
            </div>
            <NavLink to="vsenovosty"><button className={style.but1}>Все новости</button></NavLink>
        <div/>
        </div>
    );
}