import React from 'react';
import { Link } from 'react-router-dom';

import TripDetail from '../tripDetail';
import GuidePopup from './popup';

import './detail.css';
import Arrow from '../../../image/arrowBack.svg';
import Profile from '../../../image/Profile.png';

let GuideDetail = ()=>{
    const setPopup = ()=>{

    }

    return(
        <div className='GuideDetail'>
            <div className='arrow-box'>
                <Link to="/main/guide">
                    <img src={Arrow}/>
                </Link>
            </div>

            <div className='guide-box'>
                <h2>일장훈</h2>
                <div className='data-box'>
                    <img src={Profile}/>

                    <div className='number-box'>
                        <p>팔로우</p>
                        <h2>23k</h2>
                    </div>
                    
                    <div className='number-box'>
                        <p>팔로잉</p>
                        <h2>23k</h2>
                    </div>

                    <div className='follow-btn'>팔로우 중</div>
                </div>
            </div>

            <p className='guide-text'>가이드가 제작한 일정</p>

            <TripDetail></TripDetail>
            <TripDetail></TripDetail>

            {/* <GuidePopup></GuidePopup> */}
        </div>
    );
}

export default GuideDetail;