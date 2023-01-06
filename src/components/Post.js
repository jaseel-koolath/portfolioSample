import React from 'react';

function Post({ title, date, category, content }) {
  return (
    <div className='bg-white p-4 sm:mx-4 max-w-sm my-4 mx-auto'>
      <h1 className='text-lg font-bold mb-2'>{title}</h1>
      <p className='text-sm my-2'>
        {date} |{' '}
        {category.map((item, index) =>
          index === category.length - 1 ? item : `${item}, `
        )}
      </p>
      <p>{content}</p>
    </div>
  );
}

export default Post;
