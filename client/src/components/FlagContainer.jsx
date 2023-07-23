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

        <div className='flex flex-col items-center text-center'>
          <img className='max-w-xs' src={India} alt='india' />
          <span className='font-bold text-sm'>INDIA</span>
        </div>

        <div className='flex flex-col items-center text-center'>
          <img className='max-w-xs' src={China} alt='china' />
          <span className='font-bold text-sm'>CHINA</span>
        </div>

        <div className='flex flex-col items-center text-center'>
          <img className='max-w-xs' src={Male} alt='maldives'/>
          <span className='font-bold text-sm'>MALDIVES</span>
        </div>

        <div className='flex flex-col items-center text-center'>
          <img className='max-w-xs' src={Dubai} alt='dubai' />
          <span className='font-bold text-sm'>DUBAI</span>
        </div>
      </div>
    </div>
  );
}
