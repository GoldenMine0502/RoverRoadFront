import axios from 'axios';

axios.defaults.baseURL = "https://roverroad.goldenmine.kr:8444";

export default{
    auth(id, password){
        return axios({
            method:'POST',
            url:'/auth/login',
            data:{
                id:id,
                password:password
            }
        }).catch((err)=>{return err;});
    },
    register(id, password, name, age){
        return axios({
            method:'POST',
            url:'/auth/register',
            data:{
                id:id,
                password:password,
                name:name,
                age:age
            }
        })
    },

    getUser(userToken){
        return axios({
            method:'GET',
            url:'/user/'+userToken
        }).catch((err)=>{return err;});
    },

    getPostList(){
        return axios({
            method:"GET",
            url:"/post"
        }).catch((err)=>{return err;});
    },

    getPost(postToken){
        return axios({
            method:'GET',
            url:'/post/'+postToken
        }).catch((err)=>{return err;});
    },

    getUserRoad(userToken){
        return axios({
            method:'GET',
            url:'/user/list/'+userToken
        }).catch((err)=>{return err;});
    },
    getRoadList(){
        return axios({
            method:'GET',
            url:'/map'
        }).catch((err)=>{return err;});
    },

    getRoadSearchList(name){
        return axios({
            method:'GET',
            url:'/map/data/'+name
        }).catch((err)=>{return err;});
    },

    getRoadData(roadToken){
        return axios({
            method:'GET',
            url:'/map/get/'+roadToken
        }).catch((err)=>{return err;});
    },

    getRoadThumbnailData(roadToken){
        return axios({
            method:'GET',
            url:'/map/get/thumbnail/'+roadToken
        }).catch((err)=>{return err;});
    },

    getRoadDetailData(roadToken){
        return axios({
            method:'GET',
            url:'/map/get/detail/'+roadToken
        }).catch((err)=>{return err;});
    },

    saveRoad(userToken, name, amount, dataList){
        return axios({
            method:"POST",
            url:'/map/save',
            data:{
                userToken:userToken,
                dataList:dataList,
                name:name,
                amount:amount
            }
        }).catch((err)=>{return err;});
    },
    
    getGuider(){
        return axios({
            method:'GET',
            url:'/guider'
        }).catch((err)=>{return err;});
    },

    getGuiderDetail(guiderToken){
        return axios({
            method:'GET',
            url:'/guider/'+guiderToken
        }).catch((err)=>{return err;});
    },

    getGuiderIsFollow(userToken, guiderToken){
        return axios({
            method:'POST',
            url:'/guider/check/follow',
            data:{
                userToken:userToken,
                guideToken:guiderToken
            }
        }).catch((err)=>{return err;});
    },

    deleteGuiderFollow(userToken, guideToken){
        return axios({
            method:'DELETE',
            url:'/guider/follow',
            data:{
                userToken:userToken,
                guideToken:guideToken
            }
        }).catch((err)=>{return err;});
    },

    setGuiderFollow(userToken, guideToken){
        return axios({
            method:'POST',
            url:'/guider/follow/user',
            data:{
                userToken:userToken,
                guideToken:guideToken
            }
        }).catch((err)=>{return err;});;
    },

    getMyTrip(userToken){
        return axios({
            method:'GET',
            url:'/my/trip/'+userToken,
        }).catch((err)=>{return err;});
    },

    getMyGuide(userToken){
        return axios({
            method:'GET',
            url:'/my/guide/'+userToken,
        }).catch((err)=>{return err;});
    },

    getTravelList(){
        return axios({
            method:'GET',
            url:'/travel',
        }).catch((err)=>{return err;});
    },

    saveTravel(userToken, roadToken){
        return axios({
            method:'POST',
            url:'/travel/save',
            data:{
                userToken:userToken,
                makeRoadToken:roadToken
            }
        }).catch((err)=>{return err;});
    },

    getSaveList(userToken){
        return axios({
            method:'GET',
            url:'/travel/save/'+userToken
        }).catch((err)=>{return err;});
    },
    
    deleteSave(userToken, makeRoadToken){
        return axios({
            method:'DELETE',
            url:'/my/save',
            data:{
                userToken:userToken,
                makeRoadToken:makeRoadToken
            }
        }).catch((err)=>{return err;});
    }
}