import React, {useEffect} from "react";
import api from "../../api/api";
import {useDispatch, useSelector} from 'react-redux';
import { setPostList } from "../../redux/action/post/post";

import PostBox from "./module/post";

import Logo from '../image/logo.svg';

let View = ()=>{
    const dispatch = useDispatch();
    const {postList} = useSelector((state)=>({
        postList:state.post.postList
    }));
    useEffect(()=>{
        async function setList(){
            let data = await api.getPostList();
            if(data.status == 200){
                dispatch(setPostList(data.data));
            }
        }

        setList();
    },[]);
    return(
        <div className="View">
            <div className="logo-box">
                <img src={Logo}/>
            </div>

            {
                postList.map((i, index)=>(<PostBox title={i.title} content={i.content} subtitle={i.subtitle} image={i.image} postToken={i.postToken} key={index}></PostBox>))
            }
            
            <div className="space"></div>
        </div>
    );
}

export default View;