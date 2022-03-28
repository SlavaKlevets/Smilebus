import React from 'react';
import style from "./Wakansii.module.css";

export const Wakansii = (props) => {

    let arr=[
            {voditel:"",
              zp:800
            },
             {voditel:"",
              zp:800
             },
             {voditel:"",
              zp:800
             },
             {voditel:"",
              zp:800
             }
    ];

    let array=arr.map(i=><div className={style.ptitem}>
                <h1 className={style.vnimanie}>Требуется водитель</h1>
                <span className={style.vnimanie2}>ЗП - 800р</span>
    </div>);

    return (
        <div className={style.wrap}>
            {array}
        </div>
    );
}