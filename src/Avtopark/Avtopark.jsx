import React from 'react';
import style from "./Avtopark.module.css";
import userPhoto from '../../src/IMG/1.PNG'
import userPhoto2 from '../../src/IMG/2.PNG'
import userPhoto3 from '../../src/IMG/3.PNG'
import userPhoto4 from '../../src/IMG/4.PNG'
import userPhoto5 from '../../src/IMG/5.PNG'
import userPhoto6 from '../../src/IMG/6.PNG'
import userPhoto7 from '../../src/IMG/7.PNG'
import userPhoto8 from '../../src/IMG/8.PNG'
import userPhoto9 from '../../src/IMG/9.PNG'
import userPhoto10 from '../../src/IMG/10.PNG'

export const Avtopark = (props) => {
    return (
        <div className={style.wrap}>
            <h1 className={style.novosty}>Наш автопарк</h1>
            <div className={style.ptitem}>
                <div className={style.images}>
                    <img className={style.img} onClick={()=>{props.setModal(!props.modal); props.setFoto(userPhoto)}} src={userPhoto} alt=""/>
                    <img className={style.img} onClick={()=>{props.setModal(!props.modal); props.setFoto(userPhoto2)}} src={userPhoto2} alt=""/>
                    <img className={style.img} onClick={()=>{props.setModal(!props.modal); props.setFoto(userPhoto3)}} src={userPhoto3} alt=""/>
                    <img className={style.img} onClick={()=>{props.setModal(!props.modal); props.setFoto(userPhoto4)}} src={userPhoto4} alt=""/>
                    <img className={style.img} onClick={()=>{props.setModal(!props.modal); props.setFoto(userPhoto5)}} src={userPhoto5} alt=""/>
                    <img className={style.img} onClick={()=>{props.setModal(!props.modal); props.setFoto(userPhoto6)}} src={userPhoto6} alt=""/>
                    <img className={style.img} onClick={()=>{props.setModal(!props.modal); props.setFoto(userPhoto7)}} src={userPhoto7} alt=""/>
                    <img className={style.img} onClick={()=>{props.setModal(!props.modal); props.setFoto(userPhoto8)}} src={userPhoto8} alt=""/>
                    <img className={style.img} onClick={()=>{props.setModal(!props.modal); props.setFoto(userPhoto9)}} src={userPhoto9} alt=""/>
                    <img className={style.img} onClick={()=>{props.setModal(!props.modal); props.setFoto(userPhoto10)}} src={userPhoto10} alt=""/>

                </div>
            </div>
        </div>
    );
}