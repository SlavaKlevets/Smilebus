import React, {useState} from "react";
import style from "./History.module.css";
import {useDispatch, useSelector} from "react-redux";
import {deleteEmployeesThunk, set_biletThunk} from "../reducers/userReducer";

export const History = (props) => {

    let dispatch = useDispatch();
    let state1 = useSelector((state) => state.users);
    const state = useSelector(( state) => state.kuda);


    let employeesDelete = (a) => {dispatch(deleteEmployeesThunk(a));}

    let bilet=state1.bilet.map((i,num)=><div className={style.bilet} key={num}>
        <div className={style.bilet1}><h1>{i.timeOt}</h1><span>{i.sity1}</span></div>
        <div className={style.bilet2}><h1>{i.timePr}</h1><span>{i.sity2}</span></div>
        <div className={style.bilet3}><span>{i.timeInPath}</span></div>
        <div className={style.bilet4}><span className={style.price}>{i.price}</span></div>
        <div className={style.bilet5}><span className={style.price}>{state1.passagir}</span></div>
        <button className={style.but} onClick={()=>{employeesDelete(i.id)}}>Отменить заказ</button>
    </div>);

    return(
        <div className={style.wrapper1}>
            <span>История заказов</span>
            <div className={style.wrapper}>
                {state1.bilet.length!==0&&bilet}
                {state1.bilet.length==0&& <div><h1 className={style.zakaz}>Нет заказов :(</h1></div>}
            </div>
        </div>
)}

