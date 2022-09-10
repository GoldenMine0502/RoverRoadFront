export const SET_POST_LIST = "SET_POST_LIST";

export function setPostList(postList){
    return{
        type:SET_POST_LIST,
        payload:postList
    }
}