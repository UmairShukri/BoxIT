import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sendUpdates, setSendUpdates] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:3001/api/contact', {
        name,
        email,
        message,
        sendUpdates,
      });

      console.log(response.data); // Optional: Log the response from the server

      // Reset form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
      setSendUpdates(false);
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <div className='w-screen'> <Navbar /></div>
      
      <div className="container my-24 px-6 mx-auto ">
        <section className="mb-32 text-gray-800 text-center">
          <div className="px-6 py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="grid lg:grid-cols-2 flex items-center">
                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                  <div
                    className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                    style={{
                      background: 'hsla(0, 0%, 100%, 0.55)',
                      backdropFilter: 'blur(30px)',
                    }}
                  >
                    <h2 className="text-3xl font-bold mb-12">Contact us</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group mb-6">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInput7"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group mb-6">
                        <input
                          type="email"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInput8"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group mb-6">
                        <textarea
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlTextarea13"
                          rows="3"
                          placeholder="Message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <div className="form-group form-check text-center mb-6">
                        <input
                          type="checkbox"
                          className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                          id="exampleCheck87"
                          checked={sendUpdates}
                          onChange={(e) => setSendUpdates(e.target.checked)}
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          htmlFor="exampleCheck87"
                        >
                          Send me latest updates from Boxit
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Send'}
                      </button>
                    </form>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <div className="map-container relative shadow-lg rounded-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6661.1289352161775!2d79.85112036140794!3d6.92273031685974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6a5e9c5874dac6ab%3A0xfc95728f8f79f8b0!2sBoxit%20International!5e0!3m2!1sen!2slk!4v1689926569842!5m2!1sen!2slk"
                      className="left-0 top-0 h-full w-full absolute rounded-lg"
                      Border="0"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      <Footer />
    </>
  );
}

export default Contact;
