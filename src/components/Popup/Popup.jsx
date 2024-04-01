import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const Popup = ({ orderPopup, handleOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 z-20 bg-black/50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 dark:text-white duration-200 p-4 rounded-md shadow-md w-[300px]">
            {/* header */}
            <div className="flex items-center justify-between">
              <h1>Order your book</h1>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => handleOrderPopup(false)}
                />
              </div>
            </div>
            {/* form */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2  px-2 py-1 mb-4 border rounded-md border-gray-300 dark:border-gray-500 dark:bg-gray-800 "
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2  px-2 py-1 mb-4 border rounded-md border-gray-300 dark:border-gray-500 dark:bg-gray-800 "
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full p-2  px-2 py-1 mb-4 border rounded-md border-gray-300 dark:border-gray-500 dark:bg-gray-800 "
              />
            </div>
            <div className='flex items-center justify-center'>
              <button className='bg-gradient-to-r from-primary to to-secondary px-4 py-1 rounded-full flex items-center gap-3'>Order Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
