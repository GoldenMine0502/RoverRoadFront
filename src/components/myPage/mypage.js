import React from "react";

import './mypage.css';
import Profile from '../image/Profile.png';
import Edit from '../image/edit.svg';
import MypageTravel from '../image/mypageTravel.svg';
import MypageSave from '../image/mypageSave.svg';
import MypageGuider from '../image/mypageGuider.svg';
import MypageSetting from '../image/mypageSetting.svg';

let MyPage = ()=>{
    return(
        <div className="MyPage">
            <div className="text-box">
                <h2>좋은 여행되세요,</h2>
                <h2>김민지님!</h2>
            </div>

            <div className="profile-box">
                <img className="profile-image" src={Profile}/>

                <div className="profile-text-box">
                    <h2>김민지</h2>
                    <p>minji@email.com</p>
                </div>

                <img src={Edit}/>
            </div>

            <div className="mybox mytrip-box">
                <img src={MypageTravel}/>
                <p>내가 다녀온 여행</p>
            </div>

            <div className="mybox mysave-box">
                <img src={MypageSave}/>
                <p>저장한 일정</p>
            </div>

            <div className="mybox myguider-box">
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