import React from 'react';
import './FullscreenMenu.css';

function FullscreenMenu({ onClose }) {
    return (
        <div className="fullscreen-menu" id="fullscreenMenu">
            <button className="close-btn" onClick={onClose} id="closeBtn">
                &times;
            </button>
            <div className="fullscreen-menu-title">
                <p>EWHA<br />Campus Crusade for Christ<br /><br />단과대별 선배들 편지 읽어보기</p>
            </div>
            <div className="fullscreen-menu-list">
                <a href="/">HOME</a>
                <a href="/human.html">인문과학대학</a>
                <a href="/social.html">사회과학대학</a>
                <a href="/nature.html">자연과학대학</a>
                <a href="/tech.html">공과/인공지능대학</a>
                <a href="/music.html">음악/조형예술대학</a>
                <a href="/teach.html">사범대학</a>
                <a href="/manage.html">경영/신산업융합대학</a>
                <a href="/hokma.html">호크마교양대학</a>
                <a href="/med.html">약학/스크랜튼대학</a>
            </div >
        </div >

    );
}

export default FullscreenMenu;