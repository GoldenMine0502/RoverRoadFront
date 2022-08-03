import React from 'react';
import { Link } from 'react-router-dom';

import TripThumbnail from './module/tripThumbnail'

import './road.css';
import AppBar from '../image/appBar.svg';

let Road = ()=>{
    return(
        <div className='Road'>
            <div className='app-bar'>
                <Link to="/main/road">
                    <img src={AppBar}/>
                </Link>
            </div> 

            <div className='title-box'>
                <h2>일정 만들기</h2>
            </div>
            
            <div className='subtitle-box'>
                <p>직접 제작한 여행</p>
            </div>

            <TripThumbnail/>
            <TripThumbnail/>
            <TripThumbnail/>
            <TripThumbnail/>

            <div className='subtitle-box'>
                <p>자동으로 기록된 여행</p>
            </div>

            <TripThumbnail/>
            <TripThumbnail/>
            <TripThumbnail/>
            <TripThumbnail/>

            <div className='space'></div>
        </div>
    );
}

export default Road;