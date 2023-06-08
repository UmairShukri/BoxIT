import React from 'react';
import data from '../Amount.json';

const ReadOnlyRow = ({ price, handleEditClick }) => {
  return (
    <tr className=''>
      <td className='pr-'>{price.weight}</td>
      <td className='pr-'>{price.Price}</td>
      <td className='border-4'>
        <button type="button" onClick={(event) => handleEditClick(event, price)}>EDIT</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
