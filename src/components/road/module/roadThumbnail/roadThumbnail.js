import React, { useEffect } from "react";

import ThumbNail from "../thumbnail";

import Arrow from '../../../image/arrowBack.svg';
import Search from '../../../image/roadThumbnailSearch.svg';
import Edit from '../../../image/edit.svg'
import './roadThumbnail.css';

const { kakao } = window;

let RoadThumbnail = ()=>{
    useEffect(()=>{
        let mapBox = document.getElementById('map');
        let options = {
            center:new kakao.maps.LatLng(37.4049946,126.6280212),
            level:3
        }

        let map = new kakao.maps.Map(mapBox, options);
        
    }, [])
    return(
        <div className="RoadThumbnail">
            <div className="header">
                <div className="header-box">
                    <img src={Arrow}/>

                    <h2>직접 일정 만들기</h2>

                    <p>저장</p>
                </div>

                <div className="search-box">
                    <img src={Search}/>
                    <input type="text" placeholder="장소 검색"/>
                </div>
            </div>

            <div className="map" id="map">

            </div>

            <div className="bottom-bar">
                <div className="input-box">
                    <div className="search-box">
                        <input type="text" placeholder="여행 일정 이름"/>

                        <img src={Edit}/>
                    </div>

                    <div className="select-box">
                        <select>
                            <option>인원 4명 추천</option>
                        </select>


                        <div className="hashtag-box">
                            <p>해시태그</p>

                            <img src={Edit}/>
                        </div>
                    </div>
                </div>

                <div className="line"></div>

                <ThumbNail></ThumbNail>
                <ThumbNail></ThumbNail>
                <ThumbNail></ThumbNail>

                <div className="space"></div>
            </div>
        </div>
    );
}

export default RoadThumbnail;