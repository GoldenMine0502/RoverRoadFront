import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import api from '../../../../api/api';
import {useDispatch, useSelector} from 'react-redux';
import { setRoadThumbnail } from "../../../../redux/action/html/html";
import { setCalenderSearch, setCalenderUser } from "../../../../redux/action/search/search";
import { setRoadCalenderListClear } from "../../../../redux/action/road/roadCalender";

import ThumbNail from "../thumbnail";

import Arrow from '../../../image/arrowBack.svg';
import Search from '../../../image/roadThumbnailSearch.svg';
import Edit from '../../../image/edit.svg'
import './roadThumbnail.css';

const { kakao } = window;

let RoadThumbnail = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { calender, text, amount } = useSelector((state)=>({
        calender:state.road.calender,
        text:state.search.calender,
        amount:state.search.calenderUser
    }));

    useEffect(()=>{
        let mapBox = document.getElementById('map');
        let options = {
            center:new kakao.maps.LatLng(37.38871852227143,126.6378025061129),
            level:3
        }

        let map = new kakao.maps.Map(mapBox, options);
        let geocoder = new kakao.maps.services.Geocoder();

        async function setMarker(){
            for(let i in calender){
                geocoder.addressSearch(calender[i].location, function(result, status) {
 
                     if (status === kakao.maps.services.Status.OK) {
                
                        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                
                        let marker = new kakao.maps.Marker({
                            map: map,
                            position: coords
                        });
                
                        map.setCenter(coords);
                        map.setLevel(7);
                    } 
                });    
            }
        }

        setMarker();
        
        dispatch(setCalenderUser("1"));

    }, [])

    let onFocusInput = ()=>{
        navigate("/main/road/add/search");
    }

    let onBack = ()=>{
        navigate("/main/road");
    }

    let onSave = async ()=>{
        await api.saveRoad(window.localStorage.getItem("userToken"), text, amount, calender);
        dispatch(setRoadCalenderListClear());
        navigate("/main/road");
    }

    let onNameChange = (e)=>{
        dispatch(setCalenderSearch(e.target.value));
    }

    let onUserChange = (e)=>{
        dispatch(setCalenderUser(e.target.value));
    }

    return(
        <div className="RoadThumbnail" id="roadThumbnail">
            <div className="header">
                <div className="header-box">
                    <img onClick={onBack} src={Arrow}/>

                    <h2>직접 일정 만들기</h2>

                    <p onClick={onSave}>저장</p>
                </div>

                <div className="search-box">
                    <img src={Search}/>
                    <input type="text" onFocus={onFocusInput} placeholder="장소 검색"/>
                </div>
            </div>

            <div className="map" id="map">

            </div>

            <div className="bottom-bar">
                <div className="input-box">
                    <div className="search-box">
                        <input type="text" onChange={onNameChange} placeholder="여행 일정 이름"/>

                        <img src={Edit}/>
                    </div>

                    <div className="select-box">
                        <select onChange={onUserChange}>
                            <option value="1">인원 1명 추천</option>
                            <option value="2">인원 2명 추천</option>
                            <option value="3">인원 3명 추천</option>
                            <option value="4">인원 4명 추천</option>
                            <option value="5">인원 5명 추천</option>
                            <option value="6">인원 6명 추천</option>
                            <option value="7">인원 7명 추천</option>
                            <option value="8">인원 8명 추천</option>
                        </select>


                        <div className="hashtag-box">
                            <p>해시태그</p>

                            <img src={Edit}/>
                        </div>
                    </div>
                </div>

                <div className="line"></div>

                {calender.map((i, index)=>(<ThumbNail key={index} name={i.name} image={i.image} star={i.star} description={i.description}></ThumbNail>))}
        

                <div className="space"></div>
            </div>
        </div>
    );
}

export default RoadThumbnail;