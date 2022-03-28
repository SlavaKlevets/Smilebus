import React from "react";
import style from "./Modal.module.css"
import {NavLink} from "react-router-dom";

export const Modal = (props) => {
    return(
        <div className={style.wrapper}>
            <div className={style.wrapper2}>
                <NavLink to="history" onClick={()=>{props.setStrela(!props.strela)}}><span  className={style.istorija}>История заказов</span></NavLink>
                <NavLink to="nastroika" onClick={()=>{props.setStrela(!props.strela)}}><span  className={style.nastroika}>Настройки</span></NavLink>
                <NavLink to="vihod" onClick={()=>{props.setStrela(!props.strela)}}><span  className={style.vihod}>Выход</span></NavLink>
            </div>
            <div className={style.wrapper3}>
                <span onClick={()=>{props.setModalOtzuv(!props.modalOtzuv); props.setStrela(!props.strela)}}>Вы можете оставить отзыв о поездке</span>
            </div>
        </div>
    )
}