import React from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import api from "../../../../api/api";

import Delete from '../../../image/guideDelete.svg';

let MyGuideList = (props)=>{
    const navigate = useNavigate();

    let onDelete = async ()=>{
        await api.deleteGuiderFollow(window.localStorage.getItem("userToken"), props.guideToken);
        navigate(0)
    }

    return(
        <div className='MyGuideList'>
           
            <div className='image-box'>
                <img src={axios.defaults.baseURL + props.image}/>
            </div>
            <div className='text-box'>
                <h2>{props.name}</h2>
                <div className='text-data-box'>
                    <p>{props.postLen}개의 여행일정</p>
                    <p className='follow'>/ 팔로우 중</p>
                </div>
            </div>

            <div className="delete-box">
                <img src={Delete} onClick={onDelete}/>
            </div>
        </div>
    );
}

export default MyGuideList;