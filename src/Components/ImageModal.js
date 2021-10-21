import React, {useEffect, useState} from 'react';
import Icon from './../Assets/Svg/Icon/index';

const ImageModal = ({hiddenModalComponent, data, index}) => {
  const [imageItem, setImageItem] = useState();
  const [newIndex, setNewIndex] = useState(index);
  useEffect(() => {
    setImageItem(data[index]);
  }, [data, index]);

  const nextImage = () => {
    if (newIndex !== data.length - 1) {
      setImageItem(data[newIndex + 1]);
      setNewIndex(newIndex + 1);
    } else {
      setImageItem(data[0]);
      setNewIndex(1);
    }
  };
  const backImage = () => {
    if (newIndex !== 0) {
      setImageItem(data[newIndex - 1]);
      setNewIndex(newIndex - 1);
    } else {
      setImageItem(data[data.length - 1]);
      setNewIndex(data.length - 1);
    }
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*body*/}
            <div className="relative p-1 flex-auto">
              {imageItem && (
                <img
                  className="rounded-lg"
                  src={imageItem.imageUrl}
                  alt={imageItem.imageName}
                />
              )}
            </div>
            <Icon
              onClick={hiddenModalComponent}
              className="absolute right-0 w-10 text-red-500"
              name="close"
            />
            <Icon
              onClick={backImage}
              className="absolute bottom-1/2 w-11"
              name="left"
            />
            <Icon
              onClick={nextImage}
              className="absolute right-0 bottom-1/2 w-11"
              name="right"
            />
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-gray-800"></div>
    </>
  );
};

export default ImageModal;
