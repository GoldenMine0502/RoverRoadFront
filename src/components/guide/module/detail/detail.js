import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../../api/api';
import { setGuiderDetailFollow, setGuiderDetailFollowing, setGuiderDetailImage, setGuiderDetailIsFollow, setGuiderDetailName, setGuiderPopup } from '../../../../redux/action/guider/guider';
import { setGuiderDetailList } from '../../../../redux/action/html/html';
import axios from 'axios';

import TripDetail from '../tripDetail';
import GuidePopup from './popup';

import './detail.css';
import Arrow from '../../../image/arrowBack.svg';
import Profile from '../../../image/Profile.png';

let GuideDetail = ()=>{
    const dispatch = useDispatch();
    const { guiderToken, name, image, follow, following, isFollow, guiderDetailList, isPopup } = useSelector((state)=>({
        guiderToken:state.guider.guiderToken,
        name:state.guider.name,
        image:state.guider.image,
        follow:state.guider.follow,
        following:state.guider.following,
        isFollow:state.guider.isFollow,
        guiderDetailList:state.html.guiderDetailList,
        isPopup:state.guider.isPopup
    }));

    
    useEffect(()=>{
        async function setGuider(){
            let data = await api.getGuiderDetail(guiderToken); 
            if(data.status == 200){
                dispatch(setGuiderDetailImage(data.data.guideData[0].profileImage));
                dispatch(setGuiderDetailName(data.data.guideData[0].name));         
                dispatch(setGuiderDetailFollow(data.data.guideFollower.length));
                dispatch(setGuiderDetailFollowing(data.data.guideFollwing.length));
                dispatch(setGuiderDetailList(data.data.roadList));
                console.log(data.data.roadList[0])
            }
        }

        async function checkIsFollow(){
            let data = await api.getGuiderIsFollow(window.localStorage.getItem("userToken"), guiderToken);
            if(data.status == 200){
                dispatch(setGuiderDetailIsFollow(data.data));
            }
        }
        checkIsFollow();
        setGuider();
    },[guiderToken]);

    let onPopupClick = ()=>{
        dispatch(setGuiderPopup(true));
    }

    let onClickFollow = async ()=>{
        await api.setGuiderFollow(window.localStorage.getItem("userToken"), guiderToken);
        dispatch(setGuiderDetailIsFollow(true));
        dispatch(setGuiderDetailFollow((follow + 1)));
    }

    return(
        <div className='GuideDetail'>
            <div className='arrow-box'>
                <Link to="/main/guide">
                    <img src={Arrow}/>
                </Link>
            </div>

            <div className='guide-box'>
                <h2>{name}</h2>
                <div className='data-box'>
                    <img src={axios.defaults.baseURL + image}/>

                    <div className='number-box'>
                        <p>팔로우</p>
                        <h2>{follow}</h2>
                    </div>
                    
                    <div className='number-box'>
                        <p>팔로잉</p>
                        <h2>{following}</h2>
                    </div>

                    {isFollow && <div className='follow-btn' onClick={onPopupClick}>팔로우 중</div>}
                    {!isFollow && <div className='none-follow-btn' onClick={onClickFollow}>팔로우 하기</div>}
                </div>
            </div>

            <p className='guide-text'>가이드가 제작한 일정</p>

            
            {guiderDetailList.map((i, index)=>(<TripDetail key={index} image={i.thumbnail} title={i.name} subtitle={i.subtitle} makeRoadToken={i.makeRoadToken}></TripDetail>))}
            {isPopup && <GuidePopup></GuidePopup>}
        </div>
    );
}

export default GuideDetail;