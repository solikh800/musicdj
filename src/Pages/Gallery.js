import React, {useState} from 'react';
import {colors} from '../constants';
import Baner from './../Components/Baner';
import ImageContainer from './../Components/ImageContainer';
import ImageModal from './../Components/ImageModal';

const galleryData = [
  {
    id: 1,
    imageName: '',
    imageUrl:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-gallery02-img01-bg.jpg',
  },
  {
    id: 2,
    imageName: '',
    imageUrl:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-gallery02-img02-bg.jpg',
  },
  {
    id: 3,
    imageName: '',
    imageUrl:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-gallery02-img03-bg.jpg',
  },
  {
    id: 4,
    imageName: '',
    imageUrl:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-gallery02-img04-bg.jpg',
  },
  {
    id: 5,
    imageName: '',
    imageUrl:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-gallery02-img05-bg.jpg',
  },
  {
    id: 6,
    imageName: '',
    imageUrl:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-gallery02-img06-bg.jpg',
  },
  {
    id: 7,
    imageName: '',
    imageUrl:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-gallery02-img07-bg.jpg',
  },
  {
    id: 8,
    imageName: '',
    imageUrl:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-gallery02-img08-bg.jpg',
  },
  {
    id: 9,
    imageName: '',
    imageUrl:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-gallery-img06-bg.jpg',
  },
];

function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [indexImage, setIndexImage] = useState(1);
  const openImage = index => {
    setIndexImage(index);
    setShowModal(true);
  };
  return (
    <>
      <Baner title="READ ABOUT ME" subTitle="GALLERY" />
      <div
        style={{backgroundColor: colors.background}}
        className=" flex flex-col lg:w-5/6  justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
        <div className="xl:w-5/6 p-4 mt-7 md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {galleryData.map((item, index) => {
            return (
              <div
                className="md:flex md:flex-col mb-10 mx-3 justify-center items-center"
                key={item.id}>
                <ImageContainer
                  key={item.id}
                  imageName={item.imageName}
                  url={item.imageUrl}
                  showModalComponent={() => openImage(index)}
                />
              </div>
            );
          })}
        </div>
        {showModal ? (
          <ImageModal
            index={indexImage}
            data={galleryData}
            showModal={showModal}
            hiddenModalComponent={() => setShowModal(false)}
          />
        ) : null}
      </div>
    </>
  );
}

export default Gallery;
