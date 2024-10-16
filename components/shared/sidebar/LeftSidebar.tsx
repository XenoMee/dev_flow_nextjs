'use client';
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SignedOut } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';

import { sidebarLinks } from '@/constants';

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      className='bg-light900_dark200 light-border custom-scrollbar sticky left-0 
      top-0 flex h-screen flex-col justify-between overflow-y-auto
      border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]'
    >
      <div className='flex flex-1 flex-col gap-6'>
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 0) ||
            pathname === item.route;

          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${
                isActive
                  ? 'primary-gradient rounded-lg text-light-900'
                  : 'text-dark300_light900'
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? '' : 'invert-colors'}`}
              />
              <p
                className={`${isActive ? 'base-bold' : 'base-medium'} max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <SignedOut>
        <div className='flex flex-col gap-3'>
          <Link href='/sign-in'>
            <Button
              className='small-medium btn-secondary min-h-10 w-full rounded 
                px-4 py-3 shadow-none'
            >
              <Image
                src='assets/icons/account.svg'
                alt='login'
                width={20}
                height={20}
                className='invert-colors lg:hidden'
              />

              <span className='primary-text-gradient max-lg:hidden'>
                Log In
              </span>
            </Button>
          </Link>

          <Link href='/sign-up'>
            <Button
              className='small-medium btn-tertiary light-border-2 text-dark400_light900 
                  min-h-10 w-full rounded px-4 py-3 shadow-none'
            >
              <Image
                src='assets/icons/sign-up.svg'
                alt='sign up'
                width={20}
                height={20}
                className='invert-colors lg:hidden'
              />

              <span className=' max-lg:hidden'>Log In</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </aside>
  );
};

export default LeftSidebar;
