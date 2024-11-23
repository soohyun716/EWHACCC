import React from 'react';
import LetterTitle from '../../components/Title/LetterTitle';
import './Letter.css';

function Music() {
    return (
        <div>
            {/* 공통 타이틀 */}
            <LetterTitle />

            {/* 단과대별 다른 타이틀 */}
            <div className="uni_name"> 음악/조형예술대학 선배의 손편지 </div>

            {/* 편지 사진 갤러리 */}
            <section className="gallery">
                <div id="uni_human" className="photo-set">
                    <img src="/image/music1.png" alt="편지사진" />

                </div>
            </section >
        </div >
    );
}

export default Music;