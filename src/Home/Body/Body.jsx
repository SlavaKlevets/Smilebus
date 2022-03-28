import React, {createRef, useEffect, useState} from 'react';
import style from "./Body.module.css";
import {useSelector, useDispatch} from 'react-redux';
import {push_ostanovka1Thunk, push_ostanovka2Thunk, pushKudaThunk, pushKudaThunk2, set_dataThunk, set_gorodThunk,
        set_gorodThunk2, set_passagirThunk, set_sityThunk} from "../../reducers/kudaReducer";
import {Prilogenie} from "../../Prilogenie/Prilogenie";
import {Glavnaja} from "../../Glavnaja/Glavnaja";
import {Glavnaja2} from "../../Glavnaja2/Glavnaja2";
import {Route} from "react-router";
import {NavLink} from "react-router-dom";
import {History} from "../../History/History";
import {VseMarshruty} from "../../VseMarshruty/VseMarshruty";
import {Nastroika} from "../../Nastroika/Nastroika";
import {VseNovosty} from "../../VseNovosty/VseNovosty";
import {VseOtzuv} from "../../VseOtzuvy/VseOtzuv";
import {Wakansii} from "../../Wakansii/Wakansii";
import {Contakt} from "../../Contakt/Contakt";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import {ProfileNovosty} from "../../ProfileNovosty/ProfileNovosty";


export const Body = (props) => {

    let g3 = createRef();
    let g4 = createRef();
    const dispatch = useDispatch();
    const state = useSelector(( state) => state.kuda);

    const [clicken, setClicken] = useState(true);
    const [clicken2, setClicken2] = useState(true);
    const [clicken3, setClicken3] = useState(true);
    const [clic, setClick] = useState("Откуда");
    const [clic2, setClick2] = useState("Куда");
    const [clic3, setClick3] = useState(state.passagir);
    const [selectedDate, set_selectedDate] = useState(new Date);

    const [bil,setBil] =useState(false);



    let arr = ["Минск", "Гомель","Мозырь", "Лельчицы", "Могилев", "Лоев", "Пертиков","Речица","Житковичи"];

    let Minsk = ["Минск, Автозаводская","Минск, Партизанская","Минск,Мото-Вело","Минск,Толстого"];
    let Homel = ["Гомель, Солнечная","Гомель, Проспект Речицкий","Гомель,ул.Барыкина","Гомель,ЗИП","Гомель,Вакзал"];
    let Mozur = ["Мозырь,примостовая"," Мозырь, вокзал","Мозырь, больница"];
    let Lelchitsy = ["Лельчицы, больница","Лельчицы, центр","Лельчицы, вокзал"];
    let Mohiloy = ["Могилев","Могилев восточный","Могилев западный"];
    let Loeu = ["Лоев","Лоев восточный","Лоев западный"];
    let Petrikov = ["Пертиков","Пертиков восточный","Пертиков западный"];
    let Rechica = ["Речица","Речица восточный","Речица западный"];
    let Gitkovichi = ["Житковичи","Житковичи восточный","Житковичи западный"];

    let fin=(p)=>{switch (p) {
        case "Минск": {
            return dispatch(push_ostanovka1Thunk(Minsk));
        }
        case "Гомель": {
            return dispatch(push_ostanovka1Thunk(Homel));
        }
        case "Мозырь": {
            return dispatch(push_ostanovka1Thunk(Mozur));
        }
        case "Лельчицы": {
            return dispatch(push_ostanovka1Thunk(Lelchitsy));
        }
        case "Могилев": {
            return dispatch(push_ostanovka1Thunk(Mohiloy));
        }
        case "Лоев": {
            return dispatch(push_ostanovka1Thunk(Loeu));
        }
        case "Пертиков": {
            return dispatch(push_ostanovka1Thunk(Petrikov));
        }
        case "Речица": {
            return dispatch(push_ostanovka1Thunk(Rechica));
        }
        case "Житковичи": {
            return dispatch(push_ostanovka1Thunk(Gitkovichi));
        }
        default:
            return " ";
    }
}

    let fin2=(o)=>{switch (o) {
        case "Минск": {
            return dispatch(push_ostanovka2Thunk(Minsk));
        }
        case "Гомель": {
            return dispatch(push_ostanovka2Thunk(Homel));
        }
        case "Мозырь": {
            return dispatch(push_ostanovka2Thunk(Mozur));
        }
        case "Лельчицы": {
            return dispatch(push_ostanovka2Thunk(Lelchitsy));
        }
        case "Могилев": {
            return dispatch(push_ostanovka2Thunk(Mohiloy));
        }
        case "Лоев": {
            return dispatch(push_ostanovka2Thunk(Loeu));
        }
        case "Пертиков": {
            return dispatch(push_ostanovka2Thunk(Petrikov));
        }
        case "Речица": {
            return dispatch(push_ostanovka2Thunk(Rechica));
        }
        case "Житковичи": {
            return dispatch(push_ostanovka2Thunk(Gitkovichi));
        }
        default:
            return " ";
    }
}

    let arr1 = arr.map((i,num) => <div key={num} className={style.sss}>
        <div className={style.jj} onClick={(e) => {
            onPageChanged(i);
            setClicken(!clicken);
          fin(i);
        }}>{i}</div>
    </div>);

    let arr2 = arr.map((i,num) => <div key={num} className={style.ppp}>
        <div className={style.ll} onClick={(e) => {
            onPageChanged2(i);
            setClicken2(!clicken2);
            fin2(i);
        }}>{i}</div>
    </div>);
// поиск по первого города
    function f5() {
        let filter = g3.current.value.toUpperCase();
        let li = document.getElementsByClassName(style.sss);
        // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
        for (let o = 0; o < 20; o++) {
            let a = li[o].getElementsByClassName(style.jj)[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[o].style.display = "";
            } else {
                li[o].style.display = "none";
            }
        }
    }
    // поиск по второго города
    function f4() {
        let filter = g4.current.value.toUpperCase();
        let li = document.getElementsByClassName(style.ppp);
        // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
        for (let o = 0; o < 20; o++) {
            let a = li[o].getElementsByClassName(style.ll)[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[o].style.display = "";
            } else {
                li[o].style.display = "none";
            }
        }
    }

    let onPageChanged = (a) => {
        setClick(a);
        dispatch(set_gorodThunk(a));
        return a;
    }
    let onPageChanged2 = (b) => {
        setClick2(b);
        dispatch(set_gorodThunk2(b));
        return b;
    }

    useEffect(() => {
        dispatch(set_sityThunk(arr));
    }, []);


    return (
        <div className={style.wrapper}>
            <div className={style.wrapper2}>
                <div><h1 className={style.poBelarusi}>Маршрутки по Беларуси</h1></div>
                <div><h1 className={style.pasPerevoz}>Пассажирские перевозки SMILEBUS:)</h1></div>
            </div>
            <div className={style.vibor}>
                {/*//////////ПЕРВАЯ ОСТАНОВКА///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
                <div className={style.wrap0}>
                    <div className={style.wrap10}><span className={style.otkuda}>Откуда <svg onClick={()=>{
                                    setClick(state.gorod2);
                                    dispatch(set_gorodThunk(state.gorod2));
                                    dispatch(pushKudaThunk(state.gorod2));
                                    fin(state.gorod2);

                                    setClick2(state.gorod);
                                    dispatch(set_gorodThunk2(state.gorod));
                                    dispatch(pushKudaThunk2(state.gorod));
                                    fin2(state.gorod);
                                }}
                        className={style.revers} viewBox="0 0 24 24" fill="333333" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.518 7.20959C18.542 7.23119 18.5636 7.25519 18.5852 7.28159L18.6188 7.32959L18.65 7.38479C18.6668 7.41599 18.6812 7.45199 18.6956 7.48799L18.7148 7.54799C18.7436 7.64879 18.758 7.75679 18.758 7.86239C18.758 7.96799 18.7436 8.07599 18.7148 8.17679L18.6956 8.23679C18.6812 8.27279 18.6668 8.30879 18.65 8.33999L18.6188 8.39519L18.5852 8.44319C18.5636 8.46959 18.542 8.49359 18.518 8.51519L14.5964 12.0816C14.3684 12.2904 14.0756 12.1656 13.9436 11.8056C13.814 11.4432 13.8908 10.9848 14.1212 10.776L16.4972 8.61599H5.71881C5.45481 8.61599 5.24121 8.27759 5.24121 7.86239C5.24121 7.44719 5.45481 7.10879 5.71881 7.10879H16.4972L14.1212 4.94879C13.8908 4.73999 13.814 4.28159 13.9436 3.91919C14.0756 3.55919 14.3684 3.43439 14.5964 3.64319L18.518 7.20959Z"> </path>
                        <path d="M5.48121 16.7904C5.45721 16.7688 5.43561 16.7448 5.41401 16.7184L5.38041 16.6704L5.34921 16.6152C5.33241 16.584 5.31801 16.548 5.30361 16.512L5.28441 16.452C5.25561 16.3512 5.24121 16.2432 5.24121 16.1376C5.24121 16.032 5.25561 15.924 5.28441 15.8232L5.30361 15.7632C5.31801 15.7272 5.33241 15.6912 5.34921 15.66L5.38041 15.6048L5.41401 15.5568C5.43561 15.5304 5.45721 15.5064 5.48121 15.4848L9.40281 11.9184C9.63081 11.7096 9.92361 11.8344 10.0556 12.1944C10.1852 12.5544 10.106 13.0152 9.87801 13.224L7.50201 15.384H18.2804C18.5444 15.384 18.758 15.7224 18.758 16.1376C18.758 16.5528 18.5444 16.8912 18.2804 16.8912H7.50201L9.87801 19.0512C10.106 19.26 10.1852 19.7184 10.0556 20.0808C9.92361 20.4408 9.63081 20.5632 9.40281 20.3568L5.48121 16.7904Z"> </path>
                    </svg></span>
                        {clicken && <div className={style.wrap1}>
                                        <div className={style.wrap12} onClick={() =>{setClicken(!clicken)}}>
                                            <h1 className={style.vibor8}>{clicken ? clic : state.gorod}</h1>
                                        </div>
                                    </div>}
                        {!clicken && <div>
                                          <input type="text" onChange={f5} ref={g3} autoFocus={true}
                                               placeholder={"Введите название города"} className={style.in}/>
                                     </div>}
                    </div>
                    <div className={style.wrapOtkuda}>
                        {!clicken && <div className={style.goroda}>
                            {arr1}
                        </div>}
                        {clicken && <div className={style.blocken2}>
                        </div>}
                    </div>
                </div>
                {/*////////////ВТОРАЯ ОСТАНОВКА////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
                <div className={style.wrap0}>
                    <div className={style.wrap10}><span className={style.otkuda}>Куда</span>
                        {clicken2 && <div className={style.wrap1}>
                            <div className={style.wrap12} onClick={() => {
                                setClicken2(!clicken2)
                            }}><h1>{clicken2 ? clic2 : state.gorod2}</h1></div>
                        </div>}
                        {!clicken2 && <div><input type="text" onChange={f4} ref={g4} autoFocus={true}
                                                  placeholder={"Введите название города"} className={style.in}/></div>}
                    </div>
                    <div className={style.wrapKuda}>
                        {!clicken2 && <div className={style.goroda}>
                            {arr2}
                        </div>}
                        {clicken2 && <div className={style.blocken2}> </div>}
                    </div>
                </div>

                {/*//////ДАТА//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
                <div className={style.wrap0}>
                    <div className={style.wrap10}><span className={style.otkuda}>Дата поездки</span>
                        <div className={style.vdpPeriodControl}>
                            <DatePicker dateFormat='dd.MM.yyyy' selected={selectedDate} onChange={date=>{set_selectedDate(date);
                                dispatch(set_dataThunk(date))}} className={style.form_control}/>
                        </div>
                    </div>
                </div>
                {/*///////КОЛИЧЕСТВО ПАССАЖИРОВ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
                <div className={style.wrap0}>
                    <div className={style.wrap10}><span className={style.otkuda}>Пассажиры</span>
                        <div className={style.wrap1}>
                            <div className={style.wrap12} onClick={() => {setClicken3(!clicken3)}}>
                                <h1>{clic3} Взрослый</h1>
                            </div>
                        </div>
                    </div>
                    <div className={style.wrapKuda}>
                        {!clicken3 && <div className={style.goroda}>
                            <h1>Количество пассажиров</h1>
                            <div className={style.button}>
                                <button className={style.but2} onClick={()=>{dispatch(set_passagirThunk(state.passagir-1));setClick3(clic3-1);setClicken3(!clicken3)}}>-</button>
                                <h1>{clic3}</h1>
                                <button className={style.but1} onClick={()=>{dispatch(set_passagirThunk(state.passagir+1));setClick3(clic3+1);setClicken3(!clicken3)}}>+</button>
                            </div>
                        </div>}
                        {clicken3 && <div className={style.blocken2}> </div>}
                    </div>
                </div>
                <div className={style.wrap0}>
                    <NavLink to="glavnaja2"><button className={style.poisk}>Найти</button></NavLink>
                </div>
            </div>
            <div>
                    <Route path='/glavnaja' render={()=><Glavnaja {...props} setModal={props.setModal} modal={props.modal} setFoto={props.setFoto} clic2={clic} click={setClick} click2={setClick2}/>}/>
                    <Route path='/glavnaja2' setBil={setBil} render={()=><Glavnaja2/>}/>
                    <Route path='/history' bil={bil} render={()=><History {...props}/>}/>
                    <Route path='/vseMarshruty' render={()=><VseMarshruty click={setClick} click2={setClick2}/>}/>
                    <Route path='/nastroika' render={()=><Nastroika/>}/>
                    <Route path='/vsenovosty' render={()=><VseNovosty/>}/>
                    <Route path='/vseotzuvy' render={()=><VseOtzuv/>}/>
                    <Route path='/wakansii' render={()=><Wakansii/>}/>
                    <Route path='/contakt' render={()=><Contakt/>}/>
                    <Route path='/profile/:id' render={()=><ProfileNovosty/>}/>
            </div>
            <Prilogenie/>
        </div>
    )
};