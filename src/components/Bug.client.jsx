import {Link} from '@shopify/hydrogen/client';
import React from 'react';

export default function Bug({selectedParam}) {
  return (
    <div>
      <p className="text-lg mb-8">
        CURRENTLY SELECTED ON THE SERVER: {selectedParam}
      </p>
      <Link
        to="/r2/?param=A"
        className="bg-white shadow py-2 px-5 rounded-full inline-flex items-center hover:opacity-80"
      >
        A
      </Link>
      <Link
        to="/?param=B"
        className="bg-white shadow py-2 px-5 rounded-full inline-flex items-center hover:opacity-80"
      >
        B
      </Link>
    </div>
  );
}
