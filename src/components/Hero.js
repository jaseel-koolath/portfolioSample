import React from 'react';

function Hero() {
  return (
    <div className='flex flex-col sm:flex-row-reverse mx-auto justify-around m-8'>
      <img
        src='/Ellipse1.png'
        alt='profile'
        className='object-scale-down h-60 w-60 mx-auto p-4'
      />
      <div className='m-8 text-center sm:text-left'>
        <h1 className='text-3xl font-bold'>
          Hi, I am John,{' '}
          <h1 className='text-3xl font-bold'>Creative Technologist</h1>
        </h1>
        <p className='max-w-lg my-8'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button className='bg-red-400 p-2 rounded-md text-white font-semibold'>
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Hero;
