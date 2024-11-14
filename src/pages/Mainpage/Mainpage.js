import React from 'react';
import './Mainpage.css';

function Mainpage() {
    return (
        <div className="mainpage">
            {/* 메인이미지 슬라이더 */}
            <div className="main-slider-container">
                <div className="main-slide">
                    <img src="/image/main1.png" alt="Slide 1" />
                </div>
                <div className="main-slide">
                    <img src="/image/main2.png" alt="Slide 2" />
                </div>
            </div>

            {/* 사이트 소개 */}
            <div className="start">
                <h2>이화CCC에서 보낸</h2>
                <h2>25학번 예비 새내기를 위한 응원편지가 도착했어요!</h2>

                {/* 편지 사진 슬라이드 */}
                <div className="letter-slider-container">
                    <div className="letter-slider">
                        <div className="letter-slide">
                            <a href="hokma.html"><img src="/image/hokma1.png" alt="Letter 1" /></a>
                            <a href="teach.html"><img src="/image/teach1.png" alt="Letter 2" /></a>
                            <a href="teach.html"><img src="/image/teach2.png" alt="Letter 3" /></a>
                            <a href="teach.html"><img src="/image/teach3.png" alt="Letter 4" /></a>
                            <a href="human.html"><img src="/image/human1.png" alt="Letter 5" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mainpage;