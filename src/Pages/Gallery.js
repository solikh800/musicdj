import React, {useEffect, useState} from 'react';
import {colors} from '../constants';
import Baner from './../Components/Baner';
import ImageContainer from './../Components/ImageContainer';
import ImageModal from './../Components/ImageModal';
import ReactHelmet from './../Components/ReactHelmet';

const imageLink = 'http://dl.mazanddl.ir/djsoli/homegallery/';

const galleryData = [
  {id: 1, imageName: 'image gallery', imageUrl: `${imageLink}gallery01.jpg`},
  {id: 2, imageName: 'image gallery', imageUrl: `${imageLink}gallery02.jpg`},
  {id: 3, imageName: 'image gallery', imageUrl: `${imageLink}gallery03.jpg`},
  {id: 4, imageName: 'image gallery', imageUrl: `${imageLink}gallery04.jpg`},
  {id: 5, imageName: 'image gallery', imageUrl: `${imageLink}gallery05.jpg`},
  {id: 6, imageName: 'image gallery', imageUrl: `${imageLink}gallery06.jpg`},
  {id: 7, imageName: 'image gallery', imageUrl: `${imageLink}07.jpg`},
  {id: 8, imageName: 'image gallery', imageUrl: `${imageLink}08.jpg`},
  {id: 9, imageName: 'image gallery', imageUrl: `${imageLink}09.jpg`},
  {id: 10, imageName: 'image gallery', imageUrl: `${imageLink}10.jpg`},
  {id: 11, imageName: 'image gallery', imageUrl: `${imageLink}11.jpg`},
  {id: 12, imageName: 'image gallery', imageUrl: `${imageLink}11.jpg`},
  {id: 13, imageName: 'image gallery', imageUrl: `${imageLink}15.jpg`},
];

function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [indexImage, setIndexImage] = useState(1);
  const openImage = index => {
    setIndexImage(index);
    setShowModal(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Baner title="READ ABOUT ME" subTitle="GALLERY" />
      <ReactHelmet title="GALLERY" />
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
