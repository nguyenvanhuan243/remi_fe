import React from 'react';
import { uniqueId } from 'lodash';

export default function LoadingList() {
  return (
    <div className='row'>
      {[1, 2, 3, 4, 5, 6].map(() => (
        <div key={uniqueId()} className='col-md-4' >
          <div className='LoadingList-item animated-background' />
        </div>
      ))
      }
    </div>
  )
}

