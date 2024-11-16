import React from 'react';
import MainSlider from './MainSlider';
import LetterSlider from './LetterSlider';
import './Mainpage.css';

function Mainpage() {
    return (
        <div className="mainpage">
            {/* 메인이미지 슬라이더 */}
            <MainSlider />

            {/* 사이트 소개 */}
            <div className="start">
                <h2>이화CCC에서 보낸</h2>
                <h2>25학번 예비 새내기를 위한 응원편지가 도착했어요!</h2>

                {/* 편지 사진 슬라이드 */}
                <LetterSlider />
            </div>
        </div>
    );
}

export default Mainpage;