import { SET_ROAD_THUMBNAIL } from "../../action/html/html";

let htmlState = {
    roadThumbnail:[]
}

const htmlReducer = (state=htmlState, action)=>{
    switch(action.type){
        case SET_ROAD_THUMBNAIL:
            return{...state, roadThumbnail:action.payload}
        default:
            return state
    }
}

export default htmlReducer;