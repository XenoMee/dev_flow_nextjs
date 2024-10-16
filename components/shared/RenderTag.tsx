import Link from 'next/link';
import React from 'react';

import { Badge } from '@/components/ui/badge';

interface RenderTagProps {
  popularTag: {
    _id: string;
    name: string;
    totalQuestions?: number;
  };
  showCount?: boolean;
}

const RenderTag = ({ popularTag, showCount }: RenderTagProps) => {
  const { _id, name, totalQuestions } = popularTag;

  return (
    <Link href={`/tags/${_id}`} className='flex justify-between gap-2'>
      <Badge
        className='subtle-medium bg-light800_dark300 text-light400_light500 rounded-md
        border-none px-4 py-2 uppercase'
      >
        {name}
      </Badge>

      {showCount && (
        <p className='small-medium text-dark500_light700'>{totalQuestions}</p>
      )}
    </Link>
  );
};

export default RenderTag;
