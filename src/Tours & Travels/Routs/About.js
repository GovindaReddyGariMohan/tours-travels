import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Aboutus from "../Components/Aboutus";
const About = () => {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg="https://cdn.pixabay.com/photo/2023/03/11/11/34/travelling-7844283_640.jpg"
                title="About"
                btnClass="hide"
            />
            <Aboutus />
            <Footer />
        </>
    )
}
export default About;