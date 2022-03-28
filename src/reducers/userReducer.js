const SET_LOGIN = "SET_LOGIN";
const SET_PASSWORD = "SET_PASSWORD";
const SET_BILET = "SET_BILET";
const DELETE="DELETE";
const SET_TEL ="SET_TEL";
const SET_PLACE ="SET_PLACE";
const SET_VSE_BILET ="SET_VSE_BILET";

const initialState = {
    vse_bilet: [
        {
            sity1: "",
            sity2: "",
            timeOt: "",
            timePr: "",
            timeInPath: "",
            place: 0,
            price: "",
            id:0
        },
    ],
    bilet: [

    ],
        name: "",
        surname: "",
        id: " ",
        tel: " "
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return{
                ...state,
                name:action.login,
            }
        case SET_PASSWORD:
            return{
                ...state,
                surname:action.password,
            }
        case SET_TEL:
            return{
                ...state,
                tel:action.tel,
            }
        case SET_PLACE:
            return{
                ...state,
                vse_bilet: state.vse_bilet.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u,
                            place: u.place-1
                        }
                    }
                    return u;
                })
            }
        case SET_BILET: {
            return {
                ...state,
                bilet: [...state.bilet,action.data]
            }
        }
        case SET_VSE_BILET: {
            return {
                ...state,
                vse_bilet: action.bilet
            }
        }
        case DELETE: {
            return {
                ...state,
                bilet:state.bilet.filter(u=>u.id!==action.id)
            }
        }
        default:
            return state
    }
}


export const setLogin=(login)=>({type:SET_LOGIN,login});
export const setPassword=(password)=>({type:SET_PASSWORD,password});
export const set_bilet = (data) => ({type: SET_BILET, data});
export const set_vse_bilet = (bilet) => ({type: SET_VSE_BILET, bilet});
export const deleteEmployeesActionCreater=(id)=>({type:DELETE,id});
export const telActionCreater=(tel)=>({type:SET_TEL,tel});
export const placeActionCreater=(id)=>({type:SET_PLACE,id});

export const setLoginThunk=(login)=>(dispatch)=>{
    dispatch(setLogin(login));
};
export const telThunk=(tel)=>(dispatch)=>{
    dispatch(telActionCreater(tel));
};

export const placeThunk=(id)=>(dispatch)=>{
    dispatch(placeActionCreater(id));
};

export const setPasswordThunk=(password)=>(dispatch)=>{
    dispatch(setPassword(password));
};

export const set_biletThunk = (data) => {
    return (dispatch) => {
        dispatch(set_bilet(data));
    }
};

export const set_vse_biletThunk = (bilet) => {
    return (dispatch) => {
        dispatch(set_vse_bilet(bilet));
    }
};

export const deleteEmployeesThunk=(id)=>{
    return (dispatch)=>{
        dispatch(deleteEmployeesActionCreater(id));
    }
};

export default userReducer;