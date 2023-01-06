import React from 'react';
import Work from './Work';

function Works() {
  const works = [
    {
      pic: '/Rectangle 30.png',
      title: 'Designing Dashboards',
      year: 2020,
      category: 'Dashboard',
      content:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      pic: '/Rectangle 32.png',
      title: 'Vibrant Portraits of 2020',
      year: 2018,
      category: 'Illustration',
      content:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      pic: '/Rectangle 34.png',
      title: '36 Days of Malayalam type',
      year: 2021,
      category: 'Typography',
      content:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ];
  return (
    <div className='p-4 m-8'>
      <p className='pb-4'>Featured Works</p>
      {works.map((item, index) => (
        <Work key={index} {...item} />
      ))}
    </div>
  );
}

export default Works;
