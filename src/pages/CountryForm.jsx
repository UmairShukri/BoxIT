import React, { useState } from 'react';

function CountryForm() 
 {
  const [originCountry, setOriginCountry] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [weight, setWeight] = useState('');

  const handleOriginCountryChange = (e) => {
    setOriginCountry(e.target.value);
  };

  const handleDestinationCountryChange = (e) => {
    setDestinationCountry(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions here, such as validation or submitting the data to a server
    console.log('Origin Country:', originCountry);
    console.log('Destination Country:', destinationCountry);
    console.log('Weight:', weight);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="originCountry" className="block text-gray-700">Origin Country:</label>
          <select id="originCountry" value={originCountry} onChange={handleOriginCountryChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="srilanka">Sri Lanka</option>
            <option value="malaysia">Malaysia</option>
          </select>
        </div>
        <div>
          <label htmlFor="destinationCountry" className="block text-gray-700">Destination Country:</label>
          <select id="destinationCountry" value={destinationCountry} onChange={handleDestinationCountryChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="srilanka">Sri Lanka</option>
            <option value="malaysia">Malaysia</option>
          </select>
        </div>
        <div>
          <label htmlFor="weight" className="block text-gray-700">Weight:</label>
          <input
            type="text"
            id="weight"
            value={weight}
            onChange={handleWeightChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <button type="Calculate" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Calculate</button>
      </form>
    </div>
  );
}


export default CountryForm;
