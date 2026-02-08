# 💚 EWHACCC 💚

수험생을 위한 **응원/위로 편지 웹사이트** 프로젝트입니다.  
React 기반으로 제작되었으며 Vercel을 통해 배포했습니다.

<br/>

## 🛠️ 개발 Tool 

- **Frontend**: HTML, CSS, JavaScript  
- **Library**: React  
- **DevOps**: Vercel  

<br/>

## 📌 프로젝트 소개 

React를 이용하여 **학교에 논술 시험을 보러 온 수험생**을 위한 재학생들의 **응원 / 위로 편지**를 담은 웹사이트를 제작했습니다 

- 소속된 동아리로부터 웹사이트 제작을 의뢰받음  
- 동아리 부원들의 편지를 **Google Form**으로 수집하여 웹사이트에 반영  
- 수험생들이 위로와 응원을 받을 수 있도록 디자인  

<br/>

## 📁 프로젝트 구조도 

프로젝트는 크게 **공통 컴포넌트**, **페이지 단위 라우팅**, **상태 관리(Context)** 로 구성되어 있습니다.

-  `components/` : Navbar, Footer 등 재사용 가능한 UI 컴포넌트 모음  
- `pages/` : 메인 페이지와 편지 페이지(Human/Social/Nature 등)로 구성된 라우팅 페이지 모음  
- `context/` : Touch 관련 상태 관리를 위한 Context API 폴더  
- `index.js` : 프로젝트의 단일 엔트리 포인트  

<br/>

### 폴더 구조
```
src/
│
├── index.js
├── index.css
├── App.js
├── reportWebVitals.js
│
├── components/
│ ├── Navbar/
│ ├── FullscreenMenu/
│ ├── Title/
│ ├── SwipeNavigator/
│ └── Footer/
│
├── pages/
│ ├── Mainpage/
│ └── Letterpage/
│
└── context/
│ └── Touchcontext/
```
