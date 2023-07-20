import React, { useState, useEffect } from 'react';
import Price from '../components/Price';
import axios from 'axios'; 


function CountryForm() {
  const [originCountry, setOriginCountry] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [weight, setWeight] = useState('');
  const [selectedShippingMethod, setSelectedShippingMethod] = useState('');
  const [showMyModal, setShowMyModal] = useState(false);
  const [countriesList, setCountriesList] = useState([]);
  const [exportDataList, setExportDataList] = useState([]);


  useEffect(() => {
    // Fetch data from the server when the component mounts
    axios.get('http://localhost:3001/read')
      .then((response) => {
        const data = response.data;
        const countries = data.map((record) => record.country);

        // Update the countriesList state with the retrieved countries
        setCountriesList(countries);

        // Update the exportDataList state with the retrieved data
        setExportDataList(data);
      })
      .catch((error) => {
        console.error("Error fetching data from server:", error);
      });
  }, []);


  const handleOnClose = () => setShowMyModal(false);

  const handleOriginCountryChange = (e) => {
    const selectedOriginCountry = e.target.value;
    setOriginCountry(selectedOriginCountry);

    if (selectedOriginCountry === 'Sri Lanka') {
      setDestinationCountry('');
    } else {
      setDestinationCountry('Sri Lanka');
    }
  };

  const handleDestinationCountryChange = (e) => {
    setDestinationCountry(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleShippingMethodChange = (e) => {
    setSelectedShippingMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Origin Country:', originCountry);
    console.log('Destination Country:', destinationCountry);
    console.log('Weight:', weight);
    console.log('Shipping Method:', selectedShippingMethod);
  };

  return (
    <div className="p-4 flex items-center justify-center space-y-4 w-full sm:w-96 pl-2 bg-cover bg-center w-683 h-819 bg-gray-200 rounded-[32px]">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="originCountry" className="block text-gray-700 font-bold text-left">
            Origin Country:
          </label>
          <select
            id="originCountry"
            value={originCountry}
            onChange={handleOriginCountryChange}
            className="px-8 w-30px bg-gray-600 text-white block w-full border-gray-400 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="">Select Country</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Dubai">Dubai</option>
            <option value="Maldives">Maldives</option>
          </select>
        </div>
        <div>
          <label htmlFor="destinationCountry" className="block text-gray-700 font-bold text-left">
            Destination Country:
          </label>
          {originCountry === 'Sri Lanka' ? ( // Render options based on originCountry value
            <select
              id="destinationCountry"
              value={destinationCountry}
              onChange={handleDestinationCountryChange}
              className="px-8 w-30px bg-gray-600 text-white block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              <option value="">Select Country</option>
              {countriesList.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          ) : (
            <select
              id="destinationCountry"
              value={destinationCountry}
              onChange={handleDestinationCountryChange}
              className="px-8 w-30px bg-gray-600 text-white block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              <option value="">Select Country</option>
              <option value="Sri Lanka">Sri Lanka</option>
            </select>
          )}
        </div>
        <div>
          <label htmlFor="weight" className="block text-gray-700 font-bold text-left">
            Weight:
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={handleWeightChange}
            className="bg-gray-600 text-white block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-left font-bold">Shipping Method:</label>
          <div>
            <label htmlFor="air" className="inline-flex items-center mr-2 font-bold text-left">
              <input
                type="radio"
                id="air"
                value="air"
                checked={selectedShippingMethod === 'air'}
                onChange={handleShippingMethodChange}
              />
              <span className="ml-2">Air</span>
            </label>
            <label htmlFor="sea" className="inline-flex items-center mr-2 font-bold">
              <input
                type="radio"
                id="sea"
                value="sea"
                checked={selectedShippingMethod === 'sea'}
                onChange={handleShippingMethodChange}
              />
              <span className="ml-2">Sea</span>
            </label>

            <label htmlFor="express" className="inline-flex items-center mr-2 font-bold">
              <input
                type="radio"
                id="express"
                value="express"
                checked={selectedShippingMethod === 'express'}
                onChange={handleShippingMethodChange}
              />
              <span className="ml-2">Express</span>
            </label>
          </div>
        </div>
        <button
          onClick={() => setShowMyModal(true)}
          type="submit"
          className="bg-lime-300 text-black m-8 px-4 py-2 hover:bg-blue-600 rounded-lg font-bold"
        >
          Calculate
        </button>
        <div>
          <Price onClose={handleOnClose} visible={showMyModal} />
        </div>
      </form>
    </div>
  );
}
export default CountryForm;
