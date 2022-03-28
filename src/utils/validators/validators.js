import React from "react";

 export let requiredField=(value)=>{
    if(value) return undefined;
    return "Field is required";
};

 export let maxLength30=(maxLength)=>(value)=>{
    if(value.length>maxLength) return "Max length is 30 symbols";
    return undefined;
}