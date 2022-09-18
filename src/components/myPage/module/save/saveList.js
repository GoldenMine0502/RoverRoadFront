import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../api/api";

import Delete from '../../../image/roadDelete.svg';

let SaveList = (props)=>{
    const navigate = useNavigate();
    
    let onListClick = ()=>{
        navigate("/main/map/detail/"+ props.makeRoadToken)
    }

    let onDelete = async ()=>{
        await api.deleteSave(window.localStorage.getItem("userToken"), props.makeRoadToken);
        navigate(0)
    }
    return(
        <div className="SaveList">
            <img src={props.image}/>
            <div className="text-box" onClick={onListClick}>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>

            <div className="delete-box">
                <img src={Delete} onClick={onDelete}/>
            </div>
        </div>
    );
}

export default SaveList;