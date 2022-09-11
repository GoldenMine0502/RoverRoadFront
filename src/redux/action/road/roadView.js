export const SET_VIEW_NAME = "SET_VIEW_NAME";
export const SET_VIEW_AMOUNT = "SET_VIEW_AMOUNT";

export function setViewName(name){
    return{
        type:SET_VIEW_NAME,
        payload:name
    }
}

export function setViewAmount(amount){
    return{
        type:SET_VIEW_AMOUNT,
        payload:amount
    }
}