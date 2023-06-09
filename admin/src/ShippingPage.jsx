import React, { useState, Fragment } from 'react';
import data from './Amount.json';
import ReadOnlyRow from './component/ReadOnlyRow';
import EditableRow from './component/EditableRow';
import './App.css'
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


  
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedPrice= {
      weight: editFormData.weight,
      Amount: editFormData.Amount,
   
    };

 const newPrice = [...price];

    const index = price.findIndex((price) => price.weight === editWeight);

    newPrice[index] = editedPrice;

    setPrice(newPrice);
    setEditWeight(null);
  };

  return (
    <div>
      <div>
        <form   className='flex flex-col border-4 items-center justify-center'>
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

      <div className='app-container flex justify-center mt-8'>
        <form onSubmit={handleEditFormSubmit}>
          <table className=''>
            <thead>
              <tr>
                <th className=''>Weight</th>
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
