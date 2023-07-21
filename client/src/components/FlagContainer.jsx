import React from 'react';
import India from "../images/india.png";
import China from "../images/china.png";
import Male from "../images/maldives.png";
import Dubai from "../images/dubai.png";

export default function FlagContainer() {
  return (
    <div className='border-4 bg-gray-200 rounded-2xl flex flex-col p-6 m-5'>
      <h1 className='text-center font-bold'>Countries we Export to</h1>
      <div className='flex flex-wrap justify-center items-center space-x-4 space-y-4'>
        <img className='max-w-xs' src={India} alt='india' />
        <img className='max-w-xs' src={China} alt='china' />
        <img className='max-w-xs' src={Male} alt='maldives'/>
        <img className='max-w-xs' src={Dubai} alt='dubai' />
      </div>
    </div>
  );
}
