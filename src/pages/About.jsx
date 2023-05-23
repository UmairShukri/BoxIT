import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../About.css"

function About() {
    return <>
        <Navbar />
        <section class="blocks">

            <div class="box-1">
                <h1> </h1>
                <p>Welcome to [Company Name], your trusted destination for [industry/service]. We are a modern [describe your industry/service] company committed to delivering exceptional solutions that meet your needs with precision and style.</p>
                {/* <img src="../static/Character-working-desk-with-laptop%201.png" alt=""> */}
            </div>


            <div class="box-2">
                <h1> </h1>
                <p>At [Company Name], we pride ourselves on our innovative approach, combining cutting-edge technology with a customer-centric mindset. Our team of experienced professionals is dedicated to providing you with top-notch [industry/service] that exceeds your expectations.
                </p>
                <div class="image2">
                    {/* <img src="../static/Character-with-question-marks%201.png" alt=""> */}
                </div>
            </div>


            <div class="box-3">
                <h1>  </h1>
                <p>We believe in the power of collaboration, working closely with our clients to understand their unique requirements and deliver tailored solutions. With our unwavering commitment to quality and a keen eye for detail, we strive to be your reliable partner in [industry/service].</p>
                <div class="image3">
                    {/* <img src="../static/Character-having-idea%201.png" alt=""> */}
                </div>
            </div>

            <div class="box-4">
                <h1></h1>
                <p>Join us on this exciting journey as we redefine [industry/service] standards and pave the way for a more connected and efficient future. Experience the [Company Name] difference today and let us help you [achieve desired outcome].</p>
                <div class="image4">
                    {/* <img src="../static/Character-with-gear-wheels%201.png" alt=""> */}
                </div>
            </div>

        </section>
        <Footer /></>

}

export default About;