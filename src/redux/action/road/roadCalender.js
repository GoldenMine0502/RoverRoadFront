export const SET_ROAD_CALENDER_LIST = "SET_ROAD_CALENDER_LIST";
export const SET_ROAD_CALENDER_LIST_CLEAR = "SET_ROAD_CALENDER_LIST_CLEAR";

export function setRoadCalenderList(list){
    return{
        type:SET_ROAD_CALENDER_LIST,
        payload:list
    }
}

export function setRoadCalenderListClear(){
    return{
        type:SET_ROAD_CALENDER_LIST_CLEAR,
        payload:[]
    }
}