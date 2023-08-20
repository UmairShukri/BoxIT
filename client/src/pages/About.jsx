import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Pic from '../images/picOne.png';
import PicTwo from '../images/picTwo.jpg';

function About() {
  return (
    <>
      <Navbar />
      <section className="relative container mx-auto px-4 md:container md:mx-auto space-y-9 font-serif">
      
        <div className="flex flex-col-reverse md:flex-row m-9 ">
          <div className="md:ml-60 md:mr-20">
            <h1 className="font-bold flex justify-center">ABOUT US</h1>
            <p className="mt-6 md:mt-0">
              Welcome to Sixty Six Lanka (Pvt) Ltd, Sri Lanka! Formed in May
              2018 by five seasoned professionals with over 70 years of
              combined business and professional experience, we aimed to
              revolutionize the world of Sourcing, Buying, Payment Assistance,
              Logistics, and Courier services. Our mission: to provide
              comprehensive solutions for Retail & Commercial Buyers, ensuring
              a seamless end-to-end experience.
            </p>
          </div>
          <img src={Pic} className="h-60 md:h-auto ml-20 mt-20 md:mt-0" alt="Boxit Logo" />
        </div>

        {/* Second Paragraph */}
        <div className="flex flex-col-reverse md:flex-row justify-center m-9 ml-60 mr-60 p-2">
          <img src={Pic} className="h-60 md:h-auto mr-8 ml-20" alt="Boxit Logo" />
          <div className="max-w-2/3">
            <h1 className="font-bold flex justify-start">WHAT HAVE WE DONE?</h1>
            <p className="mt-5 md:mt-0">
              In 2020, during the pandemic, we focused on supporting Maldivian
              buyers by shipping essential and medical products from Sri Lanka
              to the Maldives. As the lockdown eased and services resumed, we
              expanded our offerings to cater to a broader range of products.
              Our unwavering dedication to providing top-notch solutions
              remained steadfast throughout this challenging period.
            </p>
          </div>
        </div>

        {/* Third Paragraph */}
        <div className="flex flex-col-reverse md:flex-row justify-center m-9 ml-60 mr-80 p-4">
          <div className="max-w-2/3 md:w-1/2">
            <h1 className="font-bold">WHO ARE WE</h1>
            <p>
              Initially, an exclusive franchisee of the largest courier company
              in the Maldives, we took control to enhance our services and
              launched our own brand, Boxit, in July 2022. Rapidly gaining
              trust as a household name, Boxit signifies reliability and
              top-quality shipping services, leaving no room for compromise.
            </p>
          </div>
          <div className="image3 md:w-1/2 flex justify-end mt-4 md:mt-0">
            <img src={Pic} className="h-60 md:h-auto ml-10 md:ml-0" alt="Boxit Logo" />
          </div>
        </div>

        {/* Fourth Paragraph */}
        <div className="flex flex-col-reverse md:flex-row justify-center m-9 ml-60 mr-60">
          <img src={Pic} className="h-60 md:h-auto ml-10 md:ml-0" alt="Boxit Logo" />
          <div className="max-w-2/3 md:ml-60">
            <h1 className="font-bold">TITLE HERE</h1>
            <p>
              At Boxit, we commit to offering the best market rates for
              imports and exports. With a dedicated team ensuring efficient
              deliveries, we focus on providing competitive pricing without
              compromising on service quality. Choose Boxit as your shipping
              partner, and experience satisfaction and trust like never before,
              whether you're a Retail or Commercial Buyer. Your peace of mind
              is our priority! Thank you for choosing Boxit as your preferred
              shipping partner. We are excited to serve you and look forward to
              building a lasting relationship based on trust, reliability, and
              exceptional service. Whether you are a Retail or Commercial
              Buyer, let Boxit take care of your shipping needs, so you can
              focus on what matters most to you. Experience the Boxit
              difference today!
            </p>
          </div>
          <div className="image4">
            {/* Add the image here if required */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
