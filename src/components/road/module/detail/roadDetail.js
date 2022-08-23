import React from "react";

import Arrow from '../../../image/arrowBack.svg';
import Image from '../../../image/roadDetailImage.png';
import Info from '../../../image/detailHelp.svg';
import Review from '../../../image/detailReview.svg';

import './roadDetail.css';

let RoadDetail = ()=>{
    return(
        <div className="RoadDetail">
            <div className="header">
                <img src={Arrow}/>
            </div>

            <div className="title-box">
                <h2>기억식당</h2>
                <div className="hashtag-list">
                    <p>#제육맛집</p>
                    <p>#제육맛집</p>
                    <p>#제육맛집</p>
                    <p>#제육맛집</p>
                    <p>#제육맛집</p>
                    <p>#제육맛집</p>
                    <p>#제육맛집</p>
                </div>
            </div>

            <img className="image" src={Image}/>

            <div className="include-box">
                <h2>⦁ &nbsp;&nbsp;기억식당이 포함된 여행동선 보기</h2>
                <p>137</p>
            </div>
            <div className="btn-box">
                <div className="show-btn">기억식당이 포함된 여행동선 보기</div>
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