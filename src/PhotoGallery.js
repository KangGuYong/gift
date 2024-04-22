import React from 'react';
import './PhotoGallery.css';

const photos = [
  // 이미지 URL과 설명을 배열로 구성합니다. 실제 이미지 URL로 대체해야 합니다.
  { id: 1, src: '.\Photo\KakaoTalk_20240422_182539657 (1).jpg', description: 'Image Description 1' },
  { id: 2, src: '.\Photo\KakaoTalk_20240422_182539657_01 (1).jpg', description: 'Image Description 2' },
  // 추가 이미지 정보를 계속해서 배열에 넣습니다.
];

function PhotoGallery() {
  return (
    <div className="gallery">
      {photos.map(photo => (
        <div key={photo.id} className="photo-container">
          <img src={photo.src} alt={photo.description} className="photo" />
        </div>
      ))}
    </div>
  );
}

export default PhotoGallery;
