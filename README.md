# 과제 파일 구조 안내

src  
├── app // React 외의 요소들 보관함  
│ 　　 ├── store.jsx - 종현님  
│ 　　 └── slice - 종현님  
│ 　　　　　 └── CreateSlice.jsx - 종현님  
│  
├── component // React에서 사용될 블록들  
│ 　　　 ├── common  
│ 　　　 │ 　　　 └── Header.jsx - 효승님  
│ 　　　 │ 　　　 └── Button.jsx - 효승님  
│ 　　　 │  
│ 　　　 └── features  
│ 　　　　　　　 └── Form.jsx - Create + Redux toolkit - 종현님  
│ 　　　　　　　 └── Content.jsx - Read, Update + 서버 데이터 -  
│ 　　　　　　　 └── Comment.jsx - Create, Read, Update, Delete + Header, Button - 효승님  
│  
├── layout // 페이지 구성 요소 - 해당 파일의 생성 여부는 고려중.
│ 　　　 └── Layout.jsx  
│  
├── pages // route를 통해 보여줄 대형 컴포넌트 구성  
│ 　　　 ├── Detail.jsx -상세 보기 화면  
│ 　　　 └── Home.jsx - 리스트화면  
│  
├── shared // 각 페이지의 연결을 만들 routes들  
│ 　　　 └── route.jsx - react-router-dom  
│  
├── App.css  
├── App.js  
├── index.css  
├── index.js  
└── logo.svg
