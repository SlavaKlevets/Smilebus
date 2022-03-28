import React from "react";
import style from "./FormsControls.module.css";
import {TextField}from "@material-ui/core";

export const Textarea=({input,meta,...props})=>{

    let er=meta.touched && meta.error;

    return (
         <div className={style.formControl}>
            <div>
                {/*<textarea className={(er ? style.textarea1 : style.normal)} {...input}{...props} />*/}
                <TextField className={(er ? style.textarea1 : "")} {...input}{...props}/>
            </div>
            {er && <span className={style.err}>"SOme error"</span>}
        </div>
    )
}