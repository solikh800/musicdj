import React from 'react';

const ImageModal = ({hiddenModalComponent, imageName, url}) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-2 border-b border-solid border-blue-200 rounded-t">
              <h3 className="text-xl font-bold">{imageName}</h3>
            </div>
            {/*body*/}
            <div className="relative p-1 flex-auto">
              <img className="rounded-lg" src={url} alt={imageName} />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end  border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-2 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={hiddenModalComponent}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-gray-800"></div>
    </>
  );
};

export default ImageModal;
