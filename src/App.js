import React, { useState, useEffect } from 'react';
import './App.css';
import image1 from './Photo/첫 활동.jpg';
import image2 from './Photo/보금자리 2번째 활동.jpg';
import image3 from './Photo/긱사팟 대기.jpg';
import image4 from './Photo/3번째 활동.jpg';
import image5 from './Photo/3주차 회식 2차.jpg';
import image6 from './Photo/벚꽃.jpg';
import image7 from './Photo/초콜릿.jpg';
import image8 from './Photo/예비군.jpg';
import image9 from './Photo/4월18일도서관팟.jpg';
import image10 from './Photo/인생네컷 연습.jpg';
import image11 from './Photo/코난.jpg';
import image12 from './Photo/인생네컷 레전드.jpg';
import image13 from './Photo/인생네컷 8컷.jpg';
import image14 from './Photo/사샷.jpg';
import image15 from './Photo/또래방.jpg';
import image16 from './Photo/시험전.jpg';
import image17 from './Photo/편맥.jpg';
const photos = [
  { id: 1, src: image1, description: '2024/03/27(화요일)\n보금자리 첫 활동\n\n"누나 처음 만난 날"' },
  { id: 2, src: image2, description: '2024/04/04(목요일)\n보금자리 2번째 활동' },
  { id: 3, src: image3, description: '2024/04/09(화요일)\n기숙사 파티 동방 같이 가기\n 위해서 기다리는 구용이\n\n"나만 빨리 나와ㅋㅋㅋㅋ"' },
  { id: 4, src: image4, description: '2024/04/09(화요일)\n보금자리 3번째 활동' },
  { id: 6, src: image5, description: '2024/04/09(화요일)-2024/04/10(수요일)\n회식\n\n"이때가 누가 처음 취한 날???"' },
  { id: 5, src: image6, description: '2024/04/09(화요일)\n기숙사 벚꽃 사진\n\n"나만 이상해ㅋㅋㅋㅋ 봄,여름,가을,겨울 사진고 이으면 멋 있을 듯?"' },
  { id: 7, src: image7, description: '2024/04/14(일요일)\n하람 누나가 물가져가고 두고간 초콜릿' },
  { id: 8, src: image8, description: '2024/04/15(월요일)\n예비군 가서 하람누나가 준 초콜릿\n\n"우마이!!!"' },
  { id: 9, src: image9, description: '2024/04/18(목요일)\n 노래방 갔다가 하이볼 마시러 할맥\n\n"하이볼 너무 맛있어 시험 끝나고 또\n 마시러 가자"' },
  { id: 10, src: image10, description: '2024/04/19(금요일)\n 노래방->할맥->기숙사->인생네컷\n연습샷\n\n"간지 촬촬"' },
  { id: 11, src: image11, description: '2024/04/19(금요일)\n인생네컷 포즈 원본' },
  { id: 12, src: image12, description: '2024/04/19(금요일)\n인생네컷\n\n"ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"' },
  { id: 13, src: image13, description: '2024/04/19(금요일)\n인생팔컷\n\n"8장 전부 너무 잘 나왔어ㅋㅍㅋㅍㅋㅍㅋ"' },
  { id: 14, src: image14, description: '2024/04/19(금요일)\n사샷' },
  { id: 15, src: image15, description: '2024/04/19(금요일)\n노래방->할맥->기숙사->인생네컷->\n노래방\n\n"?????"'},
  { id: 16, src: image17, description: '2024/04/19(금요일)\n노래방->할맥->기숙사->인생네컷->\n노래방->편맥때 본\n고양이\n\n"고먐미"' },
  { id: 17, src: image16, description: '2024/04/19(금요일)\n돗자리 피고 낭만 찾기\n\n"이날 놀지 말았어야했어"' },
];
function Login({ onSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '조하람' && password === '19990422') {
      onSuccess();
    } else {
      alert('잘못된 아이디 또는 비밀번호입니다.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="생년월일 8자리"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">로그인</button>
      </form>
    </div>
  );
}
function WelcomeModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>생일 축하해!</h2>
        <p>우와 ~~~ 하람누나 생일이야????!?!?!?!?</p>
      </div>
    </div>
  );
}
function WelcomeModal2({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>선물!</h2>
        <p>이건 내가 주는 선물이야</p>
      </div>
    </div>
  );
}
function App() {
  const [rowSpans, setRowSpans] = useState({});
  const [showModal, setShowModal] = useState(true);
  const [showModal2, setShowModal2] = useState(true);
  useEffect(() => {
    const spans = {};
    photos.forEach((photo) => {
      const img = new Image();
      img.onload = () => {
        // 가로세로 비율에 따라 span 값을 계산합니다.
        const height = img.naturalHeight;
        const width = img.naturalWidth;
        const gridAutoRows = 10; // 그리드 자동 행 높이 (CSS와 일치시키세요)
        const rowSpan = Math.ceil(height / (width / 300 * gridAutoRows));
        spans[photo.id] = rowSpan;
        // 모든 이미지가 로드되면 상태를 업데이트합니다.
        if (Object.keys(spans).length === photos.length) {
          setRowSpans(spans);
        }
      };
      img.src = photo.src;
    });
  }, []);
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Login onSuccess={() => setLoggedIn(true)} />;
  }
  return (
    <div className="App">
      {showModal2 && <WelcomeModal2 onClose={() => setShowModal2(false)} />}
      {showModal && <WelcomeModal onClose={() => setShowModal(false)} />}
      <header className="App-header">
        보금자리부터 시작한 추억들
      </header>
      <div className="Gallery">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="Photo-item"
            style={{
              gridRowEnd: `span ${rowSpans[photo.id] || 1}`,
            }}
          >
            <img src={photo.src} alt={photo.description} />
            <div className="overlay">{photo.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;