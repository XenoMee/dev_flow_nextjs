'use client';
import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

type LocalSearchProps = {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
};

const LocalSearch = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchProps) => {
  return (
    <div
      className={`${otherClasses} bg-light800_darkgradient flex min-h-14 flex-1 
        grow items-center gap-4 rounded-[10px] px-4 
        ${iconPosition === 'right' ? 'flex flex-row-reverse' : 'flex-row'}`}
    >
      <Image
        src={imgSrc}
        alt='search icon'
        width={24}
        height={24}
        className='cursor-pointer'
      />

      <Input
        type='text'
        placeholder={placeholder}
        //   value=''
        onChange={() => {}}
        className='paragraph-regular bg-light800_darkgradient no-focus placeholder 
        flex h-9 rounded-md border-none bg-transparent px-3 py-1 shadow-none outline-none'
      />
    </div>
  );
};

export default LocalSearch;
