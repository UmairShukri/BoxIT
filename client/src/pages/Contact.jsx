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
      <div className='w-screen'>
        <Navbar />
      </div>

      <div className="container my-12 md:my-24 px-6 mx-auto ">
        <section className="mb-16 md:mb-32 text-gray-800 text-center">
          <div className="px-3 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="grid md:grid-cols-2 gap-8 flex flex-col-reverse md:flex-row items-center">
                <div className="md:mt-0 mb-8 lg:mb-0">
                  <div
                    className="block rounded-lg shadow-lg px-4 py-8 md:px-8 lg:px-12"
                    style={{
                      background: 'hsla(0, 0%, 100%, 0.55)',
                      backdropFilter: 'blur(30px)',
                    }}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-12">Contact us</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="email"
                          className="form-input"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <textarea
                          className="form-input"
                          rows="3"
                          placeholder="Message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <div className="mb-4 text-left">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 mr-2"
                            checked={sendUpdates}
                            onChange={(e) => setSendUpdates(e.target.checked)}
                          />
                          <span className="text-gray-800">
                            Send me latest updates from Boxit
                          </span>
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-medium text-sm md:text-xs leading-tight uppercase rounded py-2 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none active:bg-blue-800 transition duration-150 ease-in-out"
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
                      className="w-full h-72 md:h-full absolute rounded-lg"
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
      </div>
      <Footer />
    </>
  );
}

export default Contact;
