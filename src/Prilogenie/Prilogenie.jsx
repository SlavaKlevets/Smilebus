import React from 'react';
import style from "./Prilogenie.module.css";
import Pril from '../../src/IMG/Pril.PNG'
import apple from '../../src/IMG/apple.PNG'
import andr from '../../src/IMG/andr.PNG'


export const Prilogenie = (props) => {

    return (
        <div className={style.wrap}>
            <div className={style.ptitem}>
                <div className={style.images}>
                    <div className={style.cartsmart}><img className={style.img} src={Pril} alt=""/></div>
                    <div className={style.smartfon}><h1 className={style.smart}>Приложение для смартфонов</h1>
                    <h1>Для iOS и Android</h1>
                        <div className={style.butStor}>
                            <img src={apple} alt=""/>
                            <img src={andr} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}