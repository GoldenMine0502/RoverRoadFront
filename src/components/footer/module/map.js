import React from 'react';
import {Link} from 'react-router-dom';

import Post from '../../image/post.svg';
import Road from '../../image/road.svg';
import Guide from '../../image/guide.svg';
import MapBlue from '../../image/mapBlue.svg';
import Profile from '../../image/Profile.png';

let TravelModule = ()=>{
    return(
        <div className='PostModule'>
            <Link to="/main/post">
                <div className="content">
                    <img src={Post}/>
                    <p>저널</p>
                </div>
            </Link>
            <Link to="/main/road">
                <div className="content">
                    <img src={Road}/>
                    <p>일정 생성</p>
                </div>
            </Link>
            <Link to="/main/guide">
                <div className="content">
                    <img src={Guide}/>
                    <p>가이더</p>
                </div>
            </Link>
            <Link to="/main/map">
                <div className="content blue">
                    <img src={MapBlue}/>
                    <p>트레블 타입</p>
                </div>
            </Link>
            <Link to="/main/my">
                <div className="content">
                    <img className="profile" src={Profile}/>
                    <p>MY</p>
                </div>
            </Link>
        </div>
    );
}

export default TravelModule;