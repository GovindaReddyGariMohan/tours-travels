import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Contactform from "../Components/Contactform";
const Contact = () => {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg="https://cdn.pixabay.com/photo/2023/04/11/16/12/adventure-7917681_640.jpg"
                title="contact"
                btnClass="hide"
            />
            <Contactform />
            <Footer />
        </>
    )
}
export default Contact;