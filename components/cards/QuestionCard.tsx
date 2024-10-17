import React from 'react';
import Link from 'next/link';

import RenderTag from '../shared/RenderTag';
import Metric from '../shared/Metric';

import { Question } from '@/types';
import { formatLargeNumber, getTimeStamp } from '@/lib/utils';

type QuestionCardProps = {
  question: Question;
};

const QuestionCard = ({ question }: QuestionCardProps) => {
  const { _id, title, tags, author, upvotes, views, answers, createdAt } =
    question;
  return (
    <div className='card-wrapper rounded-[10px] p-9 sm:px-11'>
      <div className='flex flex-col-reverse items-start justify-between gap-4 sm:flex-row'>
        <div>
          <span className='subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden'>
            {getTimeStamp(createdAt)}
          </span>

          <Link href={`/question/${_id}`}>
            <h3
              className='sm:h3-semibold base-semibold text-dark200_light900 
            line-clamp-1 flex-1'
            >
              {title}
            </h3>
          </Link>
        </div>

        {/* If signed in add delete actions */}
      </div>

      <div className='mt-3.5 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <RenderTag key={tag._id} popularTag={tag} />
        ))}
      </div>

      <div className='flex-between mt-6 w-full flex-wrap gap-3'>
        <Metric
          imgUrl='assets/icons/avatar.svg'
          alt='user'
          value={author.name}
          title={` - asked ${getTimeStamp(createdAt)}`}
          href={`/profile/${author._id}`}
          textStyles='body-medium text-dark400_light700'
        />

        <div className='flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start'>
          <Metric
            imgUrl='assets/icons/like.svg'
            alt='Upvotes'
            value={formatLargeNumber(upvotes)}
            title=' Votes'
            textStyles='small-medium text-dark400_light800'
          />
          <Metric
            imgUrl='assets/icons/message.svg'
            alt='Message'
            value={formatLargeNumber(answers.length)}
            title=' Answers'
            textStyles='small-medium text-dark400_light800'
          />
          <Metric
            imgUrl='assets/icons/eye.svg'
            alt='eye'
            value={formatLargeNumber(views)}
            title=' Views'
            textStyles='small-medium text-dark400_light800'
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
