import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyTripDetail from './tripList';
import api from '../../../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { setMyTrip } from '../../../../redux/action/html/html';

import Arrow from '../../../image/arrowBack.svg'
import './myTrip.css';

let MyTrip = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { myTripList } = useSelector((state)=>({
        myTripList:state.html.myTripList
    }));

    useEffect(()=>{
        async function setList(){
            let data = await api.getMyTrip(window.localStorage.getItem("userToken"));
            if(data.status == 200){
                dispatch(setMyTrip(data.data));
            }
        }

        setList();
    }, []);

    let onBack = ()=>{
        navigate("/main/my");
    }

    return(
        <div className='MyTrip'>
            <div className='image-box'>
                <img src={Arrow} onClick={onBack}/>
            </div>

            <div className='title-box'>
                <h2>내가 다녀온 여행</h2>
            </div>

            {
                myTripList.map((i, index)=>(<MyTripDetail key={index} image={i.thumbnail} title={i.name} subtitle={i.subtitle}></MyTripDetail>))
            }
        </div>
    );
}

export default MyTrip;