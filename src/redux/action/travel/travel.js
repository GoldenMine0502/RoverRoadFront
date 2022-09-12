export const SET_TRAVEL_NAME = "SET_TRAVEL_NAME";
export const SET_TRAVEL_AMOUNT = "SET_TRAVEL_AMOUNT";

export function setTravelName(name){
    return{
        type:SET_TRAVEL_NAME,
        payload:name
    }
}

export function setTravelAmount(amount){
    return{
        type:SET_TRAVEL_AMOUNT,
        payload:amount
    }
}