import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Mainpage from './pages/Mainpage/Mainpage';
import Footer from './components/Footer/Footer';

// 페이지 컴포넌트
import Human from './pages/Letterpage/Human';
//import Social from './pages/Letterpage/Social';
//import Nature from './pages/Letterpage/Nature';


// Reacr.lazy를 사용하여 FullscreenMenu를 지연로드
const FullscreenMenu = React.lazy(() => import('./components/FullscreenMenu/FullscreenMenu'));

function App() {
  // 상태 관리: 메뉴 표시 여부와 버튼 숨김 여부
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // 토글 버튼 누르면 메뉴 보이기
  const openMenu = () => {
    setIsMenuVisible(true);
  };

  //메뉴 닫기 
  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  return (
    <Router>
      <div className="app">
        {/* 공통: 네비게이션 바 */}
        <Navbar onMenuClick={openMenu} />

        {/* 메인 페이지 */}


        {/* 페이지 라우팅 설정 */}
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/human" element={<Human />} />

          {/* 추가 페이지 경로를 여기에 추가 */}
        </Routes>

        {/* 필요시-> 풀스크린 메뉴: Suspense로 감싸서 로딩 중 상태처리 */}
        {isMenuVisible && (
          <Suspense fallback={<div>Loading...</div>}>
            <FullscreenMenu onClose={closeMenu} />
          </Suspense>
        )}

        {/* 공통: footer 인스타 주소 */}
        <Footer />
      </div>
    </Router>
  );
}


export default App;