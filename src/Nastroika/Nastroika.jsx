import React, {useState} from "react";
import style from "./Nastroika.module.css";
import {Field,reduxForm} from "redux-form";
import {Textarea} from "../FormsControls/FormsControls";
import {maxLength30, requiredField} from "../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import {setLoginThunk, setPasswordThunk, telThunk} from "../reducers/userReducer";

   export const Nastroika = (props) => {

       let dispatch = useDispatch();
       let [value, setValue] = useState('');
       let state1 = useSelector((state) => state.users);

       let onSubmit=(formData)=>{
            dispatch(setLoginThunk(formData.login));
            dispatch(setPasswordThunk(formData.password));
            dispatch(telThunk(formData.phone));
            setValue(" ");
        };

       let maxLength=maxLength30(30);

       const LoginForm=(props)=>{
           return (
           <div className={style.formWrapper}>
               <form onSubmit={props.handleSubmit}  >
                   <div className={style.form}>
                       <div>
                           <Field placeholder={"Login"} label="Login" name={"login"} component={Textarea} validate={[requiredField,maxLength]} value={value}/>
                       </div>
                       <div>
                           <Field placeholder={"Password"} label="Password" name={"password"} type={"password"} component={Textarea} validate={[requiredField,maxLength]} value={value}/>
                       </div>
                   </div>
                   <div className={style.form}>
                       <div>
                           <Field placeholder={"Phone"} label="Phone" name={"phone"} component={Textarea} validate={[requiredField,maxLength]} value={value}/>
                       </div>
                   </div>
                   <div className={style.wrapBut}>
                       <button className={style.but1}>Отправить</button>
                   </div>
               </form>
           </div>

           );
       }

       let LoginReduxForm=reduxForm({form:'login'})(LoginForm)

       return (
            <div className={style.wrapperForm}>
                <LoginReduxForm onSubmit={onSubmit}/>
                <div>{state1.name}</div>
                <div>{state1.surname}</div>
                <div>{state1.tel}</div>
            </div>
        );
    }
