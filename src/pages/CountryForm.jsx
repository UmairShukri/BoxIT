import React, { useState } from 'react';

function CountryForm() {
  const [originCountry, setOriginCountry] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [weight, setWeight] = useState('');
  const [shippingMethods, setShippingMethods] = useState([]);

  const handleOriginCountryChange = (e) => {
    setOriginCountry(e.target.value);
  };

  const handleDestinationCountryChange = (e) => {
    setDestinationCountry(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleShippingMethodChange = (e) => {
    const method = e.target.value;
    if (shippingMethods.includes(method)) {
      setShippingMethods(shippingMethods.filter((m) => m !== method));
    } else {
      setShippingMethods([...shippingMethods, method]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions here, such as validation or submitting the data to a server
    console.log('Origin Country:', originCountry);
    console.log('Destination Country:', destinationCountry);
    console.log('Weight:', weight);
    console.log('Shipping Methods:', shippingMethods);
  };

  return (
    <div className="p-4 flex items-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="originCountry" className="block text-gray-700">
            Origin Country:
          </label>
          <select
            id="originCountry"
            value={originCountry}
            onChange={handleOriginCountryChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="srilanka">Sri Lanka</option>
            <option value="malaysia">Malaysia</option>
          </select>
        </div>
        <div>
          <label htmlFor="destinationCountry" className="block text-gray-700">
            Destination Country:
          </label>
          <select
            id="destinationCountry"
            value={destinationCountry}
            onChange={handleDestinationCountryChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="srilanka">Sri Lanka</option>
            <option value="malaysia">Malaysia</option>
          </select>
        </div>
        <div>
          <label htmlFor="weight" className="block text-gray-700">
            Weight:
          </label>
          <input
            type="text"
            id="weight"
            value={weight}
            onChange={handleWeightChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-gray-700">Shipping Methods:</label>
          <div>
            <label htmlFor="air" className="inline-flex items-center mr-2">
              <input
                type="checkbox"
                id="air"
                value="air"
                checked={shippingMethods.includes('air')}
                onChange={handleShippingMethodChange}
              />
              <span className="ml-2">Air</span>
            </label>
            <label htmlFor="sea" className="inline-flex items-center mr-2">
              <input
                type="checkbox"
                id="sea"
                value="sea"
                checked={shippingMethods.includes('sea')}
                onChange={handleShippingMethodChange}
              />
              <span className="ml-2">Sea</span>
            </label>
            <label htmlFor="express" className="inline-flex items-center mr-2">
              <input
                type="checkbox"
                id="express"
                value="express"
                checked={shippingMethods.includes('express')}
                onChange={handleShippingMethodChange}
              />
              <span className="ml-2">Express</span>
            </label>
          </div>
        </div>
        <button type="submit" className="bg-lime-300 text-white px-4 py-2 rounded-md hover:bg-blue-600 rounded-lg">
          Calculate
        </button>
      </form>
    </div>
  );
}

export default CountryForm;
