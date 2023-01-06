import React from 'react';

function Work({ title, content, year, pic, category }) {
  return (
    <div className='sm:flex space-x-4 pb-4'>
      <img
        src={pic}
        alt={title}
        className='object-cover rounded-md w-full sm:w-64'
      />
      <div className='flex flex-col justify-around'>
        <p className='text-xl font-semibold py-2'>{title}</p>
        <p className='py-2'>
          <span className='bg-blue-600 text-white px-2 mr-2 rounded-full'>
            {year}
          </span>
          <span className='text-gray-400'>{category}</span>
        </p>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Work;
