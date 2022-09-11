import React, {useEffect} from 'react';
import api from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { setTravelList } from '../../redux/action/html/html';

import TravelList from './module/travelList';

import './travel.css';

let Travel = ()=>{
    const dispatch = useDispatch();
    const { travelList } = useSelector((state)=>({
        travelList:state.html.travelList
    }));

    useEffect(()=>{
        async function setList(){
            let data = await api.getTravelList();
            if(data.status == 200){
                dispatch(setTravelList(data.data));
            }
        }

        setList();
    },[]);
    return(
        <div className='Travel'>
            <div className='text-box'>
                <h2>트레블 타입</h2>
            </div>
            <div className='tag-box'>
                <div className='find'>여행 찾기</div>
                <div className='line'></div>
                <select>
                    <option>대한민국/송도</option>
                </select>
            </div>

            {
                travelList.map((i, index)=>(<TravelList key={index} index={index} name={i.name} thumbnail={i.thumbnail} amount={i.amount} makeRoadToken={i.makeRoadToken}></TravelList>))
            }
        </div>
    );
}

export default Travel;