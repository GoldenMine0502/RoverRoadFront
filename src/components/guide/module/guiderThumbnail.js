import React from 'react';
import { Link } from 'react-router-dom';

import '../guide.css';
import Profile from '../../image/Profile.png';

let GuiderThumbnail = ()=>{
    return(
        <div className='GuiderThumbnail'>
           <Link to="/main/guide/detail">
                <div className='number-box'>
                    <h2>1</h2>
                </div>
                <div className='image-box'>
                    <img src={Profile}/>
                </div>
                <div className='text-box'>
                    <h2>일장훈</h2>
                    <div className='text-data-box'>
                        <p>123개의 여행일정</p>
                        <p className='follow'>/ 팔로우 중</p>
                    </div>
                </div>
           </Link>
        </div>
    );
}

export default GuiderThumbnail;