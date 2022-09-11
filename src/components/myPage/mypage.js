import React from "react";
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'

import './mypage.css';
import Profile from '../image/Profile.png';
import Edit from '../image/edit.svg';
import MypageTravel from '../image/mypageTravel.svg';
import MypageSave from '../image/mypageSave.svg';
import MypageGuider from '../image/mypageGuider.svg';
import MypageSetting from '../image/mypageSetting.svg';

let MyPage = ()=>{
    const navigate = useNavigate();
    const {name, id, image} = useSelector((state)=>({
        name:state.user.name,
        id:state.user.id,
        image:state.user.image
    }));

    let onClickTrip = ()=>{
        navigate("/main/my/trip");
    }

    let onClickGuide = ()=>{
        navigate("/main/my/guide");
    }
    return(
        <div className="MyPage">
            <div className="text-box">
                <h2>좋은 여행되세요,</h2>
                <h2>{name}님!</h2>
            </div>

            <div className="profile-box">
                <img className="profile-image" src={axios.defaults.baseURL + image}/>

                <div className="profile-text-box">
                    <h2>{name}</h2>
                    <p>{id}@gmail.com</p>
                </div>

                <img src={Edit}/>
            </div>

            <div className="mybox mytrip-box" onClick={onClickTrip}>
                <img src={MypageTravel}/>
                <p>내가 다녀온 여행</p>
            </div>

            <div className="mybox mysave-box">
                <img src={MypageSave}/>
                <p>저장한 일정</p>
            </div>

            <div className="mybox myguider-box" onClick={onClickGuide}>
                <img src={MypageGuider}/>
                <p>팔로우 중인 가이더</p>
            </div>

            <div className="mybox mysetting-box">
                <img src={MypageSetting}/>
                <p>환경설정</p>
            </div>
        </div>
    );
}

export default MyPage;