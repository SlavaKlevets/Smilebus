import React, {useEffect, useState} from 'react';
import style from "./VseNovosty.module.css";
import {NavLink} from "react-router-dom";

export const VseNovosty = (props) => {

    const[array,setArray]=useState([]);

    let arr=[{
                id:0
            },
            {
                id:1
            },
            {
                id:2
            },
            {
                id:3
            },
            {
                id:4
            },
            {
                id:5
            }
    ];
    useEffect(()=>{setArray(arr);})


    const ar=array.map(i=><div className={style.ptitem}>
        <div>
           <NavLink to={`/profile/${i.id}`}> <h1 className={style.vnimanie}>Внимание! Бобруйск-Гомель - наш новый маршрут {i.id}!</h1></NavLink>
            <div>
                <span className={style.vnimanie2}>Внимание!  24.12.2021 открывается бронирование по новому маршруту - Бобруйск-Гомель! Минимум времени в пути! Разумная цена!</span>
            </div>
        </div>
    </div>);

    return (
        <div className={style.wrap}>
            {ar}
        </div>
    );
}