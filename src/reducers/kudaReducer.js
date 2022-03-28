const PUSH_KUDA="PUSH_KUDA";
const PUSH_KUDA2="PUSH_KUDA2";
const SET_SITYS="SET_SITYS";
const SET_GOROD="SET_GOROD";
const SET_GOROD2="SET_GOROD2";
const SET_DATA="SET_DATA";
const SET_PASSAGIR="SET_PASSAGIR";
const SET_OSTANOVKA1="SET_OSTANOVKA1";
const SET_OSTANOVKA2="SET_OSTANOVKA2";
const SET_OSTAN1="SETOSTAN1";
const SET_OSTAN2="SETOSTAN2";

const initialState={
     sitys:[
         {kuda:"Выберите город",
          kuda2:"Выберите город"
         }
     ],
    gorod:"Откуда",
    gorod2:"Куда",
    ostanovka1:[],
    ostanovka2:[],
    ostan1:"",
    ostan2:"",
    data:"1",
    passagir:1
};
const kudaReducer=(state=initialState,action)=>{
switch (action.type){
    case SET_SITYS: {
        return {
            ...state,
            sitys: action.sitys
        }
    }
    case SET_OSTAN1: {
        return {
            ...state,
            ostan1: action.ostan1
        }
    }
    case SET_OSTAN2: {
        return {
            ...state,
            ostan2: action.ostan2
        }
    }
    case SET_OSTANOVKA1: {
        return {
            ...state,
            ostanovka1: action.ostanovka1
        }
    }
    case SET_OSTANOVKA2: {
        return {
            ...state,
            ostanovka2: action.ostanovka2
        }
    }
    case SET_PASSAGIR: {
        return {
            ...state,
            passagir: action.passagir
        }
    }
    case SET_DATA: {
        return {
            ...state,
            data: action.data
        }
    }
    case SET_GOROD: {
        return {
            ...state,
            gorod: action.gorod
        }
    }
    case SET_GOROD2: {
        return {
            ...state,
            gorod2: action.gorod2
        }
    }
    case PUSH_KUDA:
        return{
                ...state,
            sitys: state.sitys.map(u => {
                    if (u.kuda === action.kuda) {
                        return {
                            ...u,
                            gorod: action.kuda
                        }
                    }
                    return u;
                })
            }
    case PUSH_KUDA2:
        return{
            ...state,
            sitys: state.sitys.map(u => {
                if (u.kuda2 === action.kuda2) {
                    return {
                        ...u,
                        gorod2: action.kuda2
                    }
                }
                return u;
            })
        }
    default: return state
    }
}


export const set_sity=(sitys)=>({type:SET_SITYS,sitys});
export const set_data=(data)=>({type:SET_DATA,data});
export const set_gorod=(gorod)=>({type:SET_GOROD,gorod});
export const set_gorod2=(gorod2)=>({type:SET_GOROD2,gorod2});
export const set_passagir=(passagir)=>({type:SET_PASSAGIR,passagir});
export const push_kuda=(kuda)=>({type:PUSH_KUDA,kuda});
export const push_kuda2=(kuda2)=>({type:PUSH_KUDA2,kuda2});
export const push_ostanovka1=(ostanovka1)=>({type:SET_OSTANOVKA1,ostanovka1});
export const push_ostanovka2=(ostanovka2)=>({type:SET_OSTANOVKA2,ostanovka2});
export const push_ostan1=(ostan1)=>({type:SET_OSTAN1,ostan1});
export const push_ostan2=(ostan2)=>({type:SET_OSTAN2,ostan2});

export const push_ostan1Thunk=(ostan1)=>{
    return (dispatch)=>{
        dispatch(push_ostan1(ostan1));
    }
};

export const push_ostan2Thunk=(ostan2)=>{
    return (dispatch)=>{
        dispatch(push_ostan2(ostan2));
    }
};

export const push_ostanovka1Thunk=(ostanovka1)=>{
    return (dispatch)=>{
        dispatch(push_ostanovka1(ostanovka1));
    }
};

export const push_ostanovka2Thunk=(ostanovka2)=>{
    return (dispatch)=>{
        dispatch(push_ostanovka2(ostanovka2));
    }
};

export const pushKudaThunk=(kuda)=>{
        return (dispatch)=>{
        dispatch(push_kuda(kuda));
    }
};

export const set_gorodThunk=(gorod)=>{
    return (dispatch)=>{
        dispatch(set_gorod(gorod));
    }
};

export const set_passagirThunk=(passagir)=>{
    return (dispatch)=>{
        dispatch(set_passagir(passagir));
    }
};

export const pushKudaThunk2=(kuda2)=>{
    return (dispatch)=>{
        dispatch(push_kuda2(kuda2));
    }
};

export const set_gorodThunk2=(gorod2)=>{
    return (dispatch)=>{
        dispatch(set_gorod2(gorod2));
    }
};

export const set_sityThunk=(sitys)=>{
    return (dispatch)=>{
        dispatch(set_sity(sitys));
    }
};

export const set_dataThunk=(data)=>{
    return (dispatch)=>{
        dispatch(set_data(data));
    }
};

export default kudaReducer;