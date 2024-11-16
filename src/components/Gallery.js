/*  useContext를 사용하여 이미지를 가져오고, 이를 즉시 로드 */
import React, { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';

function Gallery({ images: propsImages }) {
  const { images: contextImages } = useContext(ImageContext);
  const images = propsImages || contextImages; // props로 전달된 이미지가 있으면 사용, 아니면 Context 이미지 사용

  return (
    <div className="gallery">
      {images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
}

export default Gallery;
