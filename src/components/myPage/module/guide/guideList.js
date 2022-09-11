import React from "react";
import axios from 'axios';
import api from "../../../../api/api";

import Delete from '../../../image/guideDelete.svg';

let MyGuideList = (props)=>{
    
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
                <img src={Delete}/>
            </div>
        </div>
    );
}

export default MyGuideList;