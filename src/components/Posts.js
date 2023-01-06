import React from 'react';
import Post from './Post';

function Posts() {
  const posts = [
    {
      title: 'Making a design system from scratch',
      date: '1 Feb 2022',
      category: ['Design', 'Pattern', 'Figma'],
      content:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      title: 'Creating pixel perfect icons in Figma',
      date: '12 Feb 2020',
      category: ['Icon', 'Design', 'one'],
      content:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ];
  return (
    <div className='bg-blue-100 m-8 '>
      <div className='flex justify-between px-4 pt-4'>
        <p>Recent Post</p>
        <p>View All</p>
      </div>
      <div className='sm:flex justify-around py-4'>
        {posts.map((item, index) => (
          <Post key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
