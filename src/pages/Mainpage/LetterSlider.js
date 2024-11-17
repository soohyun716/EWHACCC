import React, { useRef, useState, useContext } from 'react';
import { TouchContext } from '../../context/TouchContext'; 
import './LetterSlider.css'; 

function LetterSlider() {
  const { isDragging, setIsDragging, startX, setStartX, scrollLeft, setScrollLeft } = useContext(TouchContext); // Context 사용
  const sliderRef = useRef(null);


  // 터치 시작 이벤트 핸들러
  const handleTouchStart = (e) => {
    const slider = sliderRef.current;
    setIsDragging(true);
    setStartX(e.touches[0].clientY - slider.offsetTop);
    setScrollLeft(slider.scrollTop);
  };

  // 터치 이동 이벤트 핸들러
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const slider = sliderRef.current;
    const y = e.touches[0].clientY - slider.offsetTop;
    const walk = (y - startX) * 2; // 터치 이동에 따라 스크롤 속도를 설정
    slider.scrollTop = scrollLeft - walk;
  };

  // 터치 끝 이벤트 핸들러
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="letter-slider"
      ref={sliderRef}
      style={{ overflowY: 'scroll', display: 'flex', flexDirection: 'column', scrollbarWidth: 'none' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {['/image/hokma1.png', '/image/human1.png', '/image/teach1.png', '/image/teach2.png', '/image/teach3.png'].map(
        (slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="letter-slide"
            style={{ width: '100%', flexShrink: 0 }} // 이미지 너비는 원하는 크기로 설정
          />
        )
      )}
    </div>
  );
}

export default LetterSlider;
