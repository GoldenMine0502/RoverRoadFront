import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setNowGuiderToken } from '../../../redux/action/guider/guider';

import '../guide.css';
import Profile from '../../image/Profile.png';

let GuiderThumbnail = (props)=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { guiderToken } = useSelector((state)=>({
        guiderToken:state.guider.guiderToken
    }));

    
    let onGuideClick = ()=>{
        dispatch(setNowGuiderToken(props.guideToken));
        navigate("/main/guide/detail");
    }

    return(
        <div className='GuiderThumbnail' onClick={onGuideClick}>
           
            <div className='number-box'>
                <h2>{props.index + 1}</h2>
            </div>
            <div className='image-box'>
                <img src={axios.defaults.baseURL + props.image}/>
            </div>
            <div className='text-box'>
                <h2>{props.name}</h2>
                <div className='text-data-box'>
                    <p>{props.postLen}개의 여행일정</p>
                </div>
            </div>
    
        </div>
    );
}

export default GuiderThumbnail;