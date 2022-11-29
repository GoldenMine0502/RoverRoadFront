import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {setId, setPassword} from "../../redux/action/auth/auth";
import api from "../../api/api";
import Arrow from "../image/arrowBack.svg";
import Logo from "../image/logo.svg";
import React from "react";

let Personal = ()=>{
    return(
        <div>
            로버로드 개인정보처리방침<br />
            로버로드(이하 “회사”)은 이용자의 ‘동의를 기반으로 개인정보를 수집·이용 및 제공’ 하고 있으며, ‘이용자의 권리(개인정보 자기결정권)를 적극적으로 보장’ 하며, 대한민국의 개인정보보호 규정 및 가이드라인을 준수하고 있습니다.<br />
            <br />
            1. 처리하는 개인정보 항목<br />
            필수항목<br />
            아이디, 이름, 나이, 비밀번호<br />
            <br />
            선택항목<br />
            프로필 사진<br />
            <br />
            2. 개인정보의 처리목적<br />
            본인의 하루나 여행 일정을 ‘자동으로 편리하게’ 기록하는 앨범 일기장. 앨범 일기장이라는 형식으로, 기존의 일기장보다 직관적으로 일기를 기록하고 활용할 수 있습니다. 원활한 일기장 작성 기록과 프로필 기록을 위하여 개인정보를 수집합니다.<br />
            <br />
            3. 개인정보의 처리 및 보유기간<br />
            모든 개인정보는 회원 가입 동안 저장되며, 회원 탈퇴시 6개월 내 파기됩니다.<br />
        </div>
    );
}

export default Personal;