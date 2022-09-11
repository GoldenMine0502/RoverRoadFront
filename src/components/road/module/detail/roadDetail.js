import React, {useEffect} from "react";
import api from "../../../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setRoadDetailCount, setRoadDetailImage, setRoadDetailName, setRoadDetailPlaceURL } from "../../../../redux/action/road/roadDetail";

import Arrow from '../../../image/arrowBack.svg';
import Info from '../../../image/detailHelp.svg';
import Review from '../../../image/detailReview.svg';

import './roadDetail.css';

let RoadDetail = ()=>{
    let { roadToken } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { name, image, count, placeURL} = useSelector((state)=>({
        name:state.road.detailName,
        image:state.road.detailImage,
        count:state.road.detailCount,
        placeURL:state.road.detailPlaceURL
    }));

    useEffect(()=>{
        async function setData(){
            let data = await api.getRoadDetailData(roadToken);
            if(data.status == 200){
                dispatch(setRoadDetailCount(data.data.count));
                dispatch(setRoadDetailImage(data.data.image));
                dispatch(setRoadDetailPlaceURL(data.data.placeURL));
                dispatch(setRoadDetailName(data.data.name));
            }
        }

        setData();
    },[]);

    let onBack = ()=>{
        navigate(-1)
    }

    return(
        <div className="RoadDetail">
            <div className="header">
                <img src={Arrow} onClick={onBack}/>
            </div>

            <div className="title-box">
                <h2>{name}</h2>
                <div className="hashtag-list">
        
                </div>
            </div>

            <img className="image" src={image}/>

            <div className="include-box">
                <h2>⦁ &nbsp;&nbsp;{name}이 포함된 여행동선 보기</h2>
                <p>{count}</p>
            </div>
            <div className="btn-box">
                <div className="show-btn">{name}이 포함된 여행동선 보기</div>
                <div className="user-btn-box">
                    <div className="info-btn">
                        <img src={Info}/>
                        <h2>플레이스 정보</h2>
                    </div>

                    <div className="review-btn">
                        <img src={Review}/>
                        <h2>이용자 리뷰</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoadDetail;