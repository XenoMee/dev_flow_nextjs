import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeStamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;

  if (timeDifference >= year) {
    const years = Math.floor(timeDifference / year);
    return `asked ${years} year${years > 1 ? 's' : ''} ago`;
  }

  if (timeDifference >= month) {
    const months = Math.floor(timeDifference / month);
    return `asked ${months} month${months > 1 ? 's' : ''} ago`;
  }

  if (timeDifference >= week) {
    const weeks = Math.floor(timeDifference / week);
    return `asked ${weeks} week${weeks > 1 ? 's' : ''} ago`;
  }

  if (timeDifference >= day) {
    const days = Math.floor(timeDifference / day);
    return `asked ${days} day${days > 1 ? 's' : ''} ago`;
  }

  if (timeDifference >= hour) {
    const hours = Math.floor(timeDifference / hour);
    return `asked ${hours} hour${hours > 1 ? 's' : ''} ago`;
  }

  if (timeDifference >= minute) {
    const minutes = Math.floor(timeDifference / minute);
    return `asked ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }

  return 'just now';
};

export function formatLargeNumber(num: number): string {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + 'K';
  } else {
    return num.toString();
  }
}
