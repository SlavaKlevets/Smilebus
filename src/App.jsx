import './App.css';
import {Header} from "./Home/Header/Header";
import {Body} from "./Home/Body/Body";
import style from "./Home/Body/Body.module.css";
import React, {useState} from "react";
import {Footer} from "./Footer/Footer";
import {Redirect, Route} from "react-router";
import {Otzuv} from "./Otzuv/Otzuv";
import {Glavnaja2} from "./Glavnaja2/Glavnaja2";
import {History} from "./History/History";

function App() {
    const [modal, setModal] = useState(false);
    const [foto, setFoto] = useState(null);
    const [modalOtzuv, setModalOtzuv] = useState(false);
    return (
        <div className="wrapper">
            {modalOtzuv && <Otzuv modalOtzuv={modalOtzuv} setModalOtzuv={setModalOtzuv}/>}
            {modal && <div onClick={() => {
                setModal(false)
            }} className={style.modal}><img className={style.imgfon} src={foto} alt=""/></div>}

            <Redirect to="glavnaja"/>
            <Header modalOtzuv={modalOtzuv} setModalOtzuv={setModalOtzuv}/>
            <Body setModal={setModal} modal={modal} setFoto={setFoto}/>
            <Footer/>
        </div>
    );
}

export default App;
