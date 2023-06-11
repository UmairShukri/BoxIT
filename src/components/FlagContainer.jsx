import React from 'react'
import India from "../images/india.png"
import Japan from "../images/Japan.png"

export default function FlagContainer() {
  return (
    <div className='border-4  bg-grey flex justify-center   h-full  flex-col'>
       <div> <h1>Contries we Ship</h1></div>
       <div className='flex flex-row space-x-4'>
      <img src={India} alt='india' />
      <img src={Japan} alt='japan' />
      </div>
    </div>
  )
}
