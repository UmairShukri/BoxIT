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
  const [shippingPrice, setShippingPrice] = useState(null);
  const [importcountriesList, setImportCountriesList] = useState([]);
  const [importDataList, setImportDataList] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    axios
      .get('http://localhost:3001/read')
      .then((response) => {
        const data = response.data;
        const countries = data.map((record) => record.country);

        // Update the countriesList state with the retrieved countries
        setCountriesList(countries);

        // Update the exportDataList state with the retrieved data
        setExportDataList(data);
      });
      axios.get('http://localhost:3001/imports')
      .then((response) => {
      const data = response.data;
      const importCountries = data.map((record) => record.country);

      setImportCountriesList(importCountries);

      // Update the importDataList state with the retrieved data
      setImportDataList(data);
      
    })
      .catch((error) => {
        console.error('Error fetching data from server:', error);
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
    console.log(importDataList);

    let selectedCountryData;

    if (originCountry === 'Sri Lanka') {
      // Find the selected country data from exportDataList
      selectedCountryData = exportDataList.find((record) => record.country === destinationCountry);
    } else {
      // Find the selected country data from importDataList
      selectedCountryData = importDataList.find((record) => record.country === originCountry);
    } 
    
    if (!selectedCountryData) {
      console.error('Destination country data not found.');
      return;
    }

    // Get the weight value in kg
    const weightInKg = parseFloat(weight);

    if (isNaN(weightInKg) || weightInKg <= 0) {
      console.error('Invalid weight value.');
      return;
    }

    // Calculate the shipping price
    let shippingPrice;
    if (weightInKg < 10) {
      shippingPrice = selectedCountryData.firstKg + (weightInKg - 1) * selectedCountryData.additionalKg;
    } else {
      shippingPrice = selectedCountryData.firstKg + 9 * selectedCountryData.additionalKg + (weightInKg - 10) * selectedCountryData.tenKg;
    }
    setShippingPrice(shippingPrice); // Set the shippingPrice in the state

    console.log('Origin Country:', originCountry);
    console.log('Destination Country:', destinationCountry);
    console.log('Weight:', weightInKg);
    console.log('Shipping Method:', selectedShippingMethod);
    console.log('Shipping Price:', shippingPrice);
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
            {importcountriesList.map((country) => ( // Use importcountriesList for origin countries
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="destinationCountry" className="block text-gray-700 font-bold text-left">
            Destination Country:
          </label>
          {originCountry === 'Sri Lanka' ? (
            // Render options based on originCountry value
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
            Weight In Kg:
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
          
        </div>
        <button
          onClick={() => setShowMyModal(true)}
          type="submit"
          className="bg-lime-300 text-black m-8 px-4 py-2 hover:bg-blue-600 rounded-lg font-bold"
        >
          Calculate
        </button>
        <div>
          <Price onClose={handleOnClose} visible={showMyModal} shippingPrice={shippingPrice} />
        </div>
      </form>
    </div>
  );
}

export default CountryForm;
