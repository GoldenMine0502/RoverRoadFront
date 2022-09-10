export const SET_NOW_POST_TOKEN = "SET_NOW_POST_TOKEN";
export const SET_NOW_POST_TITLE = "SET_NOW_POST_TITLE";
export const SET_NOW_POST_CONTENT = "SET_NOW_POST_CONTENT";
export const SET_NOW_POST_IMAGE = "SET_NOW_POST_IMAGE";

export function setNowPostToken(postToken){
    return{
        type:SET_NOW_POST_TOKEN,
        payload:postToken
    }
}

export function setNowPostTitle(postTile){
    return{
        type:SET_NOW_POST_TITLE,
        payload:postTile
    }
}

export function setNowPostContent(postContent){
    return{
        type:SET_NOW_POST_CONTENT,
        payload:postContent
    }
}

export function setNowPostImage(postImage){
    return{
        type:SET_NOW_POST_IMAGE,
        payload:postImage
    }
}