import { SET_TRAVEL_AMOUNT, SET_TRAVEL_NAME } from "../../action/travel/travel";

let travelState = {
    name:'',
    amount:0
}

const travelReducer = (state= travelState, action)=>{
    switch(action.type){
        case SET_TRAVEL_NAME:
            return{...state, name:action.payload}
        case SET_TRAVEL_AMOUNT:
            return{...state, amount:action.payload}
        default:
            return state
    }
}

export default travelReducer;