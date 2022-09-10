import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { setRoadThumbnail } from "../../../../redux/action/html/html";
import { setRoadSearch } from "../../../../redux/action/search/search";

import Arrow from '../../../image/arrowBack.svg';
import RoadSearch from '../../../image/roadSearch.svg';


let SearchPlace = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { roadSearch } = useSelector((state)=>({
        roadSearch:state.search.road
    }));

    let onBack = ()=>{
        navigate("/main/road/list");
    }

    let onSearchSubmit = ()=>{
        navigate("/main/road/add/search/result");
    }

    let onSearchChange = (e)=>{
        dispatch(setRoadSearch(e.target.value));
    }

    useEffect(()=>{
        async function setList(){
            let data = await api.getRoadList();
            if(data.status == 200){
                dispatch(setRoadThumbnail(data.data));
            }
        }
        setList();
    },[])

    return(
        <div className="Search-bar">
            <img src={Arrow} onClick={onBack}/>

            <input type="text" onChange={onSearchChange} placeholder="장소 검색"/>

            <img src={RoadSearch} onClick={onSearchSubmit}/>
        </div>
    );
}

export default SearchPlace;
