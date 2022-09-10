export const SET_SAVE_ROAD = "SET_SAVE_ROAD";
export const SET_AUTO_CREATE = "SET_AUTO_CREATE";

export function setSaveRoad(saveRoad){
    return{
        type:SET_SAVE_ROAD,
        payload:saveRoad
    }
}

export function setAutoCreate(autoCreate){
    return{
        type:SET_AUTO_CREATE,
        payload:autoCreate
    }
}