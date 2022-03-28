import React, {useEffect, useState} from "react";
import style from "./Glavnaja2.module.css";
import {
    pushKudaThunk,
    pushKudaThunk2,
    set_sityThunk
} from "../reducers/kudaReducer";

import {placeThunk, set_biletThunk, set_vse_biletThunk} from "../reducers/userReducer";
import {useDispatch, useSelector} from "react-redux";

export const Glavnaja2 = (props) => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.kuda);
    const state1 = useSelector((state) => state.users);

    const [clicken, setClicken] = useState(true);
    const [clicken2, setClicken2] = useState(true);

    const [clic, setClick] = useState(state.ostanovka1[0]);
    const [clic2, setClick2] = useState(state.ostanovka2[0]);



    let arr1 = state.ostanovka1.map((i,num) => <div key={"edf"+num} className={style.sss}>
        <div className={style.jj} onClick={(e) => {
            onPageChanged(i);
            setClicken(!clicken);
            dispatch(pushKudaThunk(onPageChanged2));
        }}>{i}</div>
    </div>);

    let arr = state.ostanovka2.map((i,num) => <div key={num} className={style.ppp}>
        <div className={style.ll} onClick={(e) => {
            onPageChanged2(i);
            setClicken2(!clicken2);
            dispatch(pushKudaThunk2(onPageChanged));
        }}>{i}</div>
    </div>);

    let onPageChanged = (a) => {
        setClick(a);
        return a;
    }
    let onPageChanged2 = (b) => {
        setClick2(b);
        return b;
    }

    useEffect(() => {
        dispatch(set_sityThunk(arr));
        dispatch(set_vse_biletThunk(array));
    },[]);

    let array=[
        {sity1:"Гомель, Солнечная",
         sity2:"Минск, Автозаводская",
         timeOt:"11:00",
         timePr:"13:00",
         timeInPath:"2 часа 0 мин в пути",
         place:17,
         price:"19p.",
         id:0,
        },
        {sity1:"Гомель",
         sity2:"Мозырь",
         timeOt:"15:00",
         timePr:"17:00",
         timeInPath:"2 часа 0 мин в пути",
         place:17,
         price:"19p.",
         id:1
        },
        {sity1:"Гомель",
         sity2:"Речица",
         timeOt:"16:00",
         timePr:"16:30",
         timeInPath:"0 часов 30 мин в пути",
         place:17,
         price:"19p.",
         id:2
        },
        {sity1:"Минск",
         sity2:"Мозырь",
         timeOt:"8:00",
         timePr:"12:00",
         timeInPath:"4 часа 00 мин в пути",
         place:17,
         price:"19p.",
         id:3
        },
        {sity1:"Минск",
         sity2:"Мозырь",
         timeOt:"10:00",
         timePr:"14:00",
         timeInPath:"4 часа 00 мин в пути",
         place:17,
         price:"19p.",
         id:4
        },
        {sity1:"Минск",
         sity2:"Речица",
         timeOt:"16:00",
         timePr:"20:00",
         timeInPath:"4 часа 00 мин в пути",
         place:17,
         price:"19p.",
         id:5
        },
        {sity1:"Минск",
         sity2:"Речица",
         timeOt:"18:00",
         timePr:"22:00",
         timeInPath:"4 часа 00 мин в пути",
         place:17,
         price:"19p.",
         id:6
        },
        {sity1:"Мозырь",
         sity2:"Речица",
         timeOt:"16:00",
         timePr:"17:30",
         timeInPath:"1 час 30 мин в пути",
         place:17,
         price:"19p.",
         id:7
        },
        {sity1:"Минск",
         sity2:"Гомель",
         timeOt:"16:00",
         timePr:"19:30",
         timeInPath:"3 часа 30 мин в пути",
         place:17,
         price:"19p.",
         id:8
        },
        {sity1:"Гомель",
         sity2:"Минск",
         timeOt:"8:00",
         timePr:"11:30",
         timeInPath:"3 часa 30 мин в пути",
         place:17,
         price:"19p.",
         id:9
        },
        {sity1:"Гомель",
         sity2:"Лельчицы",
         timeOt:"16:00",
         timePr:"19:00",
         timeInPath:"3 часa 00 мин в пути",
         place:17,
         price:"19p.",
         id:10
        },
        {sity1:"Гомель",
         sity2:"Могилев",
         timeOt:"16:00",
         timePr:"18:00",
         timeInPath:"2 часa 00 мин в пути",
         place:17,
         price:"19p.",
         id:11
        },
        {sity1:"Минск",
         sity2:"Могилев",
         timeOt:"17:00",
         timePr:"19:00",
         timeInPath:"2 часa 00 мин в пути",
         place:17,
         price:"19p.",
         id:12
        },
        {   sity1:"Гомель",
            sity2:"Мозырь",
            timeOt:"13:00",
            timePr:"15:00",
            timeInPath:"2 часа 00 мин в пути",
            place:17,
            price:"19p.",
            id:13,
        },
        {   sity1:"Гомель",
            sity2:"Мозырь",
            timeOt:"18:00",
            timePr:"20:00",
            timeInPath:"2 часа 00 мин в пути",
            place:17,
            price:"19p.",
            id:14
        },
        {   sity1:"Гомель",
            sity2:"Речица",
            timeOt:"15:00",
            timePr:"15:30",
            timeInPath:"0 часов 30 мин в пути",
            place:17,
            price:"19p.",
            id:15
        },
        {   sity1:"Минск",
            sity2:"Мозырь",
            timeOt:"17:00",
            timePr:"20:00",
            timeInPath:"3 часа 00 мин в пути",
            place:17,
            price:"19p.",
            id:16
        },
        {   sity1:"Минск",
            sity2:"Речица",
            timeOt:"16:30",
            timePr:"20:30",
            timeInPath:"4 часа 00 мин в пути",
            place:17,
            price:"19p.",
            id:17
        },
        {   sity1:"Речица",
            sity2:"Минск",
            timeOt:"16:00",
            timePr:"20:00",
            timeInPath:"4 часа 00 мин в пути",
            place:17,
            price:"19p.",
            id:18
        },
        {   sity1:"Минск",
            sity2:"Гомель",
            timeOt:"15:00",
            timePr:"18:00",
            timeInPath:"3 часа 00 мин в пути",
            place:17,
            price:"19p.",
            id:19
        },
        {   sity1:"Гомель",
            sity2:"Минск",
            timeOt:"07:00",
            timePr:"10:00",
            timeInPath:"3 часа 00 мин в пути",
            place:17,
            price:"19p.",
            id:20
        },
        {   sity1:"Гомель",
            sity2:"Лельчицы",
            timeOt:"13:00",
            timePr:"16:00",
            timeInPath:"3 часа 00 мин в пути",
            place:17,
            price:"19p.",
            id:21
        },
        {   sity1:"Гомель",
            sity2:"Могилев",
            timeOt:"14:00",
            timePr:"16:00",
            timeInPath:"2 часа 00 мин в пути",
            place:17,
            price:"19p.",
            id:22
        },
        {   sity1:"Минск",
            sity2:"Могилев",
            timeOt:"15:00",
            timePr:"17:00",
            timeInPath:"2 часа 00 мин в пути",
            place:17,
            price:"19p.",
            id:23
        },
        {sity1:"Минск",
            sity2:"Житковичи",
            timeOt:"11:00",
            timePr:"13:00",
            timeInPath:"2 часа 0 мин в пути",
            place:17,
            price:"19p.",
            id:24,
        },
        {sity1:"Минск",
            sity2:"Петриков",
            timeOt:"11:00",
            timePr:"13:00",
            timeInPath:"2 часа 0 мин в пути",
            place:17,
            price:"19p.",
            id:25,
        }
];

    let bilet=state1.vse_bilet.map((i,num)=>{if(state.gorod===i.sity1 && state.gorod2===i.sity2){
        return <div className={style.bilet} key={num}>
                <div className={style.bilet1}><h1>{i.timeOt}</h1><span>{i.sity1}</span></div>
                <div className={style.bilet2}><h1>{i.timePr}</h1><span>{i.sity2}</span></div>
                <div className={style.bilet3}><span>{i.timeInPath}</span></div>
                <div className={style.bilet4}><span className={style.price}>{i.price}</span></div>
                <div className={style.bilet5}><span className={style.price}>{i.place}</span></div>
                <div className={style.bilet6}><button className={style.butZakaz}
             onClick={()=>{dispatch(placeThunk(i.id));dispatch(set_biletThunk(array[num]))}}>Заказать</button></div>
        </div>
    }});

    return (
        /*////////////////////////////////////////////////////////////////////////////////////////////////////*/
        <div className={style.wrapper}>
            <div className={style.vibor}>
                <div className={style.wrap0}>
                    <div className={style.wrap10}><span className={style.otkuda}>Место посадки</span>
                        {clicken && <div className={style.wrap1}>
                            <div className={style.wrap12} onClick={() => {setClicken(!clicken)}}>
                                <h1>{clicken ? clic : state.gorod}</h1>
                            </div>
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
        {/*////////////////////////////////////////////////////////////////////////////////////////////////////*/}
                <div className={style.wrap0}>
                    <div className={style.wrap10}><span className={style.otkuda}>Место высадки</span>
                        {clicken2 && <div className={style.wrap1}>
                            <div className={style.wrap12} onClick={() => {setClicken2(!clicken2)}}>
                                <h1>{clicken2 ? clic2 : state.gorod2}</h1>
                            </div>
                        </div>}
                    </div>
                    <div className={style.wrapKuda}>
                        {!clicken2 && <div className={style.goroda}>
                            {arr}
                        </div>}
                        {clicken2 && <div className={style.blocken2}> </div>}
                    </div>
                </div>
            </div>
            <div className={style.wrapper1}>
                <span>Все запрашиваемые маршруты</span>
                {bilet}
            </div>
        </div>
    )
}








