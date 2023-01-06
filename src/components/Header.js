import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Header() {
  const [show, setShow] = useState(true);
  return (
    <div className='flex justify-end space-x-2 p-4'>
      <div
        className={`${
          !show && 'hidden'
        } text-right text-lg sm:flex space-x-4 justify-end font-bold`}
      >
        <p className='cursor-pointer'>Works</p>
        <p className='cursor-pointer'>Blog</p>
        <p className='cursor-pointer'>Contact</p>
      </div>
      <div
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        <Bars3Icon
          className={`${show && 'hidden'} sm:hidden`}
          height={30}
          width={30}
        />
        <XMarkIcon
          className={`${!show && 'hidden'} sm:hidden`}
          height={30}
          width={30}
        />
      </div>
    </div>
  );
}

export default Header;
