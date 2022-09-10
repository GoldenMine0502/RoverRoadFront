import React from 'react';

import TravelList from './module/travelList';

import './travel.css';

let Travel = ()=>{
    return(
        <div className='Travel'>
            <div className='text-box'>
                <h2>트레블 타입</h2>
            </div>
            <div className='tag-box'>
                <div className='find'>여행 찾기</div>
                <div className='line'></div>
                <select>
                    
                </select>
            </div>

            <TravelList/>
        </div>
    );
}

export default Travel;