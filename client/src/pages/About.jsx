import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import "../About.css"

function About() {
    return <>
        <Navbar />
        <section class="relative flex flex-col container mx-auto px-4 md:container md:mx-auto">

            <div class="justify-between space-x-4">
                <h1> </h1>
                <p>Welcome to Sixty Six Lanka (Pvt) Ltd, Sri Lanka! Formed in May 2018 by five seasoned professionals with over 70 years of combined business and professional experience, we aimed to revolutionize the world of Sourcing, Buying, Payment Assistance, Logistics, and Courier services. Our mission: to provide comprehensive solutions for Retail & Commercial Buyers, ensuring a seamless end-to-end experience.</p>
                {/* <img src="../static/Character-working-desk-with-laptop%201.png" alt=""> */}
            </div>


            <div class="justify-between space-x-60">
                <h1> </h1>
                <p>In 2020, during the pandemic, we focused on supporting Maldivian buyers by shipping essential and medical products from Sri Lanka to the Maldives. As the lockdown eased and services resumed, we expanded our offerings to cater to a broader range of products. Our unwavering dedication to providing top-notch solutions remained steadfast throughout this challenging period.
                </p>
                <div class="image2">
                    {/* <img src="../static/Character-with-question-marks%201.png" alt=""> */}
                </div>
            </div>


            <div class="box-3">
                <h1>  </h1>
                <p>Initially, an exclusive franchisee of the largest courier company in the Maldives, we took control to enhance our services and launched our own brand, Boxit, in July 2022. Rapidly gaining trust as a household name, Boxit signifies reliability and top-quality shipping services, leaving no room for compromise. </p><div class="image3">
                    {/* <img src="../static/Character-having-idea%201.png" alt=""> */}
                </div>
            </div>

            <div class="justify-between space-x-60 ">
                <h1></h1>
                <p>At Boxit, we commit to offering the best market rates for imports and exports. With a dedicated team ensuring efficient deliveries, we focus on providing competitive pricing without compromising on service quality. Choose Boxit as your shipping partner, and experience satisfaction and trust like never before, whether you're a Retail or Commercial Buyer. Your peace of mind is our priority!
                Thank you for choosing Boxit as your preferred shipping partner. We are excited to serve you and look forward to building a lasting relationship based on trust, reliability, and exceptional service. Whether you are a Retail or Commercial Buyer, let Boxit take care of your shipping needs, so you can focus on what matters most to you. Experience the Boxit difference today!</p>
                <div class="image4">
                    {/* <img src="../static/Character-with-gear-wheels%201.png" alt=""> */}
                </div>
            </div>

        </section>
        <Footer /></>

}

export default About;