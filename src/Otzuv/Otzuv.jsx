import React from "react";
import style from "./Otzuv.module.css"

export const Otzuv = (props) => {
    return(
        <div className={style.wrapper}>
                <div className={style.wrapper2}>
                    <span className={style.x} onClick={()=>{props.setModalOtzuv(!props.modalOtzuv)}}>X</span>
                </div>
        </div>
    )
}