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
                <p>From. 이화여대CCC</p>
                <p>25학번 예비 새내기를 위한<br />응원편지가 도착했어요!</p>

                <div className="guide">
                    {/* <p>&lt;--  단과대별 선배들 편지 더보기 (좌우 쓸어넘기기)  --&gt;</p> */}
                </div>
                {/* 편지 사진 슬라이드 */}
                <LetterSlider />

            </div>
        </div >
    );
}

export default Mainpage;