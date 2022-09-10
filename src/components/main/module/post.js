import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setNowPostContent, setNowPostImage, setNowPostTitle, setNowPostToken } from '../../../redux/action/post/nowPost';

import PostThumbnail from '../../image/postThumbnail.png';
import Test from '../../image/asdf.jpg';

let PostBox = (props)=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let onPostClick = ()=>{
        dispatch(setNowPostContent(props.content));
        dispatch(setNowPostImage(props.image));
        dispatch(setNowPostTitle(props.tilte))
        dispatch(setNowPostToken(props.postToken));

        navigate("/article")
    }
    return(
        <div className='PostBox' onClick={onPostClick}>
            <div className='text-box'>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>

            <div className='image-box'>
                <img src={axios.defaults.baseURL + props.image}/>
            </div>

        </div>
    );
}

export default PostBox;
