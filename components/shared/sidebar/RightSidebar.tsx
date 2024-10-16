import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import RenderTag from '../RenderTag';

const RightSidebar = () => {
  const topQuestions = [];
  const popularTags = [];

  for (let i = 0; i < 5; i++) {
    topQuestions.push({ id: i, title: 'Placeholder' });
    popularTags.push({ id: i, name: 'javascript', totalQuestion: i });
  }

  return (
    <aside
      className='bg-light900_dark200 light-border custom-scrollbar sticky 
        right-0 top-0 flex h-screen w-[330px] flex-col overflow-y-auto border-l
        p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden'
    >
      <div>
        <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-8'>
          {topQuestions.map((question) => (
            <Link
              key={question.id}
              href={`/questions/${question.id}`}
              className='flex-between cursor-pointer gap-7'
            >
              <p className='body-medium text-dark500_light700'>
                {question.title}
              </p>
              <Image
                src='assets/icons/chevron-right.svg'
                alt='chevron right'
                width={20}
                height={20}
                className='invert-colors'
              />
            </Link>
          ))}
        </div>
      </div>

      <div className='mt-16'>
        <h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
        <div className='mt-7 flex flex-col gap-4'>
          {popularTags.map((tag) => (
            <RenderTag key={tag.id} popularTag={tag} showCount />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
