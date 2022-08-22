import React from 'react';
import { Link } from 'react-router-dom';

import PostThumbnail from '../../image/postThumbnail.png';
import Test from '../../image/asdf.jpg';

let PostBox = ()=>{
    return(
        <div className='PostBox'>
            <Link to="/article">
                <div className='text-box'>
                    <h2>지금 바로 떠나자. <br/>인기 휴양지 총집합</h2>
                    <p>다시는 없을 2022년 여름 휴가! 어디로 가는 것이 가장 좋을까요?</p>
                </div>

                <div className='image-box'>
                    <img src={Test}/>
                </div>
            </Link>
        </div>
    );
}

export default PostBox;
