import React from "react";
import style from "./Glavnaja.module.css";
import {Marshrut} from "../Marshrut/Marshrut";
import {Novosty} from "../Novosty/Novosty";
import {Avtopark} from "../Avtopark/Avtopark";
import {Dostoinstva} from "../Dostoinstva/Dostoinstva";

export const Glavnaja = (props) => {
    return(
        <div>
            <Dostoinstva/>
            <Marshrut click={props.click} click2={props.click2}/>
            <Novosty/>
            <Avtopark setModal={props.setModal} modal={props.modal} setFoto={props.setFoto}/>
        </div>
    )
}