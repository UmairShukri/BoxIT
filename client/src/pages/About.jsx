import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Pic from '../images/picOne.png';
import PicTwo from '../images/picTwo.jpg';
// import "../About.css"

function About() {
  return (
    <>
      <Navbar />
      <section class="relative container mx-auto px-4 md:container md:mx-auto space-y-9 font-serif">
        <div class="flex  m-9 ">
          <div class="max-w-2/3">
            <h1 className='font-bold justify-center'> ABOUT US </h1>

            <p className='flex justify-start mt-6  w-80 ml-20 '>

              Welcome to Sixty Six Lanka (Pvt) Ltd, Sri Lanka! Formed in May
              2018 by five seasoned professionals with over 70 years of
              combined business and professional experience, we aimed to
              revolutionize the world of Sourcing, Buying, Payment Assistance,
              Logistics, and Courier services. Our mission: to provide
              comprehensive solutions for Retail & Commercial Buyers, ensuring
              a seamless end-to-end experience.
            </p>
          </div>
          <img src={Pic} className="h-60 ml-8 mr-70" alt="Boxit Logo" />
        </div>

        <div class="flex justify-center m-9 ml-60 mr-60">
          <img src={Pic} className="h-60 mr-8" alt="Boxit Logo" />
          <div class="max-w-2/3">
            <h1> </h1>
            <p className='mt-5'>
              In 2020, during the pandemic, we focused on supporting Maldivian
              buyers by shipping essential and medical products from Sri Lanka
              to the Maldives. As the lockdown eased and services resumed, we
              expanded our offerings to cater to a broader range of products.
              Our unwavering dedication to providing top-notch solutions
              remained steadfast throughout this challenging period.
            </p>
          </div>
        </div>

        <div class="flex justify-center m-9 ml-60 mr-60">
          <div class="max-w-2/3">
            <h1> </h1>
            <p>
              Initially, an exclusive franchisee of the largest courier company
              in the Maldives, we took control to enhance our services and
              launched our own brand, Boxit, in July 2022. Rapidly gaining
              trust as a household name, Boxit signifies reliability and
              top-quality shipping services, leaving no room for compromise.
            </p>
          </div>
          <div class="image3">
            {/* <img src="../static/Character-having-idea%201.png" alt=""> */}
          </div>
        </div>

        <div class="flex justify-center m-9 mr-60 ml-60">
          <div class="max-w-2/3">
            <h1></h1>
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
          <div class="image4">
            {/* <img src="../static/Character-with-gear-wheels%201.png" alt=""> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
