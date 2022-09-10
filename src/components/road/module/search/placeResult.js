import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../../../../api/api";
import { setRoadThumbnail } from "../../../../redux/action/html/html";

import Arrow from '../../../image/arrowBack.svg';
import RoadClose from '../../../image/roadClose.svg';

let SearchPlaceResult = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { roadSearch } = useSelector((state)=>({
        roadSearch:state.search.road
    }));

    let onBack = ()=>{
        navigate("/main/road/list");
    }

    let onClose = ()=>{
        navigate("/main/road/add/search");
    }
    

    useEffect(()=>{
        async function getSearchList(){
            let data = await api.getRoadSearchList(roadSearch);
            if(data.status == 200){
                dispatch(setRoadThumbnail(data.data))
            }
        }

        getSearchList();
    },[]);

    return(
        <div className="Search-bar">
            <img onClick={onBack} src={Arrow}/>

            <h2>{roadSearch}</h2>

            <img onClick={onClose} src={RoadClose}/>
        </div>
    );
}

export default SearchPlaceResult;
