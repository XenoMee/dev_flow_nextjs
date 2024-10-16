'use client';
import React from 'react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { sidebarLinks } from '@/constants';
import { SignedOut } from '@clerk/nextjs';
import { Button } from '../../ui/button';

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className='flex h-full flex-col gap-6'>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 0) ||
          pathname === item.route;

        return (
          <SheetClose key={item.route} asChild>
            <Link
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
              <p className={`${isActive ? 'base-bold' : 'base-medium'}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src='assets/icons/hamburger.svg'
          alt='Menu'
          width={36}
          height={36}
          className='invert-colors sm:hidden'
        />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='bg-light900_dark200 flex flex-col justify-between border-none'
      >
        <Link href='/' className='flex items-center gap-1'>
          <Image
            src='assets/images/site-logo.svg'
            alt='Devflow'
            width={23}
            height={23}
          />
          <p className='h2-bold text-dark100_light900 font-spaceGrotesk'>
            Dev <span className='text-primary-500'>Overflow</span>
          </p>
        </Link>

        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>

        <SignedOut>
          <div className='flex flex-col gap-3'>
            <SheetClose asChild>
              <Link href='/sign-in'>
                <Button
                  className='small-medium btn-secondary min-h-10 w-full rounded 
                  px-4 py-3 shadow-none'
                >
                  <span className='primary-text-gradient'>Log In</span>
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href='/sign-up'>
                <Button
                  className='small-medium btn-tertiary light-border-2 text-dark400_light900 
                  min-h-10 w-full rounded px-4 py-3 shadow-none'
                >
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SignedOut>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
