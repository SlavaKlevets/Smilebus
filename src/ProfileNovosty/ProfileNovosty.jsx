import React, {useEffect, useState} from 'react';
import style from "./ProfileNovosty.module.css";
import {useParams} from "react-router";

export const ProfileNovosty = (props) => {

    const {id}=useParams();
    const[array,setArray]=useState(null);

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

    useEffect(()=>{setArray(arr[id])})


    return (
        <div className={style.wrap}>
            {array && <div className={style.ptitem}>
                <div>
                    <h1 className={style.vnimanie}>Внимание! Бобруйск-Гомель - наш новый маршрут {array.id}!</h1>
                    <div>
                        <span className={style.vnimanie2}>Внимание!  24.12.2021 открывается бронирование по новому маршруту - Бобруйск-Гомель! Минимум времени в пути! Разумная цена!</span>
                    </div>
                </div>
            </div>}
        </div>
    );
}