import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { setRoadPopup } from '../../redux/action/popup/popup';
import { setAutoCreate, setSaveRoad } from '../../redux/action/road/roadThumbnail';
import api from '../../api/api';

import TripThumbnail from './module/tripThumbnail';
import AddRoad from './module/addRoad';

import './road.css';
import AppBar from '../image/appBar.svg';

let Road = ()=>{
    const dispatch = useDispatch();
    const { roadPopup, saveRoadList, autoCreateList } = useSelector((state)=>({
        roadPopup:state.popup.roadPopup,
        saveRoadList:state.road.saveRoad,
        autoCreateList:state.road.autoCreate
    }));
    
    let onAddRoad = ()=>{
        dispatch(setRoadPopup(true));
    }


    useEffect(()=>{
        async function setThumbnail(){
            let data = await api.getUserRoad(window.localStorage.getItem("userToken"));
            console.log(data);
            if(data.status == 200){
                dispatch(setAutoCreate(data.data.autoCreateData));
                dispatch(setSaveRoad(data.data.saveRoadData))
            }
            else if(data == true){

            }
        }

        setThumbnail();
    },[])

    return(
        <div className='Road'>
            <div className='app-bar'>
            
                <img src={AppBar} onClick={onAddRoad}/>
            
            </div> 

            <div className='title-box'>
                <h2>일정 만들기</h2>
            </div>
            
            <div className='subtitle-box'>
                <p>직접 제작한 여행</p>
            </div>

            {saveRoadList.map((i, index)=>(<TripThumbnail key={index} title={i.name} subtitle={i.subtitle} image={i.thumbnail} roadToken={i.makeRoadToken} ></TripThumbnail>))}

            <div className='subtitle-box'>
                <p>자동으로 기록된 여행</p>
            </div>

            {autoCreateList.map((i, index)=>(<TripThumbnail key={index}></TripThumbnail>))}

            <div className='space'></div>
            {roadPopup && 
                <AddRoad></AddRoad>
            }
        </div>
    );
}

export default Road;