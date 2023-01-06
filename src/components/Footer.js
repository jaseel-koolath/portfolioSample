import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Footer() {
  return (
    <div className='py-16'>
      <div className='flex space-x-4 text-2xl justify-center'>
        <BsFacebook />
        <BsInstagram />
        <BsLinkedin />
        <BsTwitter />
      </div>
      <p className='mt-4 text-xs text-center'>
        Copyright ©2020 All rights reserved{' '}
      </p>
    </div>
  );
}

export default Footer;
