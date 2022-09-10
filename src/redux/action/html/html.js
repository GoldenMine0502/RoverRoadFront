export const SET_ROAD_THUMBNAIL = "SET_ROAD_THUMBNAIL";

export function setRoadThumbnail(html){
    return{
        type:SET_ROAD_THUMBNAIL,
        payload:html
    }
}