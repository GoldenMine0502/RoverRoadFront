import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../api/api';
import { setGuiderList } from '../../redux/action/html/html';

import GuiderThumbnail from './module/guiderThumbnail';

import './guide.css';

let Guide = ()=>{
    const dispatch = useDispatch();
    const { guideList } = useSelector((state)=>({
        guideList:state.html.guiderList
    }));

    useEffect(()=>{
        async function setList(){
            let data = await api.getGuider();
            if(data.status == 200){
                dispatch(setGuiderList(data.data));
            }
            console.log(data);
        }

        setList();
    }, []);
    return(
        <div className='Guide'>
            <div className='title-box'>
                <h2>가이더</h2>
            </div>

            <div className='select-box'>
                <select>
                    <option>팔로워 많은 순</option>
                    <option>여행일정 많은 순</option>
                </select>

                <select>
                    <option>이 지역 가이드</option>
                    <option>전체 지역 가이드</option>
                </select>
            </div>

            {
                guideList.map((i, index)=>(<GuiderThumbnail key={index} index={index} postLen={i.postLen} location={i.location} name={i.name} image={i.profileImage} guideToken={i.userToken}></GuiderThumbnail>))
            }
            
        </div>
    );
}

export default Guide;