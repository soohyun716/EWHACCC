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
        const routes = [
            '/',
            '/human',
            '/social',
            '/nature',
            '/tech',
            '/music',
            '/teach',
            '/business',
            '/hokma',
            '/med',
          ];
          
          const handleSwipe = (diffX) => {
            const currentIndex = routes.indexOf(location.pathname);
          
            if (diffX > 170) { // 왼쪽으로 스와이프 (다음 페이지)
              const nextIndex = (currentIndex + 1) % routes.length;
              navigate(routes[nextIndex]);
            } else if (diffX < -170) { // 오른쪽으로 스와이프 (이전 페이지)
              const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
              navigate(routes[prevIndex]);
            }
            
            setIsDragging(false);
          };
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
