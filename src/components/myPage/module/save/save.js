import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMySave } from '../../../../redux/action/html/html';
import api from '../../../../api/api';
import SaveList from './saveList';

import Arrow from '../../../image/arrowBack.svg'
import './save.css';

let MySave = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { saveList } = useSelector((state)=>({
        saveList:state.html.mySaveList
    }));

    useEffect(()=>{
        async function setList(){
            let data = await api.getSaveList(window.localStorage.getItem("userToken"));
            if(data.status == 200){
                dispatch(setMySave(data.data));
            }
        }

        setList();
    },[]);
    
    let onBack = ()=>{
        navigate("/main/my");
    }
    return(
        <div className='MySave'>
            <div className='image-box'>
                <img src={Arrow} onClick={onBack}/>
            </div>

            <div className='title-box'>
                <h2>내가 저장한 여행</h2>
            </div>

            {saveList.map((i, index)=>(<SaveList key={index} image={i.thumbnail} title={i.name} subtitle={i.subtitle}></SaveList>))}
        </div>
    );
}

export default MySave;