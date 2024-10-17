'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { useTheme } from 'next-themes';

import { themes } from '@/constants';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const themeIcon =
    resolvedTheme === 'light' ? (
      <Image
        src='/assets/icons/sun.svg'
        alt='sun'
        width={20}
        height={20}
        className='active-theme cursor-pointer'
      />
    ) : (
      <Image
        src='/assets/icons/moon.svg'
        alt='moon'
        width={20}
        height={20}
        className='active-theme cursor-pointer'
      />
    );

  return (
    <Menubar className='relative border-none bg-transparent shadow-none'>
      <MenubarMenu>
        <MenubarTrigger
          className='focus:bg-light-900 data-[state=open]:bg-light-900 
        dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200'
        >
          {!mounted ? (
            <Image
              src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
              width={20}
              height={20}
              sizes='20x20'
              alt='Loading Light/Dark Toggle'
              priority={false}
              title='Loading Light/Dark Toggle'
            />
          ) : (
            themeIcon
          )}
        </MenubarTrigger>
        <MenubarContent
          className='absolute -right-12 mt-3 min-w-32 rounded border py-2 
        dark:border-dark-400 dark:bg-dark-300'
        >
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              onClick={() => setTheme(item.value)}
              className='flex items-center gap-4 px-2.5 py-2 hover:cursor-pointer dark:focus:bg-dark-400'
            >
              <Image
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={resolvedTheme === item.value ? 'active-theme' : ''}
              />

              <p
                className={`body-semibold text-light-500 
                   ${
                     resolvedTheme === item.value
                       ? 'text-primary-500'
                       : 'text-dark100_light900'
                   }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
