import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import './article.css'
import Arrow from '../image/arrowBack.svg';
import PostThumbnail from '../image/postThumbnail.png';

let Article = ()=>{
    const { title, content, image } = useSelector((state)=>({
        title:state.post.title,
        content:state.post.content,
        image:state.post.image
    }));
    return(
        <div className="Article">
            <div className="arrow-box">
                <Link to="/main/post"><img src={Arrow}/></Link>
            </div>

            <div className="title-box">
                <h2>{title}</h2>
            </div>

            <img src={axios.defaults.baseURL + image}></img>

            <p>{content}</p>

            <div className="space"></div>
        </div>
    );
}

export default Article;