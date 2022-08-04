import React from 'react';
import { Link } from 'react-router-dom';

import GuiderThumbnail from './module/guiderThumbnail';

import './guide.css';

let Guide = ()=>{
    return(
        <div className='Guide'>
            <div className='title-box'>
                <h2>가이더</h2>
            </div>

            <div className='select-box'>
                <select>
                    <option>팔로워 많은 순</option>
                    <option>여행일정 많은 순</option>
                </select>

                <select>
                    <option>이 지역 가이드</option>
                    <option>전체 지역 가이드</option>
                </select>
            </div>

            <GuiderThumbnail></GuiderThumbnail>
            
        </div>
    );
}

export default Guide;