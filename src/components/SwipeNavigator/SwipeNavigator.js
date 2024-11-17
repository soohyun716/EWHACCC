import React, { useState, useContext } from 'react';
import { useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import { TouchContext } from '../../context/TouchContext';
import './SwipeNavigator'
import Mainpage from '../../pages/Mainpage/Mainpage';
import Human from '../../pages/Letterpage/Human';
import Social from '../../pages/Letterpage/Social';
import Nature from '../../pages/Letterpage/Nature';
import Tech from '../../pages/Letterpage/Tech';
import Music from '../../pages/Letterpage/Music';
import Teach from '../../pages/Letterpage/Teach';
import Business from '../../pages/Letterpage/Business';
import Hokma from '../../pages/Letterpage/Hokma';
import Med from '../../pages/Letterpage/Med';


// 다른 페이지도 필요에 따라 임포트하세요

function SwipeNavigator() {
    const navigate = useNavigate();
    const location = useLocation(); // 현재 페이지 경로를 가져옴
    const { isDragging, setIsDragging, startX, setStartX } = useContext(TouchContext); // Context 사용


    // 터치 시작 이벤트 핸들러
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    // 터치 이동 이벤트 핸들러
    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;


        // 스와이프 거리가 일정 기준 이상일 때 페이지 전환
        if (diffX > 170) { // 왼쪽으로 스와이프 (다음 페이지)
            if (location.pathname === '/') {
                navigate('/human');
            } else if (location.pathname === '/human') {
                navigate('/social');
            } else if (location.pathname === '/social') {
                navigate('/nature');
            } else if (location.pathname === '/nature') {
                navigate('/tech');
            } else if (location.pathname === '/tech') {
                navigate('/music');
            } else if (location.pathname === '/music') {
                navigate('/teach');
            } else if (location.pathname === '/teach') {
                navigate('/business');
            } else if (location.pathname === '/business') {
                navigate('/hokma');
            } else if (location.pathname === '/hokma') {
                navigate('/med');
            } else if (location.pathname === '/med') {
                navigate('/');
            }
            setIsDragging(false);
        } else if (diffX < -170) { // 오른쪽으로 스와이프 (이전 페이지)
            if (location.pathname === '/med') {
                navigate('/hokma');
            } else if (location.pathname === '/hokma') {
                navigate('/business');
            } else if (location.pathname === '/business') {
                navigate('/teach');
            } else if (location.pathname === '/teach') {
                navigate('/music');
            } else if (location.pathname === '/music') {
                navigate('/tech');
            } else if (location.pathname === '/tech') {
                navigate('/nature');
            } else if (location.pathname === '/nature') {
                navigate('/social');
            } else if (location.pathname === '/social') {
                navigate('/human');
            } else if (location.pathname === '/human') {
                navigate('/');
            } else if (location.pathname === '/') {
                navigate('/med');
            }
            setIsDragging(false);
        }

    };

    // 터치 끝 이벤트 핸들러
    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="swipe-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <Routes>
                <Route path="/" element={<Mainpage />} />
                <Route path="/human" element={<Human />} />
                <Route path="/social" element={<Social />} />
                <Route path="/nature" element={<Nature />} />
                <Route path="/tech" element={<Tech />} />
                <Route path="/music" element={<Music />} />
                <Route path="/teach" element={<Teach />} />
                <Route path="/business" element={<Business />} />
                <Route path="/hokma" element={<Hokma />} />
                <Route path="/med" element={<Med />} />
                {/* 다른 페이지 라우팅을 추가하세요 */}
            </Routes>
        </div>
    );
}

export default SwipeNavigator;
