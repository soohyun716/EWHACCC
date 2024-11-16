import React, { useState } from 'react';
import './LetterSlider.css'; // 슬라이드 스타일을 정의하는 CSS 파일

function LetterSlider() {
  const [mainIndex, setMainIndex] = useState(0);
  const slides = [
    '/image/hokma1.png',
    '/image/human1.png',
    '/image/teach1.png',
    '/image/teach2.png',
    '/image/teach3.png',

  ];

  // 터치 이벤트 관련 상태
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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

    // 슬라이드를 넘기는 기준 설정
    if (diffX > 50) { // 왼쪽으로 스와이프
      setMainIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsDragging(false);
    } else if (diffX < -50) { // 오른쪽으로 스와이프
      setMainIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
      setIsDragging(false);
    }
  };

  // 터치 끝 이벤트 핸들러
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="letter-slider"
      style={{ overflow: 'hidden', width: '100%' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="letter-slides-container"
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(${-mainIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="letter-slide"
            style={{ width: '100%', flexShrink: 0 }}
          />
        ))}
      </div>
    </div>
  );
}

export default LetterSlider;