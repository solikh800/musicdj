import React, {useState} from 'react';
import ImageContainer from '../ImageContainer';
import ImageModal from './../ImageModal';

const imagesLink = 'http://dl.mazanddl.ir/djsoli/homegallery/';

const data = [
  {
    id: 1,
    imageUrl: `${imagesLink}gallery01.jpg`,
    imageName: 'consert',
  },
  {
    id: 2,
    imageUrl: `${imagesLink}gallery02.jpg`,
    imageName: 'music',
  },
  {
    id: 3,
    imageUrl: `${imagesLink}gallery03.jpg`,
    imageName: 'music',
  },
  {
    id: 4,
    imageUrl: `${imagesLink}gallery04.jpg`,
    imageName: 'consert',
  },
  {
    id: 5,
    imageUrl: `${imagesLink}gallery05.jpg`,
    imageName: 'boyDance',
  },
  {
    id: 6,
    imageUrl: `${imagesLink}gallery06.jpg`,
    imageName: 'girlDance',
  },
];
const MYGALLERY = () => {
  const [showModal, setShowModal] = useState(false);
  const [indexImage, setIndexImage] = useState(1);
  const openImage = index => {
    setIndexImage(index);
    setShowModal(true);
  };
  return (
    <div className="flex w-full flex-col my-20 px-6">
      <div>
        <h1 className="flex flex-row text-white text-3xl my-8">
          ------ MY <p className="text-red-500 ml-3"> GALLERY</p>
        </h1>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 ">
        {data.map((item, index) => {
          return (
            <ImageContainer
              key={item.id}
              imageName={item.imageName}
              url={item.imageUrl}
              showModalComponent={() => openImage(index)}
            />
          );
        })}
      </div>
      {showModal ? (
        <ImageModal
          index={indexImage}
          data={data}
          showModal={showModal}
          hiddenModalComponent={() => setShowModal(false)}
        />
      ) : null}
    </div>
  );
};

export default MYGALLERY;
