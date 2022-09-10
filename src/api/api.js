import axios from 'axios';

axios.defaults.baseURL = "http://192.168.0.68:8080";

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
    }
}