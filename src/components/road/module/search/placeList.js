import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setRoadCalenderList } from "../../../../redux/action/road/roadCalender";
import { useNavigate } from 'react-router-dom'
let PlaceList = (props)=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { roadList } = useSelector((state)=>({
        roadList:state.html.roadThumbnail
    }));

    let onSubmit = ()=>{
        dispatch(setRoadCalenderList(roadList[props.index]));
        navigate("/main/road/list");
    }
    
    return(
        <div className="PlaceList" onClick={onSubmit}>
            <img className="thumbnail-image" src={props.image}/>

            <div className="data-box">

                <div className="title-box">
                    <h2>{props.name}</h2>

                    <p>★ {props.star}</p>
                </div>

                <div className="text-box">
                    <h2>{props.description}</h2>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    );
}

export default PlaceList;