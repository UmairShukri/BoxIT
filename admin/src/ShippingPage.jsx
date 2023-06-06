import React, { useState, Fragment } from 'react';
import data from './Amount.json';
import ReadOnlyRow from './component/ReadOnlyRow';
import EditableRow from './component/EditableRow';

const ShippingPage = () => {
  const [price, setPrice] = useState(data);
  const [editFormData, setEditFormData] = useState({
    weight: "",
    Amount: "",
  });
  const [editWeight, setEditWeight] = useState(null);

  const handleEditClick = (event, price) => {
    event.preventDefault();
    setEditWeight(price.weight);
    setEditFormData({
      weight: price.weight,
      Amount: price.Amount,
    });
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  return (
    <div>
      <div>
        <form className='flex flex-col border-4 items-center justify-center'>
          <h1 className='text-white'>ADMIN PANEL</h1>
          <div className='m-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4'>
            <label className='block' htmlFor='originCountry'>
              Origin Country
            </label>
            <input className='rounded-md' type='text' id='originCountry' name='originCountry' />
            <label className='block' htmlFor='destination'>
              Destination
            </label>
            <input className='rounded-md' type='text' id='destination' name='destination' />
          </div>
        </form>
      </div>

      <div className='flex justify-center mt-8'>
        <form>
          <table className='border-2 p-4 table-fixed'>
            <thead>
              <tr>
                <th className='pr-4'>weight</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {price.map((item) => (
                <Fragment key={item.weight}>
                  {editWeight === item.weight ? (
                    <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} />
                  ) : (
                    <ReadOnlyRow price={item} handleEditClick={handleEditClick} />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default ShippingPage;
