import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setGuiderPopup, setGuiderDetailIsFollow , setGuiderDetailFollow } from '../../../../redux/action/guider/guider';
import api from '../../../../api/api';

let GuidePopup = ()=>{
    const dispatch = useDispatch();
    const { guiderToken, follow } = useSelector((state)=>({
        guiderToken:state.guider.guiderToken,
        follow:state.guider.follow
    }));

    let onCancel = async ()=>{
        await api.deleteGuiderFollow(window.localStorage.getItem("userToken"), guiderToken);
        dispatch(setGuiderPopup(false));
        dispatch(setGuiderDetailIsFollow(false));
        dispatch(setGuiderDetailFollow((follow - 1)))
    }

    let onClose = ()=>{
        dispatch(setGuiderPopup(false));
    }
    return(
        <div className="GuidePopup">
            <div className="popup-box">
                <h2>가이더 팔로우를 해제할까요?</h2>
                <p>가이더의 팔로우를 해제하면 가이더만의 새로운 여행 소식을 받아 볼 수 없습니다. 정말로 팔로우 해제하시겠어요?</p>

                <div className="btn-box">
                    <div className="cancel" onClick={onClose}>취소</div>
                    <div className="submit" onClick={onCancel}>팔로우 해제</div>
                </div>
            </div>
        </div>
    );
}

export default GuidePopup;