import React, { useEffect } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import api from '../../../../api/api';
import {useDispatch, useSelector} from 'react-redux';
import { setTravelAmount, setTravelName } from "../../../../redux/action/travel/travel";
import { setTravelDetailList } from "../../../../redux/action/html/html";
import DetailList from "./detailList";

import Arrow from '../../../image/arrowBack.svg';
import Search from '../../../image/roadThumbnailSearch.svg';
import Edit from '../../../image/edit.svg'
import './detail.css';

const { kakao } = window;

let TravelDetail = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { travelDetailList, name, amount } = useSelector((state)=>({
        travelDetailList:state.html.travelDetailList,
        name:state.travel.name,
        amount:state.travel.amount
    }));

    let { roadToken } = useParams();

    useEffect(()=>{
        async function setList(){
            let data = await api.getRoadData(roadToken);
            if(data.status == 200){
                dispatch(setTravelDetailList(data.data));
            }
        }

        setList();
        
        async function setData(){
            let data = await api.getRoadThumbnailData(roadToken);
            if(data.status == 200){
                dispatch(setTravelName(data.data.name));
                dispatch(setTravelAmount(data.data.amount));
            }
        }

        setData();

        let mapBox = document.getElementById('map');
        let options = {
            center:new kakao.maps.LatLng(37.38871852227143,126.6378025061129),
            level:6
        }

        let map = new kakao.maps.Map(mapBox, options);
        let geocoder = new kakao.maps.services.Geocoder();

        async function setMarker(){
            let linePath = new Array();
            for(let i in travelDetailList){
                geocoder.addressSearch(travelDetailList[i].location, function(result, status) {
 
                     if (status === kakao.maps.services.Status.OK) {
                
                        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                        linePath.push(new kakao.maps.LatLng(result[0].y, result[0].x));
                
                        let marker = new kakao.maps.Marker({
                            map: map,
                            position: coords
                        });
                
                        map.setCenter(coords);
                        map.setLevel(6);
                    } 
                });    
            }
            console.log(linePath)
            let polyline = new kakao.maps.Polyline({
                path: linePath, // 선을 구성하는 좌표배열 입니다
                strokeWeight: 2, // 선의 두께 입니다
                strokeColor: '#0084FE', // 선의 색깔입니다
                strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle: 'dashed' // 선의 스타일입니다
            });
            polyline.setMap(map)
        }

        setMarker();
    }, [name])

    let onBack = ()=>{
        navigate(-1)
    }

    let onSave = async ()=>{
        await api.saveTravel(window.localStorage.getItem("userToken"), roadToken);
        navigate("/main/map")
    }

    return(
        <div className="TravelDetail" id="roadView">
            <div className="header">
                <div className="header-box">
                    <img onClick={onBack} src={Arrow}/>

                    <h2>일정 확인하기</h2>

                    <p onClick={onSave}>저장</p>
                </div>

            </div>

            <div className="map" id="map">

            </div>

            <div className="bottom-bar">
                <div className="input-box">
                    <div className="search-box">
                        <h2>{name}</h2>
                    </div>

                    <div className="select-box">
                       <p>적정 인원 {amount}명</p>

                    </div>
                </div>

                <div className="line"></div>

                {travelDetailList.map((i, index)=>(<DetailList key={index} name={i.name} image={i.image} star={i.star} description={i.description} roadToken={i.roadToken}></DetailList>))}
        

                <div className="space"></div>
            </div>
        </div>
    );
}

export default TravelDetail;