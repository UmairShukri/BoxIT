import React from 'react';

const EditableRow = ({ editFormData, handleEditFormChange}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to update the price state with the updated values
    // You can call a function or emit an event to handle this update in the parent component
  };

  return (
    <tr>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter the weight'
          name='weight'
          value={editFormData.weight}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type='number'
          required='required'
          placeholder='Enter the amount'
          name='Amount'
          value={editFormData.Amount}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type='submit' >
          Save
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
