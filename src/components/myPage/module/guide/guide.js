import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { setMyGuide } from '../../../../redux/action/html/html';
import MyGuideList from './guideList';

import Arrow from '../../../image/arrowBack.svg'

import './guide.css';

let MyGuide = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { guideList } = useSelector((state)=>({
        guideList:state.html.myGuideList
    }));

    useEffect(()=>{
        async function setList(){
            let data = await api.getMyGuide(window.localStorage.getItem("userToken"));
            if(data.status == 200){
                dispatch(setMyGuide(data.data));
            }
        }

        setList();
    },[])

    let onBack = ()=>{
        navigate("/main/my");
    }
    return(
        <div className='MyGuide'>
            <div className='img-box'>
                <img src={Arrow} onClick={onBack} />
            </div>

            <div className='title-box'>
                <h2>팔로우중인 가이더</h2>
            </div>

            {
                guideList.map((i, index)=>(<MyGuideList key={index} name={i.name} image={i.profileImage} postLen={i.postLen} ></MyGuideList>))
            }
        </div>
    );
}

export default MyGuide;