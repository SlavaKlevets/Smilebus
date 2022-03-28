import React, {useEffect} from 'react';
import style from "./Marshrut.module.css";
import {useDispatch, useSelector} from "react-redux";
import {
    push_ostanovka1Thunk, push_ostanovka2Thunk,
    pushKudaThunk,
    pushKudaThunk2,
    set_gorodThunk, set_gorodThunk2
} from "../reducers/kudaReducer";
import {NavLink} from "react-router-dom";

export const Marshrut = (props) => {

    const state = useSelector((state) => state.kuda);

    const dispatch = useDispatch();

    let onPageChanged = (a) => {
        props.click(a.kuda);
        dispatch(set_gorodThunk(a.kuda))
        return a.kuda;
    }

    let onPageChanged2 = (b) => {
        props.click2(b.kuda2);
        dispatch(set_gorodThunk2(b.kuda2));
        return b.kuda2;
    }

    useEffect(() => {
        dispatch(pushKudaThunk(onPageChanged));
        dispatch(pushKudaThunk2(onPageChanged2));
    }, []);

    let arr = [
        {   kuda: "Гомель",
            kuda2: "Речица",
            price: 5,
            hourU: 1,
            hourM: 30,
            ocenca: 4.6
        },
        {   kuda: "Гомель",
            kuda2: "Минск",
            price: 5,
            hourU: 1,
            hourM: 30,
            ocenca: 4.9
        },
        {   kuda: "Минск",
            kuda2: "Речица",
            price: 5,
            hourU: 1,
            hourM: 30,
            ocenca: 5.0
        },
        {   kuda: "Гомель",
            kuda2: "Мозырь",
            price: 5,
            hourU: 1,
            hourM: 30,
            ocenca: 5.0
        },
        {   kuda: "Мозырь",
            kuda2: "Речица",
            price: 5,
            hourU: 1,
            hourM: 30,
            ocenca: 4.9
        },
        {   kuda: "Минск",
            kuda2: "Мозырь",
            price: 5,
            hourU: 1,
            hourM: 30,
            ocenca: 5.0
        },
        {   kuda: "Гомель",
            kuda2: "Лельчицы",
            price: 5,
            hourU: 1,
            hourM: 30,
            ocenca: 5.0
        },
        {   kuda: "Гомель",
            kuda2: "Могилев",
            price: 5,
            hourU: 1,
            hourM: 30,
            ocenca: 5.0
        },
        {   kuda: "Минск",
            kuda2: "Могилев",
            price: 5,
            hourU: 1,
            hourM: 30,
            ocenca: 5.0
        }
    ];

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

    let Minsk = ["Минск, Автозаводская","Минск, Партизанская","Минск,Мото-Вело","Минск,Толстого"];
    let Homel = ["Гомель, Солнечная","Гомель, Проспект Речицкий","Гомель,ул.Барыкина","Гомель,ЗИП","Гомель,Вакзал"];
    let Mozur = ["Мозырь,примостовая"," Мозырь, вокзал","Мозырь, больница"];
    let Lelchitsy = ["Лельчицы, больница","Лельчицы, центр","Лельчицы, вокзал"];
    let Mohiloy = ["Могилев","Могилев восточный","Могилев западный"];
    let Loeu = ["Лоев","Лоев восточный","Лоев западный"];
    let Petrikov = ["Пертиков","Пертиков восточный","Пертиков западный"];
    let Rechica = ["Речица","Речица восточный","Речица западный"];
    let Gitkovichi = ["Житковичи","Житковичи восточный","Житковичи западный"];

    let arr1 = arr.map((i,num) => <div className={style.wrapper} key={"be"+num}>
        <div className={style.wrapper1}>
            <div className={style.marsr}><h1 onClick={(e) => {
                onPageChanged(i);
                onPageChanged2(i);
                fin(i.kuda);
                fin2(i.kuda2);
            }}>{i.kuda}-{i.kuda2}</h1>
            </div>
            <div className={style.price}><h1 className={style.orange}>{i.price} руб.</h1></div>
        </div>
        <div className={style.wrapper2}>
            <span className={style.hourU}>В пути {i.hourU} час {i.hourM} минут</span>
        </div>
        <div className={style.ocenca}>
            <span>Оценка {i.ocenca}</span>
        </div>
    </div>)

    return (
        <div className={style.wrap}>
            <div className={style.ptitem}>
                {arr1}
            </div>
            <div>
                <NavLink to="vseMarshruty"><button className={style.but}>Все маршруты</button></NavLink>
            </div>
        </div>
    );
}